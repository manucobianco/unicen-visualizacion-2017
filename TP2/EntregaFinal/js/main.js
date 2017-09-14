var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var formaAux = -1;
var torreInicial = -1;
var torreDestino;
var mov=0;

var jugar = function() {
  mov=0;
  document.getElementById("mov").innerHTML = "Movimientos: "+mov;
  var juego = new Juego();
  juego.comenzar();
  juego.pintarTorres(ctx);

  canvas.onmousedown = function(e){
    var torreClickeada = juego.torreMove(e);
    if(torreClickeada != 0){//si al menos clickeo en alguna forma
      formaAux = torreClickeada.getUltimo();
      torreInicial = torreClickeada;
    }
  }

  canvas.onmousemove = function(e){
    if(formaAux != -1){
      juego.pintarTorres(ctx);
      formaAux.pintar(ctx,e.layerX,e.layerY);
    }
  }

  canvas.onmouseup = function(e){
    if(formaAux != -1){
      torreDestino = juego.torreMove(e);
      if(torreDestino!=0){
        if(torreDestino.aceptaForma(formaAux)){
          torreDestino.addForma(formaAux);
          mov++;
          document.getElementById("mov").innerHTML = "Movimientos: "+mov;
        }else{
          torreInicial.addForma(formaAux);
        }
      }
    }
    if(juego.gano()){
      alert("Felicidades!! Ganaste!!");
    }
    juego.pintarTorres(ctx);
    formaAux = -1;
    torreInicial = -1;
  }
 }

 var btn = document.getElementById("comenzar");
 btn.addEventListener('click',jugar);

//   //if (((forma.posX+10<mX)&&(forma.width+forma.posX+10>mX))&&((forma.posY+10<mY)&&(forma.height+forma.posY+10>mY))){
//   if (((forma.posX<mX)&&(forma.width+forma.posX>mX))&&((forma.posY<mY)&&(forma.height+forma.posY>mY))){
//     console.log ("mX: "+mX+" mY: "+mY);
