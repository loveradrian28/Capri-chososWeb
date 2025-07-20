import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-carbon shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
              <h1 className="text-lunar text-lg sm:text-xl font-bold">
                🎙️ Capri-chosos
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200 ${
                isActive('/') ? 'text-astral' : 'text-lunar hover:text-astral'
              }`}
              onClick={closeMenu}
            >
              Inicio
            </Link>
            <Link
              to="/episodes"
              className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200 ${
                isActive('/episodes') ? 'text-astral' : 'text-lunar hover:text-astral'
              }`}
              onClick={closeMenu}
            >
              Capítulos
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200 ${
                isActive('/contact') ? 'text-astral' : 'text-lunar hover:text-astral'
              }`}
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-lunar hover:text-astral focus:outline-none focus:text-astral p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-carbon border-t border-astral/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/') ? 'text-astral' : 'text-lunar hover:text-astral'
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/episodes"
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/episodes') ? 'text-astral' : 'text-lunar hover:text-astral'
                }`}
              >
                Capítulos
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/contact') ? 'text-astral' : 'text-lunar hover:text-astral'
                }`}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
