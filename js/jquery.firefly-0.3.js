/*
 * jQuery firefly plugin 0.3
 *
 *
 * Copyright (c) 2010 Dharmveer Motyar
 * http://motyar.blogspot.com
 * 
 * $Id$
 * 
 * licensed under the MIT licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *  
 *
 * Creates a firefly effect.
 *
 * @example $.firefly();
 *
 * @name firefly
 * @type jQuery
 * @cat Plugins/firefly
 */
!function(f){var e={total:10,ofTop:0,ofLeft:0,on:"document.body",twinkle:.2,minPixel:1,maxPixel:2,color:"#fff"};f.firefly=function(t){if(f.firefly.settings=f.extend({},e,t),f.firefly.eleHeight=f(f.firefly.settings.on).height(),f.firefly.eleWidth=f(f.firefly.settings.on).width(),"document.body"!==f.firefly.settings.on){var r=f(f.firefly.settings.on).offset();f.firefly.offsetTop=r.top,f.firefly.offsetLeft=r.left,f.firefly.eleHeight=f(f.firefly.settings.on).height(),f.firefly.eleWidth=f(f.firefly.settings.on).width()}else f.firefly.offsetTop=0,f.firefly.offsetLeft=0,f.firefly.eleHeight=f(document.body).height(),f.firefly.eleWidth=f(document.body).width();for(i=0;i<f.firefly.settings.total;i++)f.firefly.fly(f.firefly.create(f.firefly.randomPixel(f.firefly.settings.minPixel,f.firefly.settings.maxPixel)))},f.firefly.create=function(e){return spark=f("<div>").hide(),"document.body"===f.firefly.settings.on?f(document.body).append(spark):f(f.firefly.settings.on).append(spark),spark.css({position:"absolute",width:e,height:e,"background-color":f.firefly.settings.color,"z-index":f.firefly.random(20),top:f.firefly.offsetTop+f.firefly.random(f.firefly.eleHeight-50),left:f.firefly.offsetLeft+f.firefly.random(f.firefly.eleWidth-50)}).show()},f.firefly.fly=function(e){f(e).animate({top:f.firefly.offsetTop+f.firefly.random(f.firefly.eleHeight-50),left:f.firefly.offsetLeft+f.firefly.random(f.firefly.eleWidth-50),opacity:f.firefly.opacity(f.firefly.settings.twinkle)},2e3*(f.firefly.random(10)+5),function(){f.firefly.fly(e)})},f.firefly.stop=function(e){f(e).stop()},f.firefly.randomPixel=function(f,e){return Math.floor(Math.random()*(e-f+1)+f)},f.firefly.random=function(f){return Math.ceil(Math.random()*f)-1},f.firefly.opacity=function(f){return op=Math.random(),f>op?0:1}}(jQuery);