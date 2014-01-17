<!doctype html>
<html lang="en">
 <head>
    <LINK REL="SHORTCUT ICON" HREF="./favicon.png">
  	<meta charset="UTF-8">
  	<title>     l    e    a    p    o    l    y</title>
  	<meta name="author" content="Josua Stasser">
  	<meta name="description" content="A generative photobooth.">
  	<link rel="stylesheet" href="./css/stylesheet.css" type="text/css"> 
    <script>
      function imgError(img) {
        //$(img).parent().hide();
        var a = $(img).context.parentElement;
        var wrap = $(a).context.parentElement;
        $(wrap).hide();
      }
    </script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>  
    <script type="text/javascript" src="./js/leapoly.js"></script>
</head>

<body>

    <div id="container">
    </div>

    <div id="footer">
    leapoly<span style="text-decoration:none;">  <a href="http://www.jesse-benjamin.com" target="_blank">JESSE BENJAMIN</a></span>  a generative photobooth
    </div>
</body>
</html>