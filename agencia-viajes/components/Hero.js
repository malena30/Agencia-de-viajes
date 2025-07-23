"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [searchDestination, setSearchDestination] = useState('');
  
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative container-custom py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="heading-1 mb-6 max-w-4xl">
          Descubre el mundo con los mejores paquetes turísticos
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Viajes inolvidables a los destinos más hermosos del planeta. Descubre nuestras ofertas exclusivas y crea recuerdos que durarán toda la vida.
        </p>
        
        {/* Buscador de destinos */}
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <label htmlFor="destination" className="block text-gray-700 text-sm font-medium mb-1">
                ¿A dónde quieres viajar?
              </label>
              <input
                type="text"
                id="destination"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 px-4 py-2 border"
                placeholder="Playa, montaña, ciudad..."
                value={searchDestination}
                onChange={(e) => setSearchDestination(e.target.value)}
              />
            </div>
            <button 
              className="bg-primary text-white font-medium px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 self-end md:self-auto"
            >
              Buscar
            </button>
          </div>
        </div>
        
        {/* Características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 rounded-full p-4 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Los Mejores Destinos</h3>
            <p className="text-center">Descubre lugares increíbles seleccionados por nuestros expertos en viajes.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 rounded-full p-4 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Guías Profesionales</h3>
            <p className="text-center">Personal capacitado y con experiencia para acompañarte en cada aventura.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 rounded-full p-4 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Viajes Garantizados</h3>
            <p className="text-center">Garantía de satisfacción en todos nuestros servicios y paquetes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
