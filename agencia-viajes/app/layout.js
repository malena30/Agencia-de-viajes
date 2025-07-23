import '../styles/globals.css';

export const metadata = {
  title: 'Medusa Travel | Descubre el mundo',
  description: 'Tu mejor opción para planificar tus vacaciones soñadas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
