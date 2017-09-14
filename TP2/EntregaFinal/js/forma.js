class Forma {

  constructor(paramWidth,paramHeight,paramColor,paramId){
    this.width = paramWidth;
    this.height = paramHeight;
    this.color = paramColor;
    this.id = paramId;
  }

  pintar(ctx,x,y){
      ctx.fillStyle = this.color;
      ctx.fillRect(x,y,this.width,this.height);
  }

  getId(){
    return this.id;
  }
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
