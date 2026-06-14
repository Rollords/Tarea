//INICIO EJERCICIO 2 UNIVARSIDADES
//Toma de Datos
const name=document.getElementById("name");
const lastName=document.getElementById("lastName");
const carrer=document.getElementById("carrer");
const calcularPromedio=document.getElementById("btn-univ");
const aprobado=document.getElementById("aprobado");
const desaprobado=document.getElementById("desaprobado");
const paso=document.getElementById("paso");
const noPaso=document.getElementById("noPaso");

//Materias
const math=document.getElementById("math");
const calc=document.getElementById("calc");
const algebra=document.getElementById("algebra");
const geometria=document.getElementById("geometria");
const logica=document.getElementById("logica");


calcularPromedio.addEventListener('click', (e) => {
const formulario = calcularPromedio.closest('form');
if (!formulario.checkValidity()) {
        return; 
    }
e.preventDefault(); //evita que la pagina recargue por el btn type submit
//Convierte el valor a numero.
const num1 = math.valueAsNumber; 
const num2 = calc.valueAsNumber;
const num3 = algebra.valueAsNumber; 
const num4 = geometria.valueAsNumber;
const num5 = logica.valueAsNumber;

const expedienteAcademico = {
    estudiante: name.value,
    estudianteApellido: lastName.value,
    carrera: carrer.value,
    calificaciones: [num1,num2,num3,num4,num5],

        obtenerPromedio: function(){
            const suma= this.calificaciones.reduce((acumulador, nota) => acumulador + nota, 0);

            return suma / this.calificaciones.length;
        },

        estaAprobado: function() {
            const promedio=this.obtenerPromedio();
            const notaMinima=12;

            if (promedio >= notaMinima) {
                //controlar que se vea si se cumple la condicion
                aprobado.classList.remove("hidden");
                aprobado.src='src/assets/img/aprobado.png';
                aprobado.classList.add("img-xd");
                //controlar que se vea si se cumple la condicion
                paso.classList.remove("hidden");
                paso.innerHTML=`Aprobaste tu promedio fue: ${promedio}`;
                paso.classList.add("texto-xd");

                //consola
                console.log(`El estudiante ${this.estudiante} ${this.estudianteApellido} cursante de la carrera ${this.carrera} tuvo un promedio de ${promedio} puntos / 12, aprobando asi su curso. APROBADO!`)
                //ocultar
                desaprobado.classList.add("hidden");
                noPaso.innerHTML=``;
                
            }else {
                //controlar que se vea si se cumple la condicion
                desaprobado.classList.remove("hidden");
                desaprobado.src='src/assets/img/rechazado.webp';
                desaprobado.classList.add("img-xd");
                //controlar que se vea si se cumple la condicion
                noPaso.classList.remove("hidden");
                noPaso.innerHTML=`Reprobaste tu promedio fue: ${promedio}`;
                noPaso.classList.add("texto-xd");

                //consola
                console.log(`El estudiante ${this.estudiante} ${this.estudianteApellido} cursante de la carrera ${this.carrera} tuvo un promedio de ${promedio} puntos / 12, reprobando asi su curso. A LLORAR PAL VALLE!`)
                //ocultar
                aprobado.classList.add("hidden");
                paso.innerHTML=``;
            }
        }

};
expedienteAcademico.estaAprobado();
});
