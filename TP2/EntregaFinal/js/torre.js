class Torre {
  constructor(posX) {
    var forma1 = new Forma(100,100,100,30,"#f70606",1);
    var forma2 = new Forma(100,100+30,120,30,"#0c87f7",2);
    var forma3 = new Forma(100,100+60,140,30,"#19cc09",3);
    var forma4 = new Forma(100,100+90,160,30,"#9026ed",4)

    this.width = 50;
    this.height = 400;
    this.formas = [ forma1,forma2,forma3,forma4 ];
    this.posX = posX;
    this.posY = 100;
    this.color = "#000000";
  }

  pintar(ctx){
    ctx.fillStyle = this.color;
    ctx.rect(this.posX,this.posY,this.width,this.height);
    ctx.fill();
    this.pintarFormas(ctx);
  }

  pintarFormas(ctx){
    for (var i = 0; i < this.formas.length; i++) {
      this.formas[i].pintar(ctx);
    }
  }
}
