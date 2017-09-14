class Juego{
  constructor(){
    this.torre1 = new Torre(150,"1");
    this.torre2 = new Torre(350,"2");
    this.torre3 = new Torre(550,"3");
  }

  comenzar(){
    var forma1 = new Forma(100,30,"#e75d5d",1);
    var forma2 = new Forma(120,30,"#65b5ff",2);
    var forma3 = new Forma(140,30,"#95f78c",3);
    var forma4 = new Forma(160,30,"#b86ff7",4);

    this.torre1.addForma(forma4);
    this.torre1.addForma(forma3);
    this.torre1.addForma(forma2);
    this.torre1.addForma(forma1);
  }

  gano(){
    if((this.torre2.cantFormas()==4)||(this.torre3.cantFormas()==4)){
      return true;
    }
    return false;
  }

  pintarTorres(ctx){
   ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
   this.torre1.pintar(ctx);
   this.torre2.pintar(ctx);
   this.torre3.pintar(ctx);
  }
  //
  // torreClicked(e){
  //   if((this.torre1.formaClickeada(e)) != -1){
  //    return this.torre1;
  //   }else if((this.torre2.formaClickeada(e)) != -1){
  //    return this.torre2;
  //   }else if((this.torre3.formaClickeada(e)) != -1){
  //    return this.torre3;
  //   }else{
  //    return 0;
  //   }
  // }

  torreMove(e){
    var mx = e.layerX;
    var my = e.layerY;

    if((mx>75)&&(mx<275)){
      return this.torre1;
    }else if((mx>275)&&(mx<475)){
      return this.torre2;
    }else if((mx>475)&&(mx<675)){
      return this.torre3;
    }
    return 0;
  }
}
