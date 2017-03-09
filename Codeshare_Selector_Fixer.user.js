// ==UserScript==
// @name        Codeshare Selector Fixer
// @require     https://code.jquery.com/jquery-3.1.1.min.js
// @namespace   Codeshare Selector Fixer
// @description Change default highlight selection color to let you view correctly selected text && disable save hotkey
// @include     https://codeshare.io/*
// @version     1
// @grant       none
// ==/UserScript==

$(".cm-s-monokai").css({"font-size": "18px", "color":"red", "background-color":"black"});

document.onkeydown = function (e) {
    e = e || window.event;//Get event
    if (e.ctrlKey) {
        var c = e.which || e.keyCode;//Get key code
        switch (c) {
            case 83://Disable Ctrl+S
                e.preventDefault();     
                e.stopPropagation();
            break;
        }
    }
};
