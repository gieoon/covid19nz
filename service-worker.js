if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"518712e78e9fa77e914d5359a388e3d1","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"518712e78e9fa77e914d5359a388e3d1","url":"index.html"},{"revision":"e991c8f5ef1324cda279b1a891a14e4c","url":"precache-manifest.e991c8f5ef1324cda279b1a891a14e4c.js"},{"revision":"5c6ce8b2ba704d01066325a5d1aaa36e","url":"static/css/15.6eaf2a10.chunk.css"},{"revision":"f0e4f4359e15d7c56db35d7d507c6d59","url":"static/js/0.7b66e831.chunk.js"},{"revision":"d0528b1e23c3ddb08e0490318ba97688","url":"static/js/1.27e41360.chunk.js"},{"revision":"43d02a6deba6f228c54d61c0d54f20fc","url":"static/js/10.3a8d0cf6.chunk.js"},{"revision":"295c15ad583bb6a2bdf330cc6b2c0ccf","url":"static/js/11.6e97b9e4.chunk.js"},{"revision":"30f8d6decffd0116cdd20ff996ca1ea1","url":"static/js/12.82a68b39.chunk.js"},{"revision":"d58d16eacff0e4ad34916b43ecb013a5","url":"static/js/13.dac12f46.chunk.js"},{"revision":"a248cc1cd60b67237c338040081ec462","url":"static/js/14.1a7dae6e.chunk.js"},{"revision":"e84607f1f0a4c8f06855558d40b95472","url":"static/js/15.28a315f8.chunk.js"},{"revision":"09641d8fec8ea65808a3fff3accf560c","url":"static/js/16.c2daed6b.chunk.js"},{"revision":"dbe78b1ba0d9bb3c72baa94e0fbca7f2","url":"static/js/17.e6b68e6a.chunk.js"},{"revision":"3ecfcd3ab0d4b3dc7f49f7ec9c7a6aff","url":"static/js/18.2b080a3d.chunk.js"},{"revision":"f21f5cce97bf051b432b5c1099fd8f3e","url":"static/js/19.36a89c26.chunk.js"},{"revision":"415be6dafaca32b6f5b365ed3d8c2cf8","url":"static/js/2.09797aa6.chunk.js"},{"revision":"67eba106e25eda64b7a7ec61cf88fa7d","url":"static/js/20.b3933cec.chunk.js"},{"revision":"f8f0fc4b4ee34c38c5ab537d2fbc9288","url":"static/js/21.af4e4840.chunk.js"},{"revision":"378c6fe3739cd53c7922443dc518fe95","url":"static/js/22.f41d2522.chunk.js"},{"revision":"e2ee58d89ee1d42f33506606157ff10f","url":"static/js/23.957f8f61.chunk.js"},{"revision":"fb59551f4bd5afe7fc90f44ef0b43012","url":"static/js/24.68756741.chunk.js"},{"revision":"f94b5d64488b0d6dfbc2620ff44559d7","url":"static/js/25.440e7ad9.chunk.js"},{"revision":"61ef345d372680d137311e485735216b","url":"static/js/26.c4b58301.chunk.js"},{"revision":"05f86425b0f1305cb2e18e2fd96898e8","url":"static/js/27.e5173244.chunk.js"},{"revision":"4da127b2d3c34d8df934c7e76db60b9a","url":"static/js/28.8c43031b.chunk.js"},{"revision":"e9f084d1b6ab270093e824cc2ab8dc67","url":"static/js/29.6741666c.chunk.js"},{"revision":"57017ca3692ebc93f92577d67a08ef8e","url":"static/js/3.58ac6ded.chunk.js"},{"revision":"169c18e5f3b38e1248d5d53fb8c5b69f","url":"static/js/30.6c74eb59.chunk.js"},{"revision":"03c1d5221a030b07f2188e1bee655db2","url":"static/js/31.69e87027.chunk.js"},{"revision":"a6f293eeee62090f59867b8ebbb72919","url":"static/js/32.2ea3fa73.chunk.js"},{"revision":"83037a5f5f3066577fd205298515304e","url":"static/js/33.1db514fe.chunk.js"},{"revision":"57f7388b08515ac3d95692986ac1e7d3","url":"static/js/34.e0224bcf.chunk.js"},{"revision":"fcb946a0458928a98e69fc88eabadf42","url":"static/js/35.d6743171.chunk.js"},{"revision":"6ffc9202b054637b7f4ebfd7c53e8c3a","url":"static/js/36.41ae2a74.chunk.js"},{"revision":"d4221bc05527d28ae1561b5dc7c999d2","url":"static/js/37.46e80136.chunk.js"},{"revision":"6fb0702f660213dfec46c91d4ad38b0b","url":"static/js/38.8a84dcdd.chunk.js"},{"revision":"2343ceaadf36adaca308b1bcda45a823","url":"static/js/4.e65c7cab.chunk.js"},{"revision":"7c62f037c76c34f3bffd624f7511fd32","url":"static/js/5.d1ac04c7.chunk.js"},{"revision":"66f1d4b6b86b28c147e89b53e8a1c9d7","url":"static/js/6.31b36d65.chunk.js"},{"revision":"1d61f3a3e8a6319aeb43817b5b8dcf34","url":"static/js/9.7222eef0.chunk.js"},{"revision":"6b7b47df573f6cd9403ef5ceb4beaae1","url":"static/js/main.0cc39b0d.chunk.js"},{"revision":"a41b11063395b7c9fd86e5ee01b8b3ac","url":"static/js/runtime-main.6603fa32.js"}]);

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
