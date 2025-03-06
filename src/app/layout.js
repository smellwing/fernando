import BackButton from './components/BackButton'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Inicializar Font Awesome
config.autoAddCss = false

export const metadata = {
  title: 'Mi Aplicación',
  description: 'Creada con Next.js 15',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <BackButton />
        <main className="min-h-screen p-8">
          {children}
        </main>
      </body>
    </html>
  )
}
