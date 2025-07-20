export default function SocialMedia() {
  const socialLinks = [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/show/6SByyBFnyXQ81tJXCbMwCp?si=c8449da5ccf745d3',
      icon: '🎧',
      color: 'bg-green-500 hover:bg-green-600',
      textColor: 'text-white'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@capri-chosos', // Enlace real del canal
      icon: '📺',
      color: 'bg-astral hover:bg-astral/80',
      textColor: 'text-white'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@capri_chosos.podcast?is_from_webapp=1&sender_device=pc',
      icon: '📹',
      color: 'bg-black hover:bg-gray-800',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-lunar mb-4">
        Síguenos en redes sociales
      </h3>
      <div className="flex flex-col sm:flex-row gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} ${social.textColor} px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg`}
          >
            <span className="text-xl">{social.icon}</span>
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}