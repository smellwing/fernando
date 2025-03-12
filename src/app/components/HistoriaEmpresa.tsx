import React from 'react';
// Importar desde el archivo de barril en lugar del archivo directo
import { getHistoriaData, HistoriaEvento } from '../../lib/historia';

// Cambiando la forma de exportación para resolver el problema
const HistoriaEmpresa: React.FC = () => {
  const eventosHistoricos: HistoriaEvento[] = getHistoriaData();

  return (
    <div className="space-y-12 mb-8">
      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Orígenes y Fundación</h2>
        <p className="text-gray-700 mb-4">
          Nuestra empresa nació en 2005 como un pequeño emprendimiento con una visión clara: 
          transformar la manera en que las personas interactúan con la tecnología. 
          Los fundadores, Juan Martínez y Elena Rodríguez, combinaron su experiencia en 
          desarrollo de software y diseño para crear soluciones innovadoras que resolvieran 
          problemas reales.
        </p>
        <p className="text-gray-700">
          Con una inversión inicial modesta y un equipo de apenas 5 personas, comenzamos 
          nuestras operaciones en un pequeño local en el centro de la ciudad. A pesar de 
          los limitados recursos, la pasión y dedicación del equipo permitieron que la 
          empresa creciera rápidamente.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Línea de Tiempo</h2>
        <div className="space-y-8">
          {eventosHistoricos.map((evento: HistoriaEvento, index: number) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 ml-4">
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold absolute -ml-7">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold">{evento.año}: {evento.titulo}</h3>
              </div>
              <p className="text-gray-700 mt-2">{evento.descripcion}</p>
              <div className="mt-3 bg-blue-50 p-3 rounded-md">
                <p className="text-sm font-medium text-blue-800">Logro destacado: {evento.logro}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Valores y Filosofía</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Innovación Constante</h3>
            <p className="text-gray-700">
              Desde nuestros inicios, la innovación ha sido el motor que impulsa cada decisión. 
              Nos esforzamos por mantenernos a la vanguardia tecnológica y anticiparnos a las 
              necesidades del mercado.
            </p>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Calidad Superior</h3>
            <p className="text-gray-700">
              Nuestro compromiso con la excelencia se refleja en cada producto y servicio que 
              ofrecemos. No hay atajos cuando se trata de calidad.
            </p>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Enfoque en el Cliente</h3>
            <p className="text-gray-700">
              Entendemos que nuestro éxito depende directamente de la satisfacción de nuestros 
              clientes. Sus necesidades están en el centro de todo lo que hacemos.
            </p>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Responsabilidad Social</h3>
            <p className="text-gray-700">
              Creemos firmemente en devolver a la comunidad. Nuestras iniciativas de 
              responsabilidad social son parte integral de nuestra identidad empresarial.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-700 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Mirando al Futuro</h2>
        <p className="mb-4">
          Hoy, con más de 100 empleados y presencia en varios países, seguimos tan comprometidos 
          como el primer día con nuestra misión de innovar y transformar. El futuro presenta 
          nuevos desafíos y oportunidades que estamos ansiosos por enfrentar.
        </p>
        <p>
          Nuestra visión para los próximos años incluye expandir nuestra presencia global, 
          desarrollar tecnologías pioneras y seguir construyendo relaciones duraderas con 
          nuestros clientes y socios.
        </p>
      </section>
    </div>
  );
};

// Exportando de forma explícita
export { HistoriaEmpresa };
