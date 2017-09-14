class Torre {
  constructor(posX,id) {
    this.width = 50;
    this.height = 400;
    this.formas = [];
    this.posX = posX;
    this.posY = 100;
    this.color = "#000000";
    this.id = id;
  }

  pintar(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX,this.posY,this.width,this.height);
    this.pintarFormas(ctx);
  }

  pintarFormas(ctx){
    var j = 400;
    for (var i = 0; i < this.formas.length; i++) {
      j=j-30;
      var px = (this.formas[i].width-50)/2
      this.formas[i].pintar(ctx,this.posX-px,j);
    }
  }

  // formaClickeada(e){
  //   // var clickeando = true;
  //   var mX = e.layerX; //clientX
  //   var mY = e.layerY; //clientY
  //
  //   for (var i = 0; i < this.formas.length; i++) {
  //     //if (((forma.posX+10<mX)&&(forma.width+forma.posX+10>mX))&&((forma.posY+10<mY)&&(forma.height+forma.posY+10>mY))){
  //     if (((this.formas[i].posX<mX)&&(this.formas[i].width+this.formas[i].posX>mX))&&((this.formas[i].posY<mY)&&(this.formas[i].height+this.formas[i].posY>mY))){
  //       return this.formas[i];
  //     }
  //   }
  //   return -1;
  // }

  getUltimo(){
    return this.formas.pop();
  }

  cantFormas(){
    return this.formas.length;
  }

  aceptaForma(forma){
    //si el ultimo item del arreglo es mas chico q el q le pasas, retorna false
    if(this.formas.length>0){
      if((this.formas[this.formas.length-1].getId())<(forma.getId())){
        console.log("NO SE PUEDE");
        return false;
      }else {
        console.log("ASI PUES SI");
        return true;
      }
    }
    console.log("ASI PUES SI");
    return true;
  }

  addForma(fr){
    this.formas.push(fr);
  }

}
