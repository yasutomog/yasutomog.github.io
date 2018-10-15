importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/150bb30ce7621105e540.js",
    "revision": "e504db990acf994053e2582efbdc2e27"
  },
  {
    "url": "/_nuxt/6ae5e68974d5af3762e2.js",
    "revision": "ecad8b3e69d02bfc02f2c65552828092"
  },
  {
    "url": "/_nuxt/a4e56623652754863dcf.js",
    "revision": "a133598435dc2b6f6b7708fcb3e9dbb2"
  },
  {
    "url": "/_nuxt/ae30404b63671f56892b.js",
    "revision": "9316f3506616c3aebad0dfb82d07ee7c"
  },
  {
    "url": "/_nuxt/e086b003a5a834c0e0c5.js",
    "revision": "3cb1f6507dd7e73e6e1a6452789dab85"
  },
  {
    "url": "/_nuxt/fd597d14fe5b6489d0cd.js",
    "revision": "902182fdd9df33a98c519bfdf3abddf3"
  }
], {
  "cacheId": "book-management-nuxt-pwa",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





