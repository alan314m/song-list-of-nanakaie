if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const _=e=>a(e,r),o={module:{uri:r},exports:c,require:_};s[r]=Promise.all(n.map((e=>o[e]||_(e)))).then((e=>(i(...e),c)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/163music.ico",revision:"b49a6b034b20a868e838773a5a25335d"},{url:"/404 Not Found.html",revision:"4c10e7c45265e13130d48afda802d27e"},{url:"/404 Not Found_files/404.js.download",revision:"af529c2452c52d8bcbc5381196765693"},{url:"/404 Not Found_files/_app.js.download",revision:"333e6ef71fb7c1601a7b0ed70a297589"},{url:"/404 Not Found_files/_buildManifest.js.download",revision:"60be045f4432b955253b98e5c1ac6d97"},{url:"/404 Not Found_files/_ssgManifest.js.download",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/404 Not Found_files/main.js.download",revision:"02fa411846765b5c528d1b1f94490700"},{url:"/404 Not Found_files/polyfills.js.download",revision:"cfe019b0e75d33cf76c80d836c7a382d"},{url:"/404 Not Found_files/react-refresh.js.download",revision:"c24fdf927fe65f60ebf7e1288d2a0fa5"},{url:"/404 Not Found_files/webpack.js.download",revision:"55073cb168b449a7f1abb9074379a8ae"},{url:"/_next/static/WPaq1Hf0EMK5K8Sp7oZAP/_buildManifest.js",revision:"26b3f9518bc360525298826dc92f6c33"},{url:"/_next/static/WPaq1Hf0EMK5K8Sp7oZAP/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/658-42f7f7c0a70d280f.js",revision:"42f7f7c0a70d280f"},{url:"/_next/static/chunks/framework-3583eef75b58b7b2.js",revision:"3583eef75b58b7b2"},{url:"/_next/static/chunks/main-5295ef644cec3454.js",revision:"5295ef644cec3454"},{url:"/_next/static/chunks/pages/404-29266ec4431de085.js",revision:"29266ec4431de085"},{url:"/_next/static/chunks/pages/_app-177eed6022f8cf4c.js",revision:"177eed6022f8cf4c"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/index-d9fa9aa1b506ca18.js",revision:"d9fa9aa1b506ca18"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"9b312e20a4e32339"},{url:"/_next/static/css/091f4f42877fead0.css",revision:"091f4f42877fead0"},{url:"/_next/static/css/65bbeeac13aebb2f.css",revision:"65bbeeac13aebb2f"},{url:"/_next/static/css/ee3b08faef48927e.css",revision:"ee3b08faef48927e"},{url:"/a2hs/android-icon-144x144.png",revision:"1f07af1434e29c0142201b4519a7833b"},{url:"/a2hs/android-icon-192x192.png",revision:"f43332a268d767a97affd55f55bcf5c6"},{url:"/a2hs/android-icon-36x36.png",revision:"65912f4b822c581c4c41c3ab958b41e7"},{url:"/a2hs/android-icon-48x48.png",revision:"89bbe8ec4375858cab1c73d9ec640afb"},{url:"/a2hs/android-icon-72x72.png",revision:"e8fa71a3231d075b3749d682ccb9e866"},{url:"/a2hs/android-icon-96x96.png",revision:"5a2a57454530f2d6eebb5ea1f7957836"},{url:"/a2hs/apple-icon-114x114.png",revision:"5ab36339044b8a172dfcf1ca22ad8814"},{url:"/a2hs/apple-icon-120x120.png",revision:"84eecb3746c707409b29b005b7b40080"},{url:"/a2hs/apple-icon-144x144.png",revision:"1f07af1434e29c0142201b4519a7833b"},{url:"/a2hs/apple-icon-152x152.png",revision:"c7bc725831df150b4a3b2ff90e292aec"},{url:"/a2hs/apple-icon-180x180.png",revision:"760211a542454c00535c5429a9e90892"},{url:"/a2hs/apple-icon-57x57.png",revision:"170445b0be655a08671b1839b5441423"},{url:"/a2hs/apple-icon-60x60.png",revision:"e40ddee4bed2a5c1bc0f96739cbc5246"},{url:"/a2hs/apple-icon-72x72.png",revision:"e8fa71a3231d075b3749d682ccb9e866"},{url:"/a2hs/apple-icon-76x76.png",revision:"80ee7a4ca5266e9145b33c5bff87b00f"},{url:"/a2hs/apple-icon-precomposed.png",revision:"f43332a268d767a97affd55f55bcf5c6"},{url:"/a2hs/apple-icon.png",revision:"f43332a268d767a97affd55f55bcf5c6"},{url:"/a2hs/browserconfig.xml",revision:"97775b1fd3b6e6c13fc719c2c7dd0ffe"},{url:"/a2hs/favicon-16x16.png",revision:"95dc72322d85423a0067bd7902a9a510"},{url:"/a2hs/favicon-32x32.png",revision:"85aa94109255247b2a01e432659fc16a"},{url:"/a2hs/favicon-96x96.png",revision:"5a2a57454530f2d6eebb5ea1f7957836"},{url:"/a2hs/favicon.ico",revision:"3f4a64fdb2393e0262f5d3c0c4b23ad5"},{url:"/a2hs/manifest.json",revision:"a74c94f08c41953b8cd6e41398bde66b"},{url:"/a2hs/ms-icon-144x144.png",revision:"1f07af1434e29c0142201b4519a7833b"},{url:"/a2hs/ms-icon-150x150.png",revision:"e5a83c92d18e402310d9e3dc69177fd1"},{url:"/a2hs/ms-icon-310x310.png",revision:"464ce3ba4d8a728e275a77b63a956b5b"},{url:"/a2hs/ms-icon-70x70.png",revision:"6ec386b3bf92bb9c3d82ca746900d7ef"},{url:"/avatar.png",revision:"133f19621e63c4d64a76af363d5c6047"},{url:"/background.png",revision:"97e78216c0a51e23f64a091b0993bd03"},{url:"/bilibili_logo_padded.png",revision:"1fb5797471c24751f9539885b31f516d"},{url:"/cursor_normal.png",revision:"36448bce330144592e72b12bfc8eb870"},{url:"/cursor_pointer.png",revision:"49f397c912cdb7087f13fa57a2442c3d"},{url:"/cursor_text.png",revision:"f008dd75209d549729d41cc7a1490b11"},{url:"/favicon.ico",revision:"3f4a64fdb2393e0262f5d3c0c4b23ad5"},{url:"/gui_shang.webp",revision:"7dc5eda03c347d89354f5617b1350ebd"},{url:"/music_list_7.json",revision:"eb0ae518b421327febc34f0b269b5e93"},{url:"/nanakaie.webp",revision:"c3492adb2b85d5bec72fa7e450bf3967"},{url:"/orb.png",revision:"8eed9b66ebd810944c1000802287b0e2"},{url:"/qie_ge.webp",revision:"429f4cda3b544696e9ea3ebe7f47e85e"},{url:"/qqmusic.ico",revision:"2aa91c3324408f08fa16945029aaf0ac"},{url:"/splash_screens/10.2__iPad_landscape.png",revision:"11d92b852bddeb31a126587b3a7aaccd"},{url:"/splash_screens/10.2__iPad_portrait.png",revision:"fed258f6fc505ce561bf57a7bf8267b0"},{url:"/splash_screens/10.5__iPad_Air_landscape.png",revision:"52a612fa5f3fc3550b22f13eec8c3773"},{url:"/splash_screens/10.5__iPad_Air_portrait.png",revision:"888dfcf00c6269674b45ab302ac0bed7"},{url:"/splash_screens/10.9__iPad_Air_landscape.png",revision:"5f3995c0eb2b12f77837f76be3dba6b0"},{url:"/splash_screens/10.9__iPad_Air_portrait.png",revision:"f4b7400667a5a8edd00773368e52e8a6"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",revision:"5097e3664520ca19d2b0fc86c089f78b"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",revision:"8b9875d2726d8c486a3a0df57b6677ff"},{url:"/splash_screens/12.9__iPad_Pro_landscape.png",revision:"4f630ba9358c04621701dd0a398e913a"},{url:"/splash_screens/12.9__iPad_Pro_portrait.png",revision:"3ee8b420f3865f971728053637fb26d9"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",revision:"b456134cf51b8cc2f869ae0224330510"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",revision:"1bb8e4b05ec89dee61be19e6670b9bb6"},{url:"/splash_screens/8.3__iPad_Mini_landscape.png",revision:"53f49ce5ffcc383b8c413f3a11b8f41c"},{url:"/splash_screens/8.3__iPad_Mini_portrait.png",revision:"58dbce07b2a6ad5e200ab5dd30f3bf3a"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",revision:"e49e147b32d37859f3e1799b30051aa1"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",revision:"a611f995d7dd8d1615013aef7138da8a"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",revision:"6c75b727e5ef7ad5bd068d727a540ce2"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",revision:"694a8310391d5501f87631bacf088b66"},{url:"/splash_screens/iPhone_11__iPhone_XR_landscape.png",revision:"a0d290be8dce9e2d2c36601200c28621"},{url:"/splash_screens/iPhone_11__iPhone_XR_portrait.png",revision:"f43514b0a5c229dd545fc25bd3bfff42"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",revision:"3bd7c7701582e19e95d00a849df8d7b6"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",revision:"8789f57ef03607518ddada71a5ccf528"},{url:"/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",revision:"495aedca01868d880d7116a9744575e6"},{url:"/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",revision:"aa35d7d0fe48a62bbf26b196772e0750"},{url:"/splash_screens/iPhone_14_Pro_Max_landscape.png",revision:"d4cfdbee027d80f018632becd3acf9c9"},{url:"/splash_screens/iPhone_14_Pro_Max_portrait.png",revision:"66a07da34ece1ff7b8e907929b33152b"},{url:"/splash_screens/iPhone_14_Pro_landscape.png",revision:"976e2f60b0d975ac3673d3ac32e60666"},{url:"/splash_screens/iPhone_14_Pro_portrait.png",revision:"a03a1e512c52f9395ca7e0b880d4f676"},{url:"/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",revision:"d53f7ab0fa2a892f1103990e999c7a3c"},{url:"/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",revision:"efc03747d34436e0782534eac5eb7077"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",revision:"658378eb00efa1e18a4ade906473302f"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",revision:"b97d770d44602f515da728907783d956"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",revision:"6c5d66bab113aad876db361dd6204764"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",revision:"ac9ff3fadc3a8b9c3b5c992cd949ee64"},{url:"/tapechat.png",revision:"f1a5a7ad596d1579f7c45349dcf679d8"},{url:"/tiny_nanakaie.webp",revision:"b0e619e5142e2f9e05cbdcf41011d589"},{url:"/tipsy.webp",revision:"762bce9fbbc0f0f7646e15fe21e7d986"},{url:"/up_arrow.png",revision:"22bf7959f03d33ae00f7fa11d738cbc2"},{url:"/what_is_this.png",revision:"530bdec4cadc8edc7158495263fb9008"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
