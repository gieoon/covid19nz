if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"8fade27ab5b8a364473c6103bd110295","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"8fade27ab5b8a364473c6103bd110295","url":"index.html"},{"revision":"aef5f5d7ffe9f256f95648648004e133","url":"precache-manifest.aef5f5d7ffe9f256f95648648004e133.js"},{"revision":"659fcbdcf1070cd596a9ed8ef5f80710","url":"static/css/15.aa9ef476.chunk.css"},{"revision":"7d4e1e17bdf366f877b4d150879e4be7","url":"static/js/0.4e9d56d0.chunk.js"},{"revision":"57acdf4e01b67670718fa3ec41536570","url":"static/js/1.92e3b2fe.chunk.js"},{"revision":"890ed236b09b669c9a90dc74794cafd6","url":"static/js/10.5cc7eaa5.chunk.js"},{"revision":"49464a4bbed917004efe25a0627dcf5c","url":"static/js/11.78e323bf.chunk.js"},{"revision":"c1df4968827713b9244ff8043aaf6ffc","url":"static/js/12.43981a64.chunk.js"},{"revision":"5eeb92180b22a42a516b382a9660e89b","url":"static/js/13.848a0ab6.chunk.js"},{"revision":"30d04a6753bc6f67edad4f346a0267c6","url":"static/js/14.81b6cfd0.chunk.js"},{"revision":"b6b20f7481ebb48fa81136329ae350b2","url":"static/js/15.ca5c4b2f.chunk.js"},{"revision":"c0edc7e124dc06e59acbf8472cc38809","url":"static/js/16.0e122362.chunk.js"},{"revision":"c7697233a176a431f8fb99662fbbb452","url":"static/js/17.83abe779.chunk.js"},{"revision":"49c16e682b42e0c9161221591782ae5e","url":"static/js/18.ffde4a4d.chunk.js"},{"revision":"354a8bee4a5fb713ef60f860edd43f7a","url":"static/js/19.75b25042.chunk.js"},{"revision":"5633658c19345ab41096c5409f432d59","url":"static/js/2.666af3a6.chunk.js"},{"revision":"ce1fd6a756a523378dd2e5aa8eb5f246","url":"static/js/20.9db56c71.chunk.js"},{"revision":"69f3061b55079b5fc7295bec427880e7","url":"static/js/21.ead7e8b7.chunk.js"},{"revision":"e2f4d7eccce021f1a3473d58d0336056","url":"static/js/22.0065155a.chunk.js"},{"revision":"210708c3b8bd9f1d2f6fb2969b246852","url":"static/js/23.be7e9861.chunk.js"},{"revision":"ff928564ea5f70357e59124d7b738e0e","url":"static/js/24.b3426484.chunk.js"},{"revision":"3685a117bc36d2b9372f0ecc41e547c3","url":"static/js/25.8ddf751b.chunk.js"},{"revision":"9b7bad8e80f6527c97d0f0783c5ea710","url":"static/js/26.9ccfaaad.chunk.js"},{"revision":"305fead814ded4724eed7c7403a9f998","url":"static/js/27.eafc9dcd.chunk.js"},{"revision":"69853a322142258b013bdd25e5e2921f","url":"static/js/28.ad0496f0.chunk.js"},{"revision":"773b2e061a435668c7f29f43c29426ef","url":"static/js/29.f2411973.chunk.js"},{"revision":"6d5a2ea43a38d966571adf03c0a4a4f5","url":"static/js/3.6d6b54c4.chunk.js"},{"revision":"f2a0ae8276bced7eab343e3ef458ff21","url":"static/js/30.3aeb0aed.chunk.js"},{"revision":"6c8b8533ed997c8a3c4a4bc8a3725f22","url":"static/js/31.6db66b4b.chunk.js"},{"revision":"2e76778f1c38d2224c3e78ad53da912f","url":"static/js/32.55e97f5b.chunk.js"},{"revision":"09db4d15e73a723b61404c8325bdaff2","url":"static/js/33.609048d4.chunk.js"},{"revision":"365702c6aeaf934b9164fd7f0ec7400f","url":"static/js/34.839eee82.chunk.js"},{"revision":"9249709e8dbd7cf1e67fd299751789eb","url":"static/js/35.fa6f017b.chunk.js"},{"revision":"ca819e8ad493ca5c4ea203dd981f15d1","url":"static/js/36.824f2268.chunk.js"},{"revision":"b14616e5e282d44f2ba3581eb4633128","url":"static/js/37.e517f828.chunk.js"},{"revision":"88fb52cfd685d0dc3590b4654588a21f","url":"static/js/4.7bea57fc.chunk.js"},{"revision":"43e26c555f6600f7974959471c9218c1","url":"static/js/5.972aee43.chunk.js"},{"revision":"3c1ff29eac81a7ede3afd83f979f21ea","url":"static/js/6.704c4856.chunk.js"},{"revision":"ac34407faf6f13cc2d8774dbb148369f","url":"static/js/9.35620002.chunk.js"},{"revision":"ec8ef82e67747c02a68e3238914e3f0d","url":"static/js/main.2cc3e755.chunk.js"},{"revision":"2d572b8dea3ee9d4eafe6bbe41bc6992","url":"static/js/runtime-main.79281d8d.js"}]);

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
