!function(e,n){"use strict";var t,o,i,s,a,r,l,h,p,f,c,u,d,v,m,y,w,T=!!("object"==typeof jnews&&"object"==typeof jnews.library)&&jnews.library,C=(o="sf-breadcrumb",i="sf-js-enabled",s="sf-with-ul",a="sf-arrows",r=function(){var n=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);return n&&e("html").css("cursor","pointer").on("click",e.noop),n}(),l="behavior"in(t=document.documentElement.style)&&"fill"in t&&/iemobile/i.test(navigator.userAgent),h=!!n.PointerEvent,p=function(e,n,t){var o=i;n.cssArrows&&(o+=" "+a),e[t?"addClass":"removeClass"](o)},f=function(e,n){var t=n?"addClass":"removeClass";e.children("a")[t](s)},c=function(e){var n=e[0].style.msTouchAction,t=e[0].style.touchAction;t="pan-y"===(t=t||n)?"auto":"pan-y",e[0].style.msTouchAction=t,e[0].style.touchAction=t},u=function(e){return e.closest("."+i)},d=function(e){return u(e).data("sfOptions")},v=function(){var n=e(this),t=d(n);clearTimeout(t.sfTimer),n.siblings().superfish("hide").end().superfish("show")},m=function(n){n.retainPath=e.inArray(this[0],n.$path)>-1,this.superfish("hide"),this.parents("."+n.hoverClass).length||(n.onIdle.call(u(this)),n.$path.length&&e.proxy(v,n.$path)())},y=function(){var n=e(this),t=d(n);r?e.proxy(m,n,t)():(clearTimeout(t.sfTimer),t.sfTimer=setTimeout(e.proxy(m,n,t),t.delay))},w=function(n){var t=e(this),o=d(t),i=t.siblings(n.data.popUpSelector);if(!1===o.onHandleTouch.call(i))return this;i.length>0&&i.is(":hidden")&&(t.one("click.superfish",!1),"MSPointerDown"===n.type||"pointerdown"===n.type?t.trigger("focus"):e.proxy(v,t.parent("li"))())},{hide:function(n){if(this.length){var t=d(this);if(!t)return this;var o=!0===t.retainPath?t.$path:"",i=this.find("li."+t.hoverClass).add(this).not(o).removeClass(t.hoverClass).children(t.popUpSelector),s=t.speedOut;if(n){var a=!("object"!=typeof jnews||"object"!=typeof jnews.library)&&jnews.library;a&&a.forEach(i,(function(e,n){e.style.display=0})),s=0}if(t.retainPath=!1,!1===t.onBeforeHide.call(i))return this;"slide"===t.animationType?i.stop(!0,!0).fadeOut(t.animationOut,(function(){var n=e(this);t.onHide.call(n)})):"fade"===t.animationType?i.stop(!0,!0).fadeOut(t.animationOut,(function(){var n=e(this);t.onHide.call(n)})):"animateTransform"===t.animationType?i.stop(!0,!0).hide(0,(function(){var n=e(this);t.onHide.call(n)})):"none"===t.animationType?i.stop(!0,!0).hide(0,(function(){var n=e(this);t.onShow.call(n)})):i.stop(!0,!0).animate(t.animationOut,s,(function(){var n=e(this);t.onHide.call(n)}))}return this},show:function(){var n=d(this);if(!n)return this;var t=this.addClass(n.hoverClass).children(n.popUpSelector);return!1===n.onBeforeShow.call(t)?this:("slide"===n.animationType?t.stop(!0,!0).slideDown(n.speed,(function(){var t=e(this);n.onShow.call(t)})):"fade"===n.animationType?t.stop(!0,!0).fadeIn(n.speed,(function(){var t=e(this);n.onShow.call(t)})):"animateTransform"===n.animationType?t.stop(!0,!0).css({display:"block",transform:"translate(0, -10px)",opacity:0}).transition({opacity:1,y:0},n.speed,"ease",(function(){var t=e(this);n.onShow.call(t)})):"none"===n.animationType?t.stop(!0,!0).show(0,(function(){var t=e(this);n.onShow.call(t)})):t.stop(!0,!0).animate(n.animation,n.speed,(function(){n.onShow.call(t)})),this)},destroy:function(){return this.each((function(){var n,t=e(this),i=t.data("sfOptions");if(!i)return!1;n=t.find(i.popUpSelector).parent("li"),clearTimeout(i.sfTimer),p(t,i),f(n),c(t),t.off(".superfish").off(".hoverIntent"),n.children(i.popUpSelector).attr("style",(function(e,n){return n.replace(/display[^;]+;?/g,"")})),i.$path.removeClass(i.hoverClass+" "+o).addClass(i.pathClass),t.find("."+i.hoverClass).removeClass(i.hoverClass),i.onDestroy.call(t),t.removeData("sfOptions")}))},init:function(n){return this.each((function(){var t=this;T&&T.requestAnimationFrame.call(T.win,(function(){var i=e(t);if(i.data("sfOptions"))return!1;var s=e.extend({},e.fn.superfish.defaults,n),a=i.find(s.popUpSelector).parent("li");s.$path=function(n,t){return n.find("li."+t.pathClass).slice(0,t.pathLevels).addClass(t.hoverClass+" "+o).filter((function(){return e(this).children(t.popUpSelector).hide().show().length})).removeClass(t.pathClass)}(i,s),i.data("sfOptions",s),p(i,s,!0),f(a,!0),c(i),function(n,t){var o="li:has("+t.popUpSelector+")";e.fn.hoverIntent&&!t.disableHI?n.hoverIntent(v,y,o):n.on("mouseenter.superfish",o,v).on("mouseleave.superfish",o,y);var i="MSPointerDown.superfish";h&&(i="pointerdown.superfish"),r||(i+=" touchend.superfish"),l&&(i+=" mousedown.superfish"),n.on("focusin.superfish","li",v).on("focusout.superfish","li",y).on(i,"a",t,w)}(i,s),a.not("."+o).superfish("hide",!0),s.onInit.call(t)}))}))}});e.fn.superfish=function(n,t){return C[n]?C[n].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof n&&n?e.error("Method "+n+" does not exist on jQuery.fn.superfish"):C.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animationType:"animate",animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop,onHandleTouch:e.noop}}(jQuery,window);