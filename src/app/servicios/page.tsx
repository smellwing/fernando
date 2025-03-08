import { ServiciosList } from '../components/ServiciosList';

export default function ServiciosPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-8 py-4 bg-white">
      <h1 className="text-3xl font-bold text-center mb-6">Nuestros Servicios</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Ofrecemos soluciones personalizadas para satisfacer las necesidades de su negocio.
      </p>
      <ServiciosList />
    </div>
  );
}