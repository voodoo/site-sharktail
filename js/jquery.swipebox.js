!function(e,i,t,s){t.swipebox=function(o,a){var r,n,l={useCSS:!0,useSVG:!0,initialIndexOnArray:0,hideCloseButtonOnMobile:!1,hideBarsDelay:3e3,videoMaxWidth:1140,vimeoColor:"cccccc",beforeOpen:null,afterOpen:null,afterClose:null,loopAtEnd:!1},d=this,p=[],b=o.selector,c=t(b),h=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),u=null!==h||i.createTouch!==s||"ontouchstart"in e||"onmsgesturechange"in e||navigator.msMaxTouchPoints,w=!!i.createElementNS&&!!i.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,m=e.innerWidth?e.innerWidth:t(e).width(),f=e.innerHeight?e.innerHeight:t(e).height(),g=0,v='<div id="swipebox-overlay">					<div id="swipebox-container">						<div id="swipebox-slider"></div>						<div id="swipebox-top-bar">							<div id="swipebox-title"></div>						</div>						<div id="swipebox-bottom-bar">							<div id="swipebox-arrows">								<a id="swipebox-prev"></a>								<a id="swipebox-next"></a>							</div>						</div>						<a id="swipebox-close"></a>					</div>			</div>';d.settings={},t.swipebox.close=function(){r.closeSlide()},t.swipebox.extend=function(){return r},d.init=function(){d.settings=t.extend({},l,a),t.isArray(o)?(p=o,r.target=t(e),r.init(d.settings.initialIndexOnArray)):t(i).on("click",b,function(e){if("slide current"===e.target.parentNode.className)return!1;t.isArray(o)||(r.destroy(),n=t(b),r.actions()),p=[];var i,s,a;a||(s="data-rel",a=t(this).attr(s)),a||(s="rel",a=t(this).attr(s)),n=a&&""!==a&&"nofollow"!==a?c.filter("["+s+'="'+a+'"]'):t(b),n.each(function(){var e=null,i=null;t(this).attr("title")&&(e=t(this).attr("title")),t(this).attr("href")&&(i=t(this).attr("href")),p.push({href:i,title:e})}),i=n.index(t(this)),e.preventDefault(),e.stopPropagation(),r.target=t(e.target),r.init(i)})},r={init:function(e){d.settings.beforeOpen&&d.settings.beforeOpen(),this.target.trigger("swipebox-start"),t.swipebox.isOpen=!0,this.build(),this.openSlide(e),this.openMedia(e),this.preloadMedia(e+1),this.preloadMedia(e-1),d.settings.afterOpen&&d.settings.afterOpen()},build:function(){var e,i=this;t("body").append(v),w&&d.settings.useSVG===!0&&(e=t("#swipebox-close").css("background-image"),e=e.replace("png","svg"),t("#swipebox-prev, #swipebox-next, #swipebox-close").css({"background-image":e})),h&&t("#swipebox-bottom-bar, #swipebox-top-bar").remove(),t.each(p,function(){t("#swipebox-slider").append('<div class="slide"></div>')}),i.setDim(),i.actions(),u&&i.gesture(),i.keyboard(),i.animBars(),i.resize()},setDim:function(){var i,s,o={};"onorientationchange"in e?e.addEventListener("orientationchange",function(){0===e.orientation?(i=m,s=f):(90===e.orientation||-90===e.orientation)&&(i=f,s=m)},!1):(i=e.innerWidth?e.innerWidth:t(e).width(),s=e.innerHeight?e.innerHeight:t(e).height()),o={width:i,height:s},t("#swipebox-overlay").css(o)},resize:function(){var i=this;t(e).resize(function(){i.setDim()}).resize()},supportTransition:function(){var e,t="transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");for(e=0;e<t.length;e++)if(i.createElement("div").style[t[e]]!==s)return t[e];return!1},doCssTrans:function(){return d.settings.useCSS&&this.supportTransition()?!0:void 0},gesture:function(){var e,i,s,o,a,r,n=this,l=!1,d=!1,b=10,c=50,h={},u={},w=t("#swipebox-top-bar, #swipebox-bottom-bar"),f=t("#swipebox-slider");w.addClass("visible-bars"),n.setTimeout(),t("body").bind("touchstart",function(n){return t(this).addClass("touching"),e=t("#swipebox-slider .slide").index(t("#swipebox-slider .slide.current")),u=n.originalEvent.targetTouches[0],h.pageX=n.originalEvent.targetTouches[0].pageX,h.pageY=n.originalEvent.targetTouches[0].pageY,t("#swipebox-slider").css({"-webkit-transform":"translate3d("+g+"%, 0, 0)",transform:"translate3d("+g+"%, 0, 0)"}),t(".touching").bind("touchmove",function(n){if(n.preventDefault(),n.stopPropagation(),u=n.originalEvent.targetTouches[0],!d&&(a=s,s=u.pageY-h.pageY,Math.abs(s)>=c||l)){var w=.75-Math.abs(s)/f.height();f.css({top:s+"px"}),f.css({opacity:w}),l=!0}o=i,i=u.pageX-h.pageX,r=100*i/m,!d&&!l&&Math.abs(i)>=b&&(t("#swipebox-slider").css({"-webkit-transition":"",transition:""}),d=!0),d&&(i>0?0===e?t("#swipebox-overlay").addClass("leftSpringTouch"):(t("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),t("#swipebox-slider").css({"-webkit-transform":"translate3d("+(g+r)+"%, 0, 0)",transform:"translate3d("+(g+r)+"%, 0, 0)"})):0>i&&(p.length===e+1?t("#swipebox-overlay").addClass("rightSpringTouch"):(t("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),t("#swipebox-slider").css({"-webkit-transform":"translate3d("+(g+r)+"%, 0, 0)",transform:"translate3d("+(g+r)+"%, 0, 0)"}))))}),!1}).bind("touchend",function(e){if(e.preventDefault(),e.stopPropagation(),t("#swipebox-slider").css({"-webkit-transition":"-webkit-transform 0.4s ease",transition:"transform 0.4s ease"}),s=u.pageY-h.pageY,i=u.pageX-h.pageX,r=100*i/m,l)if(l=!1,Math.abs(s)>=2*c&&Math.abs(s)>Math.abs(a)){var p=s>0?f.height():-f.height();f.animate({top:p+"px",opacity:0},300,function(){n.closeSlide()})}else f.animate({top:0,opacity:1},300);else d?(d=!1,i>=b&&i>=o?n.getPrev():-b>=i&&o>=i&&n.getNext()):w.hasClass("visible-bars")?(n.clearTimeout(),n.hideBars()):(n.showBars(),n.setTimeout());t("#swipebox-slider").css({"-webkit-transform":"translate3d("+g+"%, 0, 0)",transform:"translate3d("+g+"%, 0, 0)"}),t("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),t(".touching").off("touchmove").removeClass("touching")})},setTimeout:function(){if(d.settings.hideBarsDelay>0){var i=this;i.clearTimeout(),i.timeout=e.setTimeout(function(){i.hideBars()},d.settings.hideBarsDelay)}},clearTimeout:function(){e.clearTimeout(this.timeout),this.timeout=null},showBars:function(){var e=t("#swipebox-top-bar, #swipebox-bottom-bar");this.doCssTrans()?e.addClass("visible-bars"):(t("#swipebox-top-bar").animate({top:0},500),t("#swipebox-bottom-bar").animate({bottom:0},500),setTimeout(function(){e.addClass("visible-bars")},1e3))},hideBars:function(){var e=t("#swipebox-top-bar, #swipebox-bottom-bar");this.doCssTrans()?e.removeClass("visible-bars"):(t("#swipebox-top-bar").animate({top:"-50px"},500),t("#swipebox-bottom-bar").animate({bottom:"-50px"},500),setTimeout(function(){e.removeClass("visible-bars")},1e3))},animBars:function(){var e=this,i=t("#swipebox-top-bar, #swipebox-bottom-bar");i.addClass("visible-bars"),e.setTimeout(),t("#swipebox-slider").click(function(){i.hasClass("visible-bars")||(e.showBars(),e.setTimeout())}),t("#swipebox-bottom-bar").hover(function(){e.showBars(),i.addClass("visible-bars"),e.clearTimeout()},function(){d.settings.hideBarsDelay>0&&(i.removeClass("visible-bars"),e.setTimeout())})},keyboard:function(){var i=this;t(e).bind("keyup",function(e){e.preventDefault(),e.stopPropagation(),37===e.keyCode?i.getPrev():39===e.keyCode?i.getNext():27===e.keyCode&&i.closeSlide()})},actions:function(){var e=this,i="touchend click";p.length<2?(t("#swipebox-bottom-bar").hide(),s===p[1]&&t("#swipebox-top-bar").hide()):(t("#swipebox-prev").bind(i,function(i){i.preventDefault(),i.stopPropagation(),e.getPrev(),e.setTimeout()}),t("#swipebox-next").bind(i,function(i){i.preventDefault(),i.stopPropagation(),e.getNext(),e.setTimeout()})),t("#swipebox-close").bind(i,function(){e.closeSlide()})},setSlide:function(e,i){i=i||!1;var s=t("#swipebox-slider");g=100*-e,this.doCssTrans()?s.css({"-webkit-transform":"translate3d("+100*-e+"%, 0, 0)",transform:"translate3d("+100*-e+"%, 0, 0)"}):s.animate({left:100*-e+"%"}),t("#swipebox-slider .slide").removeClass("current"),t("#swipebox-slider .slide").eq(e).addClass("current"),this.setTitle(e),i&&s.fadeIn(),t("#swipebox-prev, #swipebox-next").removeClass("disabled"),0===e?t("#swipebox-prev").addClass("disabled"):e===p.length-1&&d.settings.loopAtEnd!==!0&&t("#swipebox-next").addClass("disabled")},openSlide:function(i){t("html").addClass("swipebox-html"),u?(t("html").addClass("swipebox-touch"),d.settings.hideCloseButtonOnMobile&&t("html").addClass("swipebox-no-close-button")):t("html").addClass("swipebox-no-touch"),t(e).trigger("resize"),this.setSlide(i,!0)},preloadMedia:function(e){var i=this,t=null;p[e]!==s&&(t=p[e].href),i.isVideo(t)?i.openMedia(e):setTimeout(function(){i.openMedia(e)},1e3)},openMedia:function(e){var i,o,a=this;return p[e]!==s&&(i=p[e].href),0>e||e>=p.length?!1:(o=t("#swipebox-slider .slide").eq(e),void(a.isVideo(i)?o.html(a.getVideo(i)):(o.addClass("slide-loading"),a.loadMedia(i,function(){o.removeClass("slide-loading"),o.html(this)}))))},setTitle:function(e){var i=null;t("#swipebox-title").empty(),p[e]!==s&&(i=p[e].title),i?(t("#swipebox-top-bar").show(),t("#swipebox-title").append(i)):t("#swipebox-top-bar").hide()},isVideo:function(e){if(e){if(e.match(/youtube\.com\/watch\?v=([a-zA-Z0-9\-_]+)/)||e.match(/vimeo\.com\/([0-9]*)/)||e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/))return!0;if(e.toLowerCase().indexOf("swipeboxvideo=1")>=0)return!0}},getVideo:function(e){var i="",t=e.match(/watch\?v=([a-zA-Z0-9\-_]+)/),s=e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/),o=e.match(/vimeo\.com\/([0-9]*)/);return t||s?(s&&(t=s),i='<iframe width="560" height="315" src="//www.youtube.com/embed/'+t[1]+'" frameborder="0" allowfullscreen></iframe>'):o&&(i='<iframe width="560" height="315"  src="//player.vimeo.com/video/'+o[1]+"?byline=0&amp;portrait=0&amp;color="+d.settings.vimeoColor+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'),t||s||o||(i='<iframe width="560" height="315" src="'+e+'" frameborder="0" allowfullscreen></iframe>'),'<div class="swipebox-video-container" style="max-width:'+d.settings.videomaxWidth+'px"><div class="swipebox-video">'+i+"</div></div>"},loadMedia:function(e,i){if(!this.isVideo(e)){var s=t("<img>").on("load",function(){i.call(s)});s.attr("src",e)}},getNext:function(){var e,i=this,s=t("#swipebox-slider .slide").index(t("#swipebox-slider .slide.current"));s+1<p.length?(e=t("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src"),t("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src",e),s++,i.setSlide(s),i.preloadMedia(s+1)):d.settings.loopAtEnd===!0?(e=t("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src"),t("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src",e),s=0,i.preloadMedia(s),i.setSlide(s),i.preloadMedia(s+1)):(t("#swipebox-overlay").addClass("rightSpring"),setTimeout(function(){t("#swipebox-overlay").removeClass("rightSpring")},500))},getPrev:function(){var e,i=t("#swipebox-slider .slide").index(t("#swipebox-slider .slide.current"));i>0?(e=t("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src"),t("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src",e),i--,this.setSlide(i),this.preloadMedia(i-1)):(t("#swipebox-overlay").addClass("leftSpring"),setTimeout(function(){t("#swipebox-overlay").removeClass("leftSpring")},500))},closeSlide:function(){t("html").removeClass("swipebox-html"),t("html").removeClass("swipebox-touch"),t(e).trigger("resize"),this.destroy()},destroy:function(){t(e).unbind("keyup"),t("body").unbind("touchstart"),t("body").unbind("touchmove"),t("body").unbind("touchend"),t("#swipebox-slider").unbind(),t("#swipebox-overlay").remove(),t.isArray(o)||o.removeData("_swipebox"),this.target&&this.target.trigger("swipebox-destroy"),t.swipebox.isOpen=!1,d.settings.afterClose&&d.settings.afterClose()}},d.init()},t.fn.swipebox=function(e){if(!t.data(this,"_swipebox")){var i=new t.swipebox(this,e);this.data("_swipebox",i)}return this.data("_swipebox")}}(window,document,jQuery);