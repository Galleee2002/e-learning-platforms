from functools import wraps
from flask import jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import User

def role_required(required_role):
    """Decorador para verificar roles de usuario"""
    def decorator(f):
        @wraps(f)
        @jwt_required()
        def decorated_function(*args, **kwargs):
            current_user_id = get_jwt_identity()
            user = User.query.get(current_user_id)
            
            if not user:
                return jsonify({'error': 'Usuario no encontrado'}), 404
            
            if user.role != required_role and user.role != 'admin':
                return jsonify({'error': 'Permisos insuficientes'}), 403
            
            return f(*args, **kwargs)
        return decorated_function
    return decorator

def admin_required(f):
    """Decorador para verificar permisos de administrador"""
    @wraps(f)
    @jwt_required()
    def decorated_function(*args, **kwargs):
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if not user or user.role != 'admin':
            return jsonify({'error': 'Permisos de administrador requeridos'}), 403
        
        return f(*args, **kwargs)
    return decorated_function

def get_current_user():
    """Obtiene el usuario actual"""
    current_user_id = get_jwt_identity()
    return User.query.get(current_user_id)