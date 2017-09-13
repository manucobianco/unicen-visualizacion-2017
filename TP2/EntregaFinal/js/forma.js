class Forma {

  constructor(paramPosX, paramPosY,paramWidth,paramHeight,paramColor,paramId){
    this.posX = paramPosX;
    this.posY = paramPosY;
    this.width = paramWidth;
    this.height = paramHeight;
    this.color = paramColor;
    this.id = paramId;
  }

  pintar(ctx){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.posX,this.posY,this.width,this.height);
  }
  //
  // clicked(){
  //   var clickeando = true;
  //   var mX = e.layerX; //clientX
  //   var mY = e.layerY; //clientY
  //
  //   //if (((forma.posX+10<mX)&&(forma.width+forma.posX+10>mX))&&((forma.posY+10<mY)&&(forma.height+forma.posY+10>mY))){
  //   if (((forma.posX<mX)&&(forma.width+forma.posX>mX))&&((forma.posY<mY)&&(forma.height+forma.posY>mY))){
  //     return true;
  //   }
  //   return false;
  // }

}
