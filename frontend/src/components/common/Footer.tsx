"use client";

import { useState, useRef, useEffect } from "react";
import {
  BookOpen,
  MessageCircle,
  FileText,
  Play,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ChevronUp,
  Star,
  Award,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Heart,
} from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  const footerLinks = {
    platform: [
      { name: "Todos los Cursos", href: "/courses", icon: BookOpen },
      { name: "Precios", href: "/pricing", icon: Star },
      { name: "Certificaciones", href: "/certificates", icon: Award },
      { name: "Para Empresas", href: "/business", icon: Users },
    ],
    resources: [
      { name: "Documentación", href: "/docs", icon: FileText },
      { name: "Blog", href: "/blog", icon: MessageCircle },
      { name: "FAQ", href: "/faq", icon: MessageCircle },
      { name: "Tutoriales", href: "/tutorials", icon: Play },
    ],
    support: [
      { name: "Centro de Ayuda", href: "/help", icon: MessageCircle },
      { name: "Contacto", href: "/contact", icon: Mail },
      { name: "Comunidad", href: "/community", icon: Users },
      { name: "Estado del Sistema", href: "/status", icon: TrendingUp },
    ],
    company: [
      { name: "Sobre Nosotros", href: "/about", icon: Heart },
      { name: "Carreras", href: "/careers", icon: TrendingUp },
      { name: "Términos", href: "/terms", icon: FileText },
      { name: "Privacidad", href: "/privacy", icon: FileText },
    ],
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      color: "hover:text-gray-900",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      color: "hover:text-pink-500",
    },
  ];

  const stats = [
    { value: "2M+", label: "Estudiantes Activos", icon: Users },
    { value: "15K+", label: "Cursos Disponibles", icon: BookOpen },
    { value: "98%", label: "Tasa de Satisfacción", icon: Star },
    { value: "150+", label: "Países", icon: TrendingUp },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      <div className="relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-6 gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    EduPlatform
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  La plataforma educativa más avanzada del mundo. Transforma tu
                  futuro con cursos premium diseñados por expertos de la
                  industria.
                </p>

                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-6 border border-white/10 mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <h4 className="text-lg font-bold text-white">
                      Newsletter Premium
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Recibe contenido exclusivo y ofertas especiales directo en
                    tu email.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    />
                    <button
                      onClick={handleSubscribe}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Suscribir
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-6 text-white">
                    Plataforma
                  </h4>
                  <ul className="space-y-4">
                    {footerLinks.platform.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          <link.icon className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                          <span>{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-6 text-white">
                    Recursos
                  </h4>
                  <ul className="space-y-4">
                    {footerLinks.resources.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          <link.icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                          <span>{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-6 text-white">Soporte</h4>
                  <ul className="space-y-4">
                    {footerLinks.support.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          <link.icon className="w-4 h-4 text-green-400 group-hover:text-green-300" />
                          <span>{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-6 text-white">Empresa</h4>
                  <ul className="space-y-4">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          <link.icon className="w-4 h-4 text-orange-400 group-hover:text-orange-300" />
                          <span>{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-6">
                  <p className="text-gray-300">
                    © 2024 EduPlatform. Todos los derechos reservados.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>Hecho con</span>
                    <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                    <span>para educadores</span>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>Buenos Aires, Argentina</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span>+54 11 1234-5678</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span>hola@eduplatform.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-1">
            <div className="bg-black text-center py-4">
              <p className="text-white font-medium">
                🚀 Únete a la revolución educativa digital más grande del mundo
              </p>
            </div>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
