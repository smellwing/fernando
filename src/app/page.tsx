// Define que es una pagina que el cliente debe renderear
"use client";
// Importa React y los hooks que se van a usar
import React from 'react';
import Header from './components/Header';
import BackgroundImage from './components/BackgroundImage';

// Define la pagina Home a partir de un componente funcional genérico de React
const Home: React.FC = () => {
  return (
    <BackgroundImage>
      <Header />
    </BackgroundImage>
  );
};

export default Home;