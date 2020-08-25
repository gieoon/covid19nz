if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"0ae610b513c03c416baba573fd82f254","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"0ae610b513c03c416baba573fd82f254","url":"index.html"},{"revision":"ce795f77c0c4c096a3dcf2d3d76d5812","url":"precache-manifest.ce795f77c0c4c096a3dcf2d3d76d5812.js"},{"revision":"2b743e0794e17e04ebe467c463bcba8e","url":"static/css/17.f4013f4b.chunk.css"},{"revision":"4eb06425de10373a797eab4730dd0c55","url":"static/js/0.39ef9e5a.chunk.js"},{"revision":"5ad280078f55140ae7686f1c3d5f700a","url":"static/js/1.fbc39876.chunk.js"},{"revision":"c16f20774a721f6803909cdcbc370e14","url":"static/js/10.aea55aad.chunk.js"},{"revision":"52f6d4e78aa42e36c5a1b7c4bd7d02b2","url":"static/js/11.fca375da.chunk.js"},{"revision":"bb8d5bbb75704a4c1b2434d07d17bdc5","url":"static/js/12.d75decbb.chunk.js"},{"revision":"452e96716ea2c3b4efd5c430ae4226b1","url":"static/js/13.1cd04ee3.chunk.js"},{"revision":"472c1e7ccae5042ce2b845b05fb33b5e","url":"static/js/14.efd5dfd7.chunk.js"},{"revision":"88f67494c0b85f2ed36205ebca72d241","url":"static/js/15.e8468ec3.chunk.js"},{"revision":"215ce56e76dc9037905ffa4908dfbdf6","url":"static/js/16.388a2737.chunk.js"},{"revision":"7ee97625dd492b9b42488e218d9aac53","url":"static/js/17.93e4de92.chunk.js"},{"revision":"412c13b1fc720284f12b55c95aec15f4","url":"static/js/18.83d135cd.chunk.js"},{"revision":"2da054e38dc0e8b408b0cdd1bc91c7cb","url":"static/js/19.a0f2b48e.chunk.js"},{"revision":"cf2823dedf917aa55879ec6a012f18b0","url":"static/js/2.bf8d2b05.chunk.js"},{"revision":"e5559de18f17933a87322d641d5b4ad9","url":"static/js/20.b28b8437.chunk.js"},{"revision":"84e9188226b6d89ac684a41002d2b8b1","url":"static/js/21.0ddeb313.chunk.js"},{"revision":"69866c658ad6338440d07dcf795c43d2","url":"static/js/22.52bf64a0.chunk.js"},{"revision":"9cd35566908b2e3f9e71e79f6cde93f3","url":"static/js/23.74ea4552.chunk.js"},{"revision":"f878cf9ccd09ee8dd3e8a737651942c3","url":"static/js/24.8c2814c7.chunk.js"},{"revision":"77796996c8d416c31d062c22fb7c3fcc","url":"static/js/25.7d95a6a8.chunk.js"},{"revision":"7482e016268ac89978c1e19d7a026da4","url":"static/js/26.e5f087c5.chunk.js"},{"revision":"485a49b1edc799dac30b66845c6b8439","url":"static/js/27.34fec94c.chunk.js"},{"revision":"e92acc57a7a96efe2f27b36a84fdaf2c","url":"static/js/28.0ae09a5b.chunk.js"},{"revision":"e426b409768e31cd1e2c10f282051ef3","url":"static/js/29.a1e9729b.chunk.js"},{"revision":"4f9d79327dc95a989e84567fdc61d6e0","url":"static/js/3.e4e340de.chunk.js"},{"revision":"df7f00856916fa6b10e8f27416bb208a","url":"static/js/30.462d83d2.chunk.js"},{"revision":"63a1bcdd5b09e4c744be2d95b8adb724","url":"static/js/31.14cf4a08.chunk.js"},{"revision":"cfee5a5ab9cf14962f750e966f079b4f","url":"static/js/32.bf9d88eb.chunk.js"},{"revision":"4625294fe52a55667a5862ea39c9edcd","url":"static/js/33.9c9a878b.chunk.js"},{"revision":"bdd48c586db9ec8d4bb10814fbaedf1b","url":"static/js/34.ba56ec90.chunk.js"},{"revision":"533f3e885125fe4a27a8352321ed5b4a","url":"static/js/35.da7110ed.chunk.js"},{"revision":"f20605257a7799241d88538de831b229","url":"static/js/36.a4e1ddb9.chunk.js"},{"revision":"9bf164f2638c52698175fe0af439177a","url":"static/js/37.5919b549.chunk.js"},{"revision":"51a86ce3ec83ebd3e1a703ec45df4df2","url":"static/js/38.2a855fd3.chunk.js"},{"revision":"2557ccfdb5d4cc44e878312e53fa05d9","url":"static/js/39.27f107c5.chunk.js"},{"revision":"f74eb4b28e53c00365a039b561d2e195","url":"static/js/4.8bbea318.chunk.js"},{"revision":"b3193915e5a643a792da47328aaf8922","url":"static/js/40.1d3f1cfd.chunk.js"},{"revision":"d79d916be452344c7f8e0156e6e2d133","url":"static/js/5.6d334f64.chunk.js"},{"revision":"432ed055c5c93344f3a5b0cfb7db6d93","url":"static/js/6.09820074.chunk.js"},{"revision":"d096513b4a25fdcdc2b628063ebc09e9","url":"static/js/9.bece3567.chunk.js"},{"revision":"789c0afa455f7a5313e1e973f25452e0","url":"static/js/main.586a7bf0.chunk.js"},{"revision":"6526c0872adf5baddd85472c876b3103","url":"static/js/runtime-main.523777dc.js"}]);

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
