from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import db, User, Course
from app.utils.decorators import admin_required, get_current_user

users_bp = Blueprint('users', __name__)

@users_bp.route('/', methods=['GET'])
@jwt_required()
@admin_required
def get_users():
    """Obtener todos los usuarios (solo admin)"""
    try:
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 20, type=int)
        search = request.args.get('search', '')
        role = request.args.get('role', '')
        
        query = User.query
        
        # Aplicar filtros
        if search:
            query = query.filter(
                (User.username.contains(search)) |
                (User.email.contains(search)) |
                (User.first_name.contains(search)) |
                (User.last_name.contains(search))
            )
        
        if role:
            query = query.filter_by(role=role)
        
        users = query.paginate(
            page=page,
            per_page=per_page,
            error_out=False
        )
        
        return jsonify({
            'users': [user.to_dict() for user in users.items],
            'pagination': {
                'page': page,
                'pages': users.pages,
                'per_page': per_page,
                'total': users.total
            }
        }), 200
        
    except Exception as e:
        return jsonify({'error': 'Error interno del servidor'}), 500

@users_bp.route('/<int:user_id>', methods=['GET'])
@jwt_required()
def get_user(user_id):
    """Obtener usuario específico"""
    try:
        current_user = get_current_user()
        user = User.query.get_or_404(user_id)
        
        # Solo admin o el mismo usuario puede ver el perfil completo
        if current_user.id != user_id and current_user.role != 'admin':
            # Retornar información pública limitada
            return jsonify({
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'full_name': user.get_full_name(),
                    'avatar_url': user.avatar_url,
                    'bio': user.bio,
                    'role': user.role
                }
            }), 200
        
        return jsonify({'user': user.to_dict()}), 200
        
    except Exception as e:
        return jsonify({'error': 'Error interno del servidor'}), 500

@users_bp.route('/dashboard/stats', methods=['GET'])
@jwt_required()
def get_dashboard_stats():
    """Obtener estadísticas del dashboard del usuario"""
    try:
        current_user = get_current_user()
        
        stats = {
            'enrolled_courses': len(current_user.enrollments),
            'favorite_courses': len(current_user.favorites),
            'completed_courses': 0,  # Implementar lógica de progreso
            'total_hours': 0
        }
        
        # Si es profesor, agregar estadísticas de cursos creados
        if current_user.role in ['teacher', 'admin']:
            created_courses = current_user.courses_created.all()
            total_students = sum(len(course.enrolled_students) for course in created_courses)
            
            stats.update({
                'created_courses': len(created_courses),
                'total_students': total_students,
                'published_courses': len([c for c in created_courses if c.is_published])
            })
        
        # Si es admin, agregar estadísticas generales
        if current_user.role == 'admin':
            stats.update({
                'total_users': User.query.count(),
                'total_courses': Course.query.count(),
                'active_users': User.query.filter_by(is_active=True).count()
            })
        
        return jsonify({'stats': stats}), 200
        
    except Exception as e:
        return jsonify({'error': 'Error interno del servidor'}), 500