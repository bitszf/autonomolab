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
            '<a href="/cookies" style="color:#d45a2a;text-decoration:underline;">Más información</a>',
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
