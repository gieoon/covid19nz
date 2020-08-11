if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"d7365ddd9d60516ce692026bae5d7eaa","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"d7365ddd9d60516ce692026bae5d7eaa","url":"index.html"},{"revision":"bc4013511181034a381390668cc19af6","url":"precache-manifest.bc4013511181034a381390668cc19af6.js"},{"revision":"659fcbdcf1070cd596a9ed8ef5f80710","url":"static/css/15.aa9ef476.chunk.css"},{"revision":"7d4e1e17bdf366f877b4d150879e4be7","url":"static/js/0.4e9d56d0.chunk.js"},{"revision":"b575126dd3040dedc4331c918da6fc6a","url":"static/js/1.89d5d394.chunk.js"},{"revision":"98abc1701e74ded722224464ac2a042f","url":"static/js/10.c7d86ce1.chunk.js"},{"revision":"ce145299b4bf844fe3cdba8556e05d07","url":"static/js/11.667c5d7d.chunk.js"},{"revision":"69177be22bfb957bc46705e54c9e69da","url":"static/js/12.8cad4524.chunk.js"},{"revision":"096fee898e0b50ec5b4485ef2cdd4737","url":"static/js/13.96ce3f32.chunk.js"},{"revision":"d4b711d36ae5b91b30852afce28086a8","url":"static/js/14.8a5c1ac7.chunk.js"},{"revision":"8f4a22ae656bc63abf387873382f088d","url":"static/js/15.488dc6e0.chunk.js"},{"revision":"e8a507cb60e16e2ec462a0a66e76f7ce","url":"static/js/16.aa27e1ba.chunk.js"},{"revision":"b3776b54f6f6603f88914d42c00caeeb","url":"static/js/17.1becda0e.chunk.js"},{"revision":"d77e42c292c75f1822fe23f2aecbeb0c","url":"static/js/18.b79b0277.chunk.js"},{"revision":"cc6cc1af065cde69c59baab689f4ae52","url":"static/js/19.e036a738.chunk.js"},{"revision":"22a0ea3abb6535a17d1d2ae3bbadffe7","url":"static/js/2.852d72c6.chunk.js"},{"revision":"18da347eca7d76253297b386183384a5","url":"static/js/20.b86530b7.chunk.js"},{"revision":"b06a8f482e27e6700cb982d9505d06a2","url":"static/js/21.0941bf20.chunk.js"},{"revision":"e60c36cc1f844c45192e42d96f18b27f","url":"static/js/22.b9a592e5.chunk.js"},{"revision":"2f8e41562bd4b08049549739e084ec2e","url":"static/js/23.93f18566.chunk.js"},{"revision":"bbfec62a524cd6d38b7d048aacd31335","url":"static/js/24.7bd9ce28.chunk.js"},{"revision":"48f6c0a7b66d5583292d123916c6bcab","url":"static/js/25.bb64025f.chunk.js"},{"revision":"12676180b2082e9ad3b5aaa46e01afa1","url":"static/js/26.63891ce8.chunk.js"},{"revision":"e26f6f699553e8c429bae759e918b5d9","url":"static/js/27.5f8378e9.chunk.js"},{"revision":"506b778b92ca011ef9b428a8156dff5a","url":"static/js/28.92301ab6.chunk.js"},{"revision":"11a3a8e2702fc75b5ce45dcf0774ab36","url":"static/js/29.bf273d4f.chunk.js"},{"revision":"a0ac6d90f855433940989d7fbf6d851f","url":"static/js/3.6fe98d4a.chunk.js"},{"revision":"7e0b11b2f39cc73eef0cc111ee340ec4","url":"static/js/30.e0c582cc.chunk.js"},{"revision":"0fed23e6802ff990b30f049c0d21acd4","url":"static/js/31.e89f5f0f.chunk.js"},{"revision":"c8c006e2105c0adc8bbc7b40be5f7e61","url":"static/js/32.635cfbe3.chunk.js"},{"revision":"93a8a98e12960a2907ca871a2df3d1e8","url":"static/js/33.b91eb9d5.chunk.js"},{"revision":"944c36d5d44693d6a8f442981e068d10","url":"static/js/34.628f5874.chunk.js"},{"revision":"92b9b145b2387fab366cbcf2415af3a0","url":"static/js/35.7338ba47.chunk.js"},{"revision":"e6a526c6d0598bbf91223ca1374d53f2","url":"static/js/36.fc034ef4.chunk.js"},{"revision":"b14616e5e282d44f2ba3581eb4633128","url":"static/js/37.e517f828.chunk.js"},{"revision":"e19eda049e516095714f1e5d5ef5deee","url":"static/js/4.62a63c05.chunk.js"},{"revision":"a2dd7702cc8797a5895a81e8cc53f551","url":"static/js/5.518f6213.chunk.js"},{"revision":"e5688792543a2fb67125699851b3b1a9","url":"static/js/6.d9faaf75.chunk.js"},{"revision":"45fdc7b13e9d16dc7320c904d5590a6e","url":"static/js/9.0b26b054.chunk.js"},{"revision":"3bacb0181e2bc6dbc6057045abb9070c","url":"static/js/main.1c1d8b0b.chunk.js"},{"revision":"7ab8cafffc95556b05aab50bd67f3855","url":"static/js/runtime-main.72275a3d.js"}]);

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
