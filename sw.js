importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"cd2a84a9d406609b6af31751adb582ca","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"1dcf623b55881c357b0b6811f0050800","url":"contributors.html"},{"revision":"2f10d546588cb262c0c14f8f57af4d03","url":"feedback.html"},{"revision":"577d61861058ca5072a9e03cdcd02877","url":"images/ckt.jpg"},{"revision":"f2f1e415d681eb68a9d2c3598b1b80ec","url":"images/iitkgp.png"},{"revision":"766aeea539499b6ebe76ac4534b6b78c","url":"images/kelvindoublebridge_procedure.jpg"},{"revision":"69f0d71a124d435f3825a57039aebc95","url":"images/kelvindoublebridge_theory.jpg"},{"revision":"c65e54722c3db018be41e1c69071c61e","url":"images/logo.jpg"},{"revision":"20ff06befcc5a353f94af464ffd6708e","url":"index.html"},{"revision":"8e3914487ba2bab64c000d081ab0cc10","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"327a6262a0bd8259c0ecdacd072cb8d8","url":"posttest.html"},{"revision":"13a4d6382b47d0b8b6413451f748c6c9","url":"posttest.json"},{"revision":"e0b6ec8dbd71fbb6558c6e058155f6b0","url":"pretest.html"},{"revision":"e23093dd180de95a51d1c97952f99bb7","url":"pretest.json"},{"revision":"cc0442e4a880275abf016ef12ba53aee","url":"procedure.html"},{"revision":"dc5e396c02c1f603bebfea200c717121","url":"references.html"},{"revision":"83c6ba3d6b6f7f880d7569e31001dc12","url":"simulation.html"},{"revision":"43951c2e73f160b4e527be66812dd7d6","url":"simulation/css/exp3_css.css"},{"revision":"9dfc84ed7e5a790d2cbdf6723dba98de","url":"simulation/css/pop_up.css"},{"revision":"a993679b5f0d216184672f16177d434d","url":"simulation/css/style.css"},{"revision":"577d61861058ca5072a9e03cdcd02877","url":"simulation/images/ckt.jpg"},{"revision":"f89dbbdaa46fa532bf24f5905d9bed48","url":"simulation/images/s1.png"},{"revision":"d41ad214c158d39de5be6087bdb8a043","url":"simulation/images/s2.png"},{"revision":"f401fbaa0f2c65a4df74f3bba5d3c205","url":"simulation/index.html"},{"revision":"9bb9d322b870af377612d87de2c4b136","url":"simulation/jquery_files/css_metergauge.css"},{"revision":"6838f609d4d9f5a60f35169e8c0973f6","url":"simulation/jquery_files/examples.min.css"},{"revision":"1a45a1633a7ecbdb60d9339f2699cb0c","url":"simulation/jquery_files/jqplot.meterGaugeRenderer.min.js"},{"revision":"fc701228643bcc46a75e77dd3d119ba2","url":"simulation/jquery_files/jquery.jqplot.min.css"},{"revision":"36a1f7d6e2b113862432a1feee4e1954","url":"simulation/jquery_files/jquery.jqplot.min.js"},{"revision":"9118381924c51c89d9414a311ec9c97f","url":"simulation/jquery_files/jquery.min.js"},{"revision":"5ea43ecd720c588b8ecf0db3ffedd59c","url":"simulation/jquery_files/js_metergauge.js"},{"revision":"62acecd546274a64998360e3d7ff40ff","url":"simulation/jquery_files/js_metergauge1.js"},{"revision":"3bee54667776c94ae6a6405f8e83c503","url":"simulation/jquery_files/js_metergauge2.js"},{"revision":"9e5b995566a954f69ba0f2cb13793575","url":"simulation/jquery_files/shBrushJScript.min.js"},{"revision":"37d7fa05adbfbdc9d50ea9c814040e7a","url":"simulation/jquery_files/shBrushXml.min.js"},{"revision":"f7168e2445a791513195455d1cf35708","url":"simulation/jquery_files/shCore.min.js"},{"revision":"719d4189d786f3992a2722ecb02de7da","url":"simulation/jquery_files/shCoreDefault.min.css"},{"revision":"70ed93fdea43e0f53c459ebdb76a271c","url":"simulation/jquery_files/shThemejqPlot.min.css"},{"revision":"719c709557281d3af4b2d91ed9dcf5b3","url":"simulation/js/exp_js.js"},{"revision":"d2c124127ce395b22f79aaef041c0609","url":"simulation/js/pop_up.js"},{"revision":"b42c72bd07921f1dd2820551f7d3afea","url":"theory.html"},{"revision":"d02db7a60e19e14376417464d87aaefa","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );