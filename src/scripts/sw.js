/* eslint-disable no-unused-vars */

import CacheHelper from './utils/cache-helper'

const { assets } = global.serviceWorkerOption

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']))
})

self.addEventListener('activate', (event) => {
  event.respondWith(CacheHelper.deleteOldCache())
})

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request))
})
