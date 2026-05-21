/**
 * ARCHIVO ARCHIVADO — ya no se usa en producción.
 *
 * Este componente React implementaba el widget de Eleva de forma "local":
 * el botón y el iframe vivían en el código del cliente (CaprichososWeb),
 * lo que significaba que Eleva no tenía control sobre estilos ni lógica.
 *
 * Fue reemplazado por el Loader Script:
 *   public/widget.js  (repo eleva_shoppingMall-chat-frontend)
 *
 * El cliente ahora solo necesita una línea en su index.html:
 *
 *   <script
 *     id="eleva-widget"
 *     src="https://TU-DOMINIO.eleva-ai.com/widget.js"
 *     data-color="#10B981"
 *   ></script>
 *
 * Ver index.html de este proyecto para el ejemplo en uso.
 */
