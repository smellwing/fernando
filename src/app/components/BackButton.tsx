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
