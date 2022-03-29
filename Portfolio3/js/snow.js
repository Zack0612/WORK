/**
 * jquery.snow - jQuery Snow Effect Plugin
 *
 * Available under MIT licence
 *
 * @version 1 (21. Jan 2012)
 * @author Ivan Lazarevic
 * @requires jQuery
 * @see http://workshop.rs
 *
 * @params minSize - min size of snowflake, 10 by default
 * @params maxSize - max size of snowflake, 20 by default
 * @params newOn - frequency in ms of appearing of new snowflake, 500 by default
 * @params flakeColor - color of snowflake, #FFFFFF by default
 * @example $.fn.snow({ maxSize: 200, newOn: 1000 });
 */

(function($){
		  $.fn.snow=function(options){
			  var $flake=$('<img id="flake" src="./images/stone.png" />').css({'position':'absolute','top':'documentHeight','z-index':'100','opacity':'0.9'}),
			  		documentHeight=$('#page1').height(),
					documentWidth=$(document).width(),
					defaults={minSize:10,maxSize:50,newOn:700},
					options=$.extend({},defaults,options);
			  var interval=setInterval(function(){
					var startPositionLeft=Math.random()*documentWidth-100,

					sizeFlake=options.minSize+Math.random()*options.maxSize,
					endPositionTop=0,
					endPositionLeft=startPositionLeft-100+Math.random()*200,
					durationFall=documentHeight*10+Math.random()*9000;
					$flake.clone().appendTo('.stone').css({
							left:startPositionLeft,
							top:documentHeight-200,
							'width':sizeFlake,
							color:options.flakeColor
					}).animate({top:endPositionTop-10,left:endPositionLeft},
					durationFall,'linear',function(){$(this).remove()});},options.newOn);};
})(jQuery);