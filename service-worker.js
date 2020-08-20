if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"f0fbf1d7ca2d1f9a96abe467c0b585d3","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"f0fbf1d7ca2d1f9a96abe467c0b585d3","url":"index.html"},{"revision":"0d514df18ef3fda1e86896829704fc72","url":"precache-manifest.0d514df18ef3fda1e86896829704fc72.js"},{"revision":"a953d15be2c5bc7eb9075edd56dcab49","url":"static/css/17.d461d320.chunk.css"},{"revision":"9531be31773a874865c0651bfadd5bff","url":"static/js/0.8e290279.chunk.js"},{"revision":"c1eecbe56f14edca40c77e5a521210a0","url":"static/js/1.7b63f31c.chunk.js"},{"revision":"43d8fa81b8f9dfa28d298b0df78fbebb","url":"static/js/10.ddb8673b.chunk.js"},{"revision":"e05776fa462170cd8bf179d66159dbee","url":"static/js/11.5908afa1.chunk.js"},{"revision":"0c27340914085e99a7b72f6847c37595","url":"static/js/12.85d1056b.chunk.js"},{"revision":"15415f251fdab0463d8ed6de382c1179","url":"static/js/13.b7bd5b1b.chunk.js"},{"revision":"a95b216bf654431b4abf6e3a2337a931","url":"static/js/14.1c551295.chunk.js"},{"revision":"d82215d1681296bbded2be0bcc3883f6","url":"static/js/15.fc242336.chunk.js"},{"revision":"5185dc8267ab92e5a09af9075c9d97cf","url":"static/js/16.4bb7afb9.chunk.js"},{"revision":"495952e68c4b42fdb67915a79e84cd5c","url":"static/js/17.26b210bb.chunk.js"},{"revision":"f2336f74874e08d964073d0eaa92e059","url":"static/js/18.f96d6487.chunk.js"},{"revision":"4244d8e080d77e0d3ef57eb4f959e238","url":"static/js/19.105b81f9.chunk.js"},{"revision":"5879c108240c2e811b972bc8635364bd","url":"static/js/2.768cc01c.chunk.js"},{"revision":"cbef5c87a7d0a28fed5647d6c5f67817","url":"static/js/20.ccbdf2f0.chunk.js"},{"revision":"ca9e0a7cb2e15a59ec1aae3a633c4ea2","url":"static/js/21.172c63c6.chunk.js"},{"revision":"4aca6233cad3224e5e5d1b53cc649abc","url":"static/js/22.10fb5cf5.chunk.js"},{"revision":"c61fded4e11d0cd31095949f700ca53a","url":"static/js/23.6b62645a.chunk.js"},{"revision":"4475cc3f01cade273040b6a758c67999","url":"static/js/24.1533c573.chunk.js"},{"revision":"636ab505e1169d11dcedb00c8eb9e3d6","url":"static/js/25.915f3f6a.chunk.js"},{"revision":"faa7777e8e354842f62c22d123a7aa7a","url":"static/js/26.f9a70144.chunk.js"},{"revision":"9cbc039201ca7d22d53cc871e1eee824","url":"static/js/27.2dad9fd4.chunk.js"},{"revision":"8a03bf0472176de0c951891114b8a008","url":"static/js/28.89843973.chunk.js"},{"revision":"194adc8b3ead0c96231f3f2be083480c","url":"static/js/29.666b2f15.chunk.js"},{"revision":"9d3a0bef16927083e236c7c6c7fe2d89","url":"static/js/3.ee81e2f0.chunk.js"},{"revision":"97e3931cdeb3af4c4ed17786bf3b15de","url":"static/js/30.d10994b5.chunk.js"},{"revision":"20462d3d5cc71aca6670ef76b256e814","url":"static/js/31.951c45e1.chunk.js"},{"revision":"13b9d40d500a2b6c3d17e125ff0f755f","url":"static/js/32.b59a7a28.chunk.js"},{"revision":"92e177ed156698cc8dcab4ead8e65ba6","url":"static/js/33.98f95f0f.chunk.js"},{"revision":"0a3211a7b1c26f98980a675bf609268b","url":"static/js/34.87c034a4.chunk.js"},{"revision":"dc01be35f2d09b21219653f426739421","url":"static/js/35.ae151a00.chunk.js"},{"revision":"37492093eda0957d73e4f13b5fe730d2","url":"static/js/36.45059643.chunk.js"},{"revision":"83f314dce9543befd07cd9916a0a8fb3","url":"static/js/37.8d7abf85.chunk.js"},{"revision":"6c9a44ac15b440ce33306ea843168784","url":"static/js/38.7a6d0cbe.chunk.js"},{"revision":"0c265f574a1e93240163c3add149f2f2","url":"static/js/39.656f954e.chunk.js"},{"revision":"d057629bbb33ba56f3988e565f8ea1ba","url":"static/js/4.e911936c.chunk.js"},{"revision":"9250ec3845a2b410bd9e071f2b16c90c","url":"static/js/5.89651aa3.chunk.js"},{"revision":"7fcc2219c7bf57cf9e24a9549a126052","url":"static/js/6.04d55526.chunk.js"},{"revision":"9413e7998a4f2faa6968c654f60a2a1e","url":"static/js/9.1f81bc6a.chunk.js"},{"revision":"284007b0ecc6a60a5bfb0ed40b400c39","url":"static/js/main.20e28f54.chunk.js"},{"revision":"4849cb41cc90af98f92dde2aeece67a9","url":"static/js/runtime-main.587c7a13.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
