import os
from app import create_app
from app.models import db, User, Course, Category, Lesson, Review, Tag

# Crear aplicación
app = create_app(os.getenv('FLASK_CONFIG') or 'default')

@app.shell_context_processor
def make_shell_context():
    """Contexto de shell para testing"""
    return {
        'db': db,
        'User': User,
        'Course': Course,
        'Category': Category,
        'Lesson': Lesson,
        'Review': Review,
        'Tag': Tag
    }

@app.cli.command()
def init_db():
    """Inicializar base de datos"""
    with app.app_context():
        db.create_all()
        print('Base de datos inicializada!')

@app.cli.command()
def seed_db():
    """Poblar base de datos con datos de prueba"""
    with app.app_context():
        # Crear categorías
        categories_data = [
            {'name': 'Programación', 'description': 'Cursos de desarrollo de software', 'icon': 'code', 'color': '#3B82F6'},
            {'name': 'Diseño', 'description': 'Cursos de diseño gráfico y UX/UI', 'icon': 'palette', 'color': '#8B5CF6'},
            {'name': 'Marketing', 'description': 'Cursos de marketing digital', 'icon': 'megaphone', 'color': '#EF4444'},
            {'name': 'Negocios', 'description': 'Cursos de administración y negocios', 'icon': 'briefcase', 'color': '#10B981'},
            {'name': 'Idiomas', 'description': 'Cursos de idiomas extranjeros', 'icon': 'globe', 'color': '#F59E0B'}
        ]
        
        for cat_data in categories_data:
            if not Category.query.filter_by(name=cat_data['name']).first():
                category = Category(**cat_data)
                db.session.add(category)
        
        # Crear tags
        tags_data = [
            {'name': 'JavaScript', 'color': '#F7DF1E'},
            {'name': 'Python', 'color': '#3776AB'},
            {'name': 'React', 'color': '#61DAFB'},
            {'name': 'Node.js', 'color': '#339933'},
            {'name': 'CSS', 'color': '#1572B6'},
            {'name': 'HTML', 'color': '#E34F26'},
            {'name': 'Diseño Web', 'color': '#FF6B6B'},
            {'name': 'UI/UX', 'color': '#6C5CE7'}
        ]
        
        for tag_data in tags_data:
            if not Tag.query.filter_by(name=tag_data['name']).first():
                tag = Tag(**tag_data)
                db.session.add(tag)
        
        # Crear usuarios de prueba
        users_data = [
            {
                'username': 'admin',
                'email': 'admin@eduplatform.com',
                'first_name': 'Admin',
                'last_name': 'Sistema',
                'role': 'admin',
                'password': 'admin123'
            },
            {
                'username': 'profesor',
                'email': 'profesor@eduplatform.com',
                'first_name': 'Juan',
                'last_name': 'Pérez',
                'role': 'teacher',
                'password': 'profesor123',
                'bio': 'Profesor de programación con 10 años de experiencia'
            },
            {
                'username': 'estudiante',
                'email': 'estudiante@eduplatform.com',
                'first_name': 'María',
                'last_name': 'García',
                'role': 'student',
                'password': 'estudiante123'
            }
        ]
        
        for user_data in users_data:
            if not User.query.filter_by(username=user_data['username']).first():
                password = user_data.pop('password')
                user = User(**user_data)
                user.set_password(password)
                db.session.add(user)
        
        db.session.commit()
        
        # Crear cursos de ejemplo
        teacher = User.query.filter_by(username='profesor').first()
        programming_cat = Category.query.filter_by(name='Programación').first()
        
        if teacher and programming_cat:
            courses_data = [
                {
                    'title': 'JavaScript Moderno',
                    'description': 'Aprende JavaScript desde cero hasta nivel avanzado con ES6+, async/await, y las mejores prácticas.',
                    'short_description': 'Curso completo de JavaScript ES6+',
                    'price': 99.99,
                    'level': 'beginner',
                    'duration_hours': 40,
                    'instructor_id': teacher.id,
                    'category_id': programming_cat.id,
                    'is_published': True
                },
                {
                    'title': 'React para Principiantes',
                    'description': 'Desarrollo de aplicaciones web modernas con React, hooks, context API y mejores prácticas.',
                    'short_description': 'Crea aplicaciones increíbles con React',
                    'price': 149.99,
                    'level': 'intermediate',
                    'duration_hours': 35,
                    'instructor_id': teacher.id,
                    'category_id': programming_cat.id,
                    'is_published': True
                }
            ]
            
            for course_data in courses_data:
                if not Course.query.filter_by(title=course_data['title']).first():
                    course = Course(**course_data)
                    db.session.add(course)
        
        db.session.commit()
        print('Base de datos poblada con datos de prueba!')

@app.cli.command()
def reset_db():
    """Resetear base de datos"""
    with app.app_context():
        db.drop_all()
        db.create_all()
        print('Base de datos reseteada!')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)