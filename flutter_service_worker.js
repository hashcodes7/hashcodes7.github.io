'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "81735de5c1112701122f9474053c7cc5",
".git/config": "ce02701a14bf82a309f910e30478ed2a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "169dc222c2bc584622e03339b6349c13",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ac9a58c7b016ff2ae59753315dc71263",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "94f1d4bf4e535307aa643849b226e3c3",
".git/logs/refs/heads/master": "94f1d4bf4e535307aa643849b226e3c3",
".git/logs/refs/remotes/origin/master": "27c7877cf8e5220675d335b75d3bb7f6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0c/21927ec1f1bc92ba63b4c5930beb0159efca36": "0a588fe483f26fda608073210abd5b87",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/79878594495277b502c1dc165b71387674f888": "2899e5591da477419d77938d4b28ce31",
".git/objects/15/81a9ef5010b6256e05f67b4ad60ffc38c5d971": "e063764995c6d47e35b252230a26052e",
".git/objects/19/783a76f86773f6bf238ed97eb9fa56f0b3f051": "66dfc75d07373d3636a67c458b45f894",
".git/objects/1b/df0fa6676d042dec3d5561daa732d054f0a87c": "454c5f30da54d95d42af677a4adaf063",
".git/objects/1d/72fc187a15150b7f2dfc4d0d8ebef8bc4a6564": "1999e1366dbf3290c34c5f10964102a4",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/5dd108c2dd680d93aae8e4a8c24b236bb8a015": "240f441d60b550656503f067123a508b",
".git/objects/23/f5b21aadae2ad911170fb5695ac2e750e556a6": "a326469cb587ae8371f06a5068217775",
".git/objects/29/2d6a0648b4865584e5fc52718a84839abef92f": "2eff5add0e63614e8ea1f4cecad47628",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/0734b04806026cebeda0b5221ff2468043599f": "fabcc2c55f8e0bfe59b360e5fdcd457e",
".git/objects/3b/1a85b11848da51da431b1b01e2b276ba4afa59": "c89cb8e3966572bb8fb71b5226e7b255",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/95bbdace08179f96d75195954d4f9850f48527": "b8099080225b99143b5ae2ba057259c6",
".git/objects/45/c3f4324cd0ddeeafb70210deee6ab21ad180d5": "fb7612d74882aa56212b7fde5f8edec5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/ef489992db8c57e6b05ff1b8b0cf279b1aa464": "826e98e4cf7783e0af35c9f207e4598b",
".git/objects/4d/0bc4c4204e2aed91626b05959990fc55e7f73d": "3c0a90ee05547d8c3776475d75763507",
".git/objects/4d/271f6179160ef474a234bf140c0bd398f56a82": "03fedc4172e023fef39ab61d460cf320",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/905ce96d8f11283aeea9fcb367e3f3a960a170": "4e1619ffe23f15657813df023b9261d4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/f7527782de355d5dfff2a9685b78f75f433c8e": "c255a58339526e10ccec14649e7a4b08",
".git/objects/59/d167e6acc79f153182ef648eee521ee7ef7e7c": "0365830beceaf5100729ea13182511e2",
".git/objects/60/0fc29ecea29964d5ab8f5201ab5636b8fb6093": "671f50a61533cabcc7b66d72e4e743a4",
".git/objects/62/2e2c1114191dfbe46cf77858e883ba300c8cbe": "b944308e4b2a60e94e38f07f65198087",
".git/objects/69/e0658348ea9e28e11edfbdf10d0b6b9e3c7ae4": "7f179afe647a5b82919ec6896f5a817d",
".git/objects/6c/3128b4e7fc9d9102f212fc0108debee163b8a2": "b3cd7f732a79df0dbdad947867dab158",
".git/objects/73/54663a663c240e17f66fa3caee89d833654055": "b234742a032c2ba9bf022b88c75f9ed1",
".git/objects/74/6b09fd72588355ed29eb2681f8bb2624330914": "eeeaae206ca7d0ca62fff3dafc722506",
".git/objects/77/7935120816fdb562c03e5edfdecaa04e080023": "4ae57752b9836ef93dcc520e281b3570",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9a/7854e5c4ba0c868d8c37885c379df070a3aaeb": "a855c519fe2a0576119d16885a87012e",
".git/objects/a4/2242307f77c43c5ab1f9c2ff5e6c5492d1ccb1": "fd601d5fa1989a4892dd11659b930306",
".git/objects/b1/ad9849516b4b77d88b306741511f916d1e6a98": "d4629bb8d1f5411b0d1d85986dc807c4",
".git/objects/b5/8c95209c22f36df2fb5f2043cc63a5bfee1847": "0cb972091fdcca7296a447530a775bf3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c6/c96cc68f838fbad42f5d915992927828768780": "8b9ddeb217359e66dceaabb93c9d8a5b",
".git/objects/d1/b37618cd22f7f454f49115a44be0c099e54d7c": "868b84c878737504474760c6756c9601",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/46b2857ef9a9bf438af099e37b70e4e6523e2b": "b1059c44cd03f44c2412d5b4b9238e6c",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f8/0895cb1f16ee8624f909566f06da93dcd92891": "f25699e85d21b905b2a32559f3838c47",
".git/objects/f8/371f954892963854127f367dba975812a9a5bb": "5a913b4a8645dec0a1f26a3f851d0991",
".git/objects/fc/d612c386d05f0e934739e7911bd08d77b1cce9": "60c94850d216b8e9b9a8f905a35fc790",
".git/refs/heads/master": "f2c0aa98a2cd3355e1ba179aa47a8d09",
".git/refs/remotes/origin/master": "f2c0aa98a2cd3355e1ba179aa47a8d09",
"assets/AssetManifest.bin": "b86839e1d8be19dc674fcc6243573296",
"assets/AssetManifest.bin.json": "7f6fab266bdb702bfe2a5d23a7485e3c",
"assets/AssetManifest.json": "1147fdb9cc214ec3d670c13d15aec04d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2997cae86b5abd36f13b6c2663450d67",
"assets/images/bg.png": "f892f8b6e66bd1d630e017d14c29123d",
"assets/images/hashcode.png": "c77cff844c168840be21fd1adfb4d3d7",
"assets/images/logo.jpg": "33f85ae4b62c8bbaf20283852fa74655",
"assets/NOTICES": "93bc589ec7c27ddefcc202d50011deba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "65a819222fed884258036e15dd5fa027",
"/": "65a819222fed884258036e15dd5fa027",
"main.dart.js": "473cc14f38a0abf1ec9c9ed49ffb34fc",
"manifest.json": "4f78b0d88a3c8b097168b5b42c6dd9d9",
"version.json": "977bdd24e587764900d6cadac31cd4cf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
