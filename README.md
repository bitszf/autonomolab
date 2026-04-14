# AutónomoLab

Herramientas gratuitas, calculadoras y recursos para autónomos y freelancers hispanohablantes.

🌐 **[autonomolab.com](https://autonomolab.com)**

---

## 🛠️ Herramientas disponibles

- [Calculadora de tarifa hora](https://autonomolab.com/herramientas/calculadora-tarifa-hora/) — Calcula cuánto deberías cobrar por hora
- [Generador de contrato freelance](https://autonomolab.com/herramientas/generador-contrato-freelance/) — Contrato profesional en PDF en 2 minutos
- Simulador IVA trimestral *(próximamente)*
- Calculadora de precio de proyecto *(próximamente)*

---

## 📝 Blog

- [Cómo poner precio a tus servicios freelance](https://autonomolab.com/blog/como-poner-precio-servicios-freelance/)
- [Las 15 mejores herramientas para freelancers en 2026](https://autonomolab.com/blog/mejores-herramientas-freelance-2025/)
- [Cómo usar Notion para organizar tu negocio freelance](https://autonomolab.com/blog/notion-para-freelance/)
- [ChatGPT para autónomos: 10 usos prácticos](https://autonomolab.com/blog/chatgpt-para-autonomos/)
- [Cómo conseguir tus primeros clientes como freelance](https://autonomolab.com/blog/como-conseguir-clientes-freelance/)
- [Mejor app de facturación para autónomos en 2026](https://autonomolab.com/blog/mejor-app-facturacion-autonomo/)

---

## ⚙️ Stack técnico

- HTML + CSS + JavaScript puro — sin frameworks
- Hospedado en **Cloudflare Pages** (CDN global, HTTPS automático)
- Dominio registrado en **Cloudflare Registrar**
- Deploy automático desde este repositorio

---

## 🚀 Configuración pendiente

### Google Search Console
1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Verificación por etiqueta HTML
3. En todos los archivos HTML, sustituir:
   `SUSTITUIR_CON_CODIGO_GSC`
   por el código que proporcione Google
4. Enviar sitemap: `https://autonomolab.com/sitemap.xml`

### Google Analytics 4
1. Ve a [analytics.google.com](https://analytics.google.com)
2. Crear propiedad para `autonomolab.com`
3. En todos los archivos HTML, descomentar el bloque GA4
4. Sustituir `G-XXXXXXXXXX` por el Measurement ID real

### Google AdSense
1. Ve a [adsense.google.com](https://adsense.google.com)
2. Añadir `autonomolab.com` como sitio
3. Esperar aprobación (2-4 semanas en sitios nuevos)
4. Sustituir el bloque comentado `<!-- GOOGLE ADSENSE -->` por el script real
5. Páginas excluidas de AdSense: `/privacidad`, `/cookies`, `/aviso-legal`, `/contacto`

---

## 📁 Estructura del proyecto
