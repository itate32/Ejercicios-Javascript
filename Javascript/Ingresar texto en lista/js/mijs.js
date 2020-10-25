function verradiovalue() {
    var radiovalue = document.nombreform.nombreradio.value;
    var vectorLetras = document.getElementById("campo").value;
    if (radiovalue.length == 0 || vectorLetras.length==0) radiovalue = "ninguno";
    if(radiovalue == "izquierda" ){
        document.querySelector("#uno").innerHTML = vectorLetras;

    } 
    if(radiovalue == "derecha"){
        document.querySelector("#dos").innerHTML = vectorLetras;

    } 
    if(radiovalue=="ninguno"){
    alert("DEBE INGRESAR UN TEXTO Y SELECCIONAR UNA OPCION " );
}
}