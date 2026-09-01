// ==UserScript==
// @name Beta MoonCEBC Loader
// @namespace https://www.bondageprojects.com/
// @version 1.0.0
// @description Addon for viewing and customizing card decks without Npc room.
// @author Lunar Kitsunify
// @match https://www.bondage-europe.com/*
// @match https://www.bondageprojects.com/*
// @match https://www.bondage-asia.com/*
// @match https://bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://bondageprojects.com/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant none
// @run-at document-end
// ==/UserScript==

(function () {
  "use strict";
  var script = document.createElement("script");
  script.type = "module";
  script.setAttribute("crossorigin", "anonymous");
  //script.src = `https://lunarkitsunify.github.io/MoonCEBC/MoonCEBC.js?${Date.now()}`;
  script.src = `https://raw.githubusercontent.com/LunarKitsunify/MoonCEBC/Test/MoonCEBCLoader.user.js?${Date.now()}`;
  document.head.appendChild(script);
})();
