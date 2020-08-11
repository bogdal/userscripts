// ==UserScript==
// @name         Strava - Remove the 'Give a Subscription' button
// @namespace    https://github.com/bogdal/userscripts
// @version      0.1
// @description  Removes the 'Give a Subscription' button from the top bar
// @author       Adam Bogdał
// @match        https://www.strava.com/*
// @grant        none
// @license      MIT
// @run-at       document-start
// ==/UserScript==

(document.head || document.documentElement).insertAdjacentHTML(
  "beforeend",
  "<style>.user-nav .nav-item.upgrade { display: none!important; }</style>"
);
