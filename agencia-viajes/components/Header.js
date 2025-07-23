"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Medusa Travel
          </Link>
        </div>
        
        {/* Navegación para desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link href="/destinos" className="font-medium hover:text-primary transition-colors">
            Destinos
          </Link>
          <Link href="/paquetes" className="font-medium hover:text-primary transition-colors">
            Paquetes
          </Link>
          <Link href="/promociones" className="font-medium hover:text-primary transition-colors">
            Promociones
          </Link>
          <Link href="/contacto" className="font-medium hover:text-primary transition-colors">
            Contacto
          </Link>
        </nav>
        
        {/* Botón de menú para móvil */}
        <button 
          className="md:hidden text-gray-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
        
        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
            <nav className="flex flex-col">
              <Link href="/" className="px-4 py-3 font-medium hover:bg-gray-50">
                Inicio
              </Link>
              <Link href="/destinos" className="px-4 py-3 font-medium hover:bg-gray-50">
                Destinos
              </Link>
              <Link href="/paquetes" className="px-4 py-3 font-medium hover:bg-gray-50">
                Paquetes
              </Link>
              <Link href="/promociones" className="px-4 py-3 font-medium hover:bg-gray-50">
                Promociones
              </Link>
              <Link href="/contacto" className="px-4 py-3 font-medium hover:bg-gray-50">
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
