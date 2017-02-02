// ==UserScript==
// @name        Codeshare Selector Fixer
// @require     https://code.jquery.com/jquery-3.1.1.min.js
// @namespace   Codeshare Selector Fixer
// @description Change default highlight selection color to let you view correctly selected text
// @include     https://codeshare.io/*
// @version     1
// @grant       none
// ==/UserScript==

$(".cm-s-monokai").css({"font-size": "18px", "color":"red", "background-color":"black"});
