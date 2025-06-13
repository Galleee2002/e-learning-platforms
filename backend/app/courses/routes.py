from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy import or_
from app.models import db, Course, Category, Lesson, Review, Tag, User
from app.utils.decorators import role_required, admin_required, get_current_user

courses_bp = Blueprint('courses', __name__)

@courses_bp.route('/', methods=['GET'])
def get_courses():
    """Obtener lista de cursos con filtros y paginación"""
    try:
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 12, type=int)
        search = request.args.get('search', '')
        category_id = request.args.get('category_id', type=int)
        level = request.args.get('level', '')
        instructor_id = request.args.get('instructor_id', type=int)
        
        # Construir query base
        query = Course.query.filter_by(is_published=True)
        
        # Aplicar filtros
        if search:
            query = query.filter(
                or_(
                    Course.title.contains(search),
                    Course.description.contains(search)
                )
            )
        
        if category_id:
            query = query.filter_by(category_id=category_id)
        
        if level:
            query = query.filter_by(level=level)
        
        if instructor_id:
            query = query.filter_by(instructor_id=instructor_id)
        
        # Paginación
        courses = query.paginate(
            page=page, 
            per_page=per_page, 
            error_out=False
        )
        
        return jsonify({
            'courses': [course.to_dict() for course in courses.items],
            'pagination': {
                'page': page,
                'pages': courses.pages,
                'per_page': per_page,
                'total': courses.total,
                'has_next': courses.has_next,
                'has_prev': courses.has_prev
            }
        }), 200
        
    except Exception as e:
        return jsonify({'error': 'Error interno del servidor'}), 500

@courses_bp.route('/<int:course_id>', methods=['GET'])
def get_course(course_id):
    """Obtener curso específico"""
    try:
        course = Course.query.get_or_404(course_id)
        
        if not course.is_published:
            return jsonify({'error': 'Curso no disponible'}), 404
        
        # Incluir lecciones
        course_data = course.to_dict()
        course_data['lessons'] = [lesson.to_dict() for lesson in course.lessons.order_by(Lesson.order)]
        
        return jsonify({'course': course_data}), 200
        
    except Exception as e:
        return jsonify({'error': 'Error interno del servidor'}), 500

@courses_bp.route('/', methods=['POST'])
@jwt_required()
@role_required('teacher')
def create_course():
    """Crear nuevo curso (solo profesores)"""
    try:
        current_user = get_current_user()
        data = request.get_json()
        
        # Validar datos requeridos
        required_fields = ['title', 'description']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({'error': f'El campo {field} es requerido'}), 400
        
        course = Course(
            title=data['title'],
            description=data['description'],
            short_description=data.get('short_description', ''),
            image_url=data.get('image_url', ''),
            price=data.get('price', 0.0),
            level=data.get('level', 'beginner'),
            duration_hours=data.get('duration_hours', 0),
            instructor_id=current_user.id,
            category_id=data.get('category_id'),
            is_published=data.get('is_published', False)
        )
        
        db.session.add(course)
        db.session.commit()
        
        return jsonify({
            'message': 'Curso creado exitosamente',
            'course': course.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': 'Error interno del servidor'}), 500

@courses_bp.route('/<int:course_id>', methods=['PUT'])
@jwt_required()
def update_course(course_id):
    """Actualizar curso"""
    try:
        current_user = get_current_user()
        course = Course.query.get_or_404(course_id)
        
        # Verificar permisos
        if course.instructor_id != current_user.id and current_user.role != 'admin':
            return jsonify({'error': 'No tienes permisos para editar este curso'}), 403
        
        data = request.get_json()
        
        # Actualizar campos permitidos
        allowed_fields = ['title', 'description', 'short_description', 'image_url', 
                         'price', 'level', 'duration_hours', 'category_id', 'is_published']
        
        for field in allowed_fields:
            if field in data:
                setattr(course, field, data[field])
        
        db.session.commit()
        
        return jsonify({
            'message': 'Curso actualizado exitosamente',
            'course': course.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': 'Error interno del servidor'}), 500

@courses_bp.route('/categories', methods=['GET'])
def get_categories():
    """Obtener todas las categorías"""
    try:
        categories = Category.query.all()
        return jsonify({
            'categories': [category.to_dict() for category in categories]
        }), 200
        
    except Exception as e:
        return jsonify({'error': 'Error interno del servidor'}), 500