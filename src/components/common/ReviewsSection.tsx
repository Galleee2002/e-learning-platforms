"use client";

import { useState, useRef, useEffect } from "react";
import {
  Star,
  Quote,
  ThumbsUp,
  Award,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const ReviewsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      id: 1,
      name: "Ana Martínez",
      role: "Frontend Developer",
      company: "Google",
      avatar: "bg-gradient-to-br from-pink-500 to-rose-500",
      rating: 5,
      course: "React Masterclass",
      briefDescription: "Transformó mi carrera profesional completamente",
      fullReview:
        "Este curso superó todas mis expectativas. La metodología es increíble y los proyectos prácticos me ayudaron a conseguir mi trabajo en Google. El instructor explica de manera clara y los ejercicios son muy realistas. Definitivamente vale cada centavo invertido.",
      achievement: "Conseguí trabajo en FAANG",
      timeAgo: "Hace 2 semanas",
      helpful: 247,
      verified: true,
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Full Stack Developer",
      company: "Microsoft",
      avatar: "bg-gradient-to-br from-blue-500 to-indigo-600",
      rating: 5,
      course: "TypeScript Completo",
      briefDescription: "El mejor curso de TypeScript que he tomado",
      fullReview:
        "Increíble la profundidad del contenido. Pasé de no saber nada de TypeScript a usarlo en proyectos enterprise. Los ejemplos son muy claros y la progresión del curso es perfecta. Ahora soy el referente de TS en mi equipo.",
      achievement: "Promoción a Senior",
      timeAgo: "Hace 1 mes",
      helpful: 189,
      verified: true,
    },
    {
      id: 3,
      name: "Laura Sánchez",
      role: "UI/UX Designer",
      company: "Spotify",
      avatar: "bg-gradient-to-br from-purple-500 to-pink-500",
      rating: 5,
      course: "Tailwind CSS Pro",
      briefDescription: "Revolucionó mi workflow de diseño",
      fullReview:
        "Como diseñadora, siempre tuve problemas implementando mis diseños. Este curso cambió todo. Ahora puedo crear prototipos funcionales super rápido y trabajar mejor con developers. Tailwind es una herramienta increíble y este curso la enseña perfectamente.",
      achievement: "Aumento salarial 40%",
      timeAgo: "Hace 3 semanas",
      helpful: 156,
      verified: true,
    },
    {
      id: 4,
      name: "Diego López",
      role: "Tech Lead",
      company: "Netflix",
      avatar: "bg-gradient-to-br from-green-500 to-teal-500",
      rating: 5,
      course: "React Masterclass",
      briefDescription: "Contenido de nivel enterprise increíble",
      fullReview:
        "He tomado muchos cursos pero este está en otro nivel. La calidad del contenido, los patrones avanzados y las mejores prácticas que enseñan son exactamente lo que usamos en Netflix. Perfecto para desarrolladores que quieren dar el siguiente paso.",
      achievement: "Lideré migración React",
      timeAgo: "Hace 1 semana",
      helpful: 312,
      verified: true,
    },
    {
      id: 5,
      name: "Sofia Gutierrez",
      role: "Junior Developer",
      company: "Airbnb",
      avatar: "bg-gradient-to-br from-orange-500 to-red-500",
      rating: 5,
      course: "TypeScript Completo",
      briefDescription: "De cero conocimiento a junior developer",
      fullReview:
        "Venía de un bootcamp básico y este curso me llevó al siguiente nivel. La explicación de conceptos avanzados es fantástica. En 3 meses conseguí mi primer trabajo como developer. Los proyectos del curso fueron clave en mis entrevistas técnicas.",
      achievement: "Primer trabajo tech",
      timeAgo: "Hace 5 días",
      helpful: 198,
      verified: true,
    },
    {
      id: 6,
      name: "Miguel Torres",
      role: "Freelance Developer",
      company: "Independiente",
      avatar: "bg-gradient-to-br from-cyan-500 to-blue-500",
      rating: 5,
      course: "Tailwind CSS Pro",
      briefDescription: "Mejoré mis ingresos como freelancer",
      fullReview:
        "Este curso me ayudó a entregar proyectos más rápido y con mejor calidad. Mis clientes están encantados con los resultados y he podido aumentar mis tarifas. La eficiencia que conseguí con Tailwind es impresionante. Recomendado 100%.",
      achievement: "Ingresos +60% mensual",
      timeAgo: "Hace 4 días",
      helpful: 143,
      verified: true,
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
      { threshold: 0.2, rootMargin: "100px" }
    );

    const cards = sectionRef.current?.querySelectorAll(".review-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-200/30 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Award className="w-5 h-5 mr-2" />
            Testimonios Verificados
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Lo que dicen nuestros
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Estudiantes{" "}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Miles de profesionales han transformado sus carreras con nuestros
            cursos. Lee sus historias de éxito y descubre tu potencial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              data-index={index}
              className={`review-card group h-80 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transitionDuration: "800ms",
                perspective: "1000px",
              }}
            >
              <div
                className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group-hover:scale-105">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"></div>

                    <div className="p-8 h-full flex flex-col">
                      <div className="flex items-center space-x-4 mb-6">
                        <div
                          className={`w-16 h-16 ${review.avatar} rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg`}
                        >
                          {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-bold text-gray-900">
                              {review.name}
                            </h4>
                            {review.verified && (
                              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg
                                  className="w-3 h-3 text-white"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{review.role}</p>
                          <p className="text-xs text-gray-500 font-medium">
                            {review.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600 font-medium">
                          Curso: {review.course}
                        </span>
                      </div>

                      <blockquote className="flex-1 relative">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-purple-200" />
                        <p className="text-gray-700 leading-relaxed font-medium text-lg italic pl-6">
                          "{review.briefDescription}"
                        </p>
                      </blockquote>

                      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                            {review.achievement}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {review.timeAgo}
                        </span>
                      </div>

                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-bold">
                          Hover para ver más
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="h-full bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/20"></div>

                    <div className="p-6 h-full flex flex-col text-white relative z-10">
                      <div className="flex items-center space-x-2 mb-4">
                        <Quote className="w-6 h-6 text-yellow-400" />
                        <h4 className="font-bold text-lg">Reseña Completa</h4>
                      </div>

                      <blockquote className="flex-1 mb-4">
                        <p className="text-white/90 leading-relaxed text-xs">
                          "{review.fullReview}"
                        </p>
                      </blockquote>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <ThumbsUp className="w-3 h-3 text-green-400" />
                            <span className="text-xs font-medium">
                              {review.helpful} útil
                            </span>
                          </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                          <div className="flex items-center space-x-2">
                            <div
                              className={`w-8 h-8 ${review.avatar} rounded-lg flex items-center justify-center text-white text-xs font-bold`}
                            >
                              {review.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <p className="font-semibold text-sm">
                                {review.name}
                              </p>
                              <p className="text-xs text-white/70">
                                {review.role}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-3 h-3" />
                            <span className="truncate">{review.course}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-3 h-3 text-green-400" />
                            <span className="text-green-400 font-medium text-xs">
                              {review.achievement}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-8 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="text-center">
              <div className="text-4xl font-black text-purple-600 mb-2">
                4.9/5
              </div>
              <div className="flex items-center justify-center mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">Calificación promedio</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-600 mb-2">50K+</div>
              <div className="text-sm text-gray-600">Reseñas verificadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Tasa de satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
