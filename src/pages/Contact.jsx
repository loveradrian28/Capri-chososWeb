import { useState } from 'react';
import SocialMedia from '../components/SocialMedia';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic to-carbon px-4 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Contact Form Section */}
        <div className="w-full max-w-lg mx-auto bg-cosmic/60 rounded-2xl shadow-xl p-8 sm:p-12 mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-lunar mb-6 text-center">
            Contacto
          </h1>
          <p className="text-lunar/80 text-center mb-8">
            ¿Quieres contactarnos? ¡Déjanos tu mensaje y te responderemos lo antes posible!
          </p>
          {submitted ? (
            <div className="text-center text-lunar font-bold py-8">
              ¡Gracias por tu mensaje! Pronto nos pondremos en contacto.
            </div>
          ) : (
            <form
              action="https://formspree.io/f/xldlglzq"
              method="POST"
              className="space-y-6"
              onSubmit={() => setSubmitted(true)}
            >
              <div>
                <label className="block text-lunar mb-2" htmlFor="name">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-carbon text-lunar border border-astral/30 focus:border-astral focus:outline-none transition-all"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-lunar mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-carbon text-lunar border border-astral/30 focus:border-astral focus:outline-none transition-all"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-lunar mb-2" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-carbon text-lunar border border-astral/30 focus:border-astral focus:outline-none transition-all"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-astral hover:bg-astral/80 text-white font-bold py-3 rounded-lg transition-all duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
        {/* Social Media Section - Separated */}
        <div className="w-full max-w-lg mx-auto">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
