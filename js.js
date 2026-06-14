//Ejercicio 1 -- Calculadora Ing.Civil

//Toma de datos del document html
const altoPared = document.getElementById("altoPared");
const largoPared = document.getElementById("largoPared");
const calcularMateriales = document.getElementById("btn-calcular");
const bloques = document.getElementById("bloques");
const cemento = document.getElementById("cemento");
const arena = document.getElementById("arena");


//Escuchar cuando se haga click en el btn y dar resultado.

calcularMateriales.addEventListener('click', (e) => {
e.preventDefault(); //evita que la pagina recargue por el btn type submit
//Convierte el valor a numero.
const alto = altoPared.valueAsNumber; 
const largo = largoPared.valueAsNumber;

const area= alto*largo;

bloques.innerHTML=`${Math.ceil(area*12.5)}`;
cemento.innerHTML=`${Math.ceil(area/3)}`;
arena.innerHTML=`${area*0.03}`;
});

//Toma de datos del document html CERAMICAS
const anchoHab = document.getElementById("anchoHab");
const largoHab = document.getElementById("largoHab");
const anchoCeramcia = document.getElementById("anchoCeramica");
const largoCeramica = document.getElementById("largoCeramica");
const calcularCeramicas = document.getElementById("btn-ceramicas");
const ceramicas = document.getElementById("ceramicas");
const ceramicasTotal = document.getElementById("ceramicasTotal");

//Escuchar cuando se haga click en el btn y dar resultado.

calcularCeramicas.addEventListener('click', (e) => {
e.preventDefault(); //evita que la pagina recargue por el btn type submit
//Convierte el valor a numero.
const ancho = anchoHab.valueAsNumber; 
const largo = largoHab.valueAsNumber;
let anchoC = anchoCeramcia.valueAsNumber; 
let largoC = largoCeramica.valueAsNumber;

const area= ancho*largo;
anchoC = anchoC/100;
largoC= largoC/100;
const areaC= anchoC*largoC;
const areaTotal= area/areaC;


ceramicas.innerHTML=`${Math.ceil(areaTotal)}`;
ceramicasTotal.innerHTML=`${Math.ceil(areaTotal+((areaTotal*10)/100))}`;
});

// FIIIIIIIIIIIIIIIIIINN EJERCICIOOOOOOOO UNOOOOOOOOOOOOOOOOOOOOO

