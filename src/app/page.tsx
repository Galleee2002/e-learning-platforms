import Hero from "@/components/common/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Más contenido de la página
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Aquí puedes agregar más secciones
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
