import { useState, useRef } from 'react';

// Pre-production URL via Cloud Run Domain Mapping.
// The domain mapping ensures the correct Host header reaches the BFF,
// so the backend resolves the tenant automatically — no ?tenant= param needed.
const CHAT_IFRAME_URL =
  'https://pre-lamaquinista.eleva-ai.com/chat?embed=true';

export default function ElevaWidget() {
  const [isOpen, setIsOpen] = useState(false);
  // Once the iframe has been mounted once, keep it in the DOM (just hidden)
  // so the chat session survives open/close toggles.
  const hasOpened = useRef(false);

  const handleToggle = () => {
    hasOpened.current = true;
    setIsOpen(prev => !prev);
  };

  return (
    <>
      {/* ── Chat panel ─────────────────────────────────────────────── */}
      <div
        style={{
          position: 'fixed',
          bottom: '88px',
          right: '20px',
          width: '390px',
          height: '650px',
          maxWidth: 'calc(100vw - 40px)',
          maxHeight: 'calc(100dvh - 110px)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
          display: isOpen ? 'block' : 'none',
          zIndex: 9998,
        }}
        aria-hidden={!isOpen}
      >
        {hasOpened.current && (
          <iframe
            src={CHAT_IFRAME_URL}
            title="Asistente Virtual La Maquinista"
            allow="microphone"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        )}
      </div>

      {/* ── Floating toggle button ─────────────────────────────────── */}
      <button
        onClick={handleToggle}
        aria-label={isOpen ? 'Cerrar asistente virtual' : 'Abrir asistente virtual'}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#10B981',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 18px rgba(0,0,0,0.3)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#059669')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#10B981')}
      >
        {isOpen ? (
          /* Close icon */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          /* Chat bubble icon */
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        )}
      </button>
    </>
  );
}
