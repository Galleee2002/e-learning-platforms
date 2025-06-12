"use client";

import { useState, useRef, useEffect } from "react";
import {
Star,
Clock,
Users,
Play,
BookOpen,
TrendingUp,
Award,
CheckCircle,
Code,
Zap,
Target,
Trophy,
Download,
Globe,
Briefcase,
ArrowLeft,
PlayCircle,
FileText,
Monitor,
Rocket
} from "lucide-react";

const CoursesSection = () => {
const [visibleCards, setVisibleCards] = useState<number[]>([]);
const [showCourseDetail, setShowCourseDetail] = useState(false);
const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
const sectionRef = useRef<HTMLDivElement>(null);
const detailRef = useRef<HTMLDivElement>(null);

const learningOutcomes: { [key: number]: string[] } = {
  1: [
    "Fundamentos sólidos de React y JSX",
    "Hooks avanzados y custom hooks",
    "Manejo de estado con Context y Redux",
    "Testing completo con Jest y Cypress",
    "Optimización y mejores prácticas",
    "Deployment y configuración de producción",
    "Integración con APIs REST y GraphQL",
    "Arquitectura escalable para proyectos grandes"
  ],
  2: [
    "Sistema de tipos completo de TypeScript",
    "Configuración avanzada de proyectos",
    "Tipos genéricos y condicionales",
    "Integración con frameworks populares",
    "Debugging y tooling profesional",
    "Patterns y arquitecturas empresariales",
    "Testing con tipos estrictos",
    "Migración de JavaScript a TypeScript"
  ],
  3: [
    "Sistema de utilidades de Tailwind CSS",
    "Responsive design mobile-first",
    "Customización avanzada y themes",
    "Componentes reutilizables",
    "Animaciones y transiciones fluidas",
    "Optimización de CSS en producción",
    "Integración con frameworks JS",
    "Workflow de diseño profesional"
  ]
};

const courses = [
  {
    id: 1,
    title: "React Masterclass",
    description:
      "Domina React desde cero hasta nivel experto con proyectos reales",
    instructor: "Alex Rodriguez",
    rating: 4.9,
    students: 12840,
    duration: "42h 30m",
    lessons: 156,
    price: 49999,
    originalPrice: 75000,
    level: "Intermedio",
    image: "bg-gradient-to-br from-blue-600 to-cyan-500",
    iconComponent: () => (
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
        <svg
          className="w-10 h-10 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 1L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L5.82 21.02L7 14.74L2 9L8.91 8.26L12 1Z" />
        </svg>
      </div>
    ),
    progress: 0,
    tags: ["Frontend", "JavaScript", "Components"],
    featured: true,
  },
  {
    id: 2,
    title: "TypeScript Completo",
    description:
      "Aprende TypeScript y mejora tu código JavaScript con tipado estático",
    instructor: "Maria Garcia",
    rating: 4.8,
    students: 8950,
    duration: "28h 15m",
    lessons: 98,
    price: 35000,
    originalPrice: 49999,
    level: "Intermedio",
    image: "bg-gradient-to-br from-blue-700 to-indigo-600",
    iconComponent: () => (
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
        <svg
          className="w-10 h-10 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M1.125 4.5C1.125 3.12 2.245 2 3.625 2h16.75C21.755 2 22.875 3.12 22.875 4.5v15c0 1.38-1.12 2.5-2.5 2.5H3.625c-1.38 0-2.5-1.12-2.5-2.5v-15zm2.5 0v15h16.75v-15H3.625zM7.5 6.5h9v1.5h-9V6.5zm0 3h9V11h-9V9.5zm0 3h6V14h-6v-1.5z" />
        </svg>
      </div>
    ),
    progress: 0,
    tags: ["Backend", "Frontend", "Types"],
    featured: false,
  },
  {
    id: 3,
    title: "Tailwind CSS Pro",
    description:
      "Crea interfaces modernas y responsivas con el framework CSS más popular",
    instructor: "Carlos Lopez",
    rating: 4.7,
    students: 15670,
    duration: "18h 45m",
    lessons: 67,
    price: 20000,
    originalPrice: 39000,
    level: "Principiante",
    image: "bg-gradient-to-br from-teal-500 to-green-500",
    iconComponent: () => (
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
        <svg
          className="w-10 h-10 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L3 7l9 5 9-5-9-5zM12 17l-9-5v6l9 5 9-5v-6l-9 5z" />
          <path d="M12 12l9-5v6l-9 5-9-5V7l9 5z" fillOpacity="0.6" />
        </svg>
      </div>
    ),
    progress: 0,
    tags: ["CSS", "Design", "Responsive"],
    featured: false,
  },
];

const courseContentData: { [key: number]: any[] } = {
  1: [
    {
      module: "Módulo 1: Fundamentos",
      lessons: 18,
      duration: "4h 20m",
      topics: ["Introducción a React", "JSX y Componentes", "Estado y Props", "Event Handling"]
    },
    {
      module: "Módulo 2: Hooks Avanzados",
      lessons: 24,
      duration: "6h 15m",
      topics: ["useState y useEffect", "useContext y useReducer", "Custom Hooks", "Optimización"]
    },
    {
      module: "Módulo 3: Routing y Navegación",
      lessons: 16,
      duration: "4h 45m",
      topics: ["React Router", "Navegación Dinámica", "Parámetros de Ruta", "Guards"]
    },
    {
      module: "Módulo 4: Estado Global",
      lessons: 22,
      duration: "5h 30m",
      topics: ["Context API", "Redux Toolkit", "Zustand", "Estado Persistente"]
    },
    {
      module: "Módulo 5: Testing",
      lessons: 19,
      duration: "5h 10m",
      topics: ["Jest y Testing Library", "Unit Tests", "Integration Tests", "E2E con Cypress"]
    },
    {
      module: "Módulo 6: Proyectos Reales",
      lessons: 32,
      duration: "8h 30m",
      topics: ["E-commerce App", "Dashboard Admin", "Chat Real-time", "Deployment"]
    },
    {
      module: "Módulo 7: Performance",
      lessons: 15,
      duration: "4h 20m",
      topics: ["React.memo", "Lazy Loading", "Code Splitting", "Bundle Optimization"]
    },
    {
      module: "Módulo 8: Next.js",
      lessons: 10,
      duration: "3h 40m",
      topics: ["SSR y SSG", "API Routes", "Deployment", "SEO"]
    }
  ],
  2: [
    {
      module: "Módulo 1: Fundamentos de TypeScript",
      lessons: 16,
      duration: "3h 45m",
      topics: ["Tipos Básicos", "Interfaces", "Enums", "Uniones y Tipos Literales"]
    },
    {
      module: "Módulo 2: Configuración Avanzada",
      lessons: 12,
      duration: "2h 30m",
      topics: ["tsconfig.json", "Compilador", "Linting", "Path Mapping"]
    },
    {
      module: "Módulo 3: Tipos Avanzados",
      lessons: 20,
      duration: "4h 15m",
      topics: ["Genéricos", "Tipos Condicionales", "Mapped Types", "Utility Types"]
    },
    {
      module: "Módulo 4: Clases y Decoradores",
      lessons: 14,
      duration: "3h 20m",
      topics: ["POO en TypeScript", "Decoradores", "Metadata", "Design Patterns"]
    },
    {
      module: "Módulo 5: Módulos y Namespaces",
      lessons: 10,
      duration: "2h 15m",
      topics: ["Sistema de Módulos", "Namespaces", "Triple-Slash", "Declaraciones"]
    },
    {
      module: "Módulo 6: TypeScript con Frameworks",
      lessons: 18,
      duration: "4h 30m",
      topics: ["React + TS", "Node.js + TS", "Express + TS", "Testing con TS"]
    },
    {
      module: "Módulo 7: Herramientas del Ecosistema",
      lessons: 8,
      duration: "1h 45m",
      topics: ["Webpack", "Vite", "ESLint", "Prettier"]
    }
  ],
  3: [
    {
      module: "Módulo 1: Fundamentos de Tailwind",
      lessons: 14,
      duration: "2h 30m",
      topics: ["Utility-First", "Instalación", "Configuración", "Primeras Clases"]
    },
    {
      module: "Módulo 2: Layout y Spacing",
      lessons: 16,
      duration: "3h 15m",
      topics: ["Flexbox", "Grid", "Positioning", "Spacing System"]
    },
    {
      module: "Módulo 3: Tipografía y Colores",
      lessons: 12,
      duration: "2h 45m",
      topics: ["Typography Scale", "Color Palette", "Custom Colors", "Dark Mode"]
    },
    {
      module: "Módulo 4: Responsive Design",
      lessons: 15,
      duration: "3h 30m",
      topics: ["Breakpoints", "Mobile First", "Container Queries", "Print Styles"]
    },
    {
      module: "Módulo 5: Componentes y Animaciones",
      lessons: 10,
      duration: "2h 45m",
      topics: ["Component Patterns", "Transitions", "Animations", "Transform"]
    },
    {
      module: "Módulo 6: Customización Avanzada",
      lessons: 8,
      duration: "2h 15m",
      topics: ["Config File", "Plugins", "Custom Utilities", "Themes"]
    },
    {
      module: "Módulo 7: Proyectos Prácticos",
      lessons: 12,
      duration: "4h 55m",
      topics: ["Landing Page", "Dashboard", "E-commerce", "Blog Theme"]
    }
  ]
};

const benefitsData: { [key: number]: any[] } = {
  1: [
    {
      icon: Code,
      title: "Dominio Técnico",
      description: "Conviértete en un experto React con conocimiento profundo del ecosistema completo"
    },
    {
      icon: Briefcase,
      title: "Oportunidades Laborales",
      description: "Accede a posiciones mejor remuneradas como React Developer Senior"
    },
    {
      icon: Trophy,
      title: "Certificación",
      description: "Obtén un certificado verificable para destacar en tu perfil profesional"
    },
    {
      icon: Globe,
      title: "Comunidad Global",
      description: "Únete a nuestra comunidad de +50,000 desarrolladores React"
    },
    {
      icon: Rocket,
      title: "Proyectos Portfolio",
      description: "Desarrolla 6 proyectos reales para tu portafolio profesional"
    },
    {
      icon: Zap,
      title: "Actualización Continua",
      description: "Contenido actualizado con las últimas versiones y mejores prácticas"
    }
  ],
  2: [
    {
      icon: Code,
      title: "Código Más Robusto",
      description: "Escribe código JavaScript más seguro y mantenible con tipado estático"
    },
    {
      icon: Briefcase,
      title: "Demanda del Mercado",
      description: "TypeScript es requerido en el 85% de ofertas laborales senior"
    },
    {
      icon: Trophy,
      title: "Certificación Profesional",
      description: "Valida tu expertise en TypeScript con certificado reconocido"
    },
    {
      icon: Globe,
      title: "Estándar de la Industria",
      description: "Utilizado por Microsoft, Google, Facebook y miles de empresas"
    },
    {
      icon: Rocket,
      title: "Mejor Productividad",
      description: "Reduce bugs en producción hasta en un 80% con tipado estático"
    },
    {
      icon: Zap,
      title: "IntelliSense Avanzado",
      description: "Mejora tu experiencia de desarrollo con autocompletado inteligente"
    }
  ],
  3: [
    {
      icon: Code,
      title: "Desarrollo Rápido",
      description: "Crea interfaces profesionales 10x más rápido con clases utilitarias"
    },
    {
      icon: Briefcase,
      title: "Skill Demandado",
      description: "Tailwind es el framework CSS más popular y buscado en 2024"
    },
    {
      icon: Trophy,
      title: "Diseño Consistente",
      description: "Aprende a crear sistemas de diseño escalables y mantenibles"
    },
    {
      icon: Globe,
      title: "Adoptado Globalmente",
      description: "Usado por Netflix, GitHub, Shopify y millones de desarrolladores"
    },
    {
      icon: Rocket,
      title: "Responsive por Defecto",
      description: "Domina el diseño mobile-first y responsive design avanzado"
    },
    {
      icon: Zap,
      title: "Performance Optimizada",
      description: "CSS mínimo en producción con purging automático de clases"
    }
  ]
};

const featuresData: { [key: number]: string[] } = {
  1: [
    "156 lecciones en video HD",
    "42+ horas de contenido premium",
    "6 proyectos del mundo real",
    "Código fuente descargable",
    "Acceso de por vida",
    "Certificado de finalización",
    "Soporte directo del instructor",
    "Actualizaciones gratuitas",
    "Comunidad privada",
    "Ejercicios prácticos"
  ],
  2: [
    "98 lecciones en video HD",
    "28+ horas de contenido experto",
    "4 proyectos empresariales",
    "Código TypeScript completo",
    "Acceso de por vida",
    "Certificado profesional",
    "Soporte técnico especializado",
    "Actualizaciones gratuitas",
    "Comunidad de desarrolladores",
    "Ejercicios y challenges"
  ],
  3: [
    "67 lecciones en video HD",
    "18+ horas de contenido práctico",
    "5 proyectos de diseño",
    "Código y assets descargables",
    "Acceso de por vida",
    "Certificado de diseño",
    "Soporte del instructor",
    "Actualizaciones gratuitas",
    "Comunidad de diseñadores",
    "Recursos y templates"
  ]
};

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );
          setVisibleCards((prev) => {
            const newSet = new Set([...prev, index]);
            return Array.from(newSet);
          });
        }
      });
    },
    { threshold: 0.2, rootMargin: "50px" }
  );

  const cards = sectionRef.current?.querySelectorAll(".course-card");
  cards?.forEach((card) => observer.observe(card));

  return () => observer.disconnect();
}, []);

