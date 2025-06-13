# 🎓 EduPlatform - Plataforma Educativa Digital

Una plataforma educativa moderna y completa construida con las últimas tecnologías web. EduPlatform ofrece una experiencia de aprendizaje inmersiva con cursos interactivos, sistema de notificaciones en tiempo real, y una interfaz de usuario elegante y responsive.

![EduPlatform Hero](https://via.placeholder.com/1200x600/6366f1/ffffff?text=EduPlatform+Hero+Section)

## ✨ Características Principales

### 🎨 Diseño Moderno
- **Interfaz Premium**: Diseño glassmorphism con efectos de blur y transparencias
- **Animaciones Fluidas**: Transiciones suaves y efectos 3D optimizados
- **Responsive Design**: Adaptable a todos los dispositivos y tamaños de pantalla
- **Tema Cohesivo**: Paleta de colores consistente con gradientes vibrantes

### 🔍 Funcionalidades Avanzadas
- **Búsqueda Inteligente**: Sistema de búsqueda en tiempo real con filtros múltiples
- **Notificaciones Push**: Sistema de notificaciones interactivo con estados
- **Navegación Dinámica**: Menús desplegables con animaciones
- **Cards 3D**: Tarjetas con efecto flip para reseñas de usuarios
- **Partículas Animadas**: Elementos flotantes para efectos visuales

### 📚 Gestión de Cursos
- **Catálogo Completo**: Visualización de cursos con información detallada
- **Filtros Avanzados**: Búsqueda por título, instructor, nivel y etiquetas
- **Reseñas Verificadas**: Sistema de testimonios con usuarios reales
- **Certificaciones**: Seguimiento de progreso y logros

## 🛠️ Tecnologías Utilizadas

### Frontend Core
- **[Next.js 14](https://nextjs.org/)** - Framework React con App Router
- **[React 18](https://reactjs.org/)** - Biblioteca para interfaces de usuario
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado de JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first

### Librerías de UI
- **[Lucide React](https://lucide.dev/)** - Iconos vectoriales optimizados
- **[Framer Motion](https://www.framer.com/motion/)** - Animaciones y transiciones (implícito)

### Herramientas de Desarrollo
- **[PostCSS](https://postcss.org/)** - Procesador de CSS
- **[Autoprefixer](https://autoprefixer.github.io/)** - Prefijos CSS automáticos
- **[ESLint](https://eslint.org/)** - Linter para JavaScript/TypeScript

## 🎨 Paleta de Colores

### Colores Primarios
```css
/* Azul Principal */
--blue-600: #2563eb
--blue-700: #1d4ed8

/* Púrpura */
--purple-600: #9333ea
--purple-700: #7c3aed

/* Rosa */
--pink-600: #db2777
--pink-500: #ec4899
```

### Colores Secundarios
```css
/* Verde */
--green-500: #10b981
--teal-500: #14b8a6

/* Naranja */
--orange-500: #f97316

/* Amarillo */
--yellow-400: #fbbf24
```

### Colores de Estado
```css
/* Éxito */
--success: #059669

/* Error */
--error: #dc2626

/* Advertencia */
--warning: #d97706

/* Información */
--info: #2563eb
```

### Escala de Grises
```css
--gray-50: #f9fafb
--gray-100: #f3f4f6
--gray-200: #e5e7eb
--gray-300: #d1d5db
--gray-400: #9ca3af
--gray-500: #6b7280
--gray-600: #4b5563
--gray-700: #374151
--gray-800: #1f2937
--gray-900: #111827
```

## 📁 Estructura del Proyecto

```
my-next-app/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 (auth)/
│   │   │   ├── 📁 login/
│   │   │   │   └── 📄 page.tsx
│   │   │   └── 📁 register/
│   │   │       └── 📄 page.tsx
│   │   ├── 📁 (dashboard)/
│   │   │   ├── 📁 admin/
│   │   │   │   ├── 📁 courses/
│   │   │   │   ├── 📁 users/
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📁 student/
│   │   │   │   ├── 📁 courses/
│   │   │   │   ├── 📁 progress/
│   │   │   │   └── 📄 page.tsx
│   │   │   └── 📁 teacher/
│   │   │       ├── 📁 courses/
│   │   │       └── 📄 page.tsx
│   │   ├── 📁 api/
│   │   │   ├── 📁 auth/
│   │   │   ├── 📁 courses/
│   │   │   └── 📁 users/
│   │   ├── 📄 globals.css
│   │   ├── 📄 layout.tsx
│   │   └── 📄 page.tsx
│   ├── 📁 components/
│   │   ├── 📁 ui/
│   │   │   ├── 📄 button.tsx
│   │   │   ├── 📄 card.tsx
│   │   │   ├── 📄 input.tsx
│   │   │   └── 📄 modal.tsx
│   │   ├── 📁 auth/
│   │   │   ├── 📄 LoginForm.tsx
│   │   │   └── 📄 RegisterForm.tsx
│   │   ├── 📁 course/
│   │   │   ├── 📄 CourseCard.tsx
│   │   │   ├── 📄 CourseList.tsx
│   │   │   └── 📄 LessonPlayer.tsx
│   │   ├── 📁 dashboard/
│   │   │   ├── 📄 Sidebar.tsx
│   │   │   ├── 📄 Header.tsx
│   │   │   └── 📄 Stats.tsx
│   │   └── 📁 common/
│   │       ├── 📄 Navbar.tsx
│   │       ├── 📄 Hero.tsx
│   │       ├── 📄 CoursesSection.tsx
│   │       ├── 📄 ReviewsSection.tsx
│   │       ├── 📄 Footer.tsx
│   │       └── 📄 Loading.tsx
│   ├── 📁 hooks/
│   │   ├── 📄 useAuth.ts
│   │   ├── 📄 useCourses.ts
│   │   └── 📄 useLocalStorage.ts
│   ├── 📁 lib/
│   │   ├── 📄 auth.ts
│   │   ├── 📄 api.ts
│   │   ├── 📄 utils.ts
│   │   ├── 📄 validations.ts
│   │   └── 📄 constants.ts
│   ├── 📁 store/
│   │   ├── 📄 authStore.ts
│   │   ├── 📄 courseStore.ts
│   │   └── 📄 userStore.ts
│   ├── 📁 types/
│   │   ├── 📄 auth.ts
│   │   ├── 📄 course.ts
│   │   └── 📄 user.ts
│   └── 📁 styles/
│       ├── 📄 components.css
│       └── 📄 utilities.css
├── 📁 public/
│   ├── 📁 images/
│   ├── 📁 icons/
│   └── 📁 videos/
├── 📄 .env.local
├── 📄 .env.example
├── 📄 .gitignore
├── 📄 next.config.js
├── 📄 tailwind.config.js
├── 📄 tsconfig.json
├── 📄 postcss.config.js
├── 📄 package.json
└── 📄 README.md
```

### 📋 Descripción de Carpetas

#### 🎯 `/src/app/` - App Router de Next.js
- **`(auth)/`**: Rutas de autenticación (login, registro)
- **`(dashboard)/`**: Panel de control con roles (admin, student, teacher)
- **`api/`**: Endpoints de la API backend
- **`globals.css`**: Estilos globales y animaciones CSS
- **`layout.tsx`**: Layout principal de la aplicación
- **`page.tsx`**: Página de inicio

#### 🧩 `/src/components/` - Componentes Reutilizables
- **`ui/`**: Componentes básicos de interfaz (botones, inputs, modales)
- **`auth/`**: Componentes de autenticación
- **`course/`**: Componentes relacionados con cursos
- **`dashboard/`**: Componentes del panel de control
- **`common/`**: Componentes comunes (navbar, footer, hero)

#### 🔧 `/src/hooks/` - Custom Hooks
- **`useAuth.ts`**: Hook para manejo de autenticación
- **`useCourses.ts`**: Hook para gestión de cursos
- **`useLocalStorage.ts`**: Hook para almacenamiento local

#### 📚 `/src/lib/` - Utilidades y Configuraciones
- **`auth.ts`**: Configuración de autenticación
- **`api.ts`**: Cliente HTTP y configuración de API
- **`utils.ts`**: Funciones utilitarias
- **`validations.ts`**: Esquemas de validación
- **`constants.ts`**: Constantes de la aplicación

#### 💾 `/src/store/` - Gestión de Estado
- **`authStore.ts`**: Estado de autenticación
- **`courseStore.ts`**: Estado de cursos
- **`userStore.ts`**: Estado de usuarios

#### 🏷️ `/src/types/` - Definiciones de Tipos
- **`auth.ts`**: Tipos relacionados con autenticación
- **`course.ts`**: Tipos de cursos y lecciones
- **`user.ts`**: Tipos de usuarios y perfiles

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18.x o superior
- npm o yarn
- Git

### 1. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/eduplatform.git
cd eduplatform
```

### 2. Instalar Dependencias
```bash
npm install
# o
yarn install
```

### 3. Configurar Variables de Entorno
```bash
cp .env.example .env.local
```

Editar `.env.local` con tus variables:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

### 4. Inicializar Base de Datos
```bash
npm run db:migrate
npm run db:seed
```

### 5. Ejecutar en Desarrollo
```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint
npm run type-check   # Verificación de tipos

# Base de Datos
npm run db:migrate   # Ejecutar migraciones
npm run db:seed      # Poblar con datos de prueba
npm run db:studio    # Abrir Prisma Studio

# Testing
npm run test         # Ejecutar tests
npm run test:watch   # Tests en modo watch
npm run test:coverage # Coverage de tests
```

## 🎨 Guía de Estilos

### Convenciones de Nomenclatura
- **Componentes**: PascalCase (`UserProfile.tsx`)
- **Hooks**: camelCase con prefijo 'use' (`useAuth.ts`)
- **Utilidades**: camelCase (`formatDate.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`API_ENDPOINTS`)

### Estructura de Componentes
```tsx
"use client";

// Imports
import { useState, useEffect } from "react";
import { ComponentProps } from "./types";

// Interfaces
interface Props extends ComponentProps {
  title: string;
  onAction?: () => void;
}

// Componente
const MyComponent = ({ title, onAction }: Props) => {
  // Estados
  const [isLoading, setIsLoading] = useState(false);
  
  // Efectos
  useEffect(() => {
    // Logic here
  }, []);
  
  // Handlers
  const handleClick = () => {
    // Logic here
  };
  
  // Render
  return (
    <div className="component-container">
      {/* JSX */}
    </div>
  );
};

export default MyComponent;
```

### Clases CSS Personalizadas
```css
/* Animaciones */
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease-in-out infinite;
}

.animate-float-up {
  animation: float-up linear infinite;
}

/* Efectos 3D */
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

/* Utilidades */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

## 📊 Componentes Principales

### 🧭 Navbar
- **Funcionalidades**: Navegación, búsqueda, notificaciones, perfil de usuario
- **Características**: Responsive, scroll effects, dropdowns animados
- **Tecnologías**: React hooks, Tailwind CSS, Lucide icons

### 🎬 Hero Section
- **Funcionalidades**: Landing page, animaciones de entrada, partículas flotantes
- **Características**: Gradientes dinámicos, efectos parallax, CTA buttons
- **Tecnologías**: CSS animations, Intersection Observer

### 📚 Courses Section
- **Funcionalidades**: Catálogo de cursos, filtros, información detallada
- **Características**: Grid responsive, hover effects, badges dinámicos
- **Tecnologías**: React state, Tailwind grid system

### ⭐ Reviews Section
- **Funcionalidades**: Testimonios con flip cards, usuarios verificados
- **Características**: Animaciones 3D, estados interactivos
- **Tecnologías**: CSS 3D transforms, React event handlers

### 🔔 Notification System
- **Funcionalidades**: Notificaciones en tiempo real, estados de lectura
- **Características**: Dropdown interactivo, diferentes tipos de notificaciones
- **Tecnologías**: React state management, event bubbling

### 🔍 Search System
- **Funcionalidades**: Búsqueda inteligente, filtros múltiples, resultados dinámicos
- **Características**: Tiempo real, coincidencias parciales, UI intuitiva
- **Tecnologías**: Array methods, string matching, debouncing

## 🎯 Funcionalidades Destacadas

### 🎨 Diseño Visual
- **Glassmorphism**: Efectos de cristal con backdrop-blur
- **Gradientes Dinámicos**: Transiciones de color suaves
- **Micro-interacciones**: Feedback visual en cada acción
- **Consistencia Visual**: Sistema de diseño cohesivo

### ⚡ Performance
- **Lazy Loading**: Componentes cargados bajo demanda
- **Optimizaciones CSS**: Uso de transform3d para animaciones
- **Intersection Observer**: Animaciones activadas por scroll
- **Debouncing**: Optimización de búsquedas en tiempo real

### 📱 Responsive Design
- **Mobile First**: Diseño adaptativo desde móvil
- **Breakpoints**: Sistema de responsive design de Tailwind
- **Touch Friendly**: Elementos optimizados para táctil
- **Cross Browser**: Compatibilidad con todos los navegadores

## 🔒 Seguridad

### Autenticación
- JWT tokens para sesiones
- Refresh tokens para renovación automática
- Middleware de protección de rutas
- Validación de roles y permisos

### Datos
- Sanitización de inputs
- Validación en cliente y servidor
- Protección contra XSS
- Encriptación de datos sensibles

## 🌍 Internacionalización

### Idiomas Soportados
- **Español** (predeterminado)
- **Inglés** (próximamente)
- **Portugués** (próximamente)

### Configuración i18n
```typescript
// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt'],
  },
}
```

## 📈 Métricas y Analytics

### Performance Metrics
- **Core Web Vitals**: LCP, FID, CLS optimizados
- **Lighthouse Score**: 90+ en todas las categorías
- **Bundle Size**: Optimización de dependencias
- **Load Time**: < 3s en 3G connection

### User Analytics
- Seguimiento de navegación
- Métricas de engagement
- Conversión de usuarios
- Feedback y reseñas

## 🤝 Contribución

### Proceso de Contribución
1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

### Estándares de Código
- Seguir convenciones de nomenclatura
- Documentar funciones complejas
- Escribir tests para nuevas funcionalidades
- Mantener cobertura de tests > 80%

### Issues y Bugs
- Usar templates de issues
- Incluir pasos de reproducción
- Agregar screenshots si es UI
- Etiquetar apropiadamente

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Equipo

### Desarrolladores
- **Frontend Lead**: Desarrollo de UI/UX y componentes React
- **Backend Lead**: API development y arquitectura de datos
- **DevOps**: Infraestructura y deployment
- **QA**: Testing y quality assurance

### Contacto
- **Email**: contacto@eduplatform.com
- **Website**: https://eduplatform.com
- **LinkedIn**: https://linkedin.com/company/eduplatform
- **Twitter**: @eduplatform

## 🙏 Agradecimientos

- [Next.js Team](https://nextjs.org/) por el increíble framework
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de utilidades
- [Lucide](https://lucide.dev/) por los iconos vectoriales
- [Vercel](https://vercel.com/) por el hosting y deployment
- Comunidad de desarrolladores por feedback y contribuciones

---

<div align="center">
  <p>Hecho con ❤️ para la educación digital</p>
  <p>© 2024 EduPlatform. Todos los derechos reservados.</p>
</div>