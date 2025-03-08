export default function Header() {
  return (
    <div className="relative z-10 text-center text-white">
      <h1 className="text-5xl font-bold">Bienvenido a Fernando</h1>
      <nav className="flex justify-center space-x-6">
        <a href="/contacto" className="hover:text-gray-300 transition-colors">Contacto</a>
        <a href="/nosotros" className="hover:text-gray-300 transition-colors">Nosotros</a>
        <a href="/servicios" className="hover:text-gray-300 transition-colors">Servicios</a>
      </nav>
    </div>
  );
}
