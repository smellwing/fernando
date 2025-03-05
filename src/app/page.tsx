// Define que es una pagina que el cliente debe renderear
"use client";
// Importa React y los hooks que se van a usar
import React, { useEffect, useState } from 'react';
import { getBingImageOfTheDay } from '../lib/home/bingImage';

// Define la pagina Home a partir de un componente funcional genérico de React
const Home: React.FC = () => {
  // Define un estado para la URL de la imagen de fondo
  const [backgroundUrl, setBackgroundUrl] = useState<string | null>(null);
  // Usa un efecto para cargar la imagen de fondo al montar el componente
  useEffect(() => {
    async function fetchBackgroundImage() {
      const imageUrl = await getBingImageOfTheDay();
      setBackgroundUrl(imageUrl);
    }
    fetchBackgroundImage();
  }, []);

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : 'none' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold">Bienvenido a Fernando</h1>
        <nav className="flex justify-center space-x-6">
          <a href="/contacto" className="hover:text-gray-300 transition-colors">Contacto</a>
          <a href="/nosotros" className="hover:text-gray-300 transition-colors">Nosotros</a>
          <a href="/servicios" className="hover:text-gray-300 transition-colors">Servicios</a>
        </nav>
      </div>
    </div>
  );
};

export default Home;