"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  BookOpen,
  User,
  Bell,
  Search,
  ChevronDown,
  GraduationCap,
  Trophy,
  Clock,
  MessageCircle,
  Award,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "course",
      title: "Nuevo curso disponible",
      message: "React Masterclass 2024 ya está disponible",
      time: "Hace 2 min",
      read: false,
      icon: BookOpen,
    },
    {
      id: 2,
      type: "achievement",
      title: "¡Logro desbloqueado!",
      message: "Completaste el 50% del curso de TypeScript",
      time: "Hace 1 hora",
      read: false,
      icon: Trophy,
    },
    {
      id: 3,
      type: "reminder",
      title: "Recordatorio de clase",
      message: "Tu clase de Tailwind CSS empieza en 30 minutos",
      time: "Hace 2 horas",
      read: true,
      icon: Clock,
    },
    {
      id: 4,
      type: "community",
      title: "Nuevo comentario",
      message: "María García respondió a tu pregunta en el foro",
      time: "Hace 3 horas",
      read: true,
      icon: MessageCircle,
    },
    {
      id: 5,
      type: "certificate",
      title: "Certificado listo",
      message: "Tu certificado de JavaScript Avanzado está disponible",
      time: "Hace 1 día",
      read: true,
      icon: GraduationCap,
    },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        !target.closest(".notifications-container") &&
        !target.closest(".notification-button")
      ) {
        setShowNotifications(false);
      }
      if (!target.closest(".dropdown-container")) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setShowNotifications(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setActiveDropdown(null);
  };

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getNotificationTypeColor = (type: string) => {
    switch (type) {
      case "course":
        return "bg-blue-100 text-blue-600";
      case "achievement":
        return "bg-yellow-100 text-yellow-600";
      case "reminder":
        return "bg-purple-100 text-purple-600";
      case "community":
        return "bg-green-100 text-green-600";
      case "certificate":
        return "bg-pink-100 text-pink-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
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
                EduPlatform
              </span>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group dropdown-container"
                >
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

            <div className="relative">
              <button
                onClick={toggleNotifications}
                className="notification-button relative p-2 text-gray-500 hover:text-blue-600 transition-colors duration-200"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                    {unreadCount > 9 ? "9+" : unreadCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="notifications-container absolute top-full right-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 max-h-96 overflow-hidden">
                  <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900 text-lg">
                        Notificaciones
                      </h3>
                      <div className="flex items-center space-x-2">
                        {unreadCount > 0 && (
                          <button
                            onClick={markAllAsRead}
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Marcar todas como leídas
                          </button>
                        )}
                        <button
                          onClick={() => setShowNotifications(false)}
                          className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    {unreadCount > 0 && (
                      <p className="text-sm text-gray-600 mt-1">
                        Tienes {unreadCount} notificaciones sin leer
                      </p>
                    )}
                  </div>

                  <div className="max-h-80 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-8 text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Bell className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500 font-medium">
                          No tienes notificaciones
                        </p>
                        <p className="text-gray-400 text-sm">
                          Te notificaremos cuando tengas algo nuevo
                        </p>
                      </div>
                    ) : (
                      <div className="divide-y divide-gray-100">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer group ${
                              !notification.read ? "bg-blue-50/50" : ""
                            }`}
                            onClick={() => markAsRead(notification.id)}
                          >
                            <div className="flex items-start space-x-3">
                              <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${getNotificationTypeColor(
                                  notification.type
                                )}`}
                              >
                                <notification.icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <p
                                      className={`font-semibold text-sm ${
                                        !notification.read
                                          ? "text-gray-900"
                                          : "text-gray-700"
                                      }`}
                                    >
                                      {notification.title}
                                    </p>
                                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                                      {notification.message}
                                    </p>
                                    <p className="text-gray-400 text-xs mt-2">
                                      {notification.time}
                                    </p>
                                  </div>
                                  <div className="flex items-center space-x-2 ml-2">
                                    {!notification.read && (
                                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    )}
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        deleteNotification(notification.id);
                                      }}
                                      className="opacity-0 group-hover:opacity-100 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-500 transition-all duration-200"
                                    >
                                      <X className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {notifications.length > 0 && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50">
                      <button className="w-full text-center text-blue-600 hover:text-blue-700 font-medium text-sm py-2 hover:bg-blue-50 rounded-lg transition-colors">
                        Ver todas las notificaciones
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="relative group dropdown-container">
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
