export const NosotrosTeam = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Juan Pérez</h2>
        <p className="text-gray-600">CEO y Fundador</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">María Gómez</h2>
        <p className="text-gray-600">Directora de Diseño</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Carlos Rodríguez</h2>
        <p className="text-gray-600">Ingeniero Principal</p>
      </div>
    </div>
  );
};
