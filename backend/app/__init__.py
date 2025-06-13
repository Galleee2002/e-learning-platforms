from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flask_migrate import Migrate
from app.config import config

# Inicializar extensiones
db = SQLAlchemy()
jwt = JWTManager()
migrate = Migrate()

def create_app(config_name='default'):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    
    # Inicializar extensiones con la app
    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)
    CORS(app, origins=app.config['CORS_ORIGINS'])
    
    # Importar modelos
    from app.models import User, Course, Category, Lesson, Review, Tag
    
    # Registrar blueprints
    from app.auth.routes import auth_bp
    from app.courses.routes import courses_bp
    from app.users.routes import users_bp
    
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(courses_bp, url_prefix='/api/courses')
    app.register_blueprint(users_bp, url_prefix='/api/users')
    
    # Ruta de salud
    @app.route('/api/health')
    def health_check():
        return {'status': 'healthy', 'message': 'EduPlatform API is running'}
    
    return app