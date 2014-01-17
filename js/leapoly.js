$(document).ready(function (){

    setTimeout(function () { 

      var img;
      var src;
      var maxImages = 100;

      for (var i = 1; i < maxImages; i++) {

        src = "./images/leapoly" + i + ".png";
        img = new Image();
        img.src = src;

        $(img).attr("onerror", "imgError(this);").wrap("<a></a>").parent().attr("href", src).attr("title", "Leapolized you!").attr("target", "_blank").wrap("<div class='vvvv_img'></div>").parent().prependTo( "#container" );

      }

      var width = $(window).width();
      var boxW = Math.floor(width/4);
      var margin = Math.floor(boxW/10);

      if ( screen.width < 780) {
        boxW = Math.floor(width/3);
        margin = Math.floor(boxW/5);
        $("#footer").css("font-size", "16px");
      }

      $('.vvvv_img').css("width", boxW );
      $('.vvvv_img').css("margin-left", margin);
      $('.vvvv_img').css("margin-right", margin);
      $('.vvvv_img').css("margin-bottom", margin);

    }, 500);

    setTimeout(function () {
      location.reload();
    }, 60000);
});