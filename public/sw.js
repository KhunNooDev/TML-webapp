if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1_zlZCiX3Y_yGXICn_Jsu/_buildManifest.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/1_zlZCiX3Y_yGXICn_Jsu/_ssgManifest.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/75fc9c18.daa6e841d2cb4900e052.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/791a3982d8fd9ace0cc34ee1a5c5defe76e44e7b.ae9b11860f7675c3bbf3.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/a3a5b518.a83a6a4548b93404854d.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/a5b4271f56f91b7b28375f2b822bf544181c7ade.e4ce9bb3fe7d8b014357.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/ef33ca7ab0705b4a0268a94c3af23a91ac5fb403.f2e8686c21244ec17f33.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/framework.f8bd46fc02868c500bda.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/main-bc3c1410d395378d4b6c.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/pages/404-f2befada6578e01bf75a.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/pages/About-03172205cf9cc16b88be.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/pages/Blog-baad003829cb9f1ebe87.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/pages/Dashboard-f2e67017e5eaba2f77d7.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/pages/Exam-9c23e63d850bf4959b10.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/pages/Login-8319c19cef5e32086274.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/pages/Register-ddfe2864ab5fbaaff9ea.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/pages/Schedule-71ac8dc448938f37bf3c.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/pages/_app-fe58ae692ef2a9f90416.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/pages/_error-eb10aa58e7b50de76a79.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/pages/blogsEx-f1486046713cf3f721f0.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/pages/blogsEx/%5Bid%5D-c5876a38f886ce715e04.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/pages/index-05d63346b2d8b33b40f9.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/polyfills-ad30d1320810fa304e64.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/css/0fda5dd18e42ede2bccb.css",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/css/20cec60b09a5b2319ad0.css",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/css/6914db8726e8164841b5.css",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/_next/static/css/b40370591220b3dca024.css",revision:"1_zlZCiX3Y_yGXICn_Jsu"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/favicon/android-chrome-192x192.png",revision:"459dac2113348dfadd8e0a96e4f39dc9"},{url:"/favicon/android-chrome-512x512.png",revision:"1dd09f49a871135445f7bd7946c66676"},{url:"/favicon/apple-touch-icon.png",revision:"7d8281986da8db9c1b5413570ecc1f83"},{url:"/favicon/browserconfig.xml",revision:"765146e15223505546b54d3db36babf3"},{url:"/favicon/favicon-16x16.png",revision:"12b1cab2ce8a716a075f33cffcc9bc97"},{url:"/favicon/favicon-32x32.png",revision:"096850f15c19cf78da22a61a7fc60b53"},{url:"/favicon/favicon.ico",revision:"aaa3368a9b5804c3f3cbd6b6f8e17dcc"},{url:"/favicon/mstile-150x150.png",revision:"fc5bd63ac943de622b000d45404f070c"},{url:"/favicon/safari-pinned-tab.svg",revision:"40c9bc99e963fb841cd147f0374682fe"},{url:"/favicon/site.webmanifest",revision:"6314e7b3f29a9426889c667f0a7c9f3a"},{url:"/icons/android-chrome-192x192.png",revision:"7b0bd67f4124b377026ad0522fa7649d"},{url:"/icons/apple-touch-icon.png",revision:"9ef0cd8a7a7d640b207558e8a9b254c2"},{url:"/icons/favicon.ico",revision:"1913674859d70381b11ab1d398839359"},{url:"/icons/icon-512x512.png",revision:"1715680c81be4002ee18c3458a98ba78"},{url:"/image/256x186.svg",revision:"a399e1d054c0ecc62daaca42dc1a4787"},{url:"/image/touchmylike_logo.ico",revision:"f3e75f7704cbea9b6d8428ebfacf8822"},{url:"/manifest.json",revision:"d65365f4ba49bd0b19c1f27d07307c6b"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
