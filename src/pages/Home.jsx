import { Link } from 'react-router-dom';

export default function Home() {
  const spotifyUrl = "https://open.spotify.com/show/6SByyBFnyXQ81tJXCbMwCp?si=c8449da5ccf745d3";
  const youtubeUrl = "https://www.youtube.com/@capri-chosos"; // Ahora apunta al canal real
  const latestEpisodeUrl = "https://open.spotify.com/episode/7tGQ9OEAB691wk3rdwhMYm?si=9f72515ba8ac498f";

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic to-carbon">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-lunar mb-6 sm:mb-8">
            Bienvenido a{' '}
            <span className="text-astral">Capri-chosos</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-lunar/90 mb-8 sm:mb-12 max-w-3xl mx-auto">
            ¡El podcast donde la astrología es excusa... y el chisme, la verdadera ciencia! 
            Luis y Adrián exploran lo cotidiano desde una mirada astral, irónica y con bastante veneno del bueno.
          </p>
          
          {/* CTA Buttons - All aligned in one row */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a 
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-astral hover:bg-astral/80 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <span>🎧</span>
              Escuchar en Spotify
            </a>
            <a 
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-astral hover:bg-astral/80 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <span>📺</span>
              Escuchar en YouTube
            </a>
            <Link 
              to="/episodes"
              className="border-2 border-lunar text-lunar hover:bg-lunar hover:text-carbon px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>📖</span>
              Ver Capítulos
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-carbon/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-lunar text-center mb-12 sm:mb-16">
            ¿Por qué escucharnos?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {/* Feature 1 */}
            <div className="bg-cosmic/50 p-6 sm:p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl sm:text-2xl font-bold text-lunar mb-3">Astrología Sin Filtros</h3>
              <p className="text-lunar/80 text-sm sm:text-base">
                Dos Capricornio con más dudas que respuestas exploran tu carta astral con humor y honestidad.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-cosmic/50 p-6 sm:p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl sm:text-2xl font-bold text-lunar mb-3">Chisme Científico</h3>
              <p className="text-lunar/80 text-sm sm:text-base">
                El chisme es la verdadera ciencia aquí. Analizamos experiencias humanas con explicación astrológica.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-cosmic/50 p-6 sm:p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl sm:text-2xl font-bold text-lunar mb-3">Veneno del Bueno</h3>
              <p className="text-lunar/80 text-sm sm:text-base">
                Mirada irónica y con bastante veneno del bueno. Aquí no hay gurús, pero sí mucho análisis innecesario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode Preview */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-lunar mb-8 sm:mb-12">
            Último Episodio
          </h2>
          
          <div className="bg-cosmic/30 p-6 sm:p-8 lg:p-12 rounded-2xl border border-astral/20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-astral mb-4">
              Episodio #01: "Yo sí quería ver esa película"
            </h3>
            <p className="text-lunar/90 text-sm sm:text-base lg:text-lg mb-6">
              ¿Te han invitado a "ver una peli" y al final… ni créditos iniciales? Luis revive una cita con un Escorpio 
              que tenía otras ideas muy distintas a las suyas. Entre chismes, risas y un toque zodiacal, hablamos de lo 
              importante que es ser claro con tus intenciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={latestEpisodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-astral hover:bg-astral/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <span>🎧</span>
                Reproducir en Spotify
              </a>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-astral hover:bg-astral/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <span>📺</span>
                Reproducir en YouTube
              </a>
              <span className="text-lunar/70 text-sm">Duración: 36 min</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
