"use client";

import { useState, useEffect, useRef } from "react";
import {
  Play,
  Star,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/60 rounded-full animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${110 + Math.random() * 20}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
              willChange: "transform, opacity",
            }}
          />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`glow-${i}`}
            className="absolute w-1.5 h-1.5 bg-pink-400/50 rounded-full animate-float-diagonal shadow-lg shadow-pink-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${110 + Math.random() * 30}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              willChange: "transform, opacity",
            }}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-float-slow shadow-md shadow-blue-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${115 + Math.random() * 25}%`,
              animationDelay: `${Math.random() * 25}s`,
              animationDuration: `${18 + Math.random() * 12}s`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
            isVisible
              ? "transform translate-x-0 opacity-100"
              : "transform -translate-x-full opacity-0"
          }`}
        >
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Aprende
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                  {" "}
                  Sin{" "}
                </span>
                Límites
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Descubre miles de cursos interactivos con la tecnología más
                avanzada. Transforma tu futuro con conocimiento de calidad
                mundial.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">4.9/5</span>
                <span className="text-gray-400">50K+ reseñas</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">2M+</span>
                <span className="text-gray-400">estudiantes</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <BookOpen className="w-5 h-5 text-green-400" />
                <span className="font-semibold">15K+</span>
                <span className="text-gray-400">cursos</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-2">
                  <span>Comenzar Ahora</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>

              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Ver Demo</span>
                </div>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-gray-400 text-sm">Tasa de éxito</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400 text-sm">Soporte</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-white">30d</div>
                <div className="text-gray-400 text-sm">Garantía</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>

              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-purple-500/30 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">
                          Certificación Premium
                        </h3>
                        <p className="text-gray-400">Validada mundialmente</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">95%</div>
                      <div className="text-gray-400 text-sm">Completado</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Progreso del curso</span>
                      <span className="text-purple-400 font-semibold">
                        95/100
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out animate-pulse"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-2xl p-4 group-hover:bg-white/10 transition-colors duration-300">
                      <div className="text-2xl font-bold text-white">127</div>
                      <div className="text-gray-400 text-sm">Lecciones</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 group-hover:bg-white/10 transition-colors duration-300">
                      <div className="text-2xl font-bold text-white">4.8★</div>
                      <div className="text-gray-400 text-sm">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
          <span className="text-sm">Desliza para explorar</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
