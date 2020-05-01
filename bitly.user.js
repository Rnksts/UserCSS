// ==UserScript==
// @name          Bitly Clean
// @namespace     Rnksts
// @version       1.0.1
// @homepage      https://github.com/Rnksts/UserCSS
// @description   Remove bitly clutter, dark/light theme
// @license       CC-BY-SA-4.0
// @author        Rnksts
// @include       https://bitly.com/
// @run-at        document-start
// ==/UserScript==
(function () {
	const dark = true;

	let scheme =
		dark === true
			? '--bg: #0a0a0a;\n			--bg2: #282828;\n			--text: #ccc;'
			: '--bg: #fff;\n			--bg2: #eee;\n			--text: #000;';
	let css = `
		:root {
			${scheme}
			--text2: #fff;
			--accent: #ee6123;
		}
		.header,
		.hero-content img,
		.large-9,
		.text-content:not(.url-shorten-row),
		#unAuthShortenForm + p,
		.anon_history li + li:before,
		.text-center,
		.content-divider,
		.bottom-cta,
		footer,
		.wow-modal-window {
			display: none !important;
		}
		.mobile-hero-wrap {
			max-height: 200px !important;
		}
		body,
		.hero-content,
		.full-width-content,
		.anon_history {
			background: var(--bg) !important;
		}
		.link {
			background-color: var(--bg2) !important;
			color: var(--text) !important;
		}
		.short-link a,
		#shortened_url {
			color: var(--accent) !important;
		}
		.short-link a:hover {
			text-decoration: underline !important;
		}
		.button {
			background-color: var(--bg2) !important;
			color: var(--text) !important;
			border-color: var(--accent) !important;
		}
		.button:hover {
			background-color: var(--accent) !important;
			color: var(--text2) !important;
			border-color: var(--accent) !important;
		}
		.shorten-input {
			background: var(--bg2) !important;
			border: 1px solid var(--bg2) !important;
			color: var(--text) !important;
		}
		#shorten_url:hover,
		#shortened_url:hover {
			border: 1px solid var(--accent) !important;
		}
		#shorten_url:focus,
		#shortened_url:focus,
		.button:focus {
			border: 1px solid var(--accent) !important;
			-Webkit-box-shadow: none !important;
			-moz-box-shadow: none !important;
			box-shadow: none !important;
		}
		.button-secondary.copied {
			color: var(--accent) !important;
			background: var(--accent) !important;
		}
		.anon_history li {
			border-radius: 8px !important;
		}
	`;
	let node = document.createElement('style');
	node.type = 'text/css';
	node.appendChild(document.createTextNode(css));
	document.documentElement.appendChild(node);
})();
