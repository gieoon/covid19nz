if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"493eb4eb566e215e2babe5b34ec47ab6","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"493eb4eb566e215e2babe5b34ec47ab6","url":"index.html"},{"revision":"17a4401f13615335da577b0214a0dd34","url":"precache-manifest.17a4401f13615335da577b0214a0dd34.js"},{"revision":"a953d15be2c5bc7eb9075edd56dcab49","url":"static/css/17.d461d320.chunk.css"},{"revision":"9d7d166345a10c9641f97225efda1a00","url":"static/js/0.345089d0.chunk.js"},{"revision":"c64c150f8c1aa2a4b62dcbdba1685d08","url":"static/js/1.616e9b21.chunk.js"},{"revision":"f61c913e26ffa421454a6cf74667faf7","url":"static/js/10.01966fec.chunk.js"},{"revision":"1c35166212e812eb752d8c6bc364ec84","url":"static/js/11.0c84a544.chunk.js"},{"revision":"f7bd348c962e7d5eb77c9477a816764e","url":"static/js/12.fcadc0cb.chunk.js"},{"revision":"50cf721c0b7ceaa9955f5f4e4c6a3835","url":"static/js/13.91e95643.chunk.js"},{"revision":"3844d0c227e81b9d028ccb48043eaee7","url":"static/js/14.469062e2.chunk.js"},{"revision":"41871641d4b351201fabe3d3e4449ebf","url":"static/js/15.999ce152.chunk.js"},{"revision":"945f34a361a635ebd1deadd956eb2d15","url":"static/js/16.9268ccf2.chunk.js"},{"revision":"1a80ef7d22aec28de7575e052e97b52e","url":"static/js/17.7649206c.chunk.js"},{"revision":"0482fe706aae214d1eae3232c0d1d011","url":"static/js/18.25a3a547.chunk.js"},{"revision":"7e90380071d60a458a23986cb8df6ef3","url":"static/js/19.2714e7b5.chunk.js"},{"revision":"88f6a2b1f687a30dfda9ade8de98b9e8","url":"static/js/2.b95c06b0.chunk.js"},{"revision":"4fd4b3f8eb80b1c908ae1c9f347d4534","url":"static/js/20.0030c8f0.chunk.js"},{"revision":"4e099920c1403477fa07be991195908e","url":"static/js/21.85e3875a.chunk.js"},{"revision":"3173fd8bb43bf69c20ff98c8a51d4405","url":"static/js/22.c27b93f2.chunk.js"},{"revision":"8cade60f8c1b73972c30ac92d795f2ab","url":"static/js/23.dc7bad6a.chunk.js"},{"revision":"13cecdab3e37182d69dcdf89fa4ed4fd","url":"static/js/24.c4c8f888.chunk.js"},{"revision":"23f81101fe3a4742ce84df326ccf4137","url":"static/js/25.c46d96b3.chunk.js"},{"revision":"5caf13cccbb566001a053c86aa311f3f","url":"static/js/26.8b0e348b.chunk.js"},{"revision":"e2016cdf7c090440f2167afb6d67a5fc","url":"static/js/27.daab0e58.chunk.js"},{"revision":"9cbb06f8d29e4ca596303ef827eeae5e","url":"static/js/28.0c70961a.chunk.js"},{"revision":"73aae990229be825ceafaf405a567a97","url":"static/js/29.582190da.chunk.js"},{"revision":"f0d99701b5043d73dbb53a2a5b5793ad","url":"static/js/3.a8d72fb1.chunk.js"},{"revision":"7cb89552a79853ab09d89aec6ff99d5b","url":"static/js/30.ec3bba10.chunk.js"},{"revision":"7f6208613a72b10ae2130c0e05383292","url":"static/js/31.2e6314be.chunk.js"},{"revision":"d3b62453eecd366a50174f16e88e2d96","url":"static/js/32.b37bd800.chunk.js"},{"revision":"744b9e649b27e8ea27699e8e169b0621","url":"static/js/33.775883c8.chunk.js"},{"revision":"92df973a357a1bd9294f68b135d92e38","url":"static/js/34.97c94c29.chunk.js"},{"revision":"73fa75fc4ed534a3ee51a7ef9dd0b324","url":"static/js/35.49fd5cc0.chunk.js"},{"revision":"b8546407f8d6021425c7ead98554428f","url":"static/js/36.07b8789c.chunk.js"},{"revision":"bf2271d766b40c7f178c0887a07b92ff","url":"static/js/37.532e0aca.chunk.js"},{"revision":"a89aa5aeb3cb385a2c5d61f064b7fd94","url":"static/js/38.ce2f84ad.chunk.js"},{"revision":"c118d579aac230429896d273ac94bd94","url":"static/js/39.3be41b81.chunk.js"},{"revision":"2cd0bac14ef371ed6c13dded43f7c35a","url":"static/js/4.bfe5122f.chunk.js"},{"revision":"b282a882e62d9ecd907fa618242a1eb6","url":"static/js/5.d02bdf23.chunk.js"},{"revision":"e57eaf1379e51f600df27a79c79dc3f3","url":"static/js/6.6b66dd09.chunk.js"},{"revision":"c0b43e245ad4691b9dfd69a46398156b","url":"static/js/9.1cc53a31.chunk.js"},{"revision":"8f040d4f446d1614777bb4f2c73ea470","url":"static/js/main.baed9fc6.chunk.js"},{"revision":"2b3f15807e0d158211643906cbbfdbf3","url":"static/js/runtime-main.e2276d8c.js"}]);

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
