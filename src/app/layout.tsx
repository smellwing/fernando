import BackButton from './components/BackButton'
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Inicializar Font Awesome
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Mi Aplicación',
  description: 'Creada con Next.js 15',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

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
