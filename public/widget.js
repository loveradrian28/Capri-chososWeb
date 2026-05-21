/**
 * Eleva AI – Widget Loader
 *
 * El cliente solo necesita pegar esto en su web:
 *
 *   <script id="eleva-widget"
 *     src="https://TU-DOMINIO.eleva-ai.com/widget.js">
 *   </script>
 *
 * Atributos opcionales (solo para casos especiales):
 *
 *   data-position   → "bottom-right" (defecto) | "bottom-left"
 *   data-base-url   → solo en desarrollo local, para apuntar el iframe
 *                     a la URL de producción cuando el script se sirve
 *                     desde localhost.
 *
 * El color, nombre y branding del botón se leen automáticamente
 * desde /cfg/app — controlado por Eleva, no por el cliente.
 */
(function () {
  'use strict';

  // ─── Localizar el script tag ─────────────────────────────────────────────────
  var currentScript =
    document.currentScript ||
    document.getElementById('eleva-widget') ||
    (function () {
      var scripts = document.getElementsByTagName('script');
      return scripts[scripts.length - 1];
    })();

  var windowConfig =
    typeof window.ElevaWidget === 'object' && window.ElevaWidget
      ? window.ElevaWidget
      : {};

  function attr(name, key) {
    var fromAttr = currentScript && currentScript.getAttribute(name);
    return fromAttr || windowConfig[key] || null;
  }

  // ─── Config del cliente (lo único que el cliente puede tocar) ────────────────
  var scriptSrc = (currentScript && currentScript.src) || '';
  var baseUrl   = attr('data-base-url', 'baseUrl') || scriptSrc.replace(/\/widget\.js(\?.*)?$/, '');
  var position  = attr('data-position',  'position')  || 'bottom-right';

  var iframeUrl = baseUrl + '/chat?embed=true';
  var isLeft    = position === 'bottom-left';

  // ─── Estado ──────────────────────────────────────────────────────────────────
  var isOpen        = false;
  var iframeMounted = false;

  // Colores y label: valores por defecto hasta que /cfg/app responda.
  // El cliente nunca configura estos — Eleva los controla desde el backend.
  var activeColor      = '#10B981';
  var activeColorHover = '#059669';
  var activeLabel      = 'Asistente virtual';

  // ─── Helpers ─────────────────────────────────────────────────────────────────
  function css(el, styles) {
    Object.keys(styles).forEach(function (k) { el.style[k] = styles[k]; });
  }

  var SIDE = isLeft ? { left: '20px', right: 'auto' } : { right: '20px', left: 'auto' };

  // ─── Panel (contenedor del iframe) ───────────────────────────────────────────
  var panel = document.createElement('div');
  css(panel, {
    position:     'fixed',
    bottom:       '88px',
    right:        SIDE.right,
    left:         SIDE.left,
    width:        '390px',
    height:       '650px',
    maxWidth:     'calc(100vw - 40px)',
    maxHeight:    'calc(100dvh - 110px)',
    borderRadius: '16px',
    overflow:     'hidden',
    boxShadow:    '0 8px 40px rgba(0,0,0,0.35)',
    display:      'none',
    zIndex:       '2147483646',
    border:       'none',
  });
  panel.setAttribute('role',        'dialog');
  panel.setAttribute('aria-hidden', 'true');
  panel.setAttribute('aria-label',  activeLabel);

  // ─── Botón flotante ───────────────────────────────────────────────────────────
  var button = document.createElement('button');
  button.setAttribute('type',       'button');
  button.setAttribute('aria-label', activeLabel);
  css(button, {
    position:        'fixed',
    bottom:          '20px',
    right:           SIDE.right,
    left:            SIDE.left,
    width:           '60px',
    height:          '60px',
    borderRadius:    '50%',
    backgroundColor: activeColor,
    border:          'none',
    cursor:          'pointer',
    boxShadow:       '0 4px 18px rgba(0,0,0,0.3)',
    zIndex:          '2147483647',
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'center',
    transition:      'background-color 0.2s, transform 0.15s',
    padding:         '0',
    outline:         'none',
  });

  var SVG_CHAT =
    '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">' +
    '<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>';

  var SVG_CLOSE =
    '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">' +
    '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';

  button.innerHTML = SVG_CHAT;

  button.addEventListener('mouseenter', function () {
    button.style.backgroundColor = activeColorHover;
    button.style.transform = 'scale(1.05)';
  });
  button.addEventListener('mouseleave', function () {
    button.style.backgroundColor = activeColor;
    button.style.transform = 'scale(1)';
  });

  // ─── Toggle open/close ────────────────────────────────────────────────────────
  button.addEventListener('click', function () {
    isOpen = !isOpen;

    if (isOpen && !iframeMounted) {
      var iframe = document.createElement('iframe');
      iframe.src   = iframeUrl;
      iframe.title = activeLabel;
      iframe.allow = 'microphone';
      css(iframe, { width: '100%', height: '100%', border: 'none' });
      panel.appendChild(iframe);
      iframeMounted = true;
    }

    panel.style.display = isOpen ? 'block' : 'none';
    panel.setAttribute('aria-hidden', String(!isOpen));
    button.innerHTML = isOpen ? SVG_CLOSE : SVG_CHAT;
    button.setAttribute('aria-label', isOpen ? 'Cerrar ' + activeLabel : activeLabel);
  });

  // ─── Montar en el DOM ─────────────────────────────────────────────────────────
  document.body.appendChild(panel);
  document.body.appendChild(button);

  // ─── Leer branding desde /cfg/app (controlado por Eleva) ─────────────────────
  // El cliente no configura colores ni nombres — vienen del backend del tenant.
  // Si la llamada falla, el widget sigue funcionando con los colores por defecto.
  fetch(baseUrl + '/cfg/app')
    .then(function (res) {
      if (!res.ok) throw new Error('cfg/app ' + res.status);
      return res.json();
    })
    .then(function (cfg) {
      var b = (cfg && cfg.branding) || {};

      var color      = b.primaryColorMall || b.primaryColor      || activeColor;
      var colorHover = b.primaryLightMall || color;
      var label      = b.assistantName                           || activeLabel;

      activeColor      = color;
      activeColorHover = colorHover;
      activeLabel      = label;

      // Aplicar al botón solo si está cerrado (no interrumpir al usuario)
      if (!isOpen) {
        button.style.backgroundColor = color;
        button.setAttribute('aria-label', label);
        panel.setAttribute('aria-label',  label);
      }
    })
    .catch(function () {
      // Silently keep defaults — widget still works
    });
})();
