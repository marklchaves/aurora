/** 
 * Legacy function. 
 * 
 * Issues: Needs hardcoded offsets and
 * doesn't preserve browser history.
 * 
 * TODO: Try to refactor into JS function
 * in index.html that handles hero button
 * anchor.
 * 
 * mlc
 */
$(document).ready(function(){
 $('.header').height($(window).height());

 $(".navbar a").click(function(){
	 let hdrOffset = 60;
	 if ($(window).width() < 1024) hdrOffset = 200;
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top-hdrOffset
 	},1000)
  
 })

})