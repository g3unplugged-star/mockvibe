// analytics.js
window.trackEvent = function (action, params = {}) {
  if (typeof gtag === 'function') {
    gtag('event', action, params);
  }
};

