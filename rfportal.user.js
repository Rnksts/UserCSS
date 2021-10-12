// ==UserScript==
// @name          RF Portal - Dark
// @namespace     Rnksts
// @version       2.0.1
// @homepage      https://github.com/Rnksts/UserCSS
// @description   Dark Interface for Tester Portal
// @license       CC-BY-SA-4.0
// @author        Rnksts
// @include       https://portal.rainforestqa.com/*
// @run-at        document-start
// ==/UserScript==
(function () {
	
	const accentHeatmap = false; // Set 'true' to re-color the heatmap

	let hm =
	accentHeatmap === true
		? `
		#job_heatmap .legendCells .swatch,
		#job_heatmap .hour.bordered {
			fill: #23995b !important;
		}
		#job_heatmap .legendCells .swatch[style="fill: rgb(240, 240, 240);"],
		#job_heatmap .hour.bordered[style="fill: rgb(240, 240, 240);"] {
			fill-opacity: 0.01 !important;
		}
		#job_heatmap .legendCells .swatch[style="fill: rgb(255, 255, 217);"],
		#job_heatmap .hour.bordered[style="fill: rgb(255, 255, 217);"] {
			fill-opacity: 0.08 !important;
		}
		#job_heatmap .legendCells .swatch[style="fill: rgb(237, 248, 177);"],
		#job_heatmap .hour.bordered[style="fill: rgb(237, 248, 177);"] {
			fill-opacity: 0.16 !important;
		}
		#job_heatmap .legendCells .swatch[style="fill: rgb(199, 233, 180);"],
		#job_heatmap .hour.bordered[style="fill: rgb(199, 233, 180);"] {
			fill-opacity: 0.25 !important;
		}
		#job_heatmap .legendCells .swatch[style="fill: rgb(127, 205, 187);"],
		#job_heatmap .hour.bordered[style="fill: rgb(127, 205, 187);"] {
			fill-opacity: 0.35 !important;
		}
		#job_heatmap .legendCells .swatch[style="fill: rgb(65, 182, 196);"],
		#job_heatmap .hour.bordered[style="fill: rgb(65, 182, 196);"] {
			fill-opacity: 0.45 !important;
		}
		#job_heatmap .legendCells .swatch[style="fill: rgb(29, 145, 192);"],
		#job_heatmap .hour.bordered[style="fill: rgb(29, 145, 192);"] {
			fill-opacity: 0.55 !important;
		}
		#job_heatmap .legendCells .swatch[style="fill: rgb(34, 94, 168);"],
		#job_heatmap .hour.bordered[style="fill: rgb(34, 94, 168);"] {
			fill-opacity: 0.65 !important;
		}
		#job_heatmap .legendCells .swatch[style="fill: rgb(37, 52, 148);"],
		#job_heatmap .hour.bordered[style="fill: rgb(37, 52, 148);"] {
			fill-opacity: 0.75 !important;
		}
		#job_heatmap .legendCells .swatch[style="fill: rgb(8, 29, 88);"],
		#job_heatmap .hour.bordered[style="fill: rgb(8, 29, 88);"] {
			fill-opacity: 1 !important;
		}`
		: '';
	let css = `
	html,
  body,
  .modal-content {
    color: #ccc !important;
    background: #0a0a0a !important;
  }
  .nav-link {
    color: #eee !important;
  }
  body.tester-profile a:not(.btn) {
    color: #0099dc;
  }
  .dropdown-menu {
    color: #ccc !important;
    background: #161616 !important;
    border: 1px solid #3b3b3b !important;
  }
  .dropdown-menu .dropdown-item:hover,
  .dropdown-menu .dropdown-item:focus {
    color: #d4d4d4 !important;
    background: #3b3b3b !important;
  }
  .dropdown-menu .dropdown-divider {
    border-color: #3b3b3b !important;
  }
  .jumbotron {
    background: none !important;
  }
  .card {
    background: #0a0a0a !important;
  }
  .card .card-header {
    background: #161616 !important;
  }
  .shelf {
    border: none !important;
  }
  .trophy .hexagon {
    display: block !important;
    -moz-box-sizing: border-box !important;
    box-sizing: border-box !important;
    background: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' cursor='default' viewBox='0 0 113 113'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M113 0H0v113h113V0zM62.5 3.464a12 12 0 00-12 0L13.57 24.786a12 12 0 00-6 10.392v42.644a12 12 0 006 10.392l36.93 21.322a11.998 11.998 0 0012 0l36.93-21.322a12 12 0 006-10.392V35.178a12 12 0 00-6-10.392L62.5 3.464z' fill='%230a0a0a'/%3E%3Cpath d='M61.25 5.63L98.18 26.95a9.499 9.499 0 014.75 8.227v42.644c0 3.394-1.81 6.53-4.75 8.227l-36.93 21.322a9.5 9.5 0 01-9.5 0L14.82 86.049a9.5 9.5 0 01-4.75-8.227V35.178a9.5 9.5 0 014.75-8.227L51.75 5.629a9.5 9.5 0 019.5 0z' stroke='%23CBCED3' stroke-opacity='.5' stroke-width='5'/%3E%3C/svg%3E") no-repeat;
    width: 100px;
    height: 100px;
    padding-left: 100px;
  }
  .trophy-icon:before {
    color: #0a0a0a !important;
  }
  .trophy .num {
    color: #0a0a0a !important;
    font-weight: bold !important;
  }
  #pagination .pagination {
    margin: auto !important;
  }
  #pagination .page-link {
    background: none !important;
    border: none !important;
  }
  #pagination .active {
    font-weight: bold !important;
  }
  #filter,
  #summary select {
    color: #ccc !important;
    background: #161616 !important;
    border: 1px solid #3b3b3b !important;
  }
  table#info th {
    color: #ccc !important;
    background: none !important;
    border-top: 1px solid #3b3b3b !important;
    border-bottom: 2px solid #3b3b3b !important;
  }
  table#info td {
    color: #ccc !important;
    background: #0a0a0a !important;
  }
  table#info td:nth-child(2n+1) {
    background: #161616 !important;
  }
  .table-striped tbody tr:nth-of-type(2n+1) {
    background: #161616 !important;
  }
  .table-striped tbody tr:hover {
    color: #d4d4d4 !important;
    background: #232323 !important;
  }
  .tester-qualifications img {
    background: none !important;
  }
  .tester-qualifications img:not([src*="tester-boy"]) {
    filter: invert(0.7) !important;
  }
  .charts text {
    fill: #a3a3a3 !important;
  }
  .charts path.domain,
  .charts .tick line {
    stroke: #7a7a7a !important;
  }
  .charts .bar,
  .charts .legendOrdinal g.cell:nth-child(1) rect {
    fill: #353535 !important;
  }
  .charts .line,
  .charts .data-point,
  .charts .legendOrdinal g.cell:nth-child(2) rect {
    fill: #23995b !important;
    stroke: #23995b !important;
  }
  .table {
    color: #ccc !important;
  }
  .table * {
    border-color: #3b3b3b !important;
  }
  .table td.job-approved {
    background: none !important;
    border-top: 4px solid #008000 !important;
    border-bottom: 3px solid #008000 !important;
  }
  .table td.job-rejected {
    background: none !important;
    border-top: 4px solid #f00 !important;
    border-bottom: 3px solid #f00 !important;
  }
  .table .openScreenshot {
    color: #0099dc !important;
  }
  .review-approved {
    color: #87b951 !important;
    font-weight: 700 !important;
  }
  .step-summary {
    width: 100%;
  }
  .step-summary.small {
    font-size: 100% !important;
  }
  canvas.job-step-screenshot.thumb {
    max-width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .stbtn,
  .stbtn-container-top button,
  .stbtn-container-bottom button,
  .stepNav button {
    background: #161616 !important;
    color: #ccc !important;
    border: 1px solid #3b3b3b !important;
  }
  .inputsPopup {
    color: #ccc !important;
  }
  .inputsPopup .keyPress {
    border: 1px solid #535353 !important;
  }
  .inputData {
    color: #0099dc !important;
  }
  .boxedText {
    background: none !important;
  }
  .sticky td {
    color: txt !important;
    text-shadow: #0a0a0a -1px 0px, #0a0a0a 0px 1px, #0a0a0a 1px 0px, #0a0a0a 0px -1px !important;
  }
  .stepNav {
    background: #232323 !important;
  }
  .step {
    word-wrap: break-word !important;
  }
  .step .time::before {
    color: #9197a1 !important;
  }
  .popupitem-container > div {
    background: #161616 !important;
    border: 1px solid #3b3b3b !important;
  }
  .review_actions .btn {
    color: #fff !important;
  }
  .review_actions .btn.btn-light {
    color: #000 !important;
  }
  textarea,
  .form-control,
  .select2-selection {
    color: #ccc !important;
    background: #161616 !important;
    border-color: #232323 !important;
  }
  textarea:disabled,
  .form-control:disabled,
  .select2-selection:disabled {
    color: #7a7a7a !important;
    background: #232323 !important;
  }
  .select2-selection__rendered {
    color: #ccc !important;
  }
  .select2-selection__choice {
    background: #232323 !important;
    border-color: #2f2f2f !important;
  }
  .payment-select {
    border-color: #232323 !important;
  }
  .update-payment-method.active {
    background: #161616 !important;
    border-color: #232323 !important;
  }
  .save-wrapper {
    background: #161616 !important;
    box-shadow: 0 1px 8px #232323 !important;
  }
	${hm}
	`;
	let node = document.createElement('style');
	node.type = 'text/css';
	node.appendChild(document.createTextNode(css));
	document.documentElement.appendChild(node);
})();
