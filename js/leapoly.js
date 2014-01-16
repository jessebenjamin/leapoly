$(document).ready(function (){

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      var width = $(window).width();
      var height = $(window).height();
      var boxW = width/2 - width/7;
      //height/numImages
      var boxH = height - height/6;
      $('#container').css("width", width);
      $('.vvvv_img').css("width", boxW);
      //$('.vvvv_img').css("height", boxH);
      console.log("tight!");
    }
    
    setTimeout(function () { 

      var img;
      var maxImages = 1000;

      for (var i = 1; i < maxImages; i++) {

        var src = "./images/leapoly" + i + ".png";
        img = new Image();
        img.src = src;

        $(img).wrap("<a></a>").parent().attr("href", src).attr("alt", "Leapolized you!").attr("target", "_blank").wrap("<div class='vvvv_img'></div>").parent().appendTo( "#container" );
      }

      var image = document.getElementById('.vvvv_img img');

      $(image).onerror = function () {
        $(this).css("display", "none");
      };

    }, 500);

    var tcount = $("#dlist li:not(:has(.hiddenItem))").length;


});
