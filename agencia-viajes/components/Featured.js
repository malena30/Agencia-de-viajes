"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Featured() {
  const destinations = [
    {
      id: 1,
      name: 'Cancún',
      country: 'México',
      image: '/images/cancun.jpg',
      price: '45,000',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Barcelona',
      country: 'España',
      image: '/images/barcelona.jpg',
      price: '60,000',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Río de Janeiro',
      country: 'Brasil',
      image: '/images/rio.jpg',
      price: '52,000',
      rating: 4.6
    },
    {
      id: 4,
      name: 'Nueva York',
      country: 'Estados Unidos',
      image: '/images/newyork.jpg',
      price: '75,000',
      rating: 4.9
    }
  ];
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Destinos Destacados</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros destinos más populares con excelentes precios y experiencias inolvidables.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-gray-800 opacity-10"></div>
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  {/* Nota: En un proyecto real, aquí iría una imagen real */}
                  <span className="text-gray-400">Imagen de {destination.name}</span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{destination.name}</h3>
                  <div className="flex items-center text-sm text-yellow-500">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {destination.rating}
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm mb-3">{destination.country}</p>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-primary font-bold">${destination.price}</span>
                  <Link href={`/destino/${destination.id}`} className="text-sm font-medium text-primary hover:text-primary-dark">
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/destinos" className="btn-primary">
            Ver todos los destinos
          </Link>
        </div>
      </div>
    </section>
  );
}
