if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"957ee830df26cc7ecaa1ea60bf71412b","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"957ee830df26cc7ecaa1ea60bf71412b","url":"index.html"},{"revision":"2043e93ffadfcc3bdaad75946ccea6f9","url":"precache-manifest.2043e93ffadfcc3bdaad75946ccea6f9.js"},{"revision":"a953d15be2c5bc7eb9075edd56dcab49","url":"static/css/17.d461d320.chunk.css"},{"revision":"050e5d730bb106b2fce3d5aa84d710c9","url":"static/js/0.a99abdde.chunk.js"},{"revision":"c64c150f8c1aa2a4b62dcbdba1685d08","url":"static/js/1.616e9b21.chunk.js"},{"revision":"f61c913e26ffa421454a6cf74667faf7","url":"static/js/10.01966fec.chunk.js"},{"revision":"1c35166212e812eb752d8c6bc364ec84","url":"static/js/11.0c84a544.chunk.js"},{"revision":"65c48ce2c652df3973be2d199f314a58","url":"static/js/12.fbd86bf2.chunk.js"},{"revision":"50cf721c0b7ceaa9955f5f4e4c6a3835","url":"static/js/13.91e95643.chunk.js"},{"revision":"07f14648b23fc19109b6b770f856bf5f","url":"static/js/14.6c8a4fa4.chunk.js"},{"revision":"457859a8cba8706ac63e70f4575a6f06","url":"static/js/15.a937f270.chunk.js"},{"revision":"945f34a361a635ebd1deadd956eb2d15","url":"static/js/16.9268ccf2.chunk.js"},{"revision":"1a80ef7d22aec28de7575e052e97b52e","url":"static/js/17.7649206c.chunk.js"},{"revision":"0482fe706aae214d1eae3232c0d1d011","url":"static/js/18.25a3a547.chunk.js"},{"revision":"3e56a63c3edaebfdac7c37c987817d45","url":"static/js/19.abe6c945.chunk.js"},{"revision":"88f6a2b1f687a30dfda9ade8de98b9e8","url":"static/js/2.b95c06b0.chunk.js"},{"revision":"4fd4b3f8eb80b1c908ae1c9f347d4534","url":"static/js/20.0030c8f0.chunk.js"},{"revision":"cd7bd8678814262ae82503725309d4d5","url":"static/js/21.bd46d4ab.chunk.js"},{"revision":"fec682819bee9110dd0176592ce04c48","url":"static/js/22.79fe6d49.chunk.js"},{"revision":"2102a9806bd526b6e2f3abf09a0c516e","url":"static/js/23.cca02091.chunk.js"},{"revision":"da5e5d9dd2b157d05d58ea693a725d8f","url":"static/js/24.87bf0406.chunk.js"},{"revision":"6ee458e6b177e1301e192842c0de1d77","url":"static/js/25.56ded52a.chunk.js"},{"revision":"144d3214fce81c7efb118ff316b5fac6","url":"static/js/26.ab86368e.chunk.js"},{"revision":"7821e7ba5a252afc2ea2f28f955b85e4","url":"static/js/27.e30069af.chunk.js"},{"revision":"154d4da3d762cc9060a4dc63217aa190","url":"static/js/28.0b93cacc.chunk.js"},{"revision":"73aae990229be825ceafaf405a567a97","url":"static/js/29.582190da.chunk.js"},{"revision":"f0d99701b5043d73dbb53a2a5b5793ad","url":"static/js/3.a8d72fb1.chunk.js"},{"revision":"7cb89552a79853ab09d89aec6ff99d5b","url":"static/js/30.ec3bba10.chunk.js"},{"revision":"a51193196d7a5d312f2e5e3268445086","url":"static/js/31.abab1ea7.chunk.js"},{"revision":"d3b62453eecd366a50174f16e88e2d96","url":"static/js/32.b37bd800.chunk.js"},{"revision":"40976c04693b50a156125774ec3ca594","url":"static/js/33.b0e7e2fe.chunk.js"},{"revision":"f167b7303cd89b345dea303c2dc3ebf3","url":"static/js/34.b54451ee.chunk.js"},{"revision":"d829eb25a1865b1dd2f338551e39ff23","url":"static/js/35.068d7f3f.chunk.js"},{"revision":"41f5a30872f02fbf623e5829b9726c48","url":"static/js/36.5b3af842.chunk.js"},{"revision":"bf2271d766b40c7f178c0887a07b92ff","url":"static/js/37.532e0aca.chunk.js"},{"revision":"faaa7eac39a78592ab4c535238a7d4c8","url":"static/js/38.8f96ce8c.chunk.js"},{"revision":"c118d579aac230429896d273ac94bd94","url":"static/js/39.3be41b81.chunk.js"},{"revision":"2cd0bac14ef371ed6c13dded43f7c35a","url":"static/js/4.bfe5122f.chunk.js"},{"revision":"b282a882e62d9ecd907fa618242a1eb6","url":"static/js/5.d02bdf23.chunk.js"},{"revision":"3360a46b74ec987cb6e94f1c78b989f9","url":"static/js/6.08262ca9.chunk.js"},{"revision":"c0b43e245ad4691b9dfd69a46398156b","url":"static/js/9.1cc53a31.chunk.js"},{"revision":"abd0476593eb978fd071f3eda42b4c81","url":"static/js/main.37cc7586.chunk.js"},{"revision":"1e6e7e7bec027bd11b4d844d550f4650","url":"static/js/runtime-main.092b4370.js"}]);

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
