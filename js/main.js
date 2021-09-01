/**
 * Legacy function.
 *
 * Issues: Needs hardcoded offsets and
 * doesn't preserve browser history.
 *
 * TO DO: Try to refactor into JS function
 * in index.html that handles hero button
 * anchor. 
 * 
 * E.g.: history.pushState({}, "About", "#about"); // Update address bar.

 *
 * mlc
 */
$(document).ready(function () {
  $(".header").height($(window).height());

  $("#myNavbar a, #about-link, #team-link").click(function () {
    let hdrOffset = 60; // Desktop
    if ($(window).width() < 1024) hdrOffset = 200; // Mobile
    if (($(this).attr("id") === "about-link") ||
      ($(this).attr("id") === "team-link")) hdrOffset = 0; // Not nav links
    $("body,html").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top - hdrOffset,
      },
      500
    );
  });
});
