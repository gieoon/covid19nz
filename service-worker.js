if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"39633d30e48a4583a2009b3942230a8a","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"39633d30e48a4583a2009b3942230a8a","url":"index.html"},{"revision":"d2a1acb70396c1f5ee88ddd514e82ba3","url":"precache-manifest.d2a1acb70396c1f5ee88ddd514e82ba3.js"},{"revision":"5c6ce8b2ba704d01066325a5d1aaa36e","url":"static/css/15.6eaf2a10.chunk.css"},{"revision":"f0e4f4359e15d7c56db35d7d507c6d59","url":"static/js/0.7b66e831.chunk.js"},{"revision":"11641f4197f8562ccba4ee0c00b1af7d","url":"static/js/1.a02af8f0.chunk.js"},{"revision":"1f66874f107ca882d58b0f548f137ec9","url":"static/js/10.e53aa6e3.chunk.js"},{"revision":"b69a7d863c6c86700854b08394b1dba2","url":"static/js/11.b0157503.chunk.js"},{"revision":"c721dad1f40d1b9392a4c9d0f7464ff4","url":"static/js/12.e9ed9894.chunk.js"},{"revision":"c6e39ae85015553539a68ad4e5a2238c","url":"static/js/13.46c6d125.chunk.js"},{"revision":"3935045200a1e76a10763d625f71c70a","url":"static/js/14.f50c396d.chunk.js"},{"revision":"178a596124c3d8f028885e6a2c8496b1","url":"static/js/15.66ba4e9b.chunk.js"},{"revision":"8e05f7b7efe23f882288510b71ff4678","url":"static/js/16.823dcaab.chunk.js"},{"revision":"b3776b54f6f6603f88914d42c00caeeb","url":"static/js/17.1becda0e.chunk.js"},{"revision":"b099752e3c0438095d20044136c7f428","url":"static/js/18.1482bfb7.chunk.js"},{"revision":"d65755c54217297180e38e326c86f500","url":"static/js/19.54e10a5f.chunk.js"},{"revision":"dff053a257c22155702b5c79234a5a7f","url":"static/js/2.cf748909.chunk.js"},{"revision":"679ec60513a6c511908e0b85396843e7","url":"static/js/20.854c4129.chunk.js"},{"revision":"7e978c341569f0474b369d8d404f873e","url":"static/js/21.e3970df2.chunk.js"},{"revision":"010773d89402b10e52588a4ab51864a3","url":"static/js/22.f341005c.chunk.js"},{"revision":"fc1ff180aa3d491f20e8c3ba195c9459","url":"static/js/23.5ae73ee1.chunk.js"},{"revision":"17ca7b8e6625fc3c24fc5c638364d95d","url":"static/js/24.1ec6c159.chunk.js"},{"revision":"cdf667ae9c0dfc7b7c9c289b50826703","url":"static/js/25.99b0ca12.chunk.js"},{"revision":"ddda63685f5be0ddd93b435d6c9cea79","url":"static/js/26.8674944e.chunk.js"},{"revision":"d0d3bef7983f789b565ebded97898cf4","url":"static/js/27.cd7c4dca.chunk.js"},{"revision":"085348d454ac01fa0ea912a32ad05b07","url":"static/js/28.0ef66c2e.chunk.js"},{"revision":"222b204df1f9cccb2ff268ce1dcb5d03","url":"static/js/29.4378a0fa.chunk.js"},{"revision":"f0d99701b5043d73dbb53a2a5b5793ad","url":"static/js/3.a8d72fb1.chunk.js"},{"revision":"fc6a71efd966647063196da0c1fce0f6","url":"static/js/30.d9568672.chunk.js"},{"revision":"a37b20720af829c63ef8bd79b3668305","url":"static/js/31.bb7abf12.chunk.js"},{"revision":"030068d5763cb08b4172960ee6494ee6","url":"static/js/32.dba2f2a4.chunk.js"},{"revision":"352cb2bb379d64312abb765cc250e5ee","url":"static/js/33.6745c93b.chunk.js"},{"revision":"8c6f2c97bbae41216d5a5d9cf4b7b93b","url":"static/js/34.1bf66440.chunk.js"},{"revision":"432c13d77077140e10dc129d3d0da40e","url":"static/js/35.968439cd.chunk.js"},{"revision":"d3da9d7425b04c58e62dec6992f04627","url":"static/js/36.29aafea3.chunk.js"},{"revision":"d4221bc05527d28ae1561b5dc7c999d2","url":"static/js/37.46e80136.chunk.js"},{"revision":"6fb0702f660213dfec46c91d4ad38b0b","url":"static/js/38.8a84dcdd.chunk.js"},{"revision":"31777e517de9f3ed654b62af3a31d67d","url":"static/js/4.7ce0a64e.chunk.js"},{"revision":"e9efdd6e81240722692915b8c4e6c744","url":"static/js/5.637c5a98.chunk.js"},{"revision":"36227d2a36de1dca99c70af2378b2d61","url":"static/js/6.6d3028e0.chunk.js"},{"revision":"c0b43e245ad4691b9dfd69a46398156b","url":"static/js/9.1cc53a31.chunk.js"},{"revision":"7191bc3b00c2be6a5e2fce04026cff7e","url":"static/js/main.879e92d9.chunk.js"},{"revision":"343e454de55b36932952a743adc632b2","url":"static/js/runtime-main.86fc4cb9.js"}]);

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
