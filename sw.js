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
    "url": "webpack-runtime-51a9d4cb3bb0ba4045ff.js"
  },
  {
    "url": "app.7af311d02124029f32d8.css"
  },
  {
    "url": "app-48e1dbc4fa9dce9cb2d4.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-82054ffa54e838765069.js"
  },
  {
    "url": "index.html",
    "revision": "ba031e406fdd3f116d987936d726a61b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d42f4d0b4514df7c5e029a74d674e18d"
  },
  {
    "url": "0.014ac8b73a721d356678.css"
  },
  {
    "url": "component---src-pages-index-js.e14ce856e2c18568e5d8.css"
  },
  {
    "url": "1-7fce99b1eb217650cfd0.js"
  },
  {
    "url": "component---src-pages-index-js-97e44d10613199616bfc.js"
  },
  {
    "url": "0-c3c7706517113df7c004.js"
  },
  {
    "url": "static/d/166/path---index-6a9-3Ug68RrTEcVR6CxvtmMldznTKzA.json",
    "revision": "04b6d49cd8beb351982469951fc95707"
  },
  {
    "url": "component---src-pages-404-js-a4c35a5bf6da86f451a9.js"
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