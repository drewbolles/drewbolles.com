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
    "url": "webpack-runtime-57a32643226f8c33e01e.js"
  },
  {
    "url": "app.ecd7bcd531ddaa78af7f.css"
  },
  {
    "url": "app-5ac5222c96cb1726bea2.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-775ada8cbed66d0c0855.js"
  },
  {
    "url": "index.html",
    "revision": "5cc9112e6b3874064bd211b49b8a4aef"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "15dc39b5502985f7122efae1943bcd0a"
  },
  {
    "url": "0.e8bebcd4e2821352221d.css"
  },
  {
    "url": "component---src-pages-index-js.e3739246878e8ea7d52a.css"
  },
  {
    "url": "1-c1aa86005bf2bf38cfb7.js"
  },
  {
    "url": "component---src-pages-index-js-76a11ce604856eccb889.js"
  },
  {
    "url": "0-a366b326e30ad379e2c0.js"
  },
  {
    "url": "static/d/195/path---index-6a9-JhljqwBRlTFSloZwCQ5BSB6Zo.json",
    "revision": "fe7c961fec89c747f4163c5124e501f3"
  },
  {
    "url": "component---src-pages-404-js-c1fedfb61e0abe844cae.js"
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

workbox.routing.registerNavigationRoute("/gatsby-starter-blog/offline-plugin-app-shell-fallback/index.html", {
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