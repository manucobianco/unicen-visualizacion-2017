var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

 canvas.onclick = jugar;

 function jugar() {
   var juego = new Juego();
   juego.pintarTorres(ctx);
 }

//   //if (((forma.posX+10<mX)&&(forma.width+forma.posX+10>mX))&&((forma.posY+10<mY)&&(forma.height+forma.posY+10>mY))){
//   if (((forma.posX<mX)&&(forma.width+forma.posX>mX))&&((forma.posY<mY)&&(forma.height+forma.posY>mY))){
//     console.log ("mX: "+mX+" mY: "+mY);