const handleCourseClick = (courseId: number) => {
  setSelectedCourse(courseId);
  setShowCourseDetail(true);
  setTimeout(() => {
    detailRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
};

const handleBackToCourses = () => {
  setShowCourseDetail(false);
  setSelectedCourse(null);
  setTimeout(() => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
};

if (showCourseDetail && selectedCourse) {
  const course = courses.find(c => c.id === selectedCourse);
  const courseContent = courseContentData[selectedCourse];
  const benefits = benefitsData[selectedCourse];
  const features = featuresData[selectedCourse];
  const outcomes = learningOutcomes[selectedCourse];

  if (!course) return null;
  return (
    <div ref={detailRef} className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <button 
          onClick={handleBackToCourses}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a cursos
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 ${course.image} rounded-xl flex items-center justify-center`}>
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        {selectedCourse === 1 && (
                          <>
                            <circle cx="12" cy="12" r="2.5" />
                            <path d="M12 1L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L5.82 21.02L7 14.74L2 9L8.91 8.26L12 1Z" />
                          </>
                        )}
                        {selectedCourse === 2 && (
                          <path d="M1.125 4.5C1.125 3.12 2.245 2 3.625 2h16.75C21.755 2 22.875 3.12 22.875 4.5v15c0 1.38-1.12 2.5-2.5 2.5H3.625c-1.38 0-2.5-1.12-2.5-2.5v-15zm2.5 0v15h16.75v-15H3.625zM7.5 6.5h9v1.5h-9V6.5zm0 3h9V11h-9V9.5zm0 3h6V14h-6v-1.5z" />
                        )}
                        {selectedCourse === 3 && (
                          <>
                            <path d="M12 2L3 7l9 5 9-5-9-5zM12 17l-9-5v6l9 5 9-5v-6l-9 5z" />
                            <path d="M12 12l9-5v6l-9 5-9-5V7l9 5z" fillOpacity="0.6" />
                          </>
                        )}
                      </svg>
                    </div>
                    <div>
                      <h1 className="text-3xl font-black text-gray-900">{course.title}</h1>
                      <p className="text-gray-600">por {course.instructor}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {course.description}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Award className="w-3 h-3 mr-1" />
                  Destacado
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{course.rating}</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{course.students.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Estudiantes</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{course.duration}</div>
                  <div className="text-sm text-gray-600">Duración</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <PlayCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{course.lessons}</div>
                  <div className="text-sm text-gray-600">Lecciones</div>
                </div>
              </div>

              <div className={`${course.image} rounded-2xl p-6 text-white mb-8`}>
                <h3 className="text-xl font-bold mb-4">Lo que aprenderás</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {outcomes.map((item: string, index: number) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contenido del Curso</h3>
                <div className="space-y-4">
                  {courseContent.map((module, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{module.module}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <PlayCircle className="w-4 h-4 mr-1" />
                            {module.lessons} lecciones
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {module.duration}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((
                          topic: [],
                          topicIndex: number
                        ) => (
                          <span key={topicIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Beneficios del Curso</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 sticky top-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-3xl font-black text-gray-900">${course.price}</span>
                  <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                </div>
                <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold inline-block">
                  {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF - Oferta limitada
                </div>
              </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg mb-4">
                Inscribirse Ahora
              </button>

              <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-xl font-semibold transition-all duration-300 mb-6">
                Vista Previa Gratuita
              </button>

              <div className="space-y-3">
                <h4 className="font-bold text-gray-900">Incluye:</h4>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Garantía de devolución</span>
                  <span className="font-semibold">30 días</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Acceso</span>
                  <span className="font-semibold">De por vida</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 text-white">
              <h4 className="font-bold text-lg mb-3">¿Tienes dudas?</h4>
              <p className="text-blue-100 text-sm mb-4">
                Nuestro equipo está listo para ayudarte a tomar la mejor decisión para tu carrera.
              </p>
              <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                Contactar Asesor
              </button>
            </div>
          </div>
        </div>
    
  );
}

return (
  <div
    ref={sectionRef}
    className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gray-100/20"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
          <TrendingUp className="w-4 h-4 mr-2" />
          Cursos Populares
        </div>
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
          Acelera tu
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Carrera{" "}
          </span>
          Profesional
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Aprende las tecnologías más demandadas del mercado con nuestros
          cursos premium diseñados por expertos de la industria
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={course.id}
            data-index={index}
            className={`course-card group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
            {course.featured && (
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                  <Award className="w-3 h-3 mr-1" />
                  Destacado
                </div>
              </div>
            )}

            <div className="relative h-48 overflow-hidden">
              <div
                className={`absolute inset-0 ${course.image} opacity-90`}
              ></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                {course.iconComponent()}
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <button className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                <Play className="w-5 h-5 ml-0.5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {course.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 text-blue-500 mr-1" />
                  <span className="text-sm text-gray-600">
                    {course.lessons} lecciones
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  por{" "}
                  <span className="font-medium text-gray-700">
                    {course.instructor}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${course.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${course.originalPrice}
                    </span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-xs font-bold">
                      {Math.round(
                        (1 - course.price / course.originalPrice) * 100
                      )}
                      % OFF
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => handleCourseClick(course.id)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:shadow-blue-500/25"
                >
                  Ver Detalles del Curso
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          Ver Todos los Cursos
          <BookOpen className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  </div>
);
};

export default CoursesSection;