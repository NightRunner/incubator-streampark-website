(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[4921],{2711:function(t){t.exports=function(t){function e(n){if(a[n])return a[n].exports;var r=a[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var a={};return e.m=t,e.c=a,e.p="dist/",e(0)}([function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},o=(n(a(1)),a(6)),i=n(o),s=n(a(7)),c=n(a(8)),u=n(a(9)),l=n(a(10)),m=n(a(11)),d=n(a(14)),f=[],p=!1,h={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(p=!0),p)return f=(0,m.default)(f,h),(0,l.default)(f,h.once),f},b=function(){f=(0,d.default)(),v()},g=function(){f.forEach((function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay")}))},y=function(t){return!0===t||"mobile"===t&&u.default.mobile()||"phone"===t&&u.default.phone()||"tablet"===t&&u.default.tablet()||"function"==typeof t&&!0===t()},w=function(t){h=r(h,t),f=(0,d.default)();var e=document.all&&!window.atob;return y(h.disable)||e?g():(h.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),h.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",h.easing),document.querySelector("body").setAttribute("data-aos-duration",h.duration),document.querySelector("body").setAttribute("data-aos-delay",h.delay),"DOMContentLoaded"===h.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===h.startEvent?window.addEventListener(h.startEvent,(function(){v(!0)})):document.addEventListener(h.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,s.default)(v,h.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(v,h.debounceDelay,!0)),window.addEventListener("scroll",(0,i.default)((function(){(0,l.default)(f,h.once)}),h.throttleDelay)),h.disableMutationObserver||c.default.ready("[data-aos]",b),f)};t.exports={init:w,refresh:v,refreshHard:b}},function(t,e){},,,,,function(t,e){(function(e){"use strict";function a(t,e,a){function n(e){var a=h,n=v;return h=v=void 0,U=e,g=t.apply(n,a)}function o(t){return U=t,y=setTimeout(l,e),N?n(t):g}function i(t){var a=e-(t-w);return j?E(a,b-(t-U)):a}function c(t){var a=t-w;return void 0===w||a>=e||a<0||j&&t-U>=b}function l(){var t=x();return c(t)?m(t):void(y=setTimeout(l,i(t)))}function m(t){return y=void 0,O&&h?n(t):(h=v=void 0,g)}function d(){void 0!==y&&clearTimeout(y),U=0,h=w=v=y=void 0}function f(){return void 0===y?g:m(x())}function p(){var t=x(),a=c(t);if(h=arguments,v=this,w=t,a){if(void 0===y)return o(w);if(j)return y=setTimeout(l,e),n(w)}return void 0===y&&(y=setTimeout(l,e)),g}var h,v,b,g,y,w,U=0,N=!1,j=!1,O=!0;if("function"!=typeof t)throw new TypeError(u);return e=s(e)||0,r(a)&&(N=!!a.leading,b=(j="maxWait"in a)?k(s(a.maxWait)||0,e):b,O="trailing"in a?!!a.trailing:O),p.cancel=d,p.flush=f,p}function n(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError(u);return r(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),a(t,e,{leading:o,maxWait:e,trailing:i})}function r(t){var e=void 0===t?"undefined":c(t);return!!t&&("object"==e||"function"==e)}function o(t){return!!t&&"object"==(void 0===t?"undefined":c(t))}function i(t){return"symbol"==(void 0===t?"undefined":c(t))||o(t)&&w.call(t)==m}function s(t){if("number"==typeof t)return t;if(i(t))return l;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(d,"");var a=p.test(t);return a||h.test(t)?v(t.slice(2),a?2:8):f.test(t)?l:+t}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u="Expected a function",l=NaN,m="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,h=/^0o[0-7]+$/i,v=parseInt,b="object"==(void 0===e?"undefined":c(e))&&e&&e.Object===Object&&e,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,y=b||g||Function("return this")(),w=Object.prototype.toString,k=Math.max,E=Math.min,x=function(){return y.Date.now()};t.exports=n}).call(e,function(){return this}())},function(t,e){(function(e){"use strict";function a(t,e,a){function r(e){var a=h,n=v;return h=v=void 0,U=e,g=t.apply(n,a)}function o(t){return U=t,y=setTimeout(l,e),N?r(t):g}function s(t){var a=e-(t-x);return j?k(a,b-(t-U)):a}function u(t){var a=t-x;return void 0===x||a>=e||a<0||j&&t-U>=b}function l(){var t=E();return u(t)?m(t):void(y=setTimeout(l,s(t)))}function m(t){return y=void 0,O&&h?r(t):(h=v=void 0,g)}function d(){void 0!==y&&clearTimeout(y),U=0,h=x=v=y=void 0}function f(){return void 0===y?g:m(E())}function p(){var t=E(),a=u(t);if(h=arguments,v=this,x=t,a){if(void 0===y)return o(x);if(j)return y=setTimeout(l,e),r(x)}return void 0===y&&(y=setTimeout(l,e)),g}var h,v,b,g,y,x,U=0,N=!1,j=!1,O=!0;if("function"!=typeof t)throw new TypeError(c);return e=i(e)||0,n(a)&&(N=!!a.leading,b=(j="maxWait"in a)?w(i(a.maxWait)||0,e):b,O="trailing"in a?!!a.trailing:O),p.cancel=d,p.flush=f,p}function n(t){var e=void 0===t?"undefined":s(t);return!!t&&("object"==e||"function"==e)}function r(t){return!!t&&"object"==(void 0===t?"undefined":s(t))}function o(t){return"symbol"==(void 0===t?"undefined":s(t))||r(t)&&y.call(t)==l}function i(t){if("number"==typeof t)return t;if(o(t))return u;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(m,"");var a=f.test(t);return a||p.test(t)?h(t.slice(2),a?2:8):d.test(t)?u:+t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c="Expected a function",u=NaN,l="[object Symbol]",m=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,p=/^0o[0-7]+$/i,h=parseInt,v="object"==(void 0===e?"undefined":s(e))&&e&&e.Object===Object&&e,b="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,g=v||b||Function("return this")(),y=Object.prototype.toString,w=Math.max,k=Math.min,E=function(){return g.Date.now()};t.exports=a}).call(e,function(){return this}())},function(t,e){"use strict";function a(t){var e=void 0,n=void 0;for(e=0;e<t.length;e+=1){if((n=t[e]).dataset&&n.dataset.aos)return!0;if(n.children&&a(n.children))return!0}return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(){return!!n()}function o(t,e){var a=window.document,r=new(n())(i);s=e,r.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function i(t){t&&t.forEach((function(t){var e=Array.prototype.slice.call(t.addedNodes),n=Array.prototype.slice.call(t.removedNodes);if(a(e.concat(n)))return s()}))}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){};e.default={isSupported:r,ready:o}},function(t,e){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function t(){a(this,t)}return r(t,[{key:"phone",value:function(){var t=n();return!(!o.test(t)&&!i.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=n();return!(!s.test(t)&&!c.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),t}();e.default=new u},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t,e,a){var n=t.node.getAttribute("data-aos-once");e>t.position?t.node.classList.add("aos-animate"):void 0!==n&&("false"===n||!a&&"true"!==n)&&t.node.classList.remove("aos-animate")},n=function(t,e){var n=window.pageYOffset,r=window.innerHeight;t.forEach((function(t,o){a(t,r+n,e)}))};e.default=n},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(a(12)),o=function(t,e){return t.forEach((function(t,a){t.node.classList.add("aos-init"),t.position=(0,r.default)(t.node,e.offset)})),t};e.default=o},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(a(13)),o=function(t,e){var a=0,n=0,o=window.innerHeight,i={offset:t.getAttribute("data-aos-offset"),anchor:t.getAttribute("data-aos-anchor"),anchorPlacement:t.getAttribute("data-aos-anchor-placement")};switch(i.offset&&!isNaN(i.offset)&&(n=parseInt(i.offset)),i.anchor&&document.querySelectorAll(i.anchor)&&(t=document.querySelectorAll(i.anchor)[0]),a=(0,r.default)(t).top,i.anchorPlacement){case"top-bottom":break;case"center-bottom":a+=t.offsetHeight/2;break;case"bottom-bottom":a+=t.offsetHeight;break;case"top-center":a+=o/2;break;case"bottom-center":a+=o/2+t.offsetHeight;break;case"center-center":a+=o/2+t.offsetHeight/2;break;case"top-top":a+=o;break;case"bottom-top":a+=t.offsetHeight+o;break;case"center-top":a+=t.offsetHeight/2+o}return i.anchorPlacement||i.offset||isNaN(e)||(n=e),a+n};e.default=o},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){for(var e=0,a=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),a+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:a,left:e}};e.default=a},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,(function(t){return{node:t}}))};e.default=a}])},1262:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var n=a(7294),r=a(2389);function o(t){let{children:e,fallback:a}=t;return(0,r.Z)()?n.createElement(n.Fragment,null,e?.()):a??null}},7805:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>f});var n=a(7294),r=a(1262),o=a(2389);const i=JSON.parse('{"zh-CN":{"info":{"desc":"StreamPark \u793e\u533a\u7531\u8d21\u732e\u8005\u7ec4\u6210\u3002 \u8d21\u732e\u8005\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee StreamPark \u9879\u76ee\u7684\u6e90\u4ee3\u7801\u5e76\u53c2\u4e0e\u8d21\u732e\u5f53\u4e2d(\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4ee3\u7801\u7684\u8d21\u732e)\u3002 \u8d21\u732e\u8005\u901a\u8fc7\u63d0\u4ea4\u8865\u4e01\u548c\u5efa\u8bae\u6765\u6539\u5584\u9879\u76ee\u3002 \u8be5\u9879\u76ee\u7684\u8d21\u732e\u8005\u6570\u91cf\u662f\u65e0\u9650\u7684\u3002 \u65e0\u8bba\u662f\u7410\u788e\u7684\u6e05\u7406\u5de5\u4f5c\uff0c\u91cd\u8981\u7684\u65b0\u529f\u80fd\u8fd8\u662f\u5176\u4ed6\u91cd\u5927\u7684\u5956\u52b1\uff0c\u5bf9 StreamPark \u6240\u505a\u7684\u6240\u6709\u8d21\u732e\u90fd\u5c06\u53d7\u5230\u6781\u5927\u7684\u8d5e\u8d4f\u3002","tip":"(\u6392\u540d\u4e0d\u5206\u5148\u540e)"},"mentor":[{"avatarUrl":"https://avatars.githubusercontent.com/u/18818196?v=4","gitUrl":"https://github.com/tisonkun","name":"tison"},{"avatarUrl":"https://avatars.githubusercontent.com/u/219644?v=4","gitUrl":"https://github.com/WillemJiang","name":"Willem Ning Jiang"},{"avatarUrl":"https://avatars.githubusercontent.com/u/4958168?v=4","gitUrl":"https://github.com/Apache9","name":"Duo Zhang"},{"avatarUrl":"https://avatars.githubusercontent.com/u/1727146?v=4","gitUrl":"https://github.com/StephanEwen","name":"Stephan Ewen"},{"avatarUrl":"https://avatars.githubusercontent.com/u/263695?v=4","gitUrl":"https://github.com/tweise","name":"Thomas Weise"}],"PPMC":[{"avatarUrl":"https://avatars.githubusercontent.com/u/13284744?v=4","gitUrl":"https://github.com/wolfboys","name":"Huajie Wang"},{"avatarUrl":"https://avatars.githubusercontent.com/u/22493821?v=4","gitUrl":"https://github.com/Al-assad","name":"Linying Yu"},{"avatarUrl":"https://avatars.githubusercontent.com/u/60029759?v=4","gitUrl":"https://github.com/MonsterChenzhuo","name":"Zhuoyu Chen"},{"avatarUrl":"https://avatars.githubusercontent.com/u/5511181?v=4","gitUrl":"https://github.com/GuoNingNing","name":"Ning Guo"},{"avatarUrl":"https://avatars.githubusercontent.com/u/7881241?v=4","gitUrl":"https://github.com/xinzhuxiansheng","name":"Yang Zhou"},{"avatarUrl":"https://avatars.githubusercontent.com/u/29084491?v=4","gitUrl":"https://github.com/lvshaokang","name":"Shaokang Lv"},{"avatarUrl":"https://avatars.githubusercontent.com/u/45427129?v=4","gitUrl":"https://github.com/monrg","name":"Qingrong Wang"}],"committer":[{"avatarUrl":"https://avatars.githubusercontent.com/u/39726513?v=4","gitUrl":"https://github.com/wangsizhu0504","name":"Sizhu Wang"},{"avatarUrl":"https://avatars.githubusercontent.com/u/38427477?v=4","gitUrl":"https://github.com/1996fanrui","name":"Rui Fan"},{"avatarUrl":"https://avatars.githubusercontent.com/u/19602424?v=4","gitUrl":"https://github.com/macksonmu","name":"Chunjin Mu"}]},"en":{"info":{"desc":"The StreamPark team is comprised of Members and Contributors. Members have direct access to the source of StreamPark project and actively evolve the code-base. Contributors improve the project through submission of patches and suggestions to the Members. The number of Contributors to the project is unbounded. All contributions to StreamPark are greatly appreciated, whether for trivial cleanups, big new features or other material rewards.","tip":"(In no particular order)"},"mentor":[{"avatarUrl":"https://avatars.githubusercontent.com/u/18818196?v=4","gitUrl":"https://github.com/tisonkun","name":"tison"},{"avatarUrl":"https://avatars.githubusercontent.com/u/219644?v=4","gitUrl":"https://github.com/WillemJiang","name":"Willem Ning Jiang"},{"avatarUrl":"https://avatars.githubusercontent.com/u/4958168?v=4","gitUrl":"https://github.com/Apache9","name":"Duo Zhang"},{"avatarUrl":"https://avatars.githubusercontent.com/u/1727146?v=4","gitUrl":"https://github.com/StephanEwen","name":"Stephan Ewen"},{"avatarUrl":"https://avatars.githubusercontent.com/u/263695?v=4","gitUrl":"https://github.com/tweise","name":"Thomas Weise"}],"PPMC":[{"avatarUrl":"https://avatars.githubusercontent.com/u/13284744?v=4","gitUrl":"https://github.com/wolfboys","name":"Huajie Wang"},{"avatarUrl":"https://avatars.githubusercontent.com/u/22493821?v=4","gitUrl":"https://github.com/Al-assad","name":"Linying Yu"},{"avatarUrl":"https://avatars.githubusercontent.com/u/60029759?v=4","gitUrl":"https://github.com/MonsterChenzhuo","name":"Zhuoyu Chen"},{"avatarUrl":"https://avatars.githubusercontent.com/u/5511181?v=4","gitUrl":"https://github.com/GuoNingNing","name":"Ning Guo"},{"avatarUrl":"https://avatars.githubusercontent.com/u/7881241?v=4","gitUrl":"https://github.com/xinzhuxiansheng","name":"Yang Zhou"},{"avatarUrl":"https://avatars.githubusercontent.com/u/29084491?v=4","gitUrl":"https://github.com/lvshaokang","name":"Shaokang Lv"},{"avatarUrl":"https://avatars.githubusercontent.com/u/45427129?v=4","gitUrl":"https://github.com/monrg","name":"Qingrong Wang"}],"committer":[{"avatarUrl":"https://avatars.githubusercontent.com/u/39726513?v=4","gitUrl":"https://github.com/wangsizhu0504","name":"Sizhu Wang"},{"avatarUrl":"https://avatars.githubusercontent.com/u/38427477?v=4","gitUrl":"https://github.com/1996fanrui","name":"Rui Fan"},{"avatarUrl":"https://avatars.githubusercontent.com/u/19602424?v=4","gitUrl":"https://github.com/macksonmu","name":"Chunjin Mu"}]}}');var s,c=a(3929);function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},u.apply(this,arguments)}const l=t=>{let{title:e,titleId:a,...r}=t;return n.createElement("svg",u({className:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:200,height:200,"aria-labelledby":a},r),e?n.createElement("title",{id:a},e):null,s||(s=n.createElement("path",{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"})))};var m=a(2711),d=a.n(m);function f(){const t=(0,o.Z)()&&0===location.pathname.indexOf("/zh-CN/")?"zh-CN":"en",e=i?.[t];return n.createElement(r.Z,null,(()=>(d().init({offset:100,duration:700,easing:"ease-out-quad",once:!0}),window.addEventListener("load",d().refresh),n.createElement(c.Z,null,n.createElement("div",{className:"block team_page",style:{padding:"10px 0 30px"}},n.createElement("h3",{className:"fs-2 mb-4 fw-bold text-center"},"StreamPark Team"),n.createElement("hr",{className:"divider my-4 mx-auto",style:{maxWidth:"10rem"}}),n.createElement("p",{className:"team_desc team_indent"},e.info.desc),n.createElement("h3",{className:"team_title mb-5"},"Mentor",n.createElement("span",{className:"desc"},e.info.tip)),n.createElement("div",{className:"row bg-gray py-4"},e.mentor.map(((t,e)=>n.createElement("div",{className:"team_user mb-5 px-4",key:e,"data-aos":"fade-up","data-aos-delay":100*e},n.createElement("a",{href:t.gitUrl,target:"_blank"},n.createElement("div",{className:"team team-hover rounded"},n.createElement("div",{className:"team-img"},n.createElement("img",{src:t.avatarUrl,alt:t.name})),n.createElement("div",{className:"team-info"},n.createElement("span",{className:"team-name text-dark"},t.name),n.createElement("p",{className:"team-leader d-flex align-items-center justify-content-center"},n.createElement(l,{className:"github-icon"}),t.name)))))))),n.createElement("h3",{className:"team_title mb-5"},"PPMC",n.createElement("span",{className:"desc"},e.info.tip)),n.createElement("div",{className:"row bg-gray py-4"},e.PPMC.map(((t,e)=>n.createElement("div",{className:"team_user mb-5 px-4",key:e,"data-aos":"fade-up","data-aos-delay":100*e},n.createElement("a",{href:t.gitUrl,target:"_blank"},n.createElement("div",{className:"team team-hover rounded"},n.createElement("div",{className:"team-img"},n.createElement("img",{src:t.avatarUrl,alt:t.name})),n.createElement("div",{className:"team-info"},n.createElement("span",{className:"team-name text-dark"},t.name),n.createElement("p",{className:"team-leader d-flex align-items-center justify-content-center"},n.createElement(l,{className:"github-icon"}),t.name)))))))),n.createElement("h3",{className:"team_title mb-5"},"Committer",n.createElement("span",{className:"desc"},e.info.tip)),n.createElement("div",{className:"row bg-gray py-4"},e.committer.map(((t,e)=>n.createElement("div",{className:"team_user mb-5 px-4",key:e,"data-aos":"fade-up","data-aos-delay":100*e},n.createElement("a",{href:t.gitUrl,target:"_blank"},n.createElement("div",{className:"team team-hover rounded"},n.createElement("div",{className:"team-img"},n.createElement("img",{src:t.avatarUrl,alt:t.name})),n.createElement("div",{className:"team-info"},n.createElement("span",{className:"team-name text-dark"},t.name),n.createElement("p",{className:"team-leader d-flex align-items-center justify-content-center"},n.createElement(l,{className:"github-icon"}),t.name)))))))))))))}}}]);