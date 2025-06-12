"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  BookOpen,
  User,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { name: "Cursos", href: "/courses", hasDropdown: true },
    { name: "Mi Progreso", href: "/progress" },
    { name: "Comunidad", href: "/community" },
    { name: "Recursos", href: "/resources", hasDropdown: true },
  ];

  const coursesDropdown = [
    { name: "Programación", href: "/courses/programming" },
    { name: "Diseño", href: "/courses/design" },
    { name: "Marketing", href: "/courses/marketing" },
    { name: "Ciencias", href: "/courses/science" },
  ];

  const resourcesDropdown = [
    { name: "Documentación", href: "/docs" },
    { name: "Tutoriales", href: "/tutorials" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EducAR
              </span>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                    onClick={() =>
                      item.hasDropdown && toggleDropdown(item.name)
                    }
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {item.hasDropdown && (
                    <div
                      className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200/50 transition-all duration-200 ${
                        activeDropdown === item.name
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-2 invisible"
                      }`}
                    >
                      <div className="py-2">
                        {(item.name === "Cursos"
                          ? coursesDropdown
                          : resourcesDropdown
                        ).map((dropItem) => (
                          <a
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                          >
                            {dropItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar cursos..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>

            <button className="relative p-2 text-gray-500 hover:text-blue-600 transition-colors duration-200">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200/50 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 invisible group-hover:visible">
                <div className="py-2">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                  >
                    Mi Perfil
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                  >
                    Configuración
                  </a>
                  <hr className="my-1 border-gray-200" />
                  <a
                    href="/logout"
                    className="block px-4 py-2 text-red-600 hover:bg-red-50 transition-colors duration-150"
                  >
                    Cerrar Sesión
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded-lg"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <div className="px-4 pb-2">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <a
                href="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Mi Perfil
              </a>
              <a
                href="/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Configuración
              </a>
              <a
                href="/logout"
                className="block px-4 py-2 text-red-600 hover:bg-red-50 transition-colors duration-200"
              >
                Cerrar Sesión
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
