// ==UserScript==
// @name          Bitly Clean
// @namespace     Rnksts
// @version       1.0.0
// @homepage      https://github.com/Rnksts/UserCSS
// @description   Remove bitly clutter, dark/light theme
// @license       CC-BY-SA-4.0
// @author        Rnksts
// @include       https://bitly.com/
// @run-at        document-start
// ==/UserScript==
(function() {var css = [`
:root {
    --dark: #151515;
    --dark2: #1b1b1b;
    --dark3: #404040;
    --text: #ccc;
    --text2: #fff;
    --accent: #EE6123;
}
.container.container-pod.container-pod-tall.overview,
.stage-pod.stage-pod-light,
.page-shorten-brand-tools-product,
.page-about-values-navigation,
.page-about-value,
.bottom-cta,
.footer,
.three-columns,
.scroll-for-more,
.header,
.gallery,
.content-divider,
div.cell h3.header-m,
.promo-customize,
#page-home-link-shortener,
#page-about-values,
#promo-container,
.brand-subhead,
.page-home-trust-quote,
.frame,
.stage-pod,
.page-home-trust-quote,
h1.page-title,
.join-bitly,
a.button.button-primary,
div.promo-container,
nav.navigation,
.hero-wrap,
.mobile-hero-wrap img,
#shorten_actions .anon_history li + li:before,
#form_container > p, .sitebanner--spacer,.sitebanner--container,
a[href="https://bitly.com/pages/features/branded-links"],
a[href="https://bitly.com/pages/pricing"] {
    display: none !important
}
.link-container,
#form_container {
    width: 90%;
}
.hero-content {
    max-height: 300px;
    background-image: none !important;
}
.mobile-hero-wrap {
    max-height: 300px;
}
body,
.hero-content,
.full-width-content,
.anon_history {
    background-color: var(--dark) !important;
}
li.link {
    background-color: var(--dark2) !important;
    color: var(--text) !important;
}
.short-link a,
#form_container #shortened_url {
    color: var(--accent) !important;
}
.button,
#form_container .shorten-button {
    background-color: var(--dark2);
    color: var(--text);
    border-color: var(--accent);
}
.button:hover,
#form_container .shorten-button:hover {
    background-color: var(--accent);
    color: var(--text2);
    border-color: var(--accent);
}
#form_container input[type="text"] {
    background: var(--dark2);
    border: 1px solid var(--dark3);
    color: var(--text);
}
#shorten_actions .anon_history li {
    border: 1px solid var(--dark3) !important;
    border-radius: 8px;
}
`];
var node = document.createElement("style");
node.type = "text/css";
node.appendChild(document.createTextNode(css));
document.documentElement.appendChild(node);
})();
