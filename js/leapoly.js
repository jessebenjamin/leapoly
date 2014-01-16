$(document).ready(function (){

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      var width = $(window).width();
      var height = $(window).height();
      var boxW = width/2 - width/6;
      //height/numImages
      var boxH = height - height/6;
      $('#container').css("width", width);
      $('.vvvv_img').css("width", boxW);
      //$('.vvvv_img').css("height", boxH);
      console.log("tight!");
    }
    
//    setTimeout(function () { 

      var img;
      var src;
      var maxImages = 1000;

      for (var i = 1; i < maxImages; i++) {

        src = "./images/leapoly" + i + ".png";
        img = new Image();
        img.src = src;

        $(img).attr("onerror", "imgError(this);").wrap("<a></a>").parent().attr("href", src).attr("alt", "Leapolized you!").attr("target", "_blank").wrap("<div class='vvvv_img'></div>").parent().appendTo( "#container" );

      }

      function imgError(image) {
        $(this).parent().hide();
      };

 //   }, 500);
});
