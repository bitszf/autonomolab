/* ============================================================
   BANNER DE COOKIES — AutónomoLab
   GA4: G-5CPLF5TR3E
   Solo carga Analytics si el usuario acepta explícitamente
   ============================================================ */

(function() {
  'use strict';

  var CONSENT_KEY = 'al_cookie_consent';
  var CONSENT_VERSION = '1';
  var GA_ID = 'G-5CPLF5TR3E';

  function getConsent() {
    try {
      var stored = localStorage.getItem(CONSENT_KEY);
      if (stored) return JSON.parse(stored);
    } catch(e) {}
    return null;
  }

  function setConsent(accepted) {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({
        accepted: accepted,
        version: CONSENT_VERSION,
        date: new Date().toISOString()
      }));
    } catch(e) {}
  }

  function hideBanner() {
    var banner = document.getElementById('al-cookie-banner');
    if (banner) {
      banner.style.transform = 'translateY(120%)';
      setTimeout(function() { banner.remove(); }, 400);
    }
  }

  function loadAnalytics() {
    if (window._gaLoaded) return;
    window._gaLoaded = true;

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
  }

  function showBanner() {
    var banner = document.createElement('div');
    banner.id = 'al-cookie-banner';
    banner.innerHTML = [
      '<div style="',
        'position:fixed;bottom:0;left:0;right:0;z-index:9999;',
        'background:#1a1814;color:#fff;',
        'padding:20px 24px;',
        'display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;',
        'box-shadow:0 -4px 32px rgba(0,0,0,0.2);',
        'transform:translateY(120%);',
        'transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1);',
        'font-family:\'Cabinet Grotesk\',sans-serif;',
      '">',
        '<div style="flex:1;min-width:260px;">',
          '<p style="font-size:14px;font-weight:800;color:#fff;margin:0 0 4px;">',
            '🍪 Este sitio usa cookies analíticas',
          '</p>',
          '<p style="font-size:13px;color:rgba(255,255,255,0.65);margin:0;line-height:1.5;">',
            'Usamos Google Analytics para entender cómo se usa el sitio. ',
            'Las herramientas funcionan sin cookies. ',
            '<a href="/cookies" style="color:#d45a2a;text-decoration:underline;">Política de cookies</a>',
          '</p>',
        '</div>',
        '<div style="display:flex;gap:10px;flex-shrink:0;flex-wrap:wrap;">',
          '<button id="al-cookie-reject" style="',
            'background:transparent;color:rgba(255,255,255,0.65);',
            'border:1px solid rgba(255,255,255,0.2);border-radius:8px;',
            'padding:10px 18px;font-size:13px;font-weight:700;',
            'cursor:pointer;font-family:inherit;',
          '">Rechazar</button>',
          '<button id="al-cookie-accept" style="',
            'background:#d45a2a;color:#fff;',
            'border:none;border-radius:8px;',
            'padding:10px 20px;font-size:13px;font-weight:800;',
            'cursor:pointer;font-family:inherit;',
          '">Aceptar cookies</button>',
        '</div>',
      '</div>'
    ].join('');

    document.body.appendChild(banner);

    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        banner.querySelector('div').style.transform = 'translateY(0)';
      });
    });

    document.getElementById('al-cookie-accept').addEventListener('click', function() {
      setConsent(true);
      loadAnalytics();
      hideBanner();
    });

    document.getElementById('al-cookie-reject').addEventListener('click', function() {
      setConsent(false);
      hideBanner();
    });
  }

  function init() {
    var consent = getConsent();
    if (consent === null) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showBanner);
      } else {
        showBanner();
      }
    } else if (consent.accepted === true) {
      loadAnalytics();
    }
  }

  init();
})();

// QW3 — inputmode decimal en todos los inputs numéricos
(function(){
  function patchInputs(){
    document.querySelectorAll('input[type="number"]').forEach(function(el){
      if(!el.getAttribute('inputmode')) el.setAttribute('inputmode','decimal');
    });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', patchInputs);
  } else {
    patchInputs();
  }
})();

// ── Schema @graph dinámico por herramienta (SoftwareApplication + FAQPage + BreadcrumbList)
(function(){
  var schemas = {
    '/herramientas/calculadora-tarifa-hora/': {"@context":"https://schema.org","@graph":[{"@type":"SoftwareApplication","name":"Calculadora de tarifa hora freelance","url":"https://autonomolab.com/herramientas/calculadora-tarifa-hora/","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"EUR"},"description":"Calcula tu tarifa hora ideal como freelance según ingresos, gastos y horas disponibles.","inLanguage":"es"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Inicio","item":"https://autonomolab.com"},{"@type":"ListItem","position":2,"name":"Herramientas","item":"https://autonomolab.com/herramientas/"},{"@type":"ListItem","position":3,"name":"Calculadora tarifa hora"}]}]},
    '/herramientas/calculadora-iva/': {"@context":"https://schema.org","@graph":[{"@type":"SoftwareApplication","name":"Calculadora IVA trimestral para autónomos","url":"https://autonomolab.com/herramientas/calculadora-iva/","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"EUR"},"description":"Calcula tu declaración trimestral de IVA modelo 303 como autónomo en España.","inLanguage":"es"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Inicio","item":"https://autonomolab.com"},{"@type":"ListItem","position":2,"name":"Herramientas","item":"https://autonomolab.com/herramientas/"},{"@type":"ListItem","position":3,"name":"Calculadora IVA trimestral"}]}]},
    '/herramientas/calculadora-irpf/': {"@context":"https://schema.org","@graph":[{"@type":"SoftwareApplication","name":"Calculadora IRPF modelo 130 para autónomos","url":"https://autonomolab.com/herramientas/calculadora-irpf/","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"EUR"},"description":"Calcula tu pago fraccionado trimestral del IRPF modelo 130 como autónomo en estimación directa.","inLanguage":"es"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Inicio","item":"https://autonomolab.com"},{"@type":"ListItem","position":2,"name":"Herramientas","item":"https://autonomolab.com/herramientas/"},{"@type":"ListItem","position":3,"name":"Calculadora IRPF modelo 130"}]}]},
    '/herramientas/simulador-cuota-autonomo/': {"@context":"https://schema.org","@graph":[{"@type":"SoftwareApplication","name":"Simulador cuota de autónomo 2026","url":"https://autonomolab.com/herramientas/simulador-cuota-autonomo/","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"EUR"},"description":"Calcula cuánto pagarás de cuota de autónomo según tus ingresos reales netos. Sistema de 15 tramos 2026.","inLanguage":"es"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Inicio","item":"https://autonomolab.com"},{"@type":"ListItem","position":2,"name":"Herramientas","item":"https://autonomolab.com/herramientas/"},{"@type":"ListItem","position":3,"name":"Simulador cuota de autónomo"}]}]},
    '/herramientas/calculadora-finiquito/': {"@context":"https://schema.org","@graph":[{"@type":"SoftwareApplication","name":"Calculadora de finiquito","url":"https://autonomolab.com/herramientas/calculadora-finiquito/","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"EUR"},"description":"Calcula el finiquito al terminar una relación laboral: vacaciones pendientes, pagas extra y salario pendiente.","inLanguage":"es"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Inicio","item":"https://autonomolab.com"},{"@type":"ListItem","position":2,"name":"Herramientas","item":"https://autonomolab.com/herramientas/"},{"@type":"ListItem","position":3,"name":"Calculadora de finiquito"}]}]}
  };
  var path = window.location.pathname.replace(/\/+$/, '') + '/';
  if(schemas[path]){
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(schemas[path]);
    document.head.appendChild(s);
  }
})();

// F11 — Deduplicar schemas FAQPage si hay más de uno en la misma página
(function(){
  if(document.readyState !== 'loading'){
    deduplicateFAQ();
  } else {
    document.addEventListener('DOMContentLoaded', deduplicateFAQ);
  }
  function deduplicateFAQ(){
    var scripts = document.querySelectorAll('script[type="application/ld+json"]');
    var faqSchemas = [];
    var toRemove = [];
    scripts.forEach(function(s){
      try {
        var data = JSON.parse(s.textContent);
        if(data['@type'] === 'FAQPage'){
          faqSchemas.push({el: s, data: data});
        }
      } catch(e){}
    });
    // Si hay más de un FAQPage, fusionar en uno solo
    if(faqSchemas.length > 1){
      var merged = faqSchemas[0].data;
      for(var i = 1; i < faqSchemas.length; i++){
        var extra = faqSchemas[i].data.mainEntity || [];
        merged.mainEntity = (merged.mainEntity || []).concat(extra);
        faqSchemas[i].el.remove();
      }
      faqSchemas[0].el.textContent = JSON.stringify(merged);
    }
  }
})();
