/* Full-page loader.

   Dismissed as soon as the document has finished loading, but never shown
   for less than MIN_VISIBLE_MS — on a small static site the load is close to
   instant, and without a floor the loader reads as a flicker rather than a
   deliberate splash. Set MIN_VISIBLE_MS to 0 to dismiss it the moment the
   page is ready.

   The overlay also carries a CSS failsafe animation, so it clears itself
   even if this script fails to run. */
(function () {
  var MIN_VISIBLE_MS = 500;
  var FADE_MS = 450;

  var el = document.getElementById('page-loader');
  if (!el) return;

  var shownAt = Date.now();

  function dismiss() {
    var remaining = Math.max(0, MIN_VISIBLE_MS - (Date.now() - shownAt));
    setTimeout(function () {
      el.classList.add('is-done');
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, FADE_MS);
    }, remaining);
  }

  if (document.readyState === 'complete') {
    dismiss();
  } else {
    window.addEventListener('load', dismiss);
  }
})();
