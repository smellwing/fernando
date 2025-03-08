import { NosotrosTeam } from '../components/NosotrosTeam';

export default function NosotrosPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-4 bg-white">
      <h1 className="text-3xl font-bold text-center mb-6">Sobre Nosotros</h1>
      <p className="text-lg text-gray-700 mb-8">
        Somos un equipo apasionado por crear soluciones innovadoras y de alta calidad para nuestros clientes.
      </p>
      <NosotrosTeam />
    </div>
  );
}