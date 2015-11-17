define("components/twbs/bootstrap/dist/js/bootstrap",[],function(){if("undefined"===typeof jQuery)throw Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,i=this;t(this).one(t.support.transition.end,function(){n=!0});var o=function(){n||t(i).trigger(t.support.transition.end)};setTimeout(o,e);return this};t(function(){t.support.transition=e()})}(jQuery);+function(t){"use strict";var e='[data-dismiss="alert"]',n=function(n){t(n).on("click",e,this.close)};n.prototype.close=function(e){function n(){s.trigger("closed.bs.alert").remove()}var i=t(this),o=i.attr("data-target");if(!o){o=i.attr("href");o=o&&o.replace(/.*(?=#[^\s]*$)/,"")}var s=t(o);e&&e.preventDefault();s.length||(s=i.hasClass("alert")?i:i.parent());s.trigger(e=t.Event("close.bs.alert"));if(!e.isDefaultPrevented()){s.removeClass("in");t.support.transition&&s.hasClass("fade")?s.one(t.support.transition.end,n).emulateTransitionEnd(150):n()}};var i=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var i=t(this),o=i.data("bs.alert");o||i.data("bs.alert",o=new n(this));"string"==typeof e&&o[e].call(i)})};t.fn.alert.Constructor=n;t.fn.alert.noConflict=function(){t.fn.alert=i;return this};t(document).on("click.bs.alert.data-api",e,n.prototype.close)}(jQuery);+function(t){"use strict";var e=function(n,i){this.$element=t(n);this.options=t.extend({},e.DEFAULTS,i);this.isLoading=!1};e.DEFAULTS={loadingText:"loading..."};e.prototype.setState=function(e){var n="disabled",i=this.$element,o=i.is("input")?"val":"html",s=i.data();e+="Text";s.resetText||i.data("resetText",i[o]());i[o](s[e]||this.options[e]);setTimeout(t.proxy(function(){if("loadingText"==e){this.isLoading=!0;i.addClass(n).attr(n,n)}else if(this.isLoading){this.isLoading=!1;i.removeClass(n).removeAttr(n)}},this),0)};e.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var n=this.$element.find("input");"radio"==n.prop("type")&&(n.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active"));t&&n.prop("checked",!this.$element.hasClass("active")).trigger("change")}t&&this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=function(n){return this.each(function(){var i=t(this),o=i.data("bs.button"),s="object"==typeof n&&n;o||i.data("bs.button",o=new e(this,s));"toggle"==n?o.toggle():n&&o.setState(n)})};t.fn.button.Constructor=e;t.fn.button.noConflict=function(){t.fn.button=n;return this};t(document).on("click.bs.button.data-api","[data-toggle^=button]",function(e){var n=t(e.target);n.hasClass("btn")||(n=n.closest(".btn"));n.button("toggle");e.preventDefault()})}(jQuery);+function(t){"use strict";var e=function(e,n){this.$element=t(e);this.$indicators=this.$element.find(".carousel-indicators");this.options=n;this.paused=this.sliding=this.interval=this.$active=this.$items=null;"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0};e.prototype.cycle=function(e){e||(this.paused=!1);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval));return this};e.prototype.getActiveIndex=function(){this.$active=this.$element.find(".item.active");this.$items=this.$active.parent().children();return this.$items.index(this.$active)};e.prototype.to=function(e){var n=this,i=this.getActiveIndex();return e>this.$items.length-1||e<0?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){n.to(e)}):i==e?this.pause().cycle():this.slide(e>i?"next":"prev",t(this.$items[e]))};e.prototype.pause=function(e){e||(this.paused=!0);if(this.$element.find(".next, .prev").length&&t.support.transition){this.$element.trigger(t.support.transition.end);this.cycle(!0)}this.interval=clearInterval(this.interval);return this};e.prototype.next=function(){return this.sliding?void 0:this.slide("next")};e.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")};e.prototype.slide=function(e,n){var i=this.$element.find(".item.active"),o=n||i[e](),s=this.interval,r="next"==e?"left":"right",a="next"==e?"first":"last",l=this;if(!o.length){if(!this.options.wrap)return;o=this.$element.find(".item")[a]()}if(o.hasClass("active"))return this.sliding=!1;var p=t.Event("slide.bs.carousel",{relatedTarget:o[0],direction:r});this.$element.trigger(p);if(!p.isDefaultPrevented()){this.sliding=!0;s&&this.pause();if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");this.$element.one("slid.bs.carousel",function(){var e=t(l.$indicators.children()[l.getActiveIndex()]);e&&e.addClass("active")})}if(t.support.transition&&this.$element.hasClass("slide")){o.addClass(e);o[0].offsetWidth;i.addClass(r);o.addClass(r);i.one(t.support.transition.end,function(){o.removeClass([e,r].join(" ")).addClass("active");i.removeClass(["active",r].join(" "));l.sliding=!1;setTimeout(function(){l.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*i.css("transition-duration").slice(0,-1))}else{i.removeClass("active");o.addClass("active");this.sliding=!1;this.$element.trigger("slid.bs.carousel")}s&&this.cycle();return this}};var n=t.fn.carousel;t.fn.carousel=function(n){return this.each(function(){var i=t(this),o=i.data("bs.carousel"),s=t.extend({},e.DEFAULTS,i.data(),"object"==typeof n&&n),r="string"==typeof n?n:s.slide;o||i.data("bs.carousel",o=new e(this,s));"number"==typeof n?o.to(n):r?o[r]():s.interval&&o.pause().cycle()})};t.fn.carousel.Constructor=e;t.fn.carousel.noConflict=function(){t.fn.carousel=n;return this};t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(e){var n,i=t(this),o=t(i.attr("data-target")||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),s=t.extend({},o.data(),i.data()),r=i.attr("data-slide-to");r&&(s.interval=!1);o.carousel(s);(r=i.attr("data-slide-to"))&&o.data("bs.carousel").to(r);e.preventDefault()});t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var e=t(this);e.carousel(e.data())})})}(jQuery);+function(t){"use strict";var e=function(n,i){this.$element=t(n);this.options=t.extend({},e.DEFAULTS,i);this.transitioning=null;this.options.parent&&(this.$parent=t(this.options.parent));this.options.toggle&&this.toggle()};e.DEFAULTS={toggle:!0};e.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"};e.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e=t.Event("show.bs.collapse");this.$element.trigger(e);if(!e.isDefaultPrevented()){var n=this.$parent&&this.$parent.find("> .panel > .in");if(n&&n.length){var i=n.data("bs.collapse");if(i&&i.transitioning)return;n.collapse("hide");i||n.data("bs.collapse",null)}var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0);this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o]("auto");this.transitioning=0;this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return s.call(this);var r=t.camelCase(["scroll",o].join("-"));this.$element.one(t.support.transition.end,t.proxy(s,this)).emulateTransitionEnd(350)[o](this.$element[0][r])}}};e.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");this.$element.trigger(e);if(!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight;this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");this.transitioning=1;var i=function(){this.transitioning=0;this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!t.support.transition)return i.call(this);this.$element[n](0).one(t.support.transition.end,t.proxy(i,this)).emulateTransitionEnd(350);return void 0}}};e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var n=t.fn.collapse;t.fn.collapse=function(n){return this.each(function(){var i=t(this),o=i.data("bs.collapse"),s=t.extend({},e.DEFAULTS,i.data(),"object"==typeof n&&n);!o&&s.toggle&&"show"==n&&(n=!n);o||i.data("bs.collapse",o=new e(this,s));"string"==typeof n&&o[n]()})};t.fn.collapse.Constructor=e;t.fn.collapse.noConflict=function(){t.fn.collapse=n;return this};t(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(e){var n,i=t(this),o=i.attr("data-target")||e.preventDefault()||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),s=t(o),r=s.data("bs.collapse"),a=r?"toggle":i.data(),l=i.attr("data-parent"),p=l&&t(l);if(!r||!r.transitioning){p&&p.find('[data-toggle=collapse][data-parent="'+l+'"]').not(i).addClass("collapsed");i[s.hasClass("in")?"addClass":"removeClass"]("collapsed")}s.collapse(a)})}(jQuery);+function(t){"use strict";function e(e){t(i).remove();t(o).each(function(){var i=n(t(this)),o={relatedTarget:this};if(i.hasClass("open")){i.trigger(e=t.Event("hide.bs.dropdown",o));e.isDefaultPrevented()||i.removeClass("open").trigger("hidden.bs.dropdown",o)}})}function n(e){var n=e.attr("data-target");if(!n){n=e.attr("href");n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")}var i=n&&t(n);return i&&i.length?i:e.parent()}var i=".dropdown-backdrop",o="[data-toggle=dropdown]",s=function(e){t(e).on("click.bs.dropdown",this.toggle)};s.prototype.toggle=function(i){var o=t(this);if(!o.is(".disabled, :disabled")){var s=n(o),r=s.hasClass("open");e();if(!r){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var a={relatedTarget:this};s.trigger(i=t.Event("show.bs.dropdown",a));if(i.isDefaultPrevented())return;s.toggleClass("open").trigger("shown.bs.dropdown",a);o.focus()}return!1}};s.prototype.keydown=function(e){if(/(38|40|27)/.test(e.keyCode)){var i=t(this);e.preventDefault();e.stopPropagation();if(!i.is(".disabled, :disabled")){var s=n(i),r=s.hasClass("open");if(!r||r&&27==e.keyCode){27==e.which&&s.find(o).focus();return i.click()}var a=" li:not(.divider):visible a",l=s.find("[role=menu]"+a+", [role=listbox]"+a);if(l.length){var p=l.index(l.filter(":focus"));38==e.keyCode&&p>0&&p--;40==e.keyCode&&p<l.length-1&&p++;~p||(p=0);l.eq(p).focus()}}}};var r=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var n=t(this),i=n.data("bs.dropdown");i||n.data("bs.dropdown",i=new s(this));"string"==typeof e&&i[e].call(n)})};t.fn.dropdown.Constructor=s;t.fn.dropdown.noConflict=function(){t.fn.dropdown=r;return this};t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",o,s.prototype.toggle).on("keydown.bs.dropdown.data-api",o+", [role=menu], [role=listbox]",s.prototype.keydown)}(jQuery);+function(t){"use strict";var e=function(e,n){this.options=n;this.$element=t(e);this.$backdrop=this.isShown=null;this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0};e.prototype.toggle=function(t){return this[this.isShown?"hide":"show"](t)};e.prototype.show=function(e){var n=this,i=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(i);if(!this.isShown&&!i.isDefaultPrevented()){this.isShown=!0;this.escape();this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this));this.backdrop(function(){var i=t.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(document.body);n.$element.show().scrollTop(0);i&&n.$element[0].offsetWidth;n.$element.addClass("in").attr("aria-hidden",!1);n.enforceFocus();var o=t.Event("shown.bs.modal",{relatedTarget:e});i?n.$element.find(".modal-dialog").one(t.support.transition.end,function(){n.$element.focus().trigger(o)}).emulateTransitionEnd(300):n.$element.focus().trigger(o)})}};e.prototype.hide=function(e){e&&e.preventDefault();e=t.Event("hide.bs.modal");this.$element.trigger(e);if(this.isShown&&!e.isDefaultPrevented()){this.isShown=!1;this.escape();t(document).off("focusin.bs.modal");this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal");t.support.transition&&this.$element.hasClass("fade")?this.$element.one(t.support.transition.end,t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()}};e.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.focus()},this))};e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")};e.prototype.hideModal=function(){var t=this;this.$element.hide();this.backdrop(function(){t.removeBackdrop();t.$element.trigger("hidden.bs.modal")})};e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};e.prototype.backdrop=function(e){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=t.support.transition&&n;this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(document.body);this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this));i&&this.$backdrop[0].offsetWidth;this.$backdrop.addClass("in");if(!e)return;i?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()}else e&&e()};var n=t.fn.modal;t.fn.modal=function(n,i){return this.each(function(){var o=t(this),s=o.data("bs.modal"),r=t.extend({},e.DEFAULTS,o.data(),"object"==typeof n&&n);s||o.data("bs.modal",s=new e(this,r));"string"==typeof n?s[n](i):r.show&&s.show(i)})};t.fn.modal.Constructor=e;t.fn.modal.noConflict=function(){t.fn.modal=n;return this};t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var n=t(this),i=n.attr("href"),o=t(n.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),s=o.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(i)&&i},o.data(),n.data());n.is("a")&&e.preventDefault();o.modal(s,this).one("hide",function(){n.is(":visible")&&n.focus()})});t(document).on("show.bs.modal",".modal",function(){t(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){t(document.body).removeClass("modal-open")})}(jQuery);+function(t){"use strict";var e=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;this.init("tooltip",t,e)};e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1};e.prototype.init=function(e,n,i){this.enabled=!0;this.type=e;this.$element=t(n);this.options=this.getOptions(i);for(var o=this.options.trigger.split(" "),s=o.length;s--;){var r=o[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this));this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()};e.prototype.getDefaults=function(){return e.DEFAULTS};e.prototype.getOptions=function(e){e=t.extend({},this.getDefaults(),this.$element.data(),e);e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay});return e};e.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults();this._options&&t.each(this._options,function(t,i){n[t]!=i&&(e[t]=i)});return e};e.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(n.timeout);n.hoverState="in";if(!n.options.delay||!n.options.delay.show)return n.show();n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show);return void 0};e.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(n.timeout);n.hoverState="out";if(!n.options.delay||!n.options.delay.hide)return n.hide();n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide);return void 0};e.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);if(e.isDefaultPrevented())return;var n=this,i=this.tip();this.setContent();this.options.animation&&i.addClass("fade");var o="function"==typeof this.options.placement?this.options.placement.call(this,i[0],this.$element[0]):this.options.placement,s=/\s?auto?\s?/i,r=s.test(o);r&&(o=o.replace(s,"")||"top");i.detach().css({top:0,left:0,display:"block"}).addClass(o);this.options.container?i.appendTo(this.options.container):i.insertAfter(this.$element);var a=this.getPosition(),l=i[0].offsetWidth,p=i[0].offsetHeight;if(r){var c=this.$element.parent(),h=o,u=document.documentElement.scrollTop||document.body.scrollTop,d="body"==this.options.container?window.innerWidth:c.outerWidth(),f="body"==this.options.container?window.innerHeight:c.outerHeight(),m="body"==this.options.container?0:c.offset().left;o="bottom"==o&&a.top+a.height+p-u>f?"top":"top"==o&&a.top-u-p<0?"bottom":"right"==o&&a.right+l>d?"left":"left"==o&&a.left-l<m?"right":o;i.removeClass(h).addClass(o)}var v=this.getCalculatedOffset(o,a,l,p);this.applyPlacement(v,o);this.hoverState=null;var g=function(){n.$element.trigger("shown.bs."+n.type)};t.support.transition&&this.$tip.hasClass("fade")?i.one(t.support.transition.end,g).emulateTransitionEnd(150):g()}};e.prototype.applyPlacement=function(e,n){var i,o=this.tip(),s=o[0].offsetWidth,r=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),l=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0);isNaN(l)&&(l=0);e.top=e.top+a;e.left=e.left+l;t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0);o.addClass("in");var p=o[0].offsetWidth,c=o[0].offsetHeight;if("top"==n&&c!=r){i=!0;e.top=e.top+r-c}if(/bottom|top/.test(n)){var h=0;if(e.left<0){h=-2*e.left;e.left=0;o.offset(e);p=o[0].offsetWidth;c=o[0].offsetHeight}this.replaceArrow(h-s+p,p,"left")}else this.replaceArrow(c-r,c,"top");i&&o.offset(e)};e.prototype.replaceArrow=function(t,e,n){this.arrow().css(n,t?50*(1-t/e)+"%":"")};e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e);t.removeClass("fade in top bottom left right")};e.prototype.hide=function(){function e(){"in"!=n.hoverState&&i.detach();n.$element.trigger("hidden.bs."+n.type)}var n=this,i=this.tip(),o=t.Event("hide.bs."+this.type);this.$element.trigger(o);if(!o.isDefaultPrevented()){i.removeClass("in");t.support.transition&&this.$tip.hasClass("fade")?i.one(t.support.transition.end,e).emulateTransitionEnd(150):e();this.hoverState=null;return this}};e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")};e.prototype.hasContent=function(){return this.getTitle()};e.prototype.getPosition=function(){var e=this.$element[0];return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())};e.prototype.getCalculatedOffset=function(t,e,n,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-n}:{top:e.top+e.height/2-i/2,left:e.left+e.width}};e.prototype.getTitle=function(){var t,e=this.$element,n=this.options;t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title);return t};e.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)};e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")};e.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}};e.prototype.enable=function(){this.enabled=!0};e.prototype.disable=function(){this.enabled=!1};e.prototype.toggleEnabled=function(){this.enabled=!this.enabled};e.prototype.toggle=function(e){var n=e?t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;n.tip().hasClass("in")?n.leave(n):n.enter(n)};e.prototype.destroy=function(){clearTimeout(this.timeout);this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var n=t.fn.tooltip;t.fn.tooltip=function(n){return this.each(function(){var i=t(this),o=i.data("bs.tooltip"),s="object"==typeof n&&n;if(o||"destroy"!=n){o||i.data("bs.tooltip",o=new e(this,s));"string"==typeof n&&o[n]()}})};t.fn.tooltip.Constructor=e;t.fn.tooltip.noConflict=function(){t.fn.tooltip=n;return this}}(jQuery);+function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw Error("Popover requires tooltip.js");e.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype);e.prototype.constructor=e;e.prototype.getDefaults=function(){return e.DEFAULTS};e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e);t.find(".popover-content")[this.options.html?"string"==typeof n?"html":"append":"text"](n);t.removeClass("fade top bottom left right in");t.find(".popover-title").html()||t.find(".popover-title").hide()};e.prototype.hasContent=function(){return this.getTitle()||this.getContent()};e.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)};e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};e.prototype.tip=function(){this.$tip||(this.$tip=t(this.options.template));return this.$tip};var n=t.fn.popover;t.fn.popover=function(n){return this.each(function(){var i=t(this),o=i.data("bs.popover"),s="object"==typeof n&&n;if(o||"destroy"!=n){o||i.data("bs.popover",o=new e(this,s));"string"==typeof n&&o[n]()}})};t.fn.popover.Constructor=e;t.fn.popover.noConflict=function(){t.fn.popover=n;return this}}(jQuery);+function(t){"use strict";function e(n,i){var o,s=t.proxy(this.process,this);this.$element=t(n).is("body")?t(window):t(n);this.$body=t("body");this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",s);this.options=t.extend({},e.DEFAULTS,i);this.selector=(this.options.target||(o=t(n).attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a";this.offsets=t([]);this.targets=t([]);this.activeTarget=null;this.refresh();this.process()}e.DEFAULTS={offset:10};e.prototype.refresh=function(){var e=this.$element[0]==window?"offset":"position";this.offsets=t([]);this.targets=t([]);var n=this;this.$body.find(this.selector).map(function(){var i=t(this),o=i.data("target")||i.attr("href"),s=/^#./.test(o)&&t(o);return s&&s.length&&s.is(":visible")&&[[s[e]().top+(!t.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),o]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){n.offsets.push(this[0]);n.targets.push(this[1])})};e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,i=n-this.$scrollElement.height(),o=this.offsets,s=this.targets,r=this.activeTarget;if(e>=i)return r!=(t=s.last()[0])&&this.activate(t);if(r&&e<=o[0])return r!=(t=s[0])&&this.activate(t);for(t=o.length;t--;)r!=s[t]&&e>=o[t]&&(!o[t+1]||e<=o[t+1])&&this.activate(s[t])};e.prototype.activate=function(e){this.activeTarget=e;t(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var n=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(n).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active"));i.trigger("activate.bs.scrollspy")};var n=t.fn.scrollspy;t.fn.scrollspy=function(n){return this.each(function(){var i=t(this),o=i.data("bs.scrollspy"),s="object"==typeof n&&n;o||i.data("bs.scrollspy",o=new e(this,s));"string"==typeof n&&o[n]()})};t.fn.scrollspy.Constructor=e;t.fn.scrollspy.noConflict=function(){t.fn.scrollspy=n;return this};t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);e.scrollspy(e.data())})})}(jQuery);+function(t){"use strict";var e=function(e){this.element=t(e)};e.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),i=e.data("target");if(!i){i=e.attr("href");i=i&&i.replace(/.*(?=#[^\s]*$)/,"")}if(!e.parent("li").hasClass("active")){var o=n.find(".active:last a")[0],s=t.Event("show.bs.tab",{relatedTarget:o});e.trigger(s);if(!s.isDefaultPrevented()){var r=t(i);this.activate(e.parent("li"),n);this.activate(r,r.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:o})})}}};e.prototype.activate=function(e,n,i){function o(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");e.addClass("active");if(r){e[0].offsetWidth;e.addClass("in")}else e.removeClass("fade");e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active");i&&i()}var s=n.find("> .active"),r=i&&t.support.transition&&s.hasClass("fade");r?s.one(t.support.transition.end,o).emulateTransitionEnd(150):o();s.removeClass("in")};var n=t.fn.tab;t.fn.tab=function(n){return this.each(function(){var i=t(this),o=i.data("bs.tab");o||i.data("bs.tab",o=new e(this));"string"==typeof n&&o[n]()})};t.fn.tab.Constructor=e;t.fn.tab.noConflict=function(){t.fn.tab=n;return this};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault();t(this).tab("show")})}(jQuery);+function(t){"use strict";var e=function(n,i){this.options=t.extend({},e.DEFAULTS,i);this.$window=t(window).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this));this.$element=t(n);this.affixed=this.unpin=this.pinnedOffset=null;this.checkPosition()};e.RESET="affix affix-top affix-bottom";e.DEFAULTS={offset:0};e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$window.scrollTop(),n=this.$element.offset();return this.pinnedOffset=n.top-t};e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)};e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var n=t(document).height(),i=this.$window.scrollTop(),o=this.$element.offset(),s=this.options.offset,r=s.top,a=s.bottom;"top"==this.affixed&&(o.top+=i);"object"!=typeof s&&(a=r=s);"function"==typeof r&&(r=s.top(this.$element));"function"==typeof a&&(a=s.bottom(this.$element));var l=null!=this.unpin&&i+this.unpin<=o.top?!1:null!=a&&o.top+this.$element.height()>=n-a?"bottom":null!=r&&i<=r?"top":!1;if(this.affixed!==l){this.unpin&&this.$element.css("top","");var p="affix"+(l?"-"+l:""),c=t.Event(p+".bs.affix");this.$element.trigger(c);if(!c.isDefaultPrevented()){this.affixed=l;this.unpin="bottom"==l?this.getPinnedOffset():null;this.$element.removeClass(e.RESET).addClass(p).trigger(t.Event(p.replace("affix","affixed")));"bottom"==l&&this.$element.offset({top:n-a-this.$element.height()})}}}};var n=t.fn.affix;t.fn.affix=function(n){return this.each(function(){var i=t(this),o=i.data("bs.affix"),s="object"==typeof n&&n;o||i.data("bs.affix",o=new e(this,s));"string"==typeof n&&o[n]()})};t.fn.affix.Constructor=e;t.fn.affix.noConflict=function(){t.fn.affix=n;return this};t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),n=e.data();n.offset=n.offset||{};n.offsetBottom&&(n.offset.bottom=n.offsetBottom);n.offsetTop&&(n.offset.top=n.offsetTop);e.affix(n)})})}(jQuery)});