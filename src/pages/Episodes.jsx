import { useState } from 'react';

export default function Episodes() {
  const [episodes] = useState([
    {
      id: 1,
      title: "Episodio #01: Yo sí quería ver esa película",
      description: "¿Te han invitado a 'ver una peli' y al final… ni créditos iniciales? Luis revive una cita con un Escorpio que tenía otras ideas muy distintas a las suyas. Entre chismes, risas y un toque zodiacal, hablamos de lo importante que es ser claro con tus intenciones (aunque a veces una mentirita nos guste un poquito).",
      duration: "36 min",
      date: "Jul 17, 2024",
      featured: true,
      spotifyUrl: "https://open.spotify.com/episode/7tGQ9OEAB691wk3rdwhMYm?si=9f72515ba8ac498f",
      youtubeUrl: "https://www.youtube.com/@capri-chosos" // Ahora apunta al canal real
    },
    {
      id: 2,
      title: "Bienvenid@s a Capri-chosos",
      description: "Un podcast donde no somos astrólogos…pero ¡sí sabemos cómo sacarle conversación a tu carta astral! Luis y Adrián —dos Capricornio con más dudas que respuestas— te invitan a este espacio donde hablaremos de signos, relaciones, teorías absurdas (pero interesantes) y experiencias humanas que podrían tener explicación astrológica… o simplemente ser puro caos emocional.",
      duration: "1 min",
      date: "Jul 9, 2024",
      featured: false,
      spotifyUrl: "https://open.spotify.com/episode/76vuYL2MzzCPqcZrXSPLgP?si=65b61e4763494793",
      youtubeUrl: "https://www.youtube.com/@capri-chosos" // Ahora apunta al canal real
    }
  ]);

  const handlePlayEpisode = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic to-carbon px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-lunar mb-4 sm:mb-6">
            Capri-chosos
          </h1>
          <p className="text-lg sm:text-xl text-lunar/80 max-w-3xl mx-auto">
            El podcast donde la astrología es excusa... y el chisme, la verdadera ciencia. 
            Explora todos nuestros episodios y encuentra tu favorito.
          </p>
        </div>

        {/* Featured Episode */}
        {episodes.filter(ep => ep.featured).map(episode => (
          <div key={episode.id} className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-astral mb-6 sm:mb-8 flex items-center gap-2">
              <span>⭐</span>
              Episodio Destacado
            </h2>
            <div className="bg-cosmic/30 p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-astral/30 hover:border-astral/50 transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-lunar mb-3 sm:mb-4">
                    {episode.title}
                  </h3>
                  <p className="text-lunar/80 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                    {episode.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button 
                      onClick={() => handlePlayEpisode(episode.spotifyUrl)}
                      className="bg-astral hover:bg-astral/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span className="text-xl">🎧</span>
                      <span>Spotify</span>
                    </button>
                    <button 
                      onClick={() => handlePlayEpisode(episode.youtubeUrl)}
                      className="bg-astral hover:bg-astral/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span className="text-xl">📺</span>
                      <span>YouTube</span>
                    </button>
                    <a 
                      href="https://open.spotify.com/show/6SByyBFnyXQ81tJXCbMwCp?si=c8449da5ccf745d3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-lunar text-lunar hover:bg-lunar hover:text-carbon px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>📱</span>
                      Seguir en Spotify
                    </a>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="bg-astral/20 p-4 rounded-xl">
                    <div className="text-2xl sm:text-3xl font-bold text-astral">{episode.duration}</div>
                    <div className="text-lunar/70 text-sm">Duración</div>
                  </div>
                  <div className="mt-3 text-lunar/60 text-sm">
                    {episode.date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Episodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.filter(ep => !ep.featured).map(episode => (
            <div key={episode.id} className="bg-cosmic/40 p-6 rounded-xl border border-astral/10 hover:border-astral/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-lunar mb-2">{episode.title}</h3>
                <p className="text-lunar/80 text-sm sm:text-base mb-4">{episode.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center justify-between mt-2">
                <span className="text-chismoso font-semibold">{episode.duration}</span>
                <span className="text-lunar/60 text-xs">{episode.date}</span>
                <div className="flex flex-row gap-2">
                  <button
                    onClick={() => handlePlayEpisode(episode.spotifyUrl)}
                    className="bg-astral hover:bg-astral/80 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="text-lg">🎧</span>
                    <span>Spotify</span>
                  </button>
                  <button
                    onClick={() => handlePlayEpisode(episode.youtubeUrl)}
                    className="bg-astral hover:bg-astral/80 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="text-lg">📺</span>
                    <span>YouTube</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
