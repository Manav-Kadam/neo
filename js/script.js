$('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
});


    $(document).ready(function() {
      $(".links").click(function(e) {
        var sectionId = $(this).data("sectionId");
        $(".conteudo").removeClass("active");
        $(".conteudo[data-section-id=" + sectionId + "]").addClass(
          "active");
          $(".links").removeClass("active");
          $(".links[data-section-id=" + sectionId + "]").addClass(
            "active");
      });
    });
