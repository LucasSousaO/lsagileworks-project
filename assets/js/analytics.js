// ==========================================================
// LS AgileWorks Analytics
// Google Analytics 4 + Microsoft Clarity
// ==========================================================

const GA_MEASUREMENT_ID = "G-QBRNBB4R5Z";
const CLARITY_PROJECT_ID = "v9lyej2j7r";

/* ===========================
   Google Analytics 4
=========================== */

(function () {
    const script = document.createElement("script");

    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    window.gtag = function () {
        dataLayer.push(arguments);
    };

    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);
})();

/* ===========================
   Microsoft Clarity
=========================== */

(function (c, l, a, r, i, t, y) {
    c[a] =
        c[a] ||
        function () {
            (c[a].q = c[a].q || []).push(arguments);
        };

    t = l.createElement(r);
    t.async = true;
    t.src = `https://www.clarity.ms/tag/${i}`;

    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);

})(window, document, "clarity", "script", CLARITY_PROJECT_ID);