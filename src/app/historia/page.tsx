"use client";
// Importar desde el archivo de barril
import { HistoriaEmpresa, BackButton } from '../components';

export default function HistoriaPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-4 bg-white">
      <BackButton />
      <h1 className="text-3xl font-bold text-center mb-6">Nuestra Historia</h1>
      <p className="text-lg text-gray-700 mb-8">
        Conoce la trayectoria y evolución de nuestra empresa a lo largo de los años.
      </p>
      <HistoriaEmpresa />
    </div>
  );
}
