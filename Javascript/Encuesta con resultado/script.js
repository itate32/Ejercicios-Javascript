const contenedor = document.getElementById("encuesta");
const botonRes = document.getElementById("boton");
const resultadoEncuesta = document.getElementById("resultado");

const preguntas = [
    {
      pregunta: "1. Qué hace falta para que cinco personas con un solo paraguas no se mojen?",
      respuestas: {
        a: "Que no llueva",
        b: "Que hagan espacio para cubrirse los 5"
      },
      respuestaCorrecta: "a"
    },
    {
      pregunta: "2. Qué es lo que todo el mundo hace al despertar?",
      respuestas: {
        a: "evantarse",
        b: "Abrir los ojos"
      },
      respuestaCorrecta: "b"
    },
    {
      pregunta: "3. Cuál es el número que si le quitas la mitad, vale 0 ?",
      respuestas: {
        a: "El 8",
        b: "El 0"
      },
      respuestaCorrecta: "a"
    },
    {
      pregunta: "4. De qué se alimenta un león muerto de hambre ?",
      respuestas: {
        a: "De si mismo",
        b: "De nada, está muerto"
      },
      respuestaCorrecta: "b"
    },
    {
        pregunta: "5. Por qué las cigüeñas solo encogen una pata?",
        respuestas: {
            a: "Por que si encoge las 2, se caería",
            b: "Por que hacerlo tiene mucho estilo"
      },
      respuestaCorrecta: "a"
    }
];

function mostrarEncuesta(){
    const preguntasYrespuestas = [];

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const respuestas = [];
        for(letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
                `<label> 
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}">
                    ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
                </label>`
            );
        }
        preguntasYrespuestas.push(
            `<div clas="cuestion"> ${preguntaActual.pregunta} </div>
            <div class="respuestas"> ${respuestas.join('')} </div>
            `
        );
    });

    contenedor.innerHTML = preguntasYrespuestas.join('');
}

mostrarEncuesta();

function mostrarResultado(){
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const todasLasRespuestas = respuestas[numeroDePregunta];
        const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
        const respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value;

        if(respuestaElegida === preguntaActual.respuestaCorrecta){
            respuestasCorrectas++;
        }
    });

    resultadoEncuesta.innerHTML = 'Ha respondido correctamente ' + respuestasCorrectas + ' preguntas de un total de ' + preguntas.length;

}

botonRes.addEventListener('click', mostrarResultado);

