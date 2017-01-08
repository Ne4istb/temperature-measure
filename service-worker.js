/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["3rdParty/chartjs/Chart.min.js","3614a310ec3347334e61c4af9b8bddfb"],["3rdParty/datepicker/css/mdDateTimePicker.min.css","fe2f173d30749c514100f258b4f700c0"],["3rdParty/datepicker/css/themes/dark/amber/mdDateTimePicker.css","4af1f2236b642ccd1c61da12adeb3cc3"],["3rdParty/datepicker/css/themes/dark/amber/mdDateTimePicker.min.css","b8b428417c21de3c390155d3743a2361"],["3rdParty/datepicker/css/themes/dark/blue-grey/mdDateTimePicker.css","0527281593f63c9f41e2d71e18e59c49"],["3rdParty/datepicker/css/themes/dark/blue-grey/mdDateTimePicker.min.css","b7dd4f8359b3dfc4440ac2c014bddb98"],["3rdParty/datepicker/css/themes/dark/blue/mdDateTimePicker.css","4e5a9a7f0d04eb137177d78e87a1ada1"],["3rdParty/datepicker/css/themes/dark/blue/mdDateTimePicker.min.css","fae6d05898eadb3c6119ddad6189b2e6"],["3rdParty/datepicker/css/themes/dark/brown/mdDateTimePicker.css","9ed147d243b18fb0408972c83092f44e"],["3rdParty/datepicker/css/themes/dark/brown/mdDateTimePicker.min.css","e946a3fdcedc8b9a2278fa6ac47a1cd7"],["3rdParty/datepicker/css/themes/dark/cyan/mdDateTimePicker.css","930c457fac0b3da7da327121bfda5532"],["3rdParty/datepicker/css/themes/dark/cyan/mdDateTimePicker.min.css","c6d4d513b457d5b50d895d04559c6709"],["3rdParty/datepicker/css/themes/dark/deep-orange/mdDateTimePicker.css","06b65fd026626ea0ed1fe4fd06a164b9"],["3rdParty/datepicker/css/themes/dark/deep-orange/mdDateTimePicker.min.css","78a320f5d58d792276b1df1e4404915d"],["3rdParty/datepicker/css/themes/dark/deep-purple/mdDateTimePicker.css","71d21c5edd4250c7e0396b168b725ed6"],["3rdParty/datepicker/css/themes/dark/deep-purple/mdDateTimePicker.min.css","a89327e5c8f4c6ecc1dc3387ab6937db"],["3rdParty/datepicker/css/themes/dark/green/mdDateTimePicker.css","77e320c2b7324636aa801be7ffb936f9"],["3rdParty/datepicker/css/themes/dark/green/mdDateTimePicker.min.css","ff2d74cb3f609e6b9a8b6e5431407820"],["3rdParty/datepicker/css/themes/dark/grey/mdDateTimePicker.css","fe7460cdec7ad4f7a65e9ab985610550"],["3rdParty/datepicker/css/themes/dark/grey/mdDateTimePicker.min.css","153c7d3c9da71cf931d1e05aaa5823c8"],["3rdParty/datepicker/css/themes/dark/indigo/mdDateTimePicker.css","40ed9fb2604c687746a86009aee01d15"],["3rdParty/datepicker/css/themes/dark/indigo/mdDateTimePicker.min.css","3c76477d60d5344d1aca3262fa793a43"],["3rdParty/datepicker/css/themes/dark/light-blue/mdDateTimePicker.css","c6a66004f40236cba45b2b2c7391569c"],["3rdParty/datepicker/css/themes/dark/light-blue/mdDateTimePicker.min.css","1420eede648c30398af46bdbd33c5396"],["3rdParty/datepicker/css/themes/dark/light-green/mdDateTimePicker.css","9d10a2afb404486bdf4e542eaa4ba834"],["3rdParty/datepicker/css/themes/dark/light-green/mdDateTimePicker.min.css","e1df7a0de29eaca691709e9426188e6f"],["3rdParty/datepicker/css/themes/dark/lime/mdDateTimePicker.css","540b4d32ef7a583e9bac74eb73d6d2fe"],["3rdParty/datepicker/css/themes/dark/lime/mdDateTimePicker.min.css","330df0993ddb6a5dc6af5905dd93fed2"],["3rdParty/datepicker/css/themes/dark/orange/mdDateTimePicker.css","9ca3d2ebd1b4215fbadaaa061c76a58d"],["3rdParty/datepicker/css/themes/dark/orange/mdDateTimePicker.min.css","74e48c716d6032a730e33cb03b854cbc"],["3rdParty/datepicker/css/themes/dark/pink/mdDateTimePicker.css","55278769b425a427785be0a59f960e09"],["3rdParty/datepicker/css/themes/dark/pink/mdDateTimePicker.min.css","d8739421eedd2b19aebbbe08d98c887e"],["3rdParty/datepicker/css/themes/dark/purple/mdDateTimePicker.css","cacc016cb7a7eab1ee150907126fe9a3"],["3rdParty/datepicker/css/themes/dark/purple/mdDateTimePicker.min.css","c6b14eaa4a29b3debbf75e2da01ca65e"],["3rdParty/datepicker/css/themes/dark/red/mdDateTimePicker.css","7ea0ad1969894e04fc567756ce913254"],["3rdParty/datepicker/css/themes/dark/red/mdDateTimePicker.min.css","aeedada1b9d6f51c03107888ab3fb724"],["3rdParty/datepicker/css/themes/dark/teal/mdDateTimePicker.css","92e6762abf00121de5d63aefca00d1a1"],["3rdParty/datepicker/css/themes/dark/teal/mdDateTimePicker.min.css","232c9f75f784c4d2387c758dd589c6a7"],["3rdParty/datepicker/css/themes/dark/yellow/mdDateTimePicker.css","dbcad14826f7147c0f41eb47b852ad11"],["3rdParty/datepicker/css/themes/dark/yellow/mdDateTimePicker.min.css","30dbfca6aa602e11cc9126278f74895c"],["3rdParty/datepicker/css/themes/light/amber/mdDateTimePicker.css","68508e35574852db4527257c503a3228"],["3rdParty/datepicker/css/themes/light/amber/mdDateTimePicker.min.css","e69d15a3aa3d7bd7fe3a1820cb7d5323"],["3rdParty/datepicker/css/themes/light/blue-grey/mdDateTimePicker.css","da212be26559d3d797967b47123dda29"],["3rdParty/datepicker/css/themes/light/blue-grey/mdDateTimePicker.min.css","2f1e8bc1c3acba23ebddf423422f1689"],["3rdParty/datepicker/css/themes/light/blue/mdDateTimePicker.css","df5d4749bb408641c8f1012973fcb5fc"],["3rdParty/datepicker/css/themes/light/blue/mdDateTimePicker.min.css","7d04c89af814f91306ee391ebc11c20f"],["3rdParty/datepicker/css/themes/light/brown/mdDateTimePicker.css","73c41bd38157b1788fd891a9055b4596"],["3rdParty/datepicker/css/themes/light/brown/mdDateTimePicker.min.css","d33c5890f94565d66961d58e14ae27ef"],["3rdParty/datepicker/css/themes/light/cyan/mdDateTimePicker.css","b4c225c1de61147f3523c7ee4746e89c"],["3rdParty/datepicker/css/themes/light/cyan/mdDateTimePicker.min.css","0c72ff02b67ed4495ffbb5cfab342b37"],["3rdParty/datepicker/css/themes/light/deep-orange/mdDateTimePicker.css","07d4480896da20fac928c6127cf56556"],["3rdParty/datepicker/css/themes/light/deep-orange/mdDateTimePicker.min.css","a875630ef25665d6acc5a419d4c8e579"],["3rdParty/datepicker/css/themes/light/deep-purple/mdDateTimePicker.css","43528a24f2906fe4acdeb07818e042ec"],["3rdParty/datepicker/css/themes/light/deep-purple/mdDateTimePicker.min.css","93ed7520babf5d51fe4cd740943c6246"],["3rdParty/datepicker/css/themes/light/green/mdDateTimePicker.css","8703f6a0b6c2b78ed2ee6e3f1b5279f7"],["3rdParty/datepicker/css/themes/light/green/mdDateTimePicker.min.css","768204aa0d153230ee2a0a4c2d603a01"],["3rdParty/datepicker/css/themes/light/grey/mdDateTimePicker.css","c8671990c7a0202f569e9008fd5e8461"],["3rdParty/datepicker/css/themes/light/grey/mdDateTimePicker.min.css","e7ab1d55ac5b85a5c8d8f2643b00bbf9"],["3rdParty/datepicker/css/themes/light/indigo/mdDateTimePicker.css","6b21620f09c27b5d11e26189206ca8c1"],["3rdParty/datepicker/css/themes/light/indigo/mdDateTimePicker.min.css","977d30ae257ec34ecac1ba870278751a"],["3rdParty/datepicker/css/themes/light/light-blue/mdDateTimePicker.css","efc862c2f3b4ee865620319459c33a8f"],["3rdParty/datepicker/css/themes/light/light-blue/mdDateTimePicker.min.css","236efe91fc662616d404c3deddf5d4c8"],["3rdParty/datepicker/css/themes/light/light-green/mdDateTimePicker.css","ef2b817666c2df3bbba77c88f90da4a3"],["3rdParty/datepicker/css/themes/light/light-green/mdDateTimePicker.min.css","1dc77c8cf21d42b1312262dda457a6d4"],["3rdParty/datepicker/css/themes/light/lime/mdDateTimePicker.css","7fc8cae831a4b5a37436346464ba56a1"],["3rdParty/datepicker/css/themes/light/lime/mdDateTimePicker.min.css","dd241de720df126542a0e83035ce62d2"],["3rdParty/datepicker/css/themes/light/orange/mdDateTimePicker.css","afa6196ed85afea4afa9a31433e6a447"],["3rdParty/datepicker/css/themes/light/orange/mdDateTimePicker.min.css","58c702afbc87bcb66f77f407e754613f"],["3rdParty/datepicker/css/themes/light/pink/mdDateTimePicker.css","a78fa4204fce8b43622d907803abc59c"],["3rdParty/datepicker/css/themes/light/pink/mdDateTimePicker.min.css","85059b6bb4f1f67f43c2eacb17fcd3a7"],["3rdParty/datepicker/css/themes/light/purple/mdDateTimePicker.css","91fb1d38a179b2aa5e155262830594ed"],["3rdParty/datepicker/css/themes/light/purple/mdDateTimePicker.min.css","e7cadf4327d39a08f4de7518c66f3a6e"],["3rdParty/datepicker/css/themes/light/red/mdDateTimePicker.css","662b03697697c6349405eb14fd247cac"],["3rdParty/datepicker/css/themes/light/red/mdDateTimePicker.min.css","c35e73361688c6228930a802968921a3"],["3rdParty/datepicker/css/themes/light/teal/mdDateTimePicker.css","9a3f36015775a88322373dc9e8fb7196"],["3rdParty/datepicker/css/themes/light/teal/mdDateTimePicker.min.css","fe2f173d30749c514100f258b4f700c0"],["3rdParty/datepicker/css/themes/light/yellow/mdDateTimePicker.css","2482a281f5749485171cc736067d6643"],["3rdParty/datepicker/css/themes/light/yellow/mdDateTimePicker.min.css","2c61d03ccdb69af89ac422bc7c0798b8"],["3rdParty/datepicker/fonts/RobotoTTF/Roboto-Black.ttf","f3fa86edfc2b810bf7a3ea7cf010d292"],["3rdParty/datepicker/fonts/RobotoTTF/Roboto-BlackItalic.ttf","9f20f4981384a94cc84002246a32a0e3"],["3rdParty/datepicker/fonts/RobotoTTF/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["3rdParty/datepicker/fonts/RobotoTTF/Roboto-BoldItalic.ttf","b03c5eb442028f11bc008e89f46861f6"],["3rdParty/datepicker/fonts/RobotoTTF/Roboto-Italic.ttf","549ec3575943fef98f76b46924ff5efa"],["3rdParty/datepicker/fonts/RobotoTTF/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["3rdParty/datepicker/fonts/RobotoTTF/Roboto-LightItalic.ttf","4356190d747fe8bea2bc7c83f25102fa"],["3rdParty/datepicker/fonts/RobotoTTF/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["3rdParty/datepicker/fonts/RobotoTTF/Roboto-MediumItalic.ttf","95d764651a918ce24b4116a00a6970a0"],["3rdParty/datepicker/fonts/RobotoTTF/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["3rdParty/datepicker/fonts/RobotoTTF/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["3rdParty/datepicker/fonts/RobotoTTF/Roboto-ThinItalic.ttf","8f066370a8530a3f3e971b8e274b7ddf"],["3rdParty/datepicker/fonts/RobotoTTF/RobotoCondensed-Bold.ttf","7ff4438405bfb9fe87b606ca356ba6a0"],["3rdParty/datepicker/fonts/RobotoTTF/RobotoCondensed-BoldItalic.ttf","14029990066c7a7de585796da3051274"],["3rdParty/datepicker/fonts/RobotoTTF/RobotoCondensed-Italic.ttf","91da52a33975cf60ad43e42728b1438e"],["3rdParty/datepicker/fonts/RobotoTTF/RobotoCondensed-Light.ttf","cf4449c1884598b292630aa9f4007c19"],["3rdParty/datepicker/fonts/RobotoTTF/RobotoCondensed-LightItalic.ttf","52019ea2430e3a035f4c458f318bec4c"],["3rdParty/datepicker/fonts/RobotoTTF/RobotoCondensed-Regular.ttf","e6fd95f0cb839566476ec9b6df34849c"],["3rdParty/datepicker/images/ic_keyboard_arrow_left_black_24px.svg","6f5638b070584aff95fe8fa9d8542e20"],["3rdParty/datepicker/images/ic_keyboard_arrow_left_black_disabled_24px.svg","cfa142ded88ec9b22bacdedc3211bf3f"],["3rdParty/datepicker/images/ic_keyboard_arrow_left_white_24px.svg","41de87600e058a149c65ffc7863df4a8"],["3rdParty/datepicker/images/ic_keyboard_arrow_left_white_disabled_24px.svg","015587a31dc651f40bd618c121c6146a"],["3rdParty/datepicker/images/ic_keyboard_arrow_right_black_24px.svg","a530fa70bc5d9ad3086229de9d2081f5"],["3rdParty/datepicker/images/ic_keyboard_arrow_right_black_disabled_24px.svg","17b2b2cd12f1ece2a551be552ce03c1d"],["3rdParty/datepicker/images/ic_keyboard_arrow_right_white_24px.svg","db9c0a58ca91d0707c1e3563417020de"],["3rdParty/datepicker/images/ic_keyboard_arrow_right_white_disabled_24px.svg","831d653f9f4b46cd7d660760733e8c90"],["3rdParty/datepicker/js/draggabilly.pkgd.min.js","c79accb48cd34001881de69afd150438"],["3rdParty/datepicker/js/lang/de.js","b956fb6c87d4c526c309ca7b4ecb6a93"],["3rdParty/datepicker/js/lang/fr.js","e46c4b6e4d94ca8da23b7cb5860378fe"],["3rdParty/datepicker/js/mdDateTimePicker.min.js","a7547d138e9a73310ced81feae3e2639"],["3rdParty/datepicker/js/moment.min.js","03c1d3ad0acf482f87368e3ea7af14c2"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["index.html","b069bad624fff81b2cb70fe1f2bba580"],["manifest.json","b4aa0ceaefd3335426f4748fea494de6"],["scripts/main.min.js","d7e92b6ed5719546be26f6d935f3d737"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["styles/main.css","3c41d9990926db1c826ca1fd7d899e56"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-ne4istb-temperature-v0.4-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




