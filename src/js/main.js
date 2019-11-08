
$(document).ready(function() {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar, #content, #top-header").toggleClass("active");
  });
});
