var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var posX = 100;
var posY = 100;
var forma = new Forma(posX,posY,50,30,"#ffffff");

pintar(forma);

canvas.onmousemove = mover;

function mover(e){
  var clickeando = true;
  var mX = e.clientX;
  var mY = e.clientY;

  if (((forma.posX+10<mX)&&(forma.width+forma.posX+10>mX))&&((forma.posY+10<mY)&&(forma.height+forma.posY+10>mY))){
    console.log ("mX: "+mX+" mY: "+mY);
  }
}

function Forma(paramPosX, paramPosY,paramWidth,paramHeight,paramColor,paramId){
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.width = paramWidth;
  this.height = paramHeight;
  this.color = paramColor;
  this.id = paramId;
}

function pintar(frm){

    ctx.fillStyle = '#f3a9f7';
    ctx.rect(frm.posX,frm.posY,frm.width,frm.height);
    ctx.fill();
}
