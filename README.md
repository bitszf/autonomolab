# AutónomoLab — Instrucciones de configuración

## 🔍 Google Search Console (GSC)

**Cuándo:** Inmediatamente después de subir el sitio.

**Pasos:**
1. Ve a https://search.google.com/search-console
2. Añade propiedad → escribe "https://autonomolab.com"
3. Elige verificación por **etiqueta HTML**
4. Google te dará un código como: `<meta name="google-site-verification" content="ABC123XYZ...">`
5. Copia solo el valor del `content` (ej: `ABC123XYZ...`)
6. En **TODOS los archivos HTML**, busca:
   `SUSTITUIR_CON_CODIGO_GSC`
   Y sustitúyelo por tu código real
7. Sube los archivos a GitHub → Cloudflare despliega
8. Vuelve a GSC y haz clic en "Verificar"
9. Envía el sitemap: https://autonomolab.com/sitemap.xml

---

## 📊 Google Analytics 4 (GA4)

**Cuándo:** Junto con GSC.

**Pasos:**
1. Ve a https://analytics.google.com
2. Crea cuenta → Nueva propiedad → "autonomolab.com"
3. Plataforma: Web → URL: https://autonomolab.com
4. Google te dará un **Measurement ID** como: `G-XXXXXXXXXX`
5. En **TODOS los archivos HTML**, busca el bloque comentado:
   `<!-- Global site tag (gtag.js) - Google Analytics -->`
6. **Descomentar** el bloque (quitar los `<!-- -->` externos)
7. Sustituir `G-XXXXXXXXXX` por tu Measurement ID real (aparece 2 veces)
8. Sube los archivos a GitHub

**Ejemplo resultado final:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TU_ID_REAL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TU_ID_REAL');
</script>
```

---

## 💰 Google AdSense

**Cuándo:** Cuando el sitio tenga al menos 20-30 visitas diarias y contenido suficiente.
Google suele tardar 2-4 semanas en aprobar sitios nuevos.

**Pasos:**
1. Ve a https://adsense.google.com
2. Crea cuenta → Añade tu sitio: "autonomolab.com"
3. Google te pedirá pegar un código en el `<head>` — es como:
   `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>`
4. En **TODOS los archivos HTML**, busca el bloque:
   `<!-- GOOGLE ADSENSE`
5. **Sustituir** todo el bloque del comentario por el script que te da Google
6. Para añadir unidades de anuncio específicas, usa:
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-TU_ID"
     data-ad-slot="TU_SLOT_ID"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

**Posiciones recomendadas para AdSense en autonomolab.com:**
- Dentro de los artículos del blog (después del 2º párrafo)
- Debajo del H1 en páginas de herramientas
- Al final de cada herramienta (antes del FAQ)
- Sidebar en páginas de escritorio (futuro)

**Páginas SIN AdSense (ya excluidas):**
- /privacidad
- /cookies  
- /aviso-legal
- /contacto

---

## 📋 Checklist de lanzamiento

- [ ] Subir sitio a GitHub y verificar Cloudflare deploy
- [ ] Verificar todas las URLs funcionan sin 404
- [ ] Configurar GSC y enviar sitemap
- [ ] Configurar GA4
- [ ] Solicitar AdSense (esperar tráfico mínimo)
- [ ] Añadir autonomolab.com a F5Bot con keywords del nicho
- [ ] Cross-link desde facturapdf.app en el footer
- [ ] Publicar en Reddit r/autonomos y r/freelance (estrategia orgánica)
