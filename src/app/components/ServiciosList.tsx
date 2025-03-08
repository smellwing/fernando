export const ServiciosList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Desarrollo Web</h2>
        <p className="text-gray-600">Creamos sitios web modernos y funcionales.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Diseño UX/UI</h2>
        <p className="text-gray-600">Diseñamos interfaces intuitivas y atractivas.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Consultoría</h2>
        <p className="text-gray-600">Optimizamos sus procesos y estrategias digitales.</p>
      </div>
    </div>
  );
};
