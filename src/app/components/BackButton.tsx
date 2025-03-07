/**
 * BackButton Component
 * 
 * Este componente proporciona un botón de navegación para volver a la página anterior.
 * 
 * Funcionalidades principales:
 * 1. Utiliza el router de Next.js para manejar la navegación hacia atrás.
 * 2. Verifica la ruta actual usando usePathname para determinar si debe mostrarse.
 * 3. No se muestra en la página principal ('/') para evitar navegación innecesaria.
 * 4. Renderiza un botón con estilo fijo en la esquina superior izquierda.
 * 5. Incluye un ícono de flecha hacia la izquierda para mejorar la usabilidad.
 *
 * Algoritmos clave:
 * - Condicional para ocultar el botón en la página principal
 * - Manejo del evento onClick para navegar hacia atrás
 * - Renderizado condicional basado en la ruta actual
 */
'use client';
import { useRouter, usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  // No mostrar el botón en la página principal
  if (pathname === '/') {
    return null;
  }

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-4 left-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors flex items-center gap-2"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>Volver</span>
    </button>
  );
};

export default BackButton;
