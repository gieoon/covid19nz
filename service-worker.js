if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"452f63d5fee19df3a51f95416581035f","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"452f63d5fee19df3a51f95416581035f","url":"index.html"},{"revision":"5237c273bd3d9a6779b3ba1a77674ae6","url":"precache-manifest.5237c273bd3d9a6779b3ba1a77674ae6.js"},{"revision":"78b59148111d7ff4343840fcc65a81b5","url":"static/css/18.70604e4e.chunk.css"},{"revision":"4ae6e5c8055547a06a1cd2dfe6184a65","url":"static/js/0.a10e9570.chunk.js"},{"revision":"6591f9cf11ec27668605c59a95f36efe","url":"static/js/1.55c6fa49.chunk.js"},{"revision":"44a4448c73f2b5736c371d148604da84","url":"static/js/10.cbf4b86e.chunk.js"},{"revision":"3abc3b8daf31e71c5aa7b886235a9fad","url":"static/js/11.a519ba09.chunk.js"},{"revision":"74c20d36c2773b6b03f420d696d8f3a9","url":"static/js/12.e2e8c0df.chunk.js"},{"revision":"ede8e9a4b3a431c4713f982bea884468","url":"static/js/13.3c1e4c17.chunk.js"},{"revision":"b6d2e0f6b103c58a9a1a5ee678f42af3","url":"static/js/14.57de0fb4.chunk.js"},{"revision":"02724399cc5d56e3c83c1e24a3063eea","url":"static/js/15.fb61f69f.chunk.js"},{"revision":"cb6432cdd52b6b28d4625fe19545f2d4","url":"static/js/16.3430a915.chunk.js"},{"revision":"e15259e54cb35bc3d519f1407f19e47a","url":"static/js/17.2e2163b3.chunk.js"},{"revision":"7eba0b4390a809c8e952d8e3fca45ed5","url":"static/js/18.b1867f70.chunk.js"},{"revision":"40a8dfe3c63dedf0418e7f9e7036d9da","url":"static/js/19.7202d80b.chunk.js"},{"revision":"70bd30b79774f5bce5504131ec08274c","url":"static/js/2.def4b402.chunk.js"},{"revision":"cddfd202afe6005f22de24fbc59ffb2d","url":"static/js/20.eb15e9c2.chunk.js"},{"revision":"3b80fef1c9d26e29d60ac07a18ab8ee4","url":"static/js/21.3fe5045f.chunk.js"},{"revision":"5292d8f5e7d8f6e53a08cb16efa586a9","url":"static/js/22.ace0447e.chunk.js"},{"revision":"950588ad6826327f05a733a401a366bf","url":"static/js/23.6caa004b.chunk.js"},{"revision":"955b15bb1c7feb68d2557d06c07088ea","url":"static/js/24.b89ffc97.chunk.js"},{"revision":"14f9491facaba6f3bacb4bc28d7be6b7","url":"static/js/25.bf770829.chunk.js"},{"revision":"a5d51ae095b29071ed3d5cc253b76f5e","url":"static/js/26.5b3b4e43.chunk.js"},{"revision":"abfb99436d937d4f52fce2be57acb70f","url":"static/js/27.338f1241.chunk.js"},{"revision":"9f2b7f38814be41dddfe9317445b836e","url":"static/js/28.e2bade2e.chunk.js"},{"revision":"526c1aa1fc563ee645fd06fa787899b9","url":"static/js/29.bcbf5270.chunk.js"},{"revision":"99bf21105bc27b787dc4f03e224f1d71","url":"static/js/3.c00e442d.chunk.js"},{"revision":"34991f3cbfa450cf07f0773deae6ef7e","url":"static/js/30.2521b1a7.chunk.js"},{"revision":"1d1b5e15fe47fc01960b378cc236b5a0","url":"static/js/31.ed8fb165.chunk.js"},{"revision":"5d115eed12c37a8b2f44cb2b644236ce","url":"static/js/32.d3d5ac48.chunk.js"},{"revision":"659627517630a36491590a31eee6c56d","url":"static/js/33.8fdb7dba.chunk.js"},{"revision":"21ac0c82cb4bb2b44ad9c9db98d5f4cc","url":"static/js/34.44f7e2fb.chunk.js"},{"revision":"ddf6fc72451ced4e6dc88f3d46f24ad2","url":"static/js/35.7d9de8d6.chunk.js"},{"revision":"9e0fc844ebaa956520fc7e10ee6be6d9","url":"static/js/36.177109aa.chunk.js"},{"revision":"97e5360246cfc7f432f32f1639875c7a","url":"static/js/37.b6bc8d07.chunk.js"},{"revision":"b63f2aacd4ff3d0982ff29c4443f3bb9","url":"static/js/38.adbdd85f.chunk.js"},{"revision":"8607532da446b35073203f41ed539c27","url":"static/js/4.868023d3.chunk.js"},{"revision":"590ba21f0981d297cb75fff231f1cacf","url":"static/js/5.db1cf4f6.chunk.js"},{"revision":"8569d8ed7906a43f45b007a4a2f2d767","url":"static/js/6.e56c0084.chunk.js"},{"revision":"3a23297a480d5b12b73545ae5ca320ee","url":"static/js/7.051c2e5a.chunk.js"},{"revision":"82c53aba610c597c45b594acb0868030","url":"static/js/main.f8f7b21a.chunk.js"},{"revision":"e4e6204cf9d36f1c1a19bdbbabec93e2","url":"static/js/runtime-main.651e5115.js"}]);

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
