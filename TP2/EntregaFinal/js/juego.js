class Juego{
  constructor(){
    this.torre1 = new Torre(100);
    this.torre2 = new Torre(250);
    this.torre3 = new Torre(400);
  }

 pintarTorres(ctx){
   ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
   this.torre1.pintar(ctx);
   this.torre2.pintar(ctx);
   this.torre3.pintar(ctx);
 }


}
