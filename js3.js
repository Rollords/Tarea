const play=document.getElementById("play");
const eat=document.getElementById("eat");
const sleep=document.getElementById("sleep");
const hambreBar=document.getElementById("hambre-bar");
const hambreText=document.getElementById("hambre-text");
const energiaBar=document.getElementById("energia-bar");
const energiaText=document.getElementById("energia-text");
let text=document.getElementById("status-text");


const img=document.getElementById("img-change");

const gatzu = {
    nombre: "Gatzu",
    hambreActual: 0,
    hambreMax:100,
    energiaActual: 100,
    energiaMax:100,

    actualizarBarraHambre: function(a) {
        //modificamos el valor del estado actual
        this.hambreActual+= a;
        //Controlamos valores
        if(this.hambreActual< 0 ) this.hambreActual=0;

        if(this.hambreActual>this.hambreMax) this.hambreActual = this.hambreMax;

        //Modificamos barras

        const  porcentajeHambre = (this.hambreActual *this.hambreMax) / 100;
        
        hambreBar.style.width = `${porcentajeHambre}%`;

        hambreText.innerText = `${this.hambreActual} / ${this.hambreMax}`;
    },
    actualizarBarraEnergia: function(a) {
        this.energiaActual+= a;

        if(this.energiaActual< 0 ) this.hambreActual=0;

        if(this.energiaActual>this.energiaMax) this.energiaActual = this.energiaMax;


        const  porcentajeEnergia = (this.energiaActual*this.energiaMax) / 100;
        
        energiaBar.style.width = `${porcentajeEnergia}%`;

        energiaText.innerText = `${this.energiaActual} / ${this.energiaMax}`;
    },
    

    jugar: function() {

        if(this.hambreActual===100) {
            text.innerHTML="Gatzu: Muero de hambre!";
            img.src=`src/assets/img/gatzu/hambriento.jpg`;
        } else if(this.energiaActual<=20) {
            text.innerHTML="Gatzu: Necesito Dormir!";
            img.src=`src/assets/img/gatzu/tired.jpg`;
        }else {
            let texts=["Gatzu: Que Divertido!","Gatzu: Que Gracioso!","Gatzu: JAJAJAJA!","Gatzu: Me Gusta Esto!","Gatzu: Sigamos Jugando!","Gatzu: Eres Gracios@","Gatzu: Geniaaaal!"];
            let num=Math.floor((Math.random() * 3)+1);
            this.actualizarBarraHambre(15);
            this.actualizarBarraEnergia(-20);
            img.src=`src/assets/img/gatzu/jugando${num}.jpg`;
            const textAleatorio = (a) => {
                let random=Math.floor((Math.random() * 6)+1);
                return a[random];
            }
            text.innerHTML= textAleatorio(texts);
            
        }
        
    },

    comer: function() {
        if(this.hambreActual<=0){
        text.innerHTML="Gatzu: Estoy lleno!";
        }else{
        let texts=["Gatzu: Que Rico!","Gatzu: Esta Delicioso!","Gatzu: Puedes Darme Mas?!","Gatzu: Me Gusta Esto!","Gatzu: Quiero Mas Comida","Gatzu: Tendras Algun Dulce?","Gatzu: Traeme Pescado!"];
        let num=Math.floor((Math.random() * 3)+1);
        this.actualizarBarraHambre(-30);
        this.actualizarBarraEnergia(10);
        img.src=`src/assets/img/gatzu/comiendo${num}.jpg`;
        const textAleatorio = (a) => {
                let random=Math.floor((Math.random() * 6)+1);
                return a[random];
            }
        text.innerHTML= textAleatorio(texts);
        }
    },
    sleep: function() {
        if (this.energiaActual>=100) {
           text.innerHTML="Gatzu: Tengo mucha energia, No voy a dormir XD";
        }else {
            let num=Math.floor((Math.random() * 2)+1);
            this.actualizarBarraHambre(10);
            this.actualizarBarraEnergia(100);
            img.src=`src/assets/img/gatzu/dormido${num}.jpg`;
            text.innerHTML="Gatzu: Que Rico Descanso Digo Miauuuuu!";

        }

    }

    
}

play.addEventListener('click', ()=> {
    gatzu.jugar()
});
eat.addEventListener('click', ()=> {
    gatzu.comer()
});
sleep.addEventListener('click', ()=> {
    gatzu.sleep()
});