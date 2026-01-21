'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4165fcf27aa96e782b4e1fdd51fed54b",
"assets/AssetManifest.bin.json": "c183d0345b6c9690c5fc72a429e2f890",
"assets/assets/images/h1.jpeg": "bf33904f577fd57a138d0d26f65a7f03",
"assets/assets/images/h2.jpeg": "5d068d2d27483b8d055a687adb2ac471",
"assets/assets/images/h3.jpeg": "ad8f924cd5010c3319eca7cac405d53a",
"assets/assets/images/h4.jpeg": "5ba0421f34c7bc95f237e49cbf7e352e",
"assets/assets/images/h5.jpeg": "cfc04476c24e83cea941fd5e2e26fcf0",
"assets/assets/images/h6.jpeg": "ac3b701ca26d5f1f0932b297b664ba6f",
"assets/assets/images/l1.jpeg": "bd5ec6b5507ebffa5865da03d2bcb170",
"assets/assets/images/l10.jpeg": "1c7b431c0b3315d59411015a7dca93e3",
"assets/assets/images/l11.jpeg": "6e5ddb8d7c5f49e6705f925259eaf5f3",
"assets/assets/images/l12.jpeg": "15b8ce0712e3e0eee7c7952c840657e6",
"assets/assets/images/l13.jpeg": "384a6337780148aa5d9be8a29c1a86ee",
"assets/assets/images/l2.jpeg": "f3bcca9b546c52e4f821e2ae9f34d6c0",
"assets/assets/images/l3.jpeg": "9fac08c78f4ce9d51499e4fcad159e6b",
"assets/assets/images/l4.jpeg": "40e48325dd09285b8a9964a44ce2d1a4",
"assets/assets/images/l5.jpeg": "92293613371cc8111b04dac826103db3",
"assets/assets/images/l6.jpeg": "42a59ccbde7b2058c34e5e1b74c9dce9",
"assets/assets/images/l7.jpeg": "2d9ed84bd5bb26607f664b7d0ef50cf3",
"assets/assets/images/l8.jpeg": "c30fcd2313998b63416dcbbd55eba6ff",
"assets/assets/images/l9.jpeg": "72cc098b56e8671acc9fe7af29af99b9",
"assets/assets/images/profie1.jpeg": "25a3909ab034a4a9c8035545e8800ec0",
"assets/assets/images/profile.jpeg": "78bb643d8d4604756a5eb4d5359ccc28",
"assets/assets/images/q1.jpeg": "cf4291070d21d95eb803e0b9968ea80f",
"assets/assets/images/q10.jpeg": "213189f582d5f262d2da48897238edaa",
"assets/assets/images/q11.jpeg": "c0916628ba7362c07d58382abf62b981",
"assets/assets/images/q12.jpeg": "7ab98aa51d0c3e05791919e7d47599b6",
"assets/assets/images/q13.jpeg": "cf8978eae16d6de45ce73ae3ebf8322e",
"assets/assets/images/q2.jpeg": "f364e59baab5f3b0280d3e5bd4f716b7",
"assets/assets/images/q3.jpeg": "329d3bb8ac9ba3e8ed2c61087791bf05",
"assets/assets/images/q4.jpeg": "2554cc69556d998032b5db005e843b44",
"assets/assets/images/q5.jpeg": "d1f2752bbd28455b7f9d3b1bd883bfed",
"assets/assets/images/q6.jpeg": "9c039c5386b4d53ff0dd7ff47178b9c5",
"assets/assets/images/q7.jpeg": "8c75150b8814f1f156dbbb16faa9a3a2",
"assets/assets/images/q8.jpeg": "11a73262c7f56a8b8536f30bef3c3feb",
"assets/assets/images/q9.jpeg": "c1c5790adba9e8b7ab68c75033a03cd8",
"assets/assets/images/s1.jpeg": "1a634daf41ddbaebd5545f2c3d7165f1",
"assets/assets/images/s10.jpeg": "1f8bf9cb07e3c36573621aa78b23196c",
"assets/assets/images/s2.jpeg": "71b5cf5e5e7489c20222ae54807b0d13",
"assets/assets/images/s3.jpeg": "054eb0212343b2f9aeb89217d2a70fd7",
"assets/assets/images/s4.jpeg": "b069076a1be7f567dacd40eba530e766",
"assets/assets/images/s5.jpeg": "8ce6f06edc2d00249d97c8c38139e8d1",
"assets/assets/images/s6.jpeg": "343090ddd4b48cca39349abd0a31b19f",
"assets/assets/images/s7.jpeg": "3f29d0f23a60fb5ce7412fd751860e2e",
"assets/assets/images/s8.jpeg": "e68e32f3eb7b9bfe5bd974f3580fe805",
"assets/assets/images/s9.jpeg": "de21a9bd2ae973f060bfb1e3ea519368",
"assets/assets/images/t1.jpeg": "f0c31a49c7f387a0951280353fa24de9",
"assets/assets/images/t2.jpeg": "fb81ca1261a4758a7b979f46b952dceb",
"assets/assets/images/t3.jpeg": "5b7aae03ea5e1adeb325a093c14ac798",
"assets/assets/images/t4.jpeg": "4784c566fbcbf04f82d34fde2c80e5df",
"assets/assets/images/t5.jpeg": "3e8e05a59bd74f78135628e3ca4b9f66",
"assets/assets/images/t6.jpeg": "cde495bb347a5e0d39b87d5a5ddfc7f2",
"assets/assets/images/t7.jpeg": "14d0be3bd7f7b4642c83edbd068897c8",
"assets/assets/images/t8.jpeg": "4ead079522cab080ef50cbfe0600b45d",
"assets/assets/images/t9.jpeg": "88250b710925819dbf8b420d489da25d",
"assets/assets/images/y1.jpeg": "c86e7913a663082019a2548cba7abfa4",
"assets/assets/images/y10.jpeg": "5cc70d5640621715553294f3d1cfc293",
"assets/assets/images/y12.jpeg": "7d30f71ef13d00658c3f1a8675a876ad",
"assets/assets/images/y13.jpeg": "783db5b0cf42da4847e6e5ccdea8382b",
"assets/assets/images/y14.jpeg": "c892c1160d0155bcb5cce735c2746449",
"assets/assets/images/y15.jpeg": "78c7418f7b5b88cf83a7b5f28e2503d8",
"assets/assets/images/y16.jpeg": "ab4eb7aebab27e6b0566e6c9af99af3b",
"assets/assets/images/y2.jpeg": "5382d99285a02f99a2d4e51e8d8106ab",
"assets/assets/images/y3.jpeg": "5d48682f57243bce07e6515e353341a1",
"assets/assets/images/y4.jpeg": "b1cd11430d7a23e9c241041e5f8dc4cc",
"assets/assets/images/y5.jpeg": "daffb3eedbc35cd3609d1887647d9050",
"assets/assets/images/y6.jpeg": "fef2b77d3c022b016d760d49ce0ff07d",
"assets/assets/images/y7.jpeg": "c5783e34f0440199cca97c42b55297a3",
"assets/assets/images/y8.jpeg": "5e541c28e400ae18166fadf20733db5c",
"assets/assets/images/y9.jpeg": "e426b19a84f37f3730096310fcf5d50d",
"assets/assets/Shabana_M_A.pdf": "bddddc6fb0bcea56ea99025cde28da50",
"assets/FontManifest.json": "2c6d7a8f5251e62af8f849c6c99172d8",
"assets/fonts/MaterialIcons-Regular.otf": "a3c7bca9e9f2badfb311f9d4e49fa90d",
"assets/fonts/Spectral/Spectral-Medium.ttf": "bd7b2fbf172698f463734c9f9b0de319",
"assets/NOTICES": "b334ff495dc1564af6172df94e545e39",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "4180b81d4caf1d317fbb5b216625d1a9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9f7d411ecf183e54573918724d0efb88",
"/": "9f7d411ecf183e54573918724d0efb88",
"main.dart.js": "2d0833740f02a0676db8c192e705833d",
"manifest.json": "30a6ea85f38555c77870a57aeabe8211",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
