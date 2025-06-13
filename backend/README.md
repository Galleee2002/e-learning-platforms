# 🎓 EduPlatform Backend API

<div align="center">

![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-3.0.0-000000?style=for-the-badge&logo=flask&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

**API REST robusta y escalable para la plataforma educativa EduPlatform**

[Características](#-características-principales) •
[Instalación](#-instalación-rápida) •
[API Docs](#-documentación-de-la-api) •
[Estructura](#-estructura-del-proyecto) •
[Contribuir](#-contribución)

</div>

---

## 📋 Tabla de Contenidos

- [🎯 Características Principales](#-características-principales)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [🚀 Instalación Rápida](#-instalación-rápida)
- [⚙️ Configuración](#️-configuración)
- [📊 Estructura del Proyecto](#-estructura-del-proyecto)
- [🗃️ Modelo de Base de Datos](#️-modelo-de-base-de-datos)
- [📚 Documentación de la API](#-documentación-de-la-api)
- [🧪 Testing](#-testing)
- [🔒 Seguridad](#-seguridad)
- [📈 Performance](#-performance)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)

---

## 🎯 Características Principales

### 🔐 **Sistema de Autenticación Avanzado**

- ✅ Registro y login de usuarios
- ✅ Autenticación JWT con refresh tokens
- ✅ Sistema de roles (Estudiante, Profesor, Administrador)
- ✅ Protección de rutas por permisos
- ✅ Validación de email y contraseñas seguras

### 📚 **Gestión Completa de Cursos**

- ✅ CRUD completo de cursos
- ✅ Sistema de categorías y tags
- ✅ Inscripciones y favoritos
- ✅ Sistema de lecciones con orden
- ✅ Filtros avanzados y búsqueda
- ✅ Paginación automática

### ⭐ **Sistema de Reseñas y Ratings**

- ✅ Reseñas verificadas de estudiantes
- ✅ Sistema de puntuación 1-5 estrellas
- ✅ Cálculo automático de ratings promedio
- ✅ Validación de inscripción para reseñas

### 👥 **Gestión de Usuarios**

- ✅ Perfiles de usuario completos
- ✅ Dashboard personalizado por rol
- ✅ Estadísticas de progreso
- ✅ Sistema de notificaciones

### 🛡️ **Seguridad y Validaciones**

- ✅ Encriptación bcrypt para contraseñas
- ✅ Validación de entrada en todos los endpoints
- ✅ Protección CORS configurada
- ✅ Rate limiting implementado
- ✅ Sanitización de datos

---

## 🛠️ Tecnologías Utilizadas

### **Core Framework**

- **[Flask 3.0.0](https://flask.palletsprojects.com/)** - Framework web minimalista y potente
- **[Python 3.11+](https://python.org/)** - Lenguaje de programación moderno

### **Base de Datos**

- **[SQLAlchemy](https://sqlalchemy.org/)** - ORM potente y flexible
- **[Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/)** - Integración SQLAlchemy con Flask
- **[SQLite](https://sqlite.org/)** - Base de datos embebida (desarrollo)
- **[Flask-Migrate](https://flask-migrate.readthedocs.io/)** - Migraciones de base de datos

### **Autenticación y Seguridad**

- **[Flask-JWT-Extended](https://flask-jwt-extended.readthedocs.io/)** - Manejo de tokens JWT
- **[bcrypt](https://pypi.org/project/bcrypt/)** - Encriptación de contraseñas
- **[email-validator](https://pypi.org/project/email-validator/)** - Validación de emails

### **APIs y CORS**

- **[Flask-CORS](https://flask-cors.readthedocs.io/)** - Manejo de Cross-Origin Resource Sharing
- **[python-dotenv](https://pypi.org/project/python-dotenv/)** - Gestión de variables de entorno

### **Testing y Desarrollo**

- **[pytest](https://pytest.org/)** - Framework de testing
- **[pytest-flask](https://pytest-flask.readthedocs.io/)** - Testing específico para Flask
- **[Flask-Compress](https://flask-compress.readthedocs.io/)** - Compresión de respuestas

---

## 🚀 Instalación Rápida

### **Prerrequisitos**

- Python 3.11 o superior
- pip (gestor de paquetes de Python)
- Git

### **1. Clonar el Repositorio**

```bash
git clone https://github.com/tu-usuario/eduplatform-backend.git
cd eduplatform-backend
```

### **2. Crear Entorno Virtual**

```bash
# Windows (PowerShell)
python -m venv venv
venv\Scripts\Activate.ps1

# macOS/Linux
python -m venv venv
source venv/bin/activate
```

### **3. Instalar Dependencias**

```bash
pip install -r requirements.txt
```

### **4. Configurar Variables de Entorno**

```bash
# Copiar archivo de ejemplo
cp .env.example .env

# Editar .env con tus configuraciones
# SECRET_KEY, JWT_SECRET_KEY, etc.
```

### **5. Inicializar Base de Datos**

```bash
# Crear tablas
python -m flask init-db

# Poblar con datos de prueba
python -m flask seed-db
```

### **6. Ejecutar Servidor**

```bash
python run.py
```

🎉 **¡Listo!** La API estará disponible en `http://localhost:5000`

---

## ⚙️ Configuración

### **Variables de Entorno**

Crea un archivo `.env` en la raíz del proyecto:

```env
# Configuración de Flask
FLASK_APP=run.py
FLASK_ENV=development

# Claves de seguridad (¡CAMBIAR EN PRODUCCIÓN!)
SECRET_KEY=tu_clave_secreta_muy_segura_aqui
JWT_SECRET_KEY=tu_jwt_secret_key_aqui

# Base de datos
DATABASE_URL=sqlite:///eduplatform.db

# CORS (frontend URL)
FRONTEND_URL=http://localhost:3000

# Email (opcional)
MAIL_SERVER=smtp.gmail.com
MAIL_PORT=587
MAIL_USE_TLS=True
MAIL_USERNAME=tu_email@gmail.com
MAIL_PASSWORD=tu_password_de_aplicacion
```

### **Configuración de Desarrollo vs Producción**

```python
# config.py
class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///eduplatform.db'

class ProductionConfig(Config):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
```

---

## 📊 Estructura del Proyecto

```
backend/
├── 📁 app/                          # Aplicación principal
│   ├── 📄 __init__.py              # Factory de la aplicación
│   ├── 📄 config.py                # Configuraciones
│   ├── 📄 models.py                # Modelos de base de datos
│   ├── 📁 auth/                    # Autenticación
│   │   ├── 📄 __init__.py
│   │   └── 📄 routes.py            # Rutas de auth
│   ├── 📁 courses/                 # Gestión de cursos
│   │   ├── 📄 __init__.py
│   │   └── 📄 routes.py            # Rutas de cursos
│   ├── 📁 users/                   # Gestión de usuarios
│   │   ├── 📄 __init__.py
│   │   └── 📄 routes.py            # Rutas de usuarios
│   └── 📁 utils/                   # Utilidades
│       ├── 📄 __init__.py
│       └── 📄 decorators.py        # Decoradores personalizados
├── 📁 tests/                       # Tests automatizados
│   ├── 📄 test_auth.py
│   ├── 📄 test_courses.py
│   └── 📄 test_users.py
├── 📁 logs/                        # Logs de la aplicación
├── 📁 backups/                     # Backups de BD
├── 📄 requirements.txt             # Dependencias Python
├── 📄 .env.example                 # Ejemplo de variables de entorno
├── 📄 .gitignore                   # Archivos ignorados por Git
├── 📄 run.py                       # Punto de entrada
└── 📄 README.md                    # Documentación
```

---

## 🗃️ Modelo de Base de Datos

### **Diagrama de Entidades**

```mermaid
erDiagram
    User ||--o{ Course : creates
    User ||--o{ Review : writes
    User }o--o{ Course : enrolls
    User }o--o{ Course : favorites
    Course ||--o{ Lesson : contains
    Course ||--o{ Review : receives
    Course }o--|| Category : belongs_to
    Course }o--o{ Tag : has

    User {
        int id PK
        string username UK
        string email UK
        string first_name
        string last_name
        string password_hash
        string role
        string avatar_url
        text bio
        boolean is_active
        datetime created_at
    }

    Course {
        int id PK
        string title
        text description
        string short_description
        string image_url
        float price
        string level
        int duration_hours
        int instructor_id FK
        int category_id FK
        boolean is_published
        datetime created_at
    }

    Category {
        int id PK
        string name UK
        text description
        string icon
        string color
    }

    Lesson {
        int id PK
        string title
        text content
        string video_url
        int duration_minutes
        int order
        boolean is_free
        int course_id FK
    }

    Review {
        int id PK
        int rating
        text comment
        int user_id FK
        int course_id FK
        datetime created_at
    }

    Tag {
        int id PK
        string name UK
        string color
    }
```

### **Relaciones Principales**

- **Usuario → Cursos**: Un usuario puede crear múltiples cursos (instructor)
- **Usuario ↔ Cursos**: Relación many-to-many para inscripciones y favoritos
- **Curso → Lecciones**: Un curso tiene múltiples lecciones ordenadas
- **Curso → Reseñas**: Un curso puede tener múltiples reseñas
- **Curso → Categoría**: Un curso pertenece a una categoría
- **Curso ↔ Tags**: Relación many-to-many para etiquetas

---

## 📚 Documentación de la API

### **Base URL**

```
http://localhost:5000/api
```

### **🔐 Autenticación**

#### **Registrar Usuario**

```http
POST /auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123",
  "first_name": "John",
  "last_name": "Doe",
  "role": "student"
}
```

#### **Iniciar Sesión**

```http
POST /auth/login
Content-Type: application/json

{
  "username": "johndoe",
  "password": "securepassword123"
}
```

**Respuesta:**

```json
{
  "message": "Inicio de sesión exitoso",
  "user": {
    "id": 1,
    "username": "johndoe",
    "role": "student",
    ...
  },
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

#### **Obtener Perfil**

```http
GET /auth/profile
Authorization: Bearer <access_token>
```

### **📚 Cursos**

#### **Listar Cursos**

```http
GET /courses/?page=1&per_page=12&search=javascript&category_id=1&level=beginner
```

**Parámetros de consulta:**

- `page` (int): Número de página (default: 1)
- `per_page` (int): Elementos por página (default: 12)
- `search` (string): Búsqueda en título y descripción
- `category_id` (int): Filtrar por categoría
- `level` (string): Filtrar por nivel (beginner, intermediate, advanced)
- `instructor_id` (int): Filtrar por instructor

#### **Obtener Curso Específico**

```http
GET /courses/1
```

#### **Crear Curso** (Requiere rol teacher)

```http
POST /courses/
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "title": "JavaScript Avanzado",
  "description": "Curso completo de JavaScript para desarrolladores",
  "short_description": "Aprende JS desde cero",
  "price": 99.99,
  "level": "beginner",
  "duration_hours": 40,
  "category_id": 1,
  "is_published": true
}
```

#### **Obtener Categorías**

```http
GET /courses/categories
```

### **👥 Usuarios**

#### **Dashboard de Estadísticas**

```http
GET /users/dashboard/stats
Authorization: Bearer <access_token>
```

**Respuesta para estudiante:**

```json
{
  "stats": {
    "enrolled_courses": 5,
    "favorite_courses": 3,
    "completed_courses": 2,
    "total_hours": 120
  }
}
```

**Respuesta para profesor:**

```json
{
  "stats": {
    "enrolled_courses": 5,
    "favorite_courses": 3,
    "completed_courses": 2,
    "total_hours": 120,
    "created_courses": 8,
    "total_students": 150,
    "published_courses": 6
  }
}
```

### **📋 Códigos de Estado HTTP**

| Código | Significado                                |
| ------ | ------------------------------------------ |
| `200`  | OK - Solicitud exitosa                     |
| `201`  | Created - Recurso creado exitosamente      |
| `400`  | Bad Request - Datos inválidos              |
| `401`  | Unauthorized - Token inválido o faltante   |
| `403`  | Forbidden - Sin permisos suficientes       |
| `404`  | Not Found - Recurso no encontrado          |
| `500`  | Internal Server Error - Error del servidor |

### **🔒 Autenticación de Endpoints**

| Endpoint                     | Autenticación | Roles Permitidos   |
| ---------------------------- | ------------- | ------------------ |
| `POST /auth/register`        | ❌            | Público            |
| `POST /auth/login`           | ❌            | Público            |
| `GET /courses/`              | ❌            | Público            |
| `POST /courses/`             | ✅            | teacher, admin     |
| `PUT /courses/<id>`          | ✅            | owner, admin       |
| `GET /users/`                | ✅            | admin              |
| `GET /users/dashboard/stats` | ✅            | Todos autenticados |

---

## 🧪 Testing

### **Ejecutar Tests**

```bash
# Todos los tests
pytest

# Tests específicos
pytest tests/test_auth.py
pytest tests/test_courses.py

# Con coverage
pytest --cov=app tests/
```

### **Estructura de Tests**

```python
# tests/test_auth.py
def test_register_success(client):
    """Test successful user registration."""
    response = client.post('/api/auth/register',
                          json=user_data)
    assert response.status_code == 201
    assert 'access_token' in response.json

def test_login_invalid_credentials(client):
    """Test login with invalid credentials."""
    response = client.post('/api/auth/login',
                          json=invalid_data)
    assert response.status_code == 401
```

### **Fixtures Disponibles**

- `client`: Cliente de prueba Flask
- `auth_headers`: Headers con token válido
- `sample_user`: Usuario de prueba
- `sample_course`: Curso de prueba

---

## 🔒 Seguridad

### **Implementaciones de Seguridad**

#### **🔐 Autenticación y Autorización**

- Tokens JWT con tiempo de expiración
- Refresh tokens para renovación automática
- Sistema de roles granular
- Validación de permisos en cada endpoint

#### **🛡️ Protección de Datos**

- Encriptación bcrypt para contraseñas (salt + hash)
- Validación de entrada en todos los endpoints
- Sanitización automática de datos
- Headers de seguridad configurados

#### **🌐 CORS y Headers**

```python
# Headers de seguridad automáticos
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

#### **⚡ Rate Limiting**

```python
# Límites por endpoint
@limiter.limit("5 per minute")  # Login
@limiter.limit("10 per minute") # Register
@limiter.limit("100 per hour")  # API general
```

### **🔧 Configuración de Seguridad**

```python
# Configuración JWT
JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=30)

# Configuración CORS
CORS_ORIGINS = ['http://localhost:3000']  # Solo frontend autorizado
```

---

## 📈 Performance

### **Optimizaciones Implementadas**

#### **🗃️ Base de Datos**

- Índices en campos de búsqueda frecuente
- Lazy loading para relaciones
- Paginación automática en listas
- Query optimization con SQLAlchemy

#### **🚀 API Response**

- Compresión gzip automática
- Caching de respuestas estáticas
- Serialización optimizada con `to_dict()`
- Rate limiting para prevenir abuso

#### **📊 Monitoreo**

```python
# Logging de requests automático
INFO: GET /api/courses/ - 200 - 0.045s
INFO: POST /api/auth/login - 200 - 0.123s
```

### **🎯 Métricas de Performance**

- **Response time promedio**: < 100ms
- **Database queries**: Optimizadas con eager loading
- **Memory usage**: Mínimo gracias a Flask
- **Concurrent users**: Soporta 100+ usuarios simultáneos

---

## 🔧 Comandos de Administración

### **Base de Datos**

```bash
# Inicializar BD
python -m flask init-db

# Poblar con datos de prueba
python -m flask seed-db

# Resetear BD completamente
python -m flask reset-db

# Crear usuario admin
python -m flask create-admin admin@example.com password123

# Backup de BD
python -m flask backup-db
```

### **Desarrollo**

```bash
# Shell interactivo con contexto
python -m flask shell

# Ver todas las rutas
python -m flask routes

# Ejecutar servidor con auto-reload
python run.py
```

### **Testing**

```bash
# Tests con coverage
pytest --cov=app --cov-report=html

# Solo tests rápidos
pytest -m "not slow"

# Tests en modo watch
ptw
```

---

## 🚀 Despliegue

### **🐳 Docker**

```dockerfile
# Dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "run:app"]
```

### **🌐 Heroku**

```bash
# Archivos necesarios
echo "web: gunicorn run:app" > Procfile
echo "python-3.11.0" > runtime.txt

# Deploy
heroku create eduplatform-api
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
```

### **🔧 Variables de Entorno de Producción**

```bash
# Configuración mínima para producción
export FLASK_ENV=production
export SECRET_KEY=your-super-secret-key
export JWT_SECRET_KEY=your-jwt-secret
export DATABASE_URL=postgresql://user:pass@host:port/db
```

---

## 📊 Monitoreo y Logs

### **Configuración de Logging**

```python
# Logs rotativos automáticos
logs/
├── eduplatform.log      # Log principal
├── error.log           # Solo errores
└── access.log          # Logs de acceso
```

### **Métricas Disponibles**

- Response times por endpoint
- Número de requests por hora
- Errores y excepciones
- Uso de base de datos
- Usuarios activos

---

## 🤝 Contribución

### **🔧 Configuración de Desarrollo**

1. **Fork del repositorio**
2. **Crear rama feature**:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Instalar hooks de pre-commit**:
   ```bash
   pip install pre-commit
   pre-commit install
   ```
4. **Ejecutar tests**:
   ```bash
   pytest
   ```
5. **Crear Pull Request**

### **📝 Estándares de Código**

#### **Convenciones de Nomenclatura**

- **Funciones**: `snake_case`
- **Clases**: `PascalCase`
- **Constantes**: `UPPER_SNAKE_CASE`
- **Archivos**: `snake_case.py`

#### **Estructura de Commit**

```
tipo(scope): descripción

feat(auth): agregar sistema de refresh tokens
fix(courses): corregir bug en filtros de búsqueda
docs(readme): actualizar documentación de API
```

### **🧪 Requisitos para PR**

- [ ] Tests pasan al 100%
- [ ] Coverage > 80%
- [ ] Documentación actualizada
- [ ] Sin errores de linting
- [ ] Changelog actualizado

---

## 📈 Roadmap

### **v1.1 - Próximas Funcionalidades**

- [ ] Sistema de progreso de lecciones
- [ ] Certificados automáticos
- [ ] Notificaciones en tiempo real
- [ ] Sistema de pagos con Stripe
- [ ] Chat en vivo
- [ ] API de analytics

### **v1.2 - Mejoras de Performance**

- [ ] Cache con Redis
- [ ] Búsqueda con Elasticsearch
- [ ] CDN para archivos multimedia
- [ ] Optimización de queries

### **v2.0 - Funcionalidades Avanzadas**

- [ ] Streaming de video
- [ ] Realidad virtual/aumentada
- [ ] IA para recomendaciones
- [ ] Multi-tenancy
- [ ] Microservicios

---

## 🆘 Solución de Problemas

### **Errores Comunes**

#### **ModuleNotFoundError**

```bash
# Asegúrate de estar en el entorno virtual
venv\Scripts\Activate.ps1  # Windows
source venv/bin/activate   # Linux/Mac

# Reinstalar dependencias
pip install -r requirements.txt
```

#### **SQLAlchemy Errors**

```bash
# Resetear base de datos
python -m flask reset-db
python -m flask seed-db
```

#### **JWT Token Issues**

```python
# Verificar configuración en .env
JWT_SECRET_KEY=tu-clave-secreta-aqui
```

### **🔍 Debug Mode**

```python
# Activar debug detallado
export FLASK_ENV=development
export FLASK_DEBUG=1

# Ver SQL queries
app.config['SQLALCHEMY_ECHO'] = True
```

---

## 📞 Soporte

### **📧 Contacto**

- **Email**: soporte@eduplatform.com
- **GitHub Issues**: [Crear Issue](https://github.com/tu-usuario/eduplatform-backend/issues)
- **Documentación**: [Wiki del Proyecto](https://github.com/tu-usuario/eduplatform-backend/wiki)

### **🤝 Comunidad**

- **Discord**: [Servidor EduPlatform](https://discord.gg/eduplatform)
- **Slack**: [Workspace de Desarrolladores](https://eduplatform.slack.com)

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2024 EduPlatform

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

**Hecho con ❤️ para la educación digital**

⭐ **¡Si te gusta este proyecto, dale una estrella!** ⭐

[📚 Documentación Completa](https://eduplatform-docs.com) •
[🚀 Demo en Vivo](https://api.eduplatform.com) •
[📱 Frontend React](https://github.com/tu-usuario/eduplatform-frontend)

</div>
