!function(){"use strict";window.jnews=window.jnews||{},window.jnews.overlayslider=window.jnews.overlayslider||{};var e=function(){var e="object"==typeof jnews&&"object"==typeof jnews.library,t="function"==typeof jnews.tns;if(e&&t)var r=jnews.library,i=function(e){e=r.extend({container:".jeg_overlay_slider",responsive:{0:{items:1},380:{items:2},768:{items:3},1024:{items:4,loop:!0}},gutter:10,nav:!1,controls:!1,controlsText:["",""],mouseDrag:!0,textDirection:"ltr"},e||{});var t=function(e){this.construct(e),r.triggerEvents(r.win,"remove_overlayslider_events")};return t.prototype.init=function(){var e=this,t=e.header,i=!1;e.options.fullscreen=e.element.dataset.fullscreen,e.options.shownav=e.element.dataset.nav,e.resize_wrapper=function(){n&&r.cancelAnimationFrame.call(r.win,n);var n=r.requestAnimationFrame.call(r.win,(function(){(null==e.header||i)&&(i=!0,e.header=r.doc.createElement("div")),t=r.isVisible(e.header)?e.header:e.container.querySelector(".jeg_navbar_mobile_wrapper"),i&&(t=e.header),r.windowWidth()>e.options.breakpoint?e.element.style.height=r.windowHeight()-r.getHeight(t)+"px":e.element.setAttribute("style",""),e.resize_wrapper_fix()}))},e.resize_wrapper_fix=function(){t&&(e.element.style.height=null,r.cancelAnimationFrame.call(r.win,t));var t=r.requestAnimationFrame.call(r.win,(function(){if(e.slider_wrapper){(null==e.header||i)&&(i=!0,e.header=r.doc.createElement("div"));var t=r.isVisible(e.header)?e.header:e.container.querySelector(".jeg_navbar_mobile_wrapper");if(i&&(t=e.header),r.windowWidth()>767)e.slider_wrapper.style.height=r.getHeight(e.element)+r.getHeight(t)+"px",e.element.style.height=r.getHeight(e.slider_wrapper)-r.getHeight(t)+"px";else{var n=r.windowHeight(),a=n>414?.45*n:n;e.slider_wrapper.style.height=a+"px",e.element.style.height=a-r.getHeight(t)+"px"}}}))},e.options.fullscreen?(e.resize_wrapper(),r.addEvents(r.win,{resize:e.resize_wrapper,load:e.resize_wrapper})):(e.resize_wrapper_fix(),r.addEvents(r.win,{resize:e.resize_wrapper_fix,load:e.resize_wrapper_fix})),e.do_slider(),e.bind_click()},t.prototype.construct=function(e){var t=this;t.container=r.globalBody,t.options=r.extend({textDirection:"ltr",fullscreen:!1,breakpoint:1024},e||{}),t.tempOptions=t.options,t.element="string"==typeof t.options.container?t.container.querySelectorAll(t.options.container):t.options.container,t.element.length?r.forEach(t.element,(function(e,r){t.options.container=e,t.tempOptions=t.options,t.construct(t.options)})):(t.header=t.container.querySelector(".jeg_header"),t.loader=t.element.querySelector(".jeg_overlay_slider_loader"),t.slider_wrapper=t.element.querySelector(".jeg_overlay_slider_wrapper"),t.slider_bottom=t.element.querySelector(".jeg_overlay_slider_bottom"),t.slider_bg=t.element.getElementsByClassName("jeg_overlay_slider_bg"),t.caption_container=t.element.getElementsByClassName("jeg_overlay_caption_container"),t.activeid=0,t.previd=0,t.init())},t.prototype.do_slider=function(){var e=this,t=r.extend(e.tempOptions||{},{container:e.slider_bottom,controls:e.options.shownav,responsive:{0:{items:1},380:{items:2},768:{items:3},1024:{items:4,loop:!0}},gutter:10,mouseDrag:!0});r.hasClass(t.container,"jeg_tns_active")||(e.slider_bottom=jnews.tns(t),void 0!==e.slider_bottom&&(e.slider_bottom.events.on("indexChanged",(function(t){r.addClass(e.element.querySelector('.jeg_overlay_slider_item_wrapper[data-id="'+e.activeid+'"]'),"active")})),e.slider_bottom.events.on("dragStart",(function(e){e.event.preventDefault(),e.event.stopPropagation()})),r.addClass(t.container,"jeg_tns_active"),r.dataStorage.put(t.container,"tiny-slider",e.slider_bottom)))},t.prototype.bind_click=function(){var e=this;r.forEach(e.element.getElementsByClassName("jeg_overlay_slider_item_wrapper"),(function(t,r){t.addEventListener("click",(function(t){t.preventDefault();var r=this.dataset.id;e.previd=e.activeid,e.activeid=r,e.change_active(this),e.load_background_text(r)}))}))},t.prototype.change_active=function(e){r.forEach(this.element.getElementsByClassName("jeg_overlay_slider_item_wrapper"),(function(e,t){r.removeClass(e,"active")})),r.addClass(e,"active")},t.prototype.load_background_text=function(e){var t=this;r.addClass(t.loader,"jeg_slider_fadein"),r.removeClass(t.loader,"jeg_slider_fadeout");var i=t.slider_bg[t.previd],n=t.slider_bg[e],a=n.dataset.bg,o=t.caption_container[t.previd],s=t.caption_container[e];if(r.addClass(o,"jeg_slider_fadeout"),r.removeClass(o,"jeg_slider_fadein"),r.hasClass(n,"loaded"))t.change_active_background(i,n,s);else{var l=new Image;r.addEvents(l,{load:function(){e===t.activeid&&(n.style.backgroundImage="url("+a+")",r.addClass(n,"loaded"),t.change_active_background(i,n,s))}}),l.setAttribute("src",a)}},t.prototype.change_active_background=function(e,t,i){r.addClass(this.loader,"jeg_slider_fadeout"),r.removeClass(this.loader,"jeg_slider_fadein"),r.forEach(this.slider_bg,(function(e,t){r.removeClass(e,"active")})),r.addClass(e,"jeg_slider_fadeout"),r.removeClass(e,"jeg_slider_fadein"),r.addClass(t,"active"),r.addClass(t,"jeg_slider_fadein"),r.removeClass(t,"jeg_slider_fadeout"),r.addClass(i,"jeg_slider_fadein"),r.removeClass(i,"jeg_slider_fadeout")},new t(e)};else t||console.warn("Tiny Slider could not be found"),e||console.warn("JNews Library could not be found");return i}();window.jnews.overlayslider=e}();