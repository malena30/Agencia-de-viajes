"use client";

import { useState } from 'react';

export default function CallToAction() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el email a un servicio de suscripción
    if (email) {
      setSubmitted(true);
      setEmail('');
      // Resetear el estado después de 5 segundos
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6">¿Listo para tu próxima aventura?</h2>
          <p className="text-xl mb-8 text-white/90">
            Recibe ofertas exclusivas y consejos de viaje directamente en tu bandeja de entrada.
            ¡Sé el primero en conocer nuestras promociones especiales!
          </p>

          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-primary text-2xl font-bold mb-4">
              {submitted ? '¡Gracias por suscribirte!' : 'Únete a nuestra comunidad de viajeros'}
            </h3>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300"
                >
                  Suscribirme
                </button>
              </form>
            ) : (
              <p className="text-gray-700">
                Te hemos enviado un correo de confirmación. Revisa tu bandeja de entrada.
              </p>
            )}
            
            <p className="mt-4 text-gray-500 text-sm">
              Al suscribirte, aceptas recibir correos electrónicos con ofertas y actualizaciones.
              Puedes cancelar la suscripción en cualquier momento.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Garantía de Mejor Precio</h3>
              <p className="text-white/80">Si encuentras un precio más bajo, igualaremos la oferta.</p>
            </div>
            
            <div>
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Soporte 24/7</h3>
              <p className="text-white/80">Estamos disponibles para ti durante todo tu viaje.</p>
            </div>
            
            <div>
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Más de 10,000 Clientes</h3>
              <p className="text-white/80">Confían en nosotros para sus vacaciones soñadas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
