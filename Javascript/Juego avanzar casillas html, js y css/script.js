var contador=0;
function valida(key){
    var estado=document.getElementById(key).innerHTML;
    if(estado=='on'){
        cambiarColor(key);
        desactivar();
        activaCuadro(key);
        CambiaFin();
        cuentaPasos(1);
    }else{
        alert("Movimiento no válido !");
        alert("Recuerde que debe escoger una celda superior, inferior o a la derecha de donde esté")
    }
    
}
function cuentaPasos(paso){  
    contador = contador+paso;
}
function muestraPasos(){
    return contador;
}
function CambiaFin(){
    document.getElementById(25).innerHTML='Fin';
}

function activaCuadro(key){
    var llave=parseInt(key,10);

    if(llave==2||llave==3||llave==4||llave==6||llave==11||llave==16){
        document.getElementById(llave+1).innerHTML='on';
        document.getElementById(llave+5).innerHTML='on';
    }
    if(llave==5||llave==10||llave==15||llave==20){
        document.getElementById(llave+5).innerHTML='on';
    }
    if(llave==21){
        document.getElementById(llave+1).innerHTML='on';
    }
    if(llave==7||llave==8||llave==9||llave==12||llave==13||llave==14||llave==17||llave==18||llave==19){
        document.getElementById(llave+1).innerHTML='on';
        document.getElementById(llave+5).innerHTML='on';
        document.getElementById(llave-5).innerHTML='on';
    }
    if(llave==22||llave==23||llave==24){
        document.getElementById(llave+1).innerHTML='on';
        document.getElementById(llave-5).innerHTML='on';
    }
    desactOrange();   
}

function cambiarColor(key){
    document.getElementById(key).style.backgroundColor='darkgreen';
    document.getElementById(key).style.color='darkgreen';
}
function fin(){
    alert("***JUEGO TERMINADO***");
}

function desactivar(){

    for(var i=2;i<25;i++){
        document.getElementById(i).innerHTML='off';
    }
}

function desactOrange(){

    for(var i=2;i<25;i++){
        var color='darkgreen';
        if(document.getElementById(i).style.backgroundColor==color){
            document.getElementById(i).innerHTML='off';
        }  
    }
}