function fechaAhora(){

    var fechaActual = new Date();
    var dia = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];


    alert ("Hoy es " + dia[fechaActual.getDay()] +" " +fechaActual.getDate() + " de " + (fechaActual.getMonth()+1) + " del " + fechaActual.getFullYear() + " y son las: "  + fechaActual.getHours() +  " hrs. con " + fechaActual.getMinutes() + " minutos y " + fechaActual.getSeconds() + " segundos. ");
    
}