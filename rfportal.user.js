// ==UserScript==
// @name          RF Portal - Dark
// @namespace     Rnksts
// @version       1.0.0
// @homepage      https://github.com/Rnksts/UserCSS
// @description   Dark Interface for Tester Portal
// @license       CC-BY-SA-4.0
// @author        Rnksts
// @homepage      https://github.com/Rnksts/UserCSS
// @include       https://portal.rainforestqa.com/*
// @run-at        document-start
// ==/UserScript==
(function() {var css = [`
:root {
    --bg: #151515;
    --bg2: #282828;
    --txt: #CCCCCC;
    --accent: #278D44;
    --bar: #282828;
    --inbg: #000000;
    --intxt: #CCCCCC;
    --inbd: #414141;
}
body,
.modal,
.modal-footer {
    background-color: var(--bg) !important;
    color: var(--txt) !important;
}
.navbar-filler {
    visibility: hidden !important;
}
.navbar-inner {
    background-color: var(--bg2) !important;
    border-color: var(--bg2) !important;
    border-bottom-left-radius: 6px !important;
    border-bottom-right-radius: 6px !important;
}
.nav li a {
    color: var(--txt) !important;
    text-shadow: none !important;
    font-size: 15px !important;
}
.img-container {
    border: 1px solid #ffffff3d !important;
}
.navbar-inner span.badge {
    background-color: var(--accent) !important;
}
ul.dropdown-menu {
    background-color: var(--inbg) !important;
    border-radius: 6px !important;
    border: 1px solid var(--inbd) !important;
}
li.divider {
    border-bottom-color: var(--inbd) !important;
}
.dropdown-menu li a {
    color: var(--text) !important;
}
.dropdown-menu li a:hover {
    background-color: #22222280 !important;
}
.newsitem,
.save-wrapper,
.payment-select {
    background-color: var(--bg2) !important;
    border-color: var(--bg2) !important;
}
.modal-header,
.modal-footer {
    border-color: var(--inbd) !important;
}
.modal-footer {
    -webkit-box-shadow: inset 0 1px 0 var(--inbd) !important;
}
span a,
p a,
.news-meta,
small a,
.small a,
strong a,
td a,
a[target="_blank"],
.text-center a,
.text-center p a {
    color: var(--accent) !important;
}
.button.primary {
    background: var(--accent) !important;
    border-color: var(--accent) !important;
}
code,
select,
input {
    border-color: var(--inbd) !important;
    color: var(--intxt) !important;
    background-color: var(--inbg) !important;
}
hr {
    border-color: var(--accent) !important;
}
table tr {
    border-bottom: 1px solid var(--inbd) !important;
}
table#info tr th {
    background-color: var(--bg2) !important;
    color: var(--text) !important;
}
table#info tr td,
.update-payment-method.active {
    background-color: var(--inbg) !important;
    border: 1px solid var(--inbd) !important;
    color: var(--intxt) !important;
}
span.review-approved {
    color: #87b951 !important;
    font-weight: 700 !important;
}
.job-approved.job-column {
    background-color: #0cf70c1c !important;
}
.job-rejected.job-column {
    background-color: #f70c0c1c !important;
}
.pagination ul li a,
.pagination ul li span {
    background-color: #ffffff00 !important;
    border: none !important;
    color: var(--text) !important;
}
.pagination ul .active span {
    color: var(--accent) !important;
    border-bottom: 4px solid var(--accent) !important;
}
.button.primary {
    background: var(--accent) !important;
    border-color: var(--accent) !important;
}
path.line {
    stroke: var(--accent) !important;
}
circle.data-point,
.legendOrdinal g g:nth-child(2) rect {
    stroke: var(--accent) !important;
    fill: var(--accent) !important;
}
.tick text {
    fill: var(--text) !important;
}
path.domain,
.tick line {
    stroke: var(--text) !important;
}
rect.bar,
.legendOrdinal g g:nth-child(1) rect {
    fill: var(--bar) !important;
}
.tester-qualifications > li:nth-child(1) > img,
.tester-qualifications > li:nth-child(2) > img {
    filter: invert(60%);
}
img.hexagon {
    content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzIiBoZWlnaHQ9IjExMyIgdmlld0JveD0iMCAwIDExMyAxMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEzIDBIMFYxMTNIMTEzVjBaTTYyLjUgMy40NjQxMUM1OC43ODcxIDEuMzIwNSA1NC4yMTI5IDEuMzIwNSA1MC41IDMuNDY0MTFMMTMuNTY5NiAyNC43ODU5QzkuODU2NjkgMjYuOTI5NSA3LjU2OTU4IDMwLjg5MSA3LjU2OTU4IDM1LjE3ODJWNzcuODIxOEM3LjU2OTU4IDgyLjEwOSA5Ljg1NjY5IDg2LjA3MDUgMTMuNTY5NiA4OC4yMTQxTDUwLjUgMTA5LjUzNkM1NC4yMTI5IDExMS42OCA1OC43ODcxIDExMS42OCA2Mi41IDEwOS41MzZMOTkuNDMwNCA4OC4yMTQxQzEwMy4xNDMgODYuMDcwNSAxMDUuNDMgODIuMTA5IDEwNS40MyA3Ny44MjE4VjM1LjE3ODJDMTA1LjQzIDMwLjg5MSAxMDMuMTQzIDI2LjkyOTUgOTkuNDMwNCAyNC43ODU5TDYyLjUgMy40NjQxMVoiIGZpbGw9IiMxNTE1MTUiLz4KPHBhdGggZD0iTTYxLjI1IDUuNjI5MTdMOTguMTgwNCAyNi45NTFDMTAxLjEyIDI4LjY0OCAxMDIuOTMgMzEuNzg0MiAxMDIuOTMgMzUuMTc4MlY3Ny44MjE4QzEwMi45MyA4MS4yMTU4IDEwMS4xMiA4NC4zNTIgOTguMTgwNCA4Ni4wNDlMNjEuMjUgMTA3LjM3MUM1OC4zMTA3IDEwOS4wNjggNTQuNjg5MyAxMDkuMDY4IDUxLjc1IDEwNy4zNzFMMTQuODE5NiA4Ni4wNDlDMTEuODgwMyA4NC4zNTIgMTAuMDY5NiA4MS4yMTU4IDEwLjA2OTYgNzcuODIxOFYzNS4xNzgyQzEwLjA2OTYgMzEuNzg0MiAxMS44ODAzIDI4LjY0OCAxNC44MTk2IDI2Ljk1MUw1MS43NSA1LjYyOTE3QzU0LjY4OTMgMy45MzIxNSA1OC4zMTA3IDMuOTMyMTUgNjEuMjUgNS42MjkxN1oiIHN0cm9rZT0iIzQxNDE0MSIgc3Ryb2tlLW9wYWNpdHk9IjAuMyIgc3Ryb2tlLXdpZHRoPSI1Ii8+Cjwvc3ZnPgo=") !important;
    filter: saturate(1500%) !important;
}
.trophy .num, .trophy-icon::before {
    color: var(--bg) !important;
}
.trophy .num {
    font-weight: bold !important;
}
.shelf {
    border-color: var(--inbd) !important;
}
`];
var node = document.createElement("style");
node.type = "text/css";
node.appendChild(document.createTextNode(css));
document.documentElement.appendChild(node);
})();
