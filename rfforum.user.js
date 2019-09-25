// ==UserScript==
// @name          RF Forum - Discourse Dark
// @namespace     Rnksts
// @version       1.0.1
// @homepage      https://github.com/Rnksts/UserCSS
// @description   Dark Interface for Tester Forum
// @license       CC-BY-SA-4.0
// @author        Rnksts, StylishThemes (Original theme: https://github.com/StylishThemes/Discourse-Dark)
// @include       https://forum.rainforestqa.com/*
// @run-at        document-start
// ==/UserScript==
(function() {var css = [`
:root {
    --main-color: #278D44;
}
.user-menu .quick-access-panel .read,
.user-menu .quick-access-panel .show-all a {
    background-color: rgba(0, 0, 0, 0) !important;
}
.user-menu .quick-access-panel li {
    background-color: #444444 !important;
}
.user-menu .quick-access-panel li span:first-child {
    border: none !important;
}
div.menu-links-header .menu-links-row,
div.menu-links-header .menu-links-row li a.active {
    border: 1px solid rgba(0, 0, 0, 0) !important;
    ;
}
.names span a,
.user-info .user-detail .username a,
.large-notification a span:first-child,
.user-secondary-navigation .nav-stacked a.active {
    color: #d0d0d0 !important;
}
#topic-progress,
.user-menu .quick-access-panel li span:first-child {
    color: var(--main-color) !important;
}
.user-stream .excerpt,
.badge-info,
.badge-card .badge-contents .badge-link {
    color: #ccc !important;
}
.timeline-fullscreen {
    background-color: #222222 !important;
    border-color: #444444 !important;
}
.topic-post article {
    border-color: #444444 !important;
}
#user-card .card-content,
#group-card .card-content {
    background: rgba(0, 0, 0, 0.85);
}
nav.post-controls .double-button:hover button,
.user-menu .quick-access-panel li:hover,
.user-menu .quick-access-panel li.unread:hover {
    color: #ccc !important;
    background: #333 !important;
}
.user-menu .quick-access-panel li.unread,
.badge-notification.unread {
    background: #444 !important;
}
.badge-notification.new-posts {
    background: var(--main-color) !important;
}
#user-card,
#user-card span,
.website-name a,
.more-user-badges a,
.metadata h3,
.search-link .blurb,
.topic-list-item.visited td span a {
    color: #9a9a9a !important;
}
#user-card .badge-section .user-badge,
.more-user-badges a {
    background: #222 !important;
    border: 1px solid #444444 !important;
}
.post-notice {
    background-color: #282828 !important;
    border-top: 1px solid #444444 !important;
}
.logo-big {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAtCAYAAAA6NiDfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA5LTI0VDA1OjI0OjIxLTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wOS0yNFQwNjowOTozMy0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wOS0yNFQwNjowOTozMy0wNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNWNmNzZkZS00Y2FkLTc1NDItOTFkOC0wNWQxZDRlMThkMTIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5YTljNGY0MS1lZTA1LWU4NDUtYTdlMi1jYzhjNjFmYTg0MDYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2M2ViM2I1My1mNWMyLWY5NDEtOGZlMC0zOWE2MGUyZjhlYjkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYzZWIzYjUzLWY1YzItZjk0MS04ZmUwLTM5YTYwZTJmOGViOSIgc3RFdnQ6d2hlbj0iMjAxOS0wOS0yNFQwNToyNDoyMS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMDkwMzljMy1mZTczLTE3NDAtYWUzMy0xMTNmZmVmZGRmNWQiIHN0RXZ0OndoZW49IjIwMTktMDktMjRUMDY6MDk6MzMtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjVjZjc2ZGUtNGNhZC03NTQyLTkxZDgtMDVkMWQ0ZTE4ZDEyIiBzdEV2dDp3aGVuPSIyMDE5LTA5LTI0VDA2OjA5OjMzLTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+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') !important;
}
/*
            Discourse Dark
By:         StylishThemes
Homepage:   https://github.com/StylishThemes/Discourse-Dark
Version:    1.1.5
License:    CC-BY-SA-4.0
*/
html,
body {
    background: #151515 !important;
    /*#181818*/
    color: #ddd !important;
}
.d-header .panel,
.cat .dropdown-header,
.topic-body,
.topic-body.highlighted,
.docked .d-header .title-wrapper,
.badge-category-bg + .badge-category,
.fa[style*="background"],
#main,
.topic-area,
.full-width:not(.woot-banner),
#topic-title,
.presence-users {
    background: transparent !important;
}
.d-header,
.badge-card .badge-icon,
div.poll .results .bar-back,
#top-navbar,
#mate-footer,
.woot-banner-featured-nav,
div.top-panel {
    background: #111 !important;
}
.primary,
#reply-control,
.bootbox.modal,
.topic-list .topic-list-item-separator td span,
.user-preferences .bio-composer .d-editor-preview,
.edit-category-tab-topic-template .d-editor-preview,
.about .details,
.user-main .about .secondary,
.badge-card,
#topic-progress,
.top-bar,
.zegist-earn,
.home-banner,
.title .search-header,
.latest-topic-list {
    background: #151515 !important;
    /*#181818*/
    border-color: #444 !important;
}
code,
pre code,
p > code,
input,
.btn,
.message,
#reply-control input,
#reply-control textarea,
#reply-control select,
#reply-control .tag-chooser,
.modal-inner-container,
.badge-notification,
.select2-drop,
.select-kit-body,
.select-kit-header,
.select-box-kit-header,
.select-kit-collection,
.select-box-kit-collection,
.select-kit .select-kit-collection,
.select-kit-filter,
.select-box-kit-filter,
.d-editor-textarea-wrapper,
.user-preferences .bio-composer,
div.ac-wrap,
#sticky-footer,
.feedback-popup,
.d-header .sp-logo-container > .sp-logo-menu > .sp-logo-dropdown,
.d-header .sp-logo-container > .sp-logo-menu > .sp-logo-dropdown li,
#sp-logo-dropdown {
    background: #222 !important;
    color: #ddd !important;
    border-color: #444 !important;
}
.list-controls .category-breadcrumb li.bullet > .badge-category {
    background: #333 !important;
    color: #ddd !important;
}
.woot-banner-featured-nav .btn,
.d-header .sp-logo-container > .sp-logo-menu > .sp-logo-dropdown li:hover,
#sp-logo-dropdown li:not(.active):hover {
    background: #333 !important;
}
#sp-logo-dropdown .active a {
    color: #333 !important;
}
blockquote,
aside.quote > div,
aside.quote > blockquote,
a.mention,
a.mention-group,
.menu-panel,
.emoji-picker,
.composer-popup,
.d-editor .d-editor-modal,
.user-menu .notifications li.read,
.topic-list > tbody > tr.topic-list-item,
.list-controls .category-dropdown-menu,
.select2-results .select2-no-results,
.select2-results .select2-searching,
.select2-results .select2-selection-limit,
.details,
.user-content,
.topic-map,
.drop-down-visible .d-header-icons .active .icon,
.drop-down-visible .d-header .icons .active .icon,
.drop-down-mode .d-header-icons .active .icon,
.user-stream .item,
.user-stream .user-stream-item {
    background: #222 !important;
    color: #aaa !important;
    border-color: #444 !important;
}
.select2-drop-mask,
#list-area .contents .topic-list-item:nth-child(2n),
.moderator .regular > .cooked {
    background: rgba(34, 34, 34, .5) !important;
}
li.select-box-kit-row,
.menu-panel .category-link:hover,
.menu-panel ul.menu-links li a:hover,
.menu-panel ul li.heading a:hover,
.badge-category,
#share-link,
.d-header-icons .icon:hover,
.d-header-icons .icon:focus {
    background-color: #333 !important;
}
.placeholder-text,
.placeholder-avatar,
.topic-list > thead,
body .dropdown-header,
.topic-map .buttons .btn,
.badge-notification.clicks,
nav.post-controls button.d-hover,
.select2-results .select2-highlighted,
#topic-progress .bg {
    background: #333 !important;
    color: #aaa !important;
    border-color: #444 !important;
}
.btn:hover,
.cat:hover,
.like-button:hover,
.d-editor-spacer,
pre.onebox code li.selected,
.topic-list .sortable:hover,
.nav-pills > li > a:hover,
.d-header-icons .icon:hover,
.d-header .icons .icon:hover,
.category-row.is-highlighted,
nav.post-controls .show-replies:hover,
.drop-down-visible .d-header .icons .icon:hover,
nav.post-controls .like-button:hover button.d-hover {
    background: #444 !important;
}
.emoji-picker .section-group button.emoji:hover,
.emoji-picker .results button.emoji:hover {
    background-color: #444 !important;
}
.user-preferences .static,
.discourse-tag.simple,
.discourse-tag.simple:hover,
.discourse-tag.simple:visited,
.modal.history-modal .diff-ins,
body .extra-info-wrapper .discourse-tag,
.d-header .icons .active .icon:hover,
.drop-down-visible .d-header .icons .active .icon:hover,
.stats-section li.linked-stat a,
.user-main .about .secondary dd,
/* syntax theme */
.hljs-subst,
.hljs-request,
.hljs-status,
.hljs-keyword,
.javascript .hljs-title,
.nginx .hljs-title,
.topic-list .topic-excerpt {
    color: #aaa !important;
}
.menu-panel li.category-link a:hover {
    filter: brightness(110%) !important;
}
input,
select,
textarea,
.fps-result .blurb .search-highlight,
.user-navigation .nav-stacked a.active,
.topic-body .contents .cooked a:not(.mention):not(.mention-group),
.topic-body .contents .cooked a:not(.mention):not(.mention-group):active,
.topic-body .contents .cooked a:not(.mention):not(.mention-group):hover,
.topic-body .contents .cooked a:not(.mention):not(.mention-group):visited,
#reply-control .wmd-controls .d-editor-preview a:not(.mention):not(.mention-group),
#reply-control .wmd-controls .d-editor-preview a:not(.mention):not(.mention-group):active,
#reply-control .wmd-controls .d-editor-preview a:not(.mention):not(.mention-group):hover,
#reply-control .wmd-controls .d-editor-preview a:not(.mention):not(.mention-group):visited {
    color: #ccc;
    /* not important */
}
.title,
.d-icon,
.alert,
#banner,
#site-text-logo,
.topic-count,
.alert.alert-info,
.alert.alert-success,
.alert.alert-error,
.nav-pills > li > a,
#topic-title h1 a,
.is-highlighted div,
.modal .modal-body p,
.atom-io-navigation a,
.composer-popup a.close,
.modal .modal-body label,
.topic-list .sortable:hover,
.extra-info-wrapper .topic-link,
nav.post-controls button.create,
.user-menu .notifications li span,
.like-button:hover .like-count.d-hover,
.badge-wrapper.bullet span.badge-category,
.badge-wrapper.bar span.badge-category,
.list-controls .category-dropdown-menu .home,
.pihole-nav-link-container a,
.category-list tbody .category h3 a[href],
div.poll li[data-poll-option-id],
/* Fix Mozilla Brazil category text color */
.badge-category-bg[style*="background-color: #00683"] + span[style*="color: #000000"],
.menu-panel a,
a.widget-link.show-help,
#sp-logo-dropdown a {
    color: #ccc !important;
}
.cooked .labels span {
    background: #555 !important;
    color: #ddd !important;
}
.pihole-nav-link-container a:hover,
.pihole-nav-link-container a:focus,
.topic-title {
    color: #fff !important;
}
/* syntax theme */
.hljs-tag,
.hljs-tag .hljs-title,
.django .hljs-tag .hljs-keyword {
    color: #777 !important;
}
.emoji-picker .diversity-picker .d-icon {
    color: #333 !important;
}
.menu-panel,
.d-header .icons .icon,
ol.category-breadcrumb li,
.drop-down-visible .d-header-icons .active .icon {
    border-color: transparent !important;
}
.drop-down-visible .d-header-icons .active .icon:after,
.drop-down-visible .d-header .icons .active .icon:after,
.drop-down-mode .d-header-icons .active .icon:after {
    border-color: #222 !important;
}
hr,
input,
tbody,
.d-header,
.d-header .title,
.modal-header,
.modal-footer,
.topic-avatar,
.topic-status-info,
.topic-body,
.topic-map section,
.topic-list > tbody > tr,
pre.onebox code ol.lines li,
.nav-pills > li > a,
.category-list tbody tr,
.small-action,
.embedded-posts,
.select-kit-filter,
.select-box-kit-filter,
.d-editor-button-bar,
.table-heading,
#revision-details,
.emoji-picker .filter,
.emoji-picker .section-header,
.emoji-picker .categories-column,
.emoji-picker .footer,
.latest-topic-list-item,
.extra-info .badge-category,
.post-links-container .post-links,
.topic-list tr.topic-list-item td,
.topic-list > tbody,
.search-container .search-advanced .search-info,
div.poll,
div.poll .poll-info,
div.poll .poll-buttons,
.topic-list thead tr,
.feedback-popup input,
.feedback-popup textarea {
    border-color: #444 !important;
}
#reply-control,
.badge-category-bg,
.badge-category-parent-bg,
#copyright {
    border: #444 1px solid !important;
}
/* Advanced Search Bar*/
.search-container .search-advanced-sidebar .search-advanced-filters {
    background: #1d1d1d !important;
}
.search-container .search-advanced-sidebar .search-advanced-title {
    background: #2c2c2c !important;
}
#list-area .contents,
#list-area .contents .topic-list thead,
#list-area .contents .topic-list thead th,
.category-list,
.topic-list:not(.categories),
.category-list .topics .badge-notification,
.category-list .category .badge-notification {
    background: transparent !important;
    border-color: #444 !important;
}
.topic-list > tbody > tr:first-of-type {
    border-top-color: #444 !important;
}
aside.onebox {
    border-color: rgba(68, 68, 68, .2) !important;
}
#list-area .contents .topic-list-item {
    border-bottom-color: transparent !important;
}
/* gray */
.btn-primary,
.open .grippie {
    background-color: #383838 !important;
    /*background-color: #182030 !important;*/
}
#banner,
.btn-primary:hover,
.alert.alert-info,
.category-list [data-category-id="7"]:not(.no-logo):not(.has-description) {
    background-color: #454545 !important;
}
.user-menu .notifications li,
.badge-notification.unread-posts {
    background-color: #404040 !important;
}
.alert.alert-info.clickable {
    color: #9daccc;
}
.category-description,
.topics .value,
.topics .unit {
    color: #ddd !important;
}
/* green */
.alert.alert-success,
.modal.history-modal ins,
.modal.history-modal .diff-ins,
.category-list [data-category-id="6"]:not(.no-logo):not(.has-description),
.category-list [data-category-id="13"]:not(.no-logo):not(.has-description) {
    background-color: #152 !important;
}
.post-info .wiki,
.post-info .last-wiki-edit {
    color: #55a532 !important;
}
/* red */
.btn-danger,
.alert.alert-error,
.modal.history-modal del,
.modal.history-modal .diff-del,
nav.post-controls button.like.d-hover {
    background-color: #911 !important;
}
.d-icon-d-liked,
nav.post-controls button.has-like,
nav.post-controls button.has-like .fa-heart,
nav.post-controls button.has-like .fa-heart-o,
nav.post-controls button.like.d-hover i {
    color: #f11 !important;
}
.category-list [data-category-id="14"]:not(.no-logo):not(.has-description) {
    background-color: #2e6c5f !important;
}
/* pink */
.category-list [data-category-id="1"]:not(.no-logo):not(.has-description) {
    background-color: #792240 !important;
}
/* yellow */
.select2-results li em,
.modal.history-modal span.edit-reason,
.select-kit .select-kit-row.is-selected,
.category-list [data-category-id="3"]:not(.no-logo):not(.has-description) {
    background: #261d08 !important;
}
.category-list [data-category-id="3"]:not(.no-logo):not(.has-description) {
    background: #4c420e !important;
}
/* highlights */
a,
a:hover,
a:active,
a:visited,
body #topic .topic-body .contents div.cooked a:not([class]) {
    color: var(--main-color);
    /* not important */
}
.atom-io-navigation a:hover,
.topic-list .topic-list-item-separator td span,
.timeline-container .topic-timeline .timeline-last-read i.progress {
    color: var(--main-color) !important;
}
.is-highlighted,
li.select-box-kit-row.is-highlighted,
.nav-pills > li.active > a,
.nav-pills > li > a.active,
.timeline-container .btn-primary,
.timeline-container .topic-timeline .timeline-handle,
div.menu-links-header a:hover,
.menu-panel li a:hover,
.menu-panel li a:focus,
.menu-panel li.heading a:hover,
.menu-panel li.heading a:focus {
    background-color: var(--main-color) !important;
}
.nav-pills > li.active > a,
.nav-pills > li > a.active,
.topic-list .topic-list-item-separator td,
.timeline-container .topic-timeline .timeline-scrollarea,
.badge-category:hover {
    border-color: var(--main-color) !important;
}
.d-header {
    box-shadow: none !important;
}
.topic-list .posters a:first-child .avatar.latest:not(.single) {
    box-shadow: 0 0 3px 1px var(--main-color) !important;
    border: 2px solid var(--main-color) !important;
}
::selection {
    background-color: var(--main-color) !important;
    color: #fff !important;
}
::-moz-selection {
    background-color: var(--main-color) !important;
    color: #fff !important;
}
kbd,
#keyboard-shortcuts-help ul b,
img[src*="github.com/favicon.ico"] {
    filter: invert(80%) !important;
}
.badge-category-bg,
a[data-user-card] img[src*="https://avatars.discourse.org"] {
    filter: brightness(75%) !important;
}
@keyframes background-fade-highlight {
    0% {
        background-color: #333 !important;
    }
    100% {
        background-color: transparent !important;
    }
}
`];
var node = document.createElement("style");
node.type = "text/css";
node.appendChild(document.createTextNode(css));
document.documentElement.appendChild(node);
})();
