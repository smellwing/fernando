/**
 * Layout principal de la aplicación que implementa:
 * 1. Botón de navegación "back" global (se oculta en la página principal '/')
 * 2. Configuración de Font Awesome para iconos
 * 3. Estructura base HTML con lang="es"
 * 4. Container principal con padding y altura mínima
 * 5. Metadatos de la aplicación (título y descripción)
 * 
 * @component RootLayout
 * @param {React.ReactNode} children - Contenido de la página a renderizar
 */

import BackButton from './components/BackButton'
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { Metadata } from 'next'

// Inicializar Font Awesome
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Fernando',
  description: 'Web a la medida para negocios y personas',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Componente principal que envuelve la aplicación.
 * 
 * @param {Object} props - Props del componente
 * @param {React.ReactNode} props.children - Contenido de la página a renderizar
 * @returns {JSX.Element} - Elemento JSX que representa el layout de la aplicación
 */
export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <BackButton />
        <main className="min-h-screen p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
