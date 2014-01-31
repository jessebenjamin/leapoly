$(document).ready(function (){

    setTimeout(function () { 

      var img;
      var src;
      var path;
      var date;
      var maxImages = 100;
      var button; 

      for (var i = 1; i < maxImages; i++) {

        date = new Date();
        path = "http://leapoly.jesse-benjamin.com/images/leapoly" + i + ".png";
        src = path + "?" + date;
        img = new Image();
        img.src = src;
        button = "<a href='http://www.facebook.com/sharer.php?s=100&p[url]=http://leapoly.jesse-benjamin.com/&p[images][0]=" + path + "&p[title]=I Leapolized Myself.&p[summary]=Find this and other versions at leapoly — the generative photobooth' target='_blank'>•</a>";

        $(img).attr("onerror", "imgError(this);").wrap("<a></a>").parent().attr("href", src).attr("title", "Leapolized you!").attr("target", "_blank").wrap("<div class='vvvv_img'></div>").parent().append(button).prependTo( "#container" );


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
    }, 90000);
});