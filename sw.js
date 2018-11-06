/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-2a098623df5bc7fbfb67.js"
  },
  {
    "url": "app.ff93035319d90e441538.css"
  },
  {
    "url": "app-9212f6833c68163ae2e1.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-554ad6c315bad65ba8cc.js"
  },
  {
    "url": "index.html",
    "revision": "785d1e2741f059ee5c7e90b00ef1ca60"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "40aa3701adf493048fbb549d15428247"
  },
  {
    "url": "0.014ac8b73a721d356678.css"
  },
  {
    "url": "0-3728636181e81b70df77.js"
  },
  {
    "url": "component---src-pages-index-js-af984fd4ba67375c570b.js"
  },
  {
    "url": "1-a7c7a578685302f688ec.js"
  },
  {
    "url": "static/d/166/path---index-6a9-3Ug68RrTEcVR6CxvtmMldznTKzA.json",
    "revision": "04b6d49cd8beb351982469951fc95707"
  },
  {
    "url": "component---src-pages-404-js-7f0c48a4a28f646859d7.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "fdcef60220400b3010a56f066f52b87a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});