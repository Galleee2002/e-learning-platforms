import os
from datetime import timedelta
from dotenv import load_dotenv

load_dotenv()

class Config:
    # CORS - Permitir requests desde tu frontend
    CORS_ORIGINS = [
        'http://localhost:3000',    # Next.js desarrollo
        'http://127.0.0.1:3000',    # Alternativa localhost
        'https://tu-frontend.vercel.app'  # Producción (cuando lo deploys)
    ]
    
class DevelopmentConfig(Config):
    DEBUG = True

class ProductionConfig(Config):
    DEBUG = False

config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}