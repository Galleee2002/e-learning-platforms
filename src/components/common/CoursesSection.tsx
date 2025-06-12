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
} from "lucide-react";

const CoursesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

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

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:shadow-blue-500/25">
                    Inscribirse Ahora
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
