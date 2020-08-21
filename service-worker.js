if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"b581d1466a7fefc393d2e4cad3f0aabd","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"b581d1466a7fefc393d2e4cad3f0aabd","url":"index.html"},{"revision":"05d719a4fade9ac2df99bad877ee209a","url":"precache-manifest.05d719a4fade9ac2df99bad877ee209a.js"},{"revision":"f60ae8ce19c54c424b387831850e99e7","url":"static/css/17.70604e4e.chunk.css"},{"revision":"4ae6e5c8055547a06a1cd2dfe6184a65","url":"static/js/0.a10e9570.chunk.js"},{"revision":"6591f9cf11ec27668605c59a95f36efe","url":"static/js/1.55c6fa49.chunk.js"},{"revision":"044d8709d65f54d2fd2cf95725588d2f","url":"static/js/10.0010b781.chunk.js"},{"revision":"44394dec156947a63145761a68aee599","url":"static/js/11.4546718a.chunk.js"},{"revision":"bb393f209908882beb0717f85bdce863","url":"static/js/12.841ecbe4.chunk.js"},{"revision":"02cdb503d44dafa12ea1b938a4b4e2b1","url":"static/js/13.3ff94956.chunk.js"},{"revision":"fef4640b00abc94e5ea2d1488bcdf034","url":"static/js/14.bca88780.chunk.js"},{"revision":"845799e8aa81a3b9913c0edbcfc047f4","url":"static/js/15.92aa876b.chunk.js"},{"revision":"a0b06943bd5f1e0aef95eb01fd3aff3b","url":"static/js/16.ec0d8845.chunk.js"},{"revision":"5d795f78f4ebcb8a253199fb738edaac","url":"static/js/17.0baa32c3.chunk.js"},{"revision":"c4b130673cee043b4c4fc395e408be19","url":"static/js/18.b7448cef.chunk.js"},{"revision":"47657106839283b55a349c5fbe40bb20","url":"static/js/19.b1209d25.chunk.js"},{"revision":"2f211356e363ffe66cde0af8f0594c2d","url":"static/js/2.9dae29df.chunk.js"},{"revision":"924a9b2d6e5c36f90145573c5e6a7817","url":"static/js/20.e2d28042.chunk.js"},{"revision":"f809acbb5c968293e4dbe19dff55acba","url":"static/js/21.e6e48521.chunk.js"},{"revision":"79f7a6dbe93fc5b676a905ac807881d4","url":"static/js/22.2d0803eb.chunk.js"},{"revision":"a551ca86677939c2c32504eebd65b9fe","url":"static/js/23.5a608128.chunk.js"},{"revision":"0fbc2f4ac2bc81c10d5344abc5763779","url":"static/js/24.016ede2d.chunk.js"},{"revision":"08639317aa492ea4f110092c879c21a3","url":"static/js/25.2358d063.chunk.js"},{"revision":"7b3d3798b51c76a5a5d41e17b228d9a1","url":"static/js/26.eca1d4b7.chunk.js"},{"revision":"5f9251824b59e45c49b64cc819edfaff","url":"static/js/27.0894af0a.chunk.js"},{"revision":"7ff481f923221af328e1775a064a00a9","url":"static/js/28.374a9eab.chunk.js"},{"revision":"d01595e78a98a86bc1a9bfbdfc4a811c","url":"static/js/29.d1fa7ec6.chunk.js"},{"revision":"99bf21105bc27b787dc4f03e224f1d71","url":"static/js/3.c00e442d.chunk.js"},{"revision":"ceab86b577c3c232f4a671673d395ce4","url":"static/js/30.338d531e.chunk.js"},{"revision":"6bc7143cda0c34b6231188a4758daf35","url":"static/js/31.5fcc811e.chunk.js"},{"revision":"5d115eed12c37a8b2f44cb2b644236ce","url":"static/js/32.d3d5ac48.chunk.js"},{"revision":"46ea3d49646fb5b79e002b9c49e97295","url":"static/js/33.b54e2bd1.chunk.js"},{"revision":"21ac0c82cb4bb2b44ad9c9db98d5f4cc","url":"static/js/34.44f7e2fb.chunk.js"},{"revision":"0aca22fad1e64ff8e61556f3fa557afc","url":"static/js/35.5297890d.chunk.js"},{"revision":"9e0fc844ebaa956520fc7e10ee6be6d9","url":"static/js/36.177109aa.chunk.js"},{"revision":"97e5360246cfc7f432f32f1639875c7a","url":"static/js/37.b6bc8d07.chunk.js"},{"revision":"b63f2aacd4ff3d0982ff29c4443f3bb9","url":"static/js/38.adbdd85f.chunk.js"},{"revision":"8607532da446b35073203f41ed539c27","url":"static/js/4.868023d3.chunk.js"},{"revision":"590ba21f0981d297cb75fff231f1cacf","url":"static/js/5.db1cf4f6.chunk.js"},{"revision":"a9ae551c1f4492a1336e4da5289c5ddb","url":"static/js/6.0d6e2d84.chunk.js"},{"revision":"d3e1118a65703151415de1aec5e3ce1e","url":"static/js/9.d2544105.chunk.js"},{"revision":"f8900b1efb5455eae3bc6813b2e9b527","url":"static/js/main.1d7d0350.chunk.js"},{"revision":"3266028d17f1f3cf620bbbe101766a9d","url":"static/js/runtime-main.ea9939e1.js"}]);

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
