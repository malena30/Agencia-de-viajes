"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'María González',
      location: 'Madrid, España',
      image: '/images/testimonial1.jpg',
      text: 'Mi viaje a Cancún fue increíble. El hotel, las actividades, todo fue perfecto. Sin duda volveré a confiar en Medusa Travel para mi próxima aventura.',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      location: 'Buenos Aires, Argentina',
      image: '/images/testimonial2.jpg',
      text: 'La atención personalizada fue excelente. Nos recomendaron lugares que no estaban en las guías turísticas y fueron lo mejor del viaje.',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Martínez',
      location: 'Bogotá, Colombia',
      image: '/images/testimonial3.jpg',
      text: 'Viajamos en familia a Europa y cada detalle fue planificado a la perfección. Los niños quedaron encantados y nosotros muy tranquilos.',
      rating: 5
    }
  ];
  
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const handleNext = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Miles de viajeros satisfechos han confiado en nosotros para crear sus experiencias inolvidables.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative">
            <div className="absolute top-4 right-4 text-yellow-500 flex">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, index) => (
                <svg key={index} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-6">
                <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden relative">
                  {/* En un proyecto real aquí iría la imagen del usuario */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
                    Foto
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <svg className="w-10 h-10 text-gray-200 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                
                <p className="text-gray-600 text-lg mb-4">{testimonials[activeTestimonial].text}</p>
                
                <div>
                  <h4 className="font-bold">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[activeTestimonial].location}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Testimonio ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6">
              <button
                onClick={handlePrev}
                className="bg-white rounded-full shadow-md w-8 h-8 flex items-center justify-center focus:outline-none"
                aria-label="Testimonio anterior"
              >
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-6">
              <button
                onClick={handleNext}
                className="bg-white rounded-full shadow-md w-8 h-8 flex items-center justify-center focus:outline-none"
                aria-label="Siguiente testimonio"
              >
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
