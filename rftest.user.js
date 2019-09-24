// ==UserScript==
// @name          RF Testing Interface - Dark
// @namespace     Rnksts
// @version       1.0.0
// @homepage      https://github.com/Rnksts/UserCSS
// @description   Dark theme for the RF Testing Interface
// @license       CC-BY-SA-4.0
// @author        Rnksts
// @include       https://tester.rainforestqa.com/tester/*
// @run-at        document-start
// ==/UserScript==
(function() {var css = [`html,
body {
    background-color: #111 !important;
}
div[class^="modal_content"],
div[class^="contract_contract_"] {
    color: #dadada !important;
    background-color: #111 !important;
}
div[class^="modal_footer"],
div[class^="finished_footer"] {
    background-color: #1f1f1f !important;
}
div[class^="ReactModal__Content"] {
    background-color: #111 !important;
    border: 1px solid #757575 !important;
    border-radius: 15px !important;
}
p[class^="guide_reminder"],
div[class^="quoteReminder_container"],
div[class^="reportModal_reminder"],
div[class^="reminders_container"] {
    color: #dadada !important;
    background-color: #312f00 !important;
}
div[class^="steps_assignmentId"] > span {
    color: #199ad9 !important;
    font-weight: 600 !important;
}
div[class^="steps_stepWrapper"] {
    border-left-color: #757575 !important;
    border-right-color: #757575 !important;
}
div[class^="steps_steps"],
div[class^="instructions_instructionsWrapper"],
div[class^="terminal_toolbar"] {
    background-color: #1a1a1a !important;
    color: #d1d1d1 !important;
}
div[class^="reminders_container"] > button {
    background-color: #949494 !important;
    color: #fff !important;
    border: solid 1px #2d2d2d !important;
}
div[class^="reminders_container"] > button:hover {
    background-color: #adadad !important;
}
div[class^="terminal_trackingContainerWrapper"] {
    background-color: #2d2d2d !important;
}
span[class^="clickToCopy_holder"],
a[class^="inlineScreenshot_link"] {
    background-color: rgba(95, 95, 95, .3) !important;
}
span[class^="clickToCopy_holder"]:hover,
a[class^="inlineScreenshot_link"]:hover {
    background-color: rgba(140, 140, 140, .3) !important;
}
div[class^="steps_step_"] > svg,
div[class^="instructions_collapseBtn"] > svg,
span[class^="clickToCopy_holder"] > span > button > div > svg {
    fill: #cac9c9 !important;
    color: #fff !important;
}
div[class^="reportModal_actions"] {
    background-color: #1f1f1f !important;
}
div[class^="steps_assignmentId"],
div[class^="reportModal_title"],
div[class^="reportModal_hintText"],
div[class^="terminal_placeholder"],
div[class^="finished_main"],
div[class^="finished_holder"],
div[class^="thanks_holder"],
div[class^="misc_abandoned"],
div[class^="waitingForPreview_text"] {
    color: #dadada !important;
}
div[class^="finished_main"] > div > div:nth-child(5) > div:nth-child(1) {
    color: #7a7a7a !important;
}
input#NPSComment {
    color: #d5d5d5 !important;
}
div[class^="ReactModal__Overlay"] {
background-color: rgba(20, 20, 20, .85) !important;
}
`];
var node = document.createElement("style");
node.type = "text/css";
node.appendChild(document.createTextNode(css));
document.documentElement.appendChild(node);
})();
