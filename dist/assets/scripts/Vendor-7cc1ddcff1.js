!function(n){var s={};function i(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=8)}([,,,,,,,,function(e,t,n){"use strict";n(9),n(10),n(11)},function(e,t,n){"use strict";var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,n){var l=[],s={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){l.push({name:e,fn:t,options:n})},addAsyncTest:function(e){l.push({name:null,fn:e})}},u=function(){};u.prototype=s,u=new u;var f=[];var i=t.documentElement,r="svg"===i.nodeName.toLowerCase();u.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,s,i,r,a,o;for(var c in l)if(l.hasOwnProperty(c)){if(e=[],(t=l[c]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=t.fn,o="function",s=(void 0===a?"undefined":d(a))===o?t.fn():t.fn,i=0;i<e.length;i++)1===(r=e[i].split(".")).length?u[r[0]]=s:(!u[r[0]]||u[r[0]]instanceof Boolean||(u[r[0]]=new Boolean(u[r[0]])),u[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}(),function(e){var t=i.className,n=u._config.classPrefix||"";if(r&&(t=t.baseVal),u._config.enableJSClass){var s=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(s,"$1"+n+"js$2")}u._config.enableClasses&&(t+=" "+n+e.join(" "+n),r?i.className.baseVal=t:i.className=t)}(f),delete s.addTest,delete s.addAsyncTest;for(var a=0;a<u._q.length;a++)u._q[a]();e.Modernizr=u}(window,document)},function(e,t){var n,s;n=window,s=function(s,u){"use strict";if(!u.getElementsByClassName)return;var f,d,p=u.documentElement,r=s.Date,i=s.HTMLPictureElement,a="addEventListener",m="getAttribute",t=s[a],h=s.setTimeout,n=s.requestAnimationFrame||h,o=s.requestIdleCallback,g=/^picture$/i,c=["load","error","lazyincluded","_lazyloaded"],l={},A=Array.prototype.forEach,v=function(e,t){return l[t]||(l[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),l[t].test(e[m]("class")||"")&&l[t]},y=function(e,t){v(e,t)||e.setAttribute("class",(e[m]("class")||"").trim()+" "+t)},z=function(e,t){var n;(n=v(e,t))&&e.setAttribute("class",(e[m]("class")||"").replace(n," "))},w=function(t,n,e){var s=e?a:"removeEventListener";e&&w(t,n),c.forEach(function(e){t[s](e,n)})},b=function(e,t,n,s,i){var r=u.createEvent("CustomEvent");return n||(n={}),n.instance=f,r.initCustomEvent(t,!s,!i,n),e.dispatchEvent(r),r},C=function(e,t){var n;!i&&(n=s.picturefill||d.pf)?n({reevaluate:!0,elements:[e]}):t&&t.src&&(e.src=t.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},S=function(e,t,n){for(n=n||e.offsetWidth;n<d.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},x=(L=[],P=[],_=L,B=function(){var e=_;for(_=L.length?P:L,R=!(M=!0);e.length;)e.shift()();M=!1},N=function(e,t){M&&!t?e.apply(this,arguments):(_.push(e),R||(R=!0,(u.hidden?h:n)(B)))},N._lsFlush=B,N),e=function(n,e){return e?function(){x(n)}:function(){var e=this,t=arguments;x(function(){n.apply(e,t)})}},T=function(e){var t,n,s=function(){t=null,e()},i=function(){var e=r.now()-n;e<99?h(i,99-e):(o||s)(s)};return function(){n=r.now(),t||(t=h(i,99))}};var M,R,L,P,_,B,N;!function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};for(e in d=s.lazySizesConfig||s.lazysizesConfig||{},t)e in d||(d[e]=t[e]);s.lazySizesConfig=d,h(function(){d.init&&D()})}();var W=(ce=/^img$/i,le=/^iframe$/i,ue="onscroll"in s&&!/glebot/.test(navigator.userAgent),fe=0,de=0,pe=-1,me=function(e){de--,e&&e.target&&w(e.target,me),(!e||de<0||!e.target)&&(de=0)},he=function(e,t){var n,s=e,i="hidden"==E(u.body,"visibility")||"hidden"!=E(e,"visibility");for(J-=t,Y+=t,K-=t,X+=t;i&&(s=s.offsetParent)&&s!=u.body&&s!=p;)(i=0<(E(s,"opacity")||1))&&"visible"!=E(s,"overflow")&&(n=s.getBoundingClientRect(),i=X>n.left&&K<n.right&&Y>n.top-1&&J<n.bottom+1);return i},ge=function(){var e,t,n,s,i,r,a,o,c,l=f.elements;if((Q=d.loadMode)&&de<8&&(e=l.length)){t=0,pe++,null==ee&&("expand"in d||(d.expand=500<p.clientHeight&&500<p.clientWidth?500:370),Z=d.expand,ee=Z*d.expFactor),fe<ee&&de<1&&2<pe&&2<Q&&!u.hidden?(fe=ee,pe=0):fe=1<Q&&1<pe&&de<6?Z:0;for(;t<e;t++)if(l[t]&&!l[t]._lazyRace)if(ue)if((o=l[t][m]("data-expand"))&&(r=1*o)||(r=fe),c!==r&&(G=innerWidth+r*te,V=innerHeight+r,a=-1*r,c=r),n=l[t].getBoundingClientRect(),(Y=n.bottom)>=a&&(J=n.top)<=V&&(X=n.right)>=a*te&&(K=n.left)<=G&&(Y||X||K||J)&&(d.loadHidden||"hidden"!=E(l[t],"visibility"))&&(H&&de<3&&!o&&(Q<3||pe<4)||he(l[t],r))){if(Ce(l[t]),i=!0,9<de)break}else!i&&H&&!s&&de<4&&pe<4&&2<Q&&(U[0]||d.preloadAfterLoad)&&(U[0]||!o&&(Y||X||K||J||"auto"!=l[t][m](d.sizesAttr)))&&(s=U[0]||l[t]);else Ce(l[t]);s&&!i&&Ce(s)}},ne=ge,ie=0,re=d.ricTimeout,ae=function(){se=!1,ie=r.now(),ne()},oe=o&&d.ricTimeout?function(){o(ae,{timeout:re}),re!==d.ricTimeout&&(re=d.ricTimeout)}:e(function(){h(ae)},!0),Ae=function(e){var t;(e=!0===e)&&(re=33),se||(se=!0,(t=125-(r.now()-ie))<0&&(t=0),e||t<9&&o?oe():h(oe,t))},ve=function(e){y(e.target,d.loadedClass),z(e.target,d.loadingClass),w(e.target,ze),b(e.target,"lazyloaded")},ye=e(ve),ze=function(e){ye({target:e.target})},we=function(e){var t,n=e[m](d.srcsetAttr);(t=d.customMedia[e[m]("data-media")||e[m]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},be=e(function(e,t,n,s,i){var r,a,o,c,l,u;(l=b(e,"lazybeforeunveil",t)).defaultPrevented||(s&&(n?y(e,d.autosizesClass):e.setAttribute("sizes",s)),a=e[m](d.srcsetAttr),r=e[m](d.srcAttr),i&&(o=e.parentNode,c=o&&g.test(o.nodeName||"")),u=t.firesLoad||"src"in e&&(a||r||c),l={target:e},u&&(w(e,me,!0),clearTimeout(j),j=h(me,2500),y(e,d.loadingClass),w(e,ze,!0)),c&&A.call(o.getElementsByTagName("source"),we),a?e.setAttribute("srcset",a):r&&!c&&(le.test(e.nodeName)?function(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}}(e,r):e.src=r),i&&(a||c)&&C(e,{src:r})),e._lazyRace&&delete e._lazyRace,z(e,d.lazyClass),x(function(){(!u||e.complete&&1<e.naturalWidth)&&(u?me(l):de--,ve(l))},!0)}),Ce=function(e){var t,n=ce.test(e.nodeName),s=n&&(e[m](d.sizesAttr)||e[m]("sizes")),i="auto"==s;(!i&&H||!n||!e[m]("src")&&!e.srcset||e.complete||v(e,d.errorClass)||!v(e,d.lazyClass))&&(t=b(e,"lazyunveilread").detail,i&&$.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,de++,be(e,t,i,s,n))},Ee=function(){if(!H)if(r.now()-q<999)h(Ee,999);else{var e=T(function(){d.loadMode=3,Ae()});H=!0,d.loadMode=3,Ae(),t("scroll",function(){3==d.loadMode&&(d.loadMode=2),e()},!0)}},{_:function(){q=r.now(),f.elements=u.getElementsByClassName(d.lazyClass),U=u.getElementsByClassName(d.lazyClass+" "+d.preloadClass),te=d.hFac,t("scroll",Ae,!0),t("resize",Ae,!0),s.MutationObserver?new MutationObserver(Ae).observe(p,{childList:!0,subtree:!0,attributes:!0}):(p[a]("DOMNodeInserted",Ae,!0),p[a]("DOMAttrModified",Ae,!0),setInterval(Ae,999)),t("hashchange",Ae,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){u[a](e,Ae,!0)}),/d$|^c/.test(u.readyState)?Ee():(t("load",Ee),u[a]("DOMContentLoaded",Ae),h(Ee,2e4)),f.elements.length?(ge(),x._lsFlush()):Ae()},checkElems:Ae,unveil:Ce}),$=(I=e(function(e,t,n,s){var i,r,a;if(e._lazysizesWidth=s,s+="px",e.setAttribute("sizes",s),g.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),r=0,a=i.length;r<a;r++)i[r].setAttribute("sizes",s);n.detail.dataAttr||C(e,n.detail)}),F=function(e,t,n){var s,i=e.parentNode;i&&(n=S(e,i,n),(s=b(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=s.detail.width)&&n!==e._lazysizesWidth&&I(e,i,s,n))},O=T(function(){var e,t=k.length;if(t)for(e=0;e<t;e++)F(k[e])}),{_:function(){k=u.getElementsByClassName(d.autosizesClass),t("resize",O)},checkElems:O,updateElem:F}),D=function(){D.i||(D.i=!0,$._(),W._())};var k,I,F,O;var U,H,j,Q,q,G,V,J,K,X,Y,Z,ee,te,ne,se,ie,re,ae,oe,ce,le,ue,fe,de,pe,me,he,ge,Ae,ve,ye,ze,we,be,Ce,Ee;return f={cfg:d,autoSizer:$,loader:W,init:D,uP:C,aC:y,rC:z,hC:v,fire:b,gW:S,rAF:x}}(n,n.document),n.lazySizes=s,"object"==typeof e&&e.exports&&(e.exports=s)},function(fe,de,pe){var me,e,t,i,n,s,r,a,o,c;e=window,c=navigator.userAgent,e.HTMLPictureElement&&/ecko/.test(c)&&c.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(i=document.createElement("source"),n=function(e){var t,n,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=i.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},r=function(){clearTimeout(t),t=setTimeout(s,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){r(),a&&a.addListener&&a.addListener(r)},i.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),r)),function(e,r,l){"use strict";var i,u,c;r.createElement("picture");var E={},a=!1,t=function(){},n=r.createElement("img"),f=n.getAttribute,d=n.setAttribute,p=n.removeAttribute,o=r.documentElement,s={},S={algorithm:""},m="data-pfsrc",h=m+"set",g=navigator.userAgent,x=/rident/.test(g)||/ecko/.test(g)&&g.match(/rv\:(\d+)/)&&35<RegExp.$1,T="currentSrc",A=/\s+\+?\d+(e\d+)?w/,v=/(\([^)]+\))?\s*(.+)/,y=e.picturefillCFG,z="font-size:100%!important;",w=!0,b={},C={},M=e.devicePixelRatio,R={px:1,in:96},L=r.createElement("a"),P=!1,_=/^[ \t\n\r\u000c]+/,B=/^[, \t\n\r\u000c]+/,N=/^[^ \t\n\r\u000c]+/,W=/[,]+$/,$=/^\d+$/,D=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,k=function(e,t,n,s){e.addEventListener?e.addEventListener(t,n,s||!1):e.attachEvent&&e.attachEvent("on"+t,n)},I=function(t){var n={};return function(e){return e in n||(n[e]=t(e)),n[e]}};function F(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var O,U,H,j,Q,q,G,V,J,K,X,Y,Z,ee,te,ne,se,ie,re,ae=(O=/^([\d\.]+)(em|vw|px)$/,U=I(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in b))if(b[e]=!1,t&&(n=e.match(O)))b[e]=n[1]*R[n[2]];else try{b[e]=new Function("e",U(e))(R)}catch(e){}return b[e]}),oe=function(e,t){return e.w?(e.cWidth=E.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ce=function(e){if(a){var t,n,s,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),s=(t=i.elements||E.qsa(i.context||r,i.reevaluate||i.reselect?E.sel:E.selShort)).length){for(E.setupRun(i),P=!0,n=0;n<s;n++)E.fillImg(t[n],i);E.teardownRun(i)}}};function le(e,t){return e.res-t.res}function ue(e,t){var n,s,i;if(e&&t)for(i=E.parseSet(t),e=E.makeUrl(e),n=0;n<i.length;n++)if(e===E.makeUrl(i[n].url)){s=i[n];break}return s}e.console&&console.warn,T in n||(T="src"),s["image/jpeg"]=!0,s["image/gif"]=!0,s["image/png"]=!0,s["image/svg+xml"]=r.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),E.ns=("pf"+(new Date).getTime()).substr(0,9),E.supSrcset="srcset"in n,E.supSizes="sizes"in n,E.supPicture=!!e.HTMLPictureElement,E.supSrcset&&E.supPicture&&!E.supSizes&&(H=r.createElement("img"),n.srcset="data:,a",H.src="data:,a",E.supSrcset=n.complete===H.complete,E.supPicture=E.supSrcset&&E.supPicture),E.supSrcset&&!E.supSizes?(j="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",Q=r.createElement("img"),q=function(){2===Q.width&&(E.supSizes=!0),u=E.supSrcset&&!E.supSizes,a=!0,setTimeout(ce)},Q.onload=q,Q.onerror=q,Q.setAttribute("sizes","9px"),Q.srcset=j+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",Q.src=j):a=!0,E.selShort="picture>img,img[srcset]",E.sel=E.selShort,E.cfg=S,E.DPR=M||1,E.u=R,E.types=s,E.setSize=t,E.makeUrl=I(function(e){return L.href=e,L.href}),E.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},E.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?E.matchesMedia=function(e){return!e||matchMedia(e).matches}:E.matchesMedia=E.mMQ,E.matchesMedia.apply(this,arguments)},E.mMQ=function(e){return!e||ae(e)},E.calcLength=function(e){var t=ae(e,!0)||!1;return t<0&&(t=!1),t},E.supportsType=function(e){return!e||s[e]},E.parseSize=I(function(e){var t=(e||"").match(v);return{media:t&&t[1],length:t&&t[2]}}),E.parseSet=function(e){return e.cands||(e.cands=function(s,f){function e(e){var t,n=e.exec(s.substring(a));if(n)return t=n[0],a+=t.length,t}var d,p,t,n,i,r=s.length,a=0,m=[];function o(){var e,t,n,s,i,r,a,o,c,l=!1,u={};for(s=0;s<p.length;s++)r=(i=p[s])[i.length-1],a=i.substring(0,i.length-1),o=parseInt(a,10),c=parseFloat(a),$.test(a)&&"w"===r?((e||t)&&(l=!0),0===o?l=!0:e=o):D.test(a)&&"x"===r?((e||t||n)&&(l=!0),c<0?l=!0:t=c):$.test(a)&&"h"===r?((n||t)&&(l=!0),0===o?l=!0:n=o):l=!0;l||(u.url=d,e&&(u.w=e),t&&(u.d=t),n&&(u.h=n),n||t||e||(u.d=1),1===u.d&&(f.has1x=!0),u.set=f,m.push(u))}function c(){for(e(_),t="",n="in descriptor";;){if(i=s.charAt(a),"in descriptor"===n)if(F(i))t&&(p.push(t),t="",n="after descriptor");else{if(","===i)return a+=1,t&&p.push(t),void o();if("("===i)t+=i,n="in parens";else{if(""===i)return t&&p.push(t),void o();t+=i}}else if("in parens"===n)if(")"===i)t+=i,n="in descriptor";else{if(""===i)return p.push(t),void o();t+=i}else if("after descriptor"===n)if(F(i));else{if(""===i)return void o();n="in descriptor",a-=1}a+=1}}for(;;){if(e(B),r<=a)return m;d=e(N),p=[],","===d.slice(-1)?(d=d.replace(W,""),o()):c()}}(e.srcset,e)),e.cands},E.getEmValue=function(){var e;if(!i&&(e=r.body)){var t=r.createElement("div"),n=o.style.cssText,s=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",o.style.cssText=z,e.style.cssText=z,e.appendChild(t),i=t.offsetWidth,e.removeChild(t),i=parseFloat(i,10),o.style.cssText=n,e.style.cssText=s}return i||16},E.calcListLength=function(e){if(!(e in C)||S.uT){var t=E.calcLength(function(e){var t,n,s,i,r,a,o,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(s=(n=function(e){var t,n="",s=[],i=[],r=0,a=0,o=!1;function c(){n&&(s.push(n),n="")}function l(){s[0]&&(i.push(s),s=[])}for(;;){if(""===(t=e.charAt(a)))return c(),l(),i;if(o){if("*"===t&&"/"===e[a+1]){o=!1,a+=2,c();continue}a+=1}else{if(F(t)){if(e.charAt(a-1)&&F(e.charAt(a-1))||!n){a+=1;continue}if(0===r){c(),a+=1;continue}t=" "}else if("("===t)r+=1;else if(")"===t)r-=1;else{if(","===t){c(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){o=!0,a+=2;continue}}n+=t,a+=1}}}(e)).length,t=0;t<s;t++)if(r=(i=n[t])[i.length-1],o=r,c.test(o)&&0<=parseFloat(o)||l.test(o)||"0"===o||"-0"===o||"+0"===o){if(a=r,i.pop(),0===i.length)return a;if(i=i.join(" "),E.matchesMedia(i))return a}return"100vw"}(e));C[e]=t||R.width}return C[e]},E.setRes=function(e){var t;if(e)for(var n=0,s=(t=E.parseSet(e)).length;n<s;n++)oe(t[n],e.sizes);return t},E.setRes.res=oe,E.applySetCandidate=function(e,t){if(e.length){var n,s,i,r,a,o,c,l,u,f,d,p,m,h,g,A,v,y,z,w,b=t[E.ns],C=E.DPR;if(o=b.curSrc||t[T],(c=b.curCan||(f=t,d=o,!(p=e[0].set)&&d&&(p=(p=f[E.ns].sets)&&p[p.length-1]),(m=ue(d,p))&&(d=E.makeUrl(d),f[E.ns].curSrc=d,(f[E.ns].curCan=m).res||oe(m,m.set.sizes)),m))&&c.set===e[0].set&&((u=x&&!t.complete&&c.res-.1>C)||(c.cached=!0,c.res>=C&&(a=c))),!a)for(e.sort(le),a=e[(r=e.length)-1],s=0;s<r;s++)if((n=e[s]).res>=C){a=e[i=s-1]&&(u||o!==E.makeUrl(n.url))&&(h=e[i].res,g=n.res,A=C,v=e[i].cached,w=z=y=void 0,"saveData"===S.algorithm?2.7<h?w=A+1:(z=(g-A)*(y=Math.pow(h-.6,1.5)),v&&(z+=.1*y),w=h+z):w=1<A?Math.sqrt(h*g):h,A<w)?e[i]:n;break}a&&(l=E.makeUrl(a.url),b.curSrc=l,b.curCan=a,l!==o&&E.setSrc(t,a),E.setSize(t))}},E.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},E.getSet=function(e){var t,n,s,i=!1,r=e[E.ns].sets;for(t=0;t<r.length&&!i;t++)if((n=r[t]).srcset&&E.matchesMedia(n.media)&&(s=E.supportsType(n.type))){"pending"===s&&(n=s),i=n;break}return i},E.parseSets=function(e,t,n){var s,i,r,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[E.ns];(c.src===l||n.src)&&(c.src=f.call(e,"src"),c.src?d.call(e,m,c.src):p.call(e,m)),(c.srcset===l||n.srcset||!E.supSrcset||e.srcset)&&(s=f.call(e,"srcset"),c.srcset=s,a=!0),c.sets=[],o&&(c.pic=!0,function(e,t){var n,s,i,r,a=e.getElementsByTagName("source");for(n=0,s=a.length;n<s;n++)(i=a[n])[E.ns]=!0,(r=i.getAttribute("srcset"))&&t.push({srcset:r,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,c.sets)),c.srcset?(i={srcset:c.srcset,sizes:f.call(e,"sizes")},c.sets.push(i),(r=(u||c.src)&&A.test(c.srcset||""))||!c.src||ue(c.src,i)||i.has1x||(i.srcset+=", "+c.src,i.cands.push({url:c.src,d:1,set:i}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=l,c.supported=!(o||i&&!E.supSrcset||r&&!E.supSizes),a&&E.supSrcset&&!c.supported&&(s?(d.call(e,h,s),e.srcset=""):p.call(e,h)),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==E.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},E.fillImg=function(e,t){var n,s,i,r,a,o=t.reselect||t.reevaluate;(e[E.ns]||(e[E.ns]={}),n=e[E.ns],o||n.evaled!==c)&&(n.parsed&&!t.reevaluate||E.parseSets(e,e.parentNode,t),n.supported?n.evaled=c:(s=e,r=E.getSet(s),a=!1,"pending"!==r&&(a=c,r&&(i=E.setRes(r),E.applySetCandidate(i,s))),s[E.ns].evaled=a))},E.setupRun=function(){P&&!w&&M===e.devicePixelRatio||(w=!1,M=e.devicePixelRatio,b={},C={},E.DPR=M||1,R.width=Math.max(e.innerWidth||0,o.clientWidth),R.height=Math.max(e.innerHeight||0,o.clientHeight),R.vw=R.width/100,R.vh=R.height/100,c=[R.height,R.width,M].join("-"),R.em=E.getEmValue(),R.rem=R.em)},E.supPicture?(ce=t,E.fillImg=t):(Z=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function(){var e=r.readyState||"";te=setTimeout(ee,"loading"===e?200:999),r.body&&(E.fillImgs(),(G=G||Z.test(e))&&clearTimeout(te))},te=setTimeout(ee,r.body?9:99),ne=o.clientHeight,k(e,"resize",(V=function(){w=Math.max(e.innerWidth||0,o.clientWidth)!==R.width||o.clientHeight!==ne,ne=o.clientHeight,w&&E.fillImgs()},J=99,Y=function(){var e=new Date-X;e<J?K=setTimeout(Y,J-e):(K=null,V())},function(){X=new Date,K||(K=setTimeout(Y,J))})),k(r,"readystatechange",ee)),E.picturefill=ce,E.fillImgs=ce,E.teardownRun=t,ce._=E,e.picturefillCFG={pf:E,push:function(e){var t=e.shift();"function"==typeof E[t]?E[t].apply(E,e):(S[t]=e[0],P&&E.fillImgs({reselect:!0}))}};for(;y&&y.length;)e.picturefillCFG.push(y.shift());e.picturefill=ce,"object"==typeof fe&&"object"==typeof fe.exports?fe.exports=ce:(me=function(){return ce}.call(de,pe,de,fe))===l||(fe.exports=me),E.supPicture||(s["image/webp"]=(se="image/webp",ie="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(re=new e.Image).onerror=function(){s[se]=!1,ce()},re.onload=function(){s[se]=1===re.width,ce()},re.src=ie,"pending"))}(window,document)}]);