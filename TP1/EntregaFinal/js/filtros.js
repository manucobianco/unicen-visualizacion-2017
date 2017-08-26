var ctxOriginal = document.getElementById("canvasOriginal").getContext("2d");
var ctx = document.getElementById("canvasEditado").getContext("2d");

var img1 = document.getElementById("canvas2");
var img2 = document.getElementById("canvas3");
var img3 = document.getElementById("canvas4");
var img4 = document.getElementById("canvas5");
var img5 = document.getElementById("canvas5");

$("#slide").hide();

$(function() {
    $('#file-input').change(function(e) {
        var file = e.target.files[0],
            imageType = /image.*/;

        if (!file.type.match(imageType))
            return;

        var reader = new FileReader();
        reader.onload = fileOnload;
        reader.readAsDataURL(file);

    });

    function fileOnload(e) {
        img = new Image();
        img.src = e.target.result;
        img.onload = function() {

          ctx.drawImage(this, 0, 0,canvasEditado.width,canvasEditado.height);
          imageData = ctx.getImageData(0,0, canvasEditado.width, canvasEditado.height);
          ctxOriginal.putImageData(imageData,0,0);

////////////////ESCALA DE NEGROS////////////////
          function negros(){
            $("#slide").hide();
            var auxxxx = ctxOriginal.getImageData(0,0,canvasEditado.width, canvasEditado.height);

            for (var x = 0; x < imageData.width; x++) {
              for (var y = 0; y < imageData.height; y++) {
                var rojo = getRed(auxxxx,x,y);
                var verde = getGreen(auxxxx,x,y);
                var azul = getBlue(auxxxx,x,y);

                var negros = (rojo+verde+azul)/3;
                setPixel(imageData,x,y,negros,negros,negros,255);
              }
            }

            ctx.putImageData(imageData,0,0);
          }
          $("#canvas2").on("click",function(){
            negros();
          });
////////////////

////////////////NEGATIVOS////////////////
        function negativos(){
          $("#slide").hide();
          var auxxxx = ctxOriginal.getImageData(0,0,canvasEditado.width, canvasEditado.height);

          for (var x = 0; x < imageData.width; x++) {
            for (var y = 0; y < imageData.height; y++) {
              var rojo = getRed(auxxxx,x,y);
              var verde = getGreen(auxxxx,x,y);
              var azul = getBlue(auxxxx,x,y);

              var negros = (rojo+verde+azul)/3;
              setPixel(imageData,x,y,255-rojo,255-verde,255-azul,255);
            }
          }

          ctx.putImageData(imageData,0,0);
        }
        $("#canvas3").on("click",function(){
          negativos();
        });
////////////////

////////////////SEPIA////////////////
          function sepia(){
            $("#slide").hide();
            var auxxxx = ctxOriginal.getImageData(0,0,canvasEditado.width, canvasEditado.height);
            for (var x = 0; x < imageData.width; x++) {
              for (var y = 0; y < imageData.height; y++) {
                var rojo = getRed(auxxxx,x,y);
                var verde = getGreen(auxxxx,x,y);
                var azul = getBlue(auxxxx,x,y);

                sepiaR = Math.floor(0.393*rojo + 0.769*verde+ 0.189*azul);
                sepiaG = Math.floor(0.349*rojo + 0.686*verde + 0.168*azul);
                sepiaB = Math.floor(0.272*rojo + 0.534*verde + 0.131*azul);

                setPixel(imageData,x,y,sepiaR,sepiaG,sepiaB,255);
              }
            }

            ctx.putImageData(imageData,0,0);
          }
          $("#canvas4").on("click",function(){
            sepia();
          });
////////////////

////////////////BINARIZACION////////////////
        function binarizacion(){
          $("#slide").hide();
          var auxxxx = ctxOriginal.getImageData(0,0,canvasEditado.width, canvasEditado.height);
          for (var x = 0; x < imageData.width; x++) {
            for (var y = 0; y < imageData.height; y++) {
              var rojo = getRed(auxxxx,x,y);
              var verde = getGreen(auxxxx,x,y);
              var azul = getBlue(auxxxx,x,y);

              var negros = (rojo+verde+azul)/3;
              var puntoMedio = 128;

              function binario(puntoMedio){
                if(negros>=puntoMedio){
                  return 0;
                }else{
                  return 255;
                }
              }

              setPixel(imageData,x,y,binario(puntoMedio),binario(puntoMedio),binario(puntoMedio),255);
            }
          }
            ctx.putImageData(imageData,0,0);
          }
          $("#canvas5").on("click",function(){
            binarizacion();
          });
////////////////

////////////////BRILLO////////////////
          function brillo(){
            var slideVal = parseInt($("#slide").val());
            var auxxxx = ctxOriginal.getImageData(0,0,canvasEditado.width, canvasEditado.height);

            for (var x = 0; x < imageData.width; x++) {
              for (var y = 0; y < imageData.height; y++) {
                var rojo = getRed(auxxxx,x,y);
                var verde = getGreen(auxxxx,x,y);
                var azul = getBlue(auxxxx,x,y);

                setPixel(imageData,x,y,rojo+slideVal,verde+slideVal,azul+slideVal,255);
              }
            }

            ctx.putImageData(imageData,0,0);
          }

          $("#slide").change(function(){
            brillo();
          });

          $("#canvas6").on("click",function(){
            brillo();
            $("#slide").show();
          });
////////////////
        };
    }
});

$("#btnDescargar").on("click",function(){
  var url = document.getElementById("canvasEditado").toDataURL("image/png");
  $("#btnDescargar").attr("href",url);
});


function getRed(imageData, x, y){
  index = (x + y * imageData.width) * 4;
  return imageData.data[index+0];
}

function getGreen(imageData, x, y){
  index = (x + y * imageData.width) * 4;
  return imageData.data[index+1];
}

function getBlue(imageData, x, y){
  index = (x + y * imageData.width) * 4;
  return imageData.data[index+2];
}

function setPixel(imageData,i,j,r,g,b,a){
  index = (i + j * imageData.width) * 4;
  imageData.data[index+0] = r;
  imageData.data[index+1] = g;
  imageData.data[index+2] = b;
  imageData.data[index+3] = a;
}
