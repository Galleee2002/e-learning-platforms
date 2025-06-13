"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { getCourses } from "@/lib/api";
import { Course } from "@/types/api";
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
  Star,
  Users,
  LogOut,
  Settings,
  UserCircle,
} from "lucide-react";

interface NavItemType {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

interface DropdownItemType {
  name: string;
  href: string;
}

interface NotificationType {
  id: number;
  type: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const { user, isAuthenticated, logout, loading: authLoading } = useAuth();
  const router = useRouter();

  const [notifications, setNotifications] = useState<NotificationType[]>([
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
  ]);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setSearchLoading(true);
        const response = await getCourses({ per_page: 50 });
        setCourses(response.courses);
      } catch (error) {
        console.error("Error loading courses:", error);
        setCourses([
          {
            id: 1,
            title: "React Masterclass",
            description:
              "Domina React desde cero hasta nivel experto con proyectos reales",
            short_description: "Domina React desde cero hasta nivel experto",
            image_url: "",
            price: 89,
            level: "intermediate" as const,
            duration_hours: 42,
            instructor: {
              id: 1,
              username: "alex_rodriguez",
              email: "alex@example.com",
              first_name: "Alex",
              last_name: "Rodriguez",
              full_name: "Alex Rodriguez",
              role: "teacher" as const,
              is_active: true,
              created_at: "",
              updated_at: "",
            },
            category: undefined,
            is_published: true,
            average_rating: 4.9,
            total_reviews: 150,
            total_students: 12840,
            tags: [],
            created_at: "",
            updated_at: "",
          },
        ]);
      } finally {
        setSearchLoading(false);
      }
    };

    loadCourses();
  }, []);

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
      if (!target.closest(".search-container")) {
        setShowSearchResults(false);
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
    setShowSearchResults(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setActiveDropdown(null);
    setShowSearchResults(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowSearchResults(query.length > 0);
    if (query.length > 0) {
      setActiveDropdown(null);
      setShowNotifications(false);
    }
  };

  const handleSearchFocus = () => {
    if (searchQuery.length > 0) {
      setShowSearchResults(true);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setShowSearchResults(false);
  };

  const filteredCourses = courses.filter((course) => {
    const query = searchQuery.toLowerCase();
    return (
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.instructor.full_name.toLowerCase().includes(query) ||
      course.level.toLowerCase().includes(query)
    );
  });

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

  const handleLogout = () => {
    logout();
    router.push("/");
    setActiveDropdown(null);
  };

  const getNavItems = (): NavItemType[] => {
    const baseItems: NavItemType[] = [
      { name: "Cursos", href: "/courses", hasDropdown: true },
    ];

    if (isAuthenticated) {
      baseItems.push(
        { name: "Mi Progreso", href: "/progress" },
        { name: "Dashboard", href: "/dashboard" }
      );

      if (user?.role === "teacher" || user?.role === "admin") {
        baseItems.push({ name: "Mis Cursos", href: "/my-courses" });
      }

      if (user?.role === "admin") {
        baseItems.push({ name: "Admin", href: "/admin" });
      }
    }

    baseItems.push(
      { name: "Comunidad", href: "/community" },
      { name: "Recursos", href: "/resources", hasDropdown: true }
    );

    return baseItems;
  };

  const navItems = getNavItems();

  const coursesDropdownItems: DropdownItemType[] = [
    { name: "Programación", href: "/courses/programming" },
    { name: "Diseño", href: "/courses/design" },
    { name: "Marketing", href: "/courses/marketing" },
    { name: "Ciencias", href: "/courses/science" },
  ];

  const resourcesDropdownItems: DropdownItemType[] = [
    { name: "Documentación", href: "/docs" },
    { name: "Tutoriales", href: "/tutorials" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];

  const getUserInitials = (user: any) => {
    if (!user) return "U";
    return `${user.first_name?.charAt(0) || ""}${
      user.last_name?.charAt(0) || ""
    }`.toUpperCase();
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="ml-2 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduPlatform
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <div key={item.name} className="relative dropdown-container">
                  {item.hasDropdown ? (
                    <button
                      className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.hasDropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 ${
                        activeDropdown === item.name
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-2 invisible"
                      }`}
                    >
                      <div className="py-1">
                        {(item.name === "Cursos"
                          ? coursesDropdownItems
                          : resourcesDropdownItems
                        ).map((dropItem: DropdownItemType) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <div className="relative search-container">
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                className="w-60 pl-9 pr-9 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
              />
              <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-400" />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-2.5 w-3.5 h-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              {showSearchResults && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 max-h-80 overflow-hidden">
                  <div className="p-3 border-b border-gray-100 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        Resultados de búsqueda
                        {filteredCourses.length > 0 && (
                          <span className="ml-2 text-xs font-normal text-gray-600">
                            ({filteredCourses.length})
                          </span>
                        )}
                      </h3>
                      <button
                        onClick={() => setShowSearchResults(false)}
                        className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="max-h-64 overflow-y-auto">
                    {searchLoading ? (
                      <div className="p-6 text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
                        <p className="text-gray-500 text-sm mt-2">
                          Buscando...
                        </p>
                      </div>
                    ) : filteredCourses.length === 0 ? (
                      <div className="p-6 text-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Search className="w-5 h-5 text-gray-400" />
                        </div>
                        <p className="text-gray-500 font-medium text-sm">
                          No se encontraron cursos
                        </p>
                        <p className="text-gray-400 text-xs">
                          Intenta con otros términos
                        </p>
                      </div>
                    ) : (
                      <div className="divide-y divide-gray-100">
                        {filteredCourses.map((course) => (
                          <Link
                            key={course.id}
                            href={`/courses/${course.id}`}
                            className="block p-3 hover:bg-gray-50 transition-colors"
                            onClick={() => {
                              setShowSearchResults(false);
                              setSearchQuery("");
                            }}
                          >
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <BookOpen className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-gray-900 text-sm hover:text-blue-600 transition-colors">
                                  {course.title}
                                </h4>
                                <p className="text-gray-600 text-xs mt-1 line-clamp-2">
                                  {course.short_description ||
                                    course.description}
                                </p>
                                <div className="flex items-center space-x-3 mt-2 text-xs text-gray-500">
                                  <div className="flex items-center space-x-1">
                                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                    <span>
                                      {course.average_rating.toFixed(1)}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Users className="w-3 h-3" />
                                    <span>
                                      {course.total_students.toLocaleString()}
                                    </span>
                                  </div>
                                  <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs capitalize">
                                    {course.level}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-bold text-gray-900">
                                  ${course.price}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {course.duration_hours}h
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {authLoading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            ) : isAuthenticated ? (
              <>
                <div className="relative">
                  <button
                    onClick={toggleNotifications}
                    className="notification-button relative p-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 hover:bg-gray-100 rounded-lg"
                  >
                    <Bell className="w-4 h-4" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                        {unreadCount > 9 ? "9+" : unreadCount}
                      </span>
                    )}
                  </button>

                  {showNotifications && (
                    <div className="notifications-container absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 max-h-80 overflow-hidden">
                      <div className="p-3 border-b border-gray-100 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900 text-sm">
                            Notificaciones
                          </h3>
                          <div className="flex items-center space-x-2">
                            {unreadCount > 0 && (
                              <button
                                onClick={markAllAsRead}
                                className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                              >
                                Marcar todas
                              </button>
                            )}
                            <button
                              onClick={() => setShowNotifications(false)}
                              className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="max-h-64 overflow-y-auto">
                        {notifications.length === 0 ? (
                          <div className="p-6 text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                              <Bell className="w-5 h-5 text-gray-400" />
                            </div>
                            <p className="text-gray-500 font-medium text-sm">
                              No tienes notificaciones
                            </p>
                          </div>
                        ) : (
                          <div className="divide-y divide-gray-100">
                            {notifications.map((notification) => (
                              <div
                                key={notification.id}
                                className={`p-3 hover:bg-gray-50 transition-colors cursor-pointer ${
                                  !notification.read ? "bg-blue-50/30" : ""
                                }`}
                                onClick={() => markAsRead(notification.id)}
                              >
                                <div className="flex items-start space-x-3">
                                  <div
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${getNotificationTypeColor(
                                      notification.type
                                    )}`}
                                  >
                                    <notification.icon className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1">
                                        <p
                                          className={`font-semibold text-xs ${
                                            !notification.read
                                              ? "text-gray-900"
                                              : "text-gray-700"
                                          }`}
                                        >
                                          {notification.title}
                                        </p>
                                        <p className="text-gray-600 text-xs mt-1">
                                          {notification.message}
                                        </p>
                                        <p className="text-gray-400 text-xs mt-1">
                                          {notification.time}
                                        </p>
                                      </div>
                                      <div className="flex items-center space-x-2 ml-2">
                                        {!notification.read && (
                                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                        )}
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            deleteNotification(notification.id);
                                          }}
                                          className="opacity-0 hover:opacity-100 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-red-500 transition-all duration-200"
                                        >
                                          <X className="w-3 h-3" />
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
                    </div>
                  )}
                </div>

                <div className="relative dropdown-container">
                  <button
                    className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => toggleDropdown("profile")}
                  >
                    {user?.avatar_url ? (
                      <img
                        src={user.avatar_url}
                        alt={user.full_name}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-7 h-7 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          {getUserInitials(user)}
                        </span>
                      </div>
                    )}
                    <div className="hidden sm:block text-left">
                      <p className="text-xs font-medium text-gray-700">
                        {user?.first_name}
                      </p>
                      <p className="text-xs text-gray-500 capitalize">
                        {user?.role}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${
                        activeDropdown === "profile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 ${
                      activeDropdown === "profile"
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }`}
                  >
                    <div className="p-3 border-b border-gray-100 bg-gray-50">
                      <p className="font-semibold text-sm text-gray-900">
                        {user?.full_name}
                      </p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    <div className="py-1">
                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                      >
                        <UserCircle className="w-4 h-4 mr-3" />
                        Mi Perfil
                      </Link>
                      <Link
                        href="/dashboard"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                      >
                        <GraduationCap className="w-4 h-4 mr-3" />
                        Dashboard
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                      >
                        <Settings className="w-4 h-4 mr-3" />
                        Configuración
                      </Link>
                      <hr className="my-1 border-gray-200" />
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Cerrar Sesión
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm px-3 py-2"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-3 space-y-1 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-gray-200 mt-3">
              <div className="px-4 pb-2">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {isAuthenticated ? (
                <>
                  <div className="px-4 py-2 border-b border-gray-200 mb-2">
                    <div className="flex items-center space-x-3">
                      {user?.avatar_url ? (
                        <img
                          src={user.avatar_url}
                          alt={user.full_name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">
                            {getUserInitials(user)}
                          </span>
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-sm text-gray-900">
                          {user?.full_name}
                        </p>
                        <p className="text-xs text-gray-500 capitalize">
                          {user?.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <UserCircle className="w-4 h-4 mr-3" />
                    Mi Perfil
                  </Link>
                  <Link
                    href="/dashboard"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <GraduationCap className="w-4 h-4 mr-3" />
                    Dashboard
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Settings className="w-4 h-4 mr-3" />
                    Configuración
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    href="/register"
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Registrarse
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
