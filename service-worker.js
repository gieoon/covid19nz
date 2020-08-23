if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"7a7e8fe3b44b53ae360953ec79e4a6c6","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"7a7e8fe3b44b53ae360953ec79e4a6c6","url":"index.html"},{"revision":"6fe6eba89aa0bf5accfe1f60ff1fa4d5","url":"precache-manifest.6fe6eba89aa0bf5accfe1f60ff1fa4d5.js"},{"revision":"b64f729c36919bddcab327daf12660f7","url":"static/css/17.90fd8f6e.chunk.css"},{"revision":"e6be806a25f30b1604c80e317561baf0","url":"static/js/0.bee1c0e6.chunk.js"},{"revision":"c8e6a1f6fe1ce66d76522df381fe9e06","url":"static/js/1.4ef8bbf6.chunk.js"},{"revision":"60d9750c97bf70b7b7c6514d11d68860","url":"static/js/10.7efad292.chunk.js"},{"revision":"2583d155c6b352129e88726e7b0ef711","url":"static/js/11.28fe6c39.chunk.js"},{"revision":"49de960e61f56e9f294a776838a92fe7","url":"static/js/12.e5ba640b.chunk.js"},{"revision":"02cdb503d44dafa12ea1b938a4b4e2b1","url":"static/js/13.3ff94956.chunk.js"},{"revision":"a0dcaa1d1021ed810e3ded707336d9d5","url":"static/js/14.43b5d19a.chunk.js"},{"revision":"2f49ace52ff2641ecdb8b311f4012174","url":"static/js/15.9b90c272.chunk.js"},{"revision":"a0b06943bd5f1e0aef95eb01fd3aff3b","url":"static/js/16.ec0d8845.chunk.js"},{"revision":"d06868db5e9cba778fbb7a00d79a7232","url":"static/js/17.450c82b6.chunk.js"},{"revision":"f7d8b39df4de152d8e49e4ea26576490","url":"static/js/18.4bea98aa.chunk.js"},{"revision":"165fdaae8169af113566406289b6a882","url":"static/js/19.165aab18.chunk.js"},{"revision":"55621db09d892d747006ee352b88c6f0","url":"static/js/2.56d32dea.chunk.js"},{"revision":"e505398bd3447219993f94b6b5d6dda5","url":"static/js/20.628160be.chunk.js"},{"revision":"3b80fef1c9d26e29d60ac07a18ab8ee4","url":"static/js/21.3fe5045f.chunk.js"},{"revision":"df563c01a4eae846a546268d675e193f","url":"static/js/22.79778823.chunk.js"},{"revision":"4adc715711aaa1dfc50c6f027b54438f","url":"static/js/23.ed19fcd0.chunk.js"},{"revision":"e6a3af13013b799fbd6d589488ef3bac","url":"static/js/24.aef7b8fe.chunk.js"},{"revision":"6b351780c7ebe7c61d7a100f00aeaa96","url":"static/js/25.5f90be76.chunk.js"},{"revision":"de75c5f84ccc18cc0b37952cb757a080","url":"static/js/26.4aa119b0.chunk.js"},{"revision":"5ca730d95cdeebb85a94b21d3c34a43e","url":"static/js/27.84496e2d.chunk.js"},{"revision":"fca461a3591ac0b980f8a73e96b68fb7","url":"static/js/28.96972cb6.chunk.js"},{"revision":"526c1aa1fc563ee645fd06fa787899b9","url":"static/js/29.bcbf5270.chunk.js"},{"revision":"99bf21105bc27b787dc4f03e224f1d71","url":"static/js/3.c00e442d.chunk.js"},{"revision":"f4062c878b727563d5127b8291ceb57c","url":"static/js/30.22653ff7.chunk.js"},{"revision":"1d1b5e15fe47fc01960b378cc236b5a0","url":"static/js/31.ed8fb165.chunk.js"},{"revision":"8ed79af6995310e6eb64144d4117ffd5","url":"static/js/32.a11c5b14.chunk.js"},{"revision":"9f5d7daf3ad3c57afad2cebf532364c5","url":"static/js/33.c57b855e.chunk.js"},{"revision":"187d3716a437483976fe2f121d57ea70","url":"static/js/34.e77255f4.chunk.js"},{"revision":"522d9d558af278486b33c07e727d745e","url":"static/js/35.97305ab6.chunk.js"},{"revision":"4956658d356b8a644dc0b7b2bf8a3ed7","url":"static/js/36.8692c5d1.chunk.js"},{"revision":"17307561776921ad1951c16d5686eb53","url":"static/js/37.7c01ce7a.chunk.js"},{"revision":"696aa971b4006c4514e131b5c8525ce8","url":"static/js/38.6c5f3d42.chunk.js"},{"revision":"c15a3a654fa95873bd65caf389e97fab","url":"static/js/39.5a881761.chunk.js"},{"revision":"8607532da446b35073203f41ed539c27","url":"static/js/4.868023d3.chunk.js"},{"revision":"a494a0bf1e7fd55f1a1743bdc12f68bf","url":"static/js/40.4c492e27.chunk.js"},{"revision":"1c3302072eec135f9e17f53f8ceeeb5b","url":"static/js/5.3936f827.chunk.js"},{"revision":"50349e78088adf7ed92ae3ae4efd557e","url":"static/js/6.b635a03a.chunk.js"},{"revision":"d3e1118a65703151415de1aec5e3ce1e","url":"static/js/9.d2544105.chunk.js"},{"revision":"808fe79063cf33b08f4e467f1bafb5d2","url":"static/js/main.ba53877f.chunk.js"},{"revision":"65e5bd0c22b8245e40d7becaf1fecc2a","url":"static/js/runtime-main.c336b439.js"}]);

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
