importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/150bb30ce7621105e540.js",
    "revision": "e504db990acf994053e2582efbdc2e27"
  },
  {
    "url": "/_nuxt/7e97ce78d138cc93e648.js",
    "revision": "ef76795bbcce1af063ff95babcc8e327"
  },
  {
    "url": "/_nuxt/ac277505c44154d12af5.js",
    "revision": "85dc6bfda15b72a100dda6f6d5127ebb"
  },
  {
    "url": "/_nuxt/ae30404b63671f56892b.js",
    "revision": "9316f3506616c3aebad0dfb82d07ee7c"
  },
  {
    "url": "/_nuxt/b686d23d7e503c94f284.js",
    "revision": "ab0599e742ed37c3aaa1aef5358c299b"
  },
  {
    "url": "/_nuxt/e086b003a5a834c0e0c5.js",
    "revision": "3cb1f6507dd7e73e6e1a6452789dab85"
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





