/****************************************************************************************
Este es el primer programa que hice en Javascript por mi cuenta: una versión muy simplificada del Blackjack (los ases sólo valen 11, no hay fichas ni apuestas, no hay opción de split o double... simplemente simula una ronda contra el dealer con las opciones básicas de plantarse o pedir carta acercándose lo más posible a 21). El doble motivo por el que quise publicarlo en mi cuenta de GitHub es:
  1: Mostrar a los demás mi primera experiencia a la hora de implementar código desde cero, siendo un principiante en la materia.
  2: Recordarme a mí mismo que todos empezamos aprendiendo desde lo más simple y motivarme para seguir constantemente aprendiendo y practicando.

Por esto es que he decidido meter todo el código JS en un único archivo, sin modularizar, comentando en cada parte lo que hice de acuerdo a mi lógica del momento. Evidentemente, se podría haber hecho mucho mejor, más completo y de una forma más organizada; pero, insisto, mi intención es la de mostrar mi experiencia particular como primerizo que se enfrenta a su primer reto autónomo.
A quien sea que se haya tomado el tiempo de echarle un vistazo, se lo agradezco sinceramente. :) 
****************************************************************************************/




//Hasta la línea 406, todo lo que sigue es un array de objetos que simula una baraja francesa. Hay propiedades como 'id' y 'nombre' que no se usan en este juego, pero los mantengo deliberadamente con la idea de poder reutilizar la "baraja" en eventuales proyectos que añadan más complejidad.

const baraja = [
    {
        id: 'ap',
        nombre: 'As de picas',
        display: 'A♠️',
        valor: 11,
        palo: 'picas',

    },
    {
        id: 'ac',
        nombre: 'As de corazones',
        display: 'A♥️',
        valor: 11,
        palo: 'corazones'
    },
    {
        id: 'at',
        nombre: 'As de tréboles',
        display: 'A♣️',
        valor: 11,
        palo: 'treboles',
    },
    {
        id: 'ad',
        nombre: 'As de diamantes',
        display: 'A♦️',
        valor: 11,
        palo: 'diamantes',
    },
    {
        id: '2p',
        nombre: 'Dos de picas',
        display: '2♠️',
        valor: 2,
        palo: 'picas',

    },
    {
        id: '3p',
        nombre: 'Tres de picas',
        display: '3♠️',
        valor: 3,
        palo: 'picas',

    },
    {
        id: '4p',
        nombre: 'Cuatro de picas',
        display: '4♠️',
        valor: 4,
        palo: 'picas',

    },
    {
        id: '5p',
        nombre: 'Cinco de picas',
        display: '5♠️',
        valor: 5,
        palo: 'picas',

    },
    {
        id: '6p',
        nombre: 'Seis de picas',
        display: '6♠️',
        valor: 6,
        palo: 'picas',

    },
    {
        id: '7p',
        nombre: 'Siete de picas',
        display: '7♠️',
        valor: 7,
        palo: 'picas',

    },
    {
        id: '8p',
        nombre: 'Ocho de picas',
        display: '8♠️',
        valor: 8,
        palo: 'picas',

    },
    {
        id: '9p',
        nombre: 'Nueve de picas',
        display: '9♠️',
        valor: 9,
        palo: 'picas',

    },
    {
        id: '10p',
        nombre: 'Diez de picas',
        display: '10♠️',
        valor: 10,
        palo: 'picas',

    },
    {
        id: 'jp',
        nombre: 'Jota de picas',
        display: 'J♠️',
        valor: 10,
        palo: 'picas',

    },
    {
        id: 'qp',
        nombre: 'Reina de picas',
        display: 'Q♠️',
        valor: 10,
        palo: 'picas',

    },
    {
        id: 'kp',
        nombre: 'Rey de picas',
        display: 'K♠️',
        valor: 10,
        palo: 'picas',

    },
    {
        id: '2c',
        nombre: 'Dos de corazones',
        display: '2♥️',
        valor: 2,
        palo: 'corazones',

    },
    {
        id: '3c',
        nombre: 'Tres de corazones',
        display: '3♥️',
        valor: 3,
        palo: 'corazones',

    },
    {
        id: '4c',
        nombre: 'Cuatro de corazones',
        display: '4♥️',
        valor: 4,
        palo: 'corazones',

    },
    {
        id: '5c',
        nombre: 'Cinco de corazones',
        display: '5♥️',
        valor: 5,
        palo: 'corazones',

    },
    {
        id: '6c',
        nombre: 'Seis de corazones',
        display: '6♥️',
        valor: 6,
        palo: 'corazones',

    },
    {
        id: '7c',
        nombre: 'Siete de corazones',
        display: '7♥️',
        valor: 7,
        palo: 'corazones',

    },
    {
        id: '8c',
        nombre: 'Ocho de corazones',
        display: '8♥️',
        valor: 8,
        palo: 'corazones',

    },
    {
        id: '9c',
        nombre: 'Nueve de corazones',
        display: '9♥️',
        valor: 9,
        palo: 'corazones',

    },
    {
        id: '10c',
        nombre: 'Diez de corazones',
        display: '10♥️',
        valor: 10,
        palo: 'corazones',

    },
    {
        id: 'jc',
        nombre: 'Jota de corazones',
        display: 'J♥️',
        valor: 10,
        palo: 'corazones',

    },
    {
        id: 'qc',
        nombre: 'Reina de corazones',
        display: 'Q♥️',
        valor: 10,
        palo: 'corazones',

    },
    {
        id: 'kc',
        nombre: 'Rey de corazones',
        display: 'K♥️',
        valor: 10,
        palo: 'corazones',

    },
    {
        id: '2t',
        nombre: 'Dos de tréboles',
        display: '2♣️',
        valor: 2,
        palo: 'treboles',
    },
    {
        id: '3t',
        nombre: 'Tres de tréboles',
        display: '3♣️',
        valor: 3,
        palo: 'treboles',
    },
    {
        id: '4t',
        nombre: 'Cuatro de tréboles',
        display: '4♣️',
        valor: 4,
        palo: 'treboles',
    },
    {
        id: '5t',
        nombre: 'Cinco de tréboles',
        display: '5♣️',
        valor: 5,
        palo: 'treboles',
    },
    {
        id: '6t',
        nombre: 'Seis de tréboles',
        display: '6♣️',
        valor: 6,
        palo: 'treboles',
    },
    {
        id: '7t',
        nombre: 'Siete de tréboles',
        display: '7♣️',
        valor: 7,
        palo: 'treboles',
    },
    {
        id: '8t',
        nombre: 'Ocho de tréboles',
        display: '8♣️',
        valor: 8,
        palo: 'treboles',
    },
    {
        id: '9t',
        nombre: 'Nueve de tréboles',
        display: '9♣️',
        valor: 9,
        palo: 'treboles',
    },
    {
        id: '10t',
        nombre: 'Diez de tréboles',
        display: '10♣️',
        valor: 10,
        palo: 'treboles',
    },
    {
        id: 'jt',
        nombre: 'Jota de tréboles',
        display: 'J♣️',
        valor: 10,
        palo: 'treboles',
    },
    {
        id: 'qt',
        nombre: 'Reina de tréboles',
        display: 'Q♣️',
        valor: 10,
        palo: 'treboles',
    },
    {
        id: 'kt',
        nombre: 'Rey de tréboles',
        display: 'K♣️',
        valor: 10,
        palo: 'treboles',
    },
    {
        id: '2d',
        nombre: 'Dos de diamantes',
        display: '2♦️',
        valor: 2,
        palo: 'diamantes',
    },
    {
        id: '3d',
        nombre: 'Tres de diamantes',
        display: '3♦️',
        valor: 3,
        palo: 'diamantes',
    },
    {
        id: '4d',
        nombre: 'Cuatro de diamantes',
        display: '4♦️',
        valor: 4,
        palo: 'diamantes',
    },
    {
        id: '5d',
        nombre: 'Cinco de diamantes',
        display: '5♦️',
        valor: 5,
        palo: 'diamantes',
    },
    {
        id: '6d',
        nombre: 'Seis de diamantes',
        display: '6♦️',
        valor: 6,
        palo: 'diamantes',
    },
    {
        id: '7d',
        nombre: 'Siete de diamantes',
        display: '7♦️',
        valor: 7,
        palo: 'diamantes',
    },
    {
        id: '8d',
        nombre: 'Ocho de diamantes',
        display: '8♦️',
        valor: 8,
        palo: 'diamantes',
    },
    {
        id: '9d',
        nombre: 'Nueve de diamantes',
        display: '9♦️',
        valor: 9,
        palo: 'diamantes',
    },
    {
        id: '10d',
        nombre: 'Diez de diamantes',
        display: '10♦️',
        valor: 10,
        palo: 'diamantes',
    },
    {
        id: 'jd',
        nombre: 'Jota de diamantes',
        display: 'J♦️',
        valor: 10,
        palo: 'diamantes',
    },
    {
        id: 'qd',
        nombre: 'Reina de diamantes',
        display: 'Q♦️',
        valor: 10,
        palo: 'diamantes',
    },
    {
        id: 'kd',
        nombre: 'Rey de diamantes',
        display: 'K♦️',
        valor: 10,
        palo: 'diamantes',
    },

];

//Lo primero que hacemos es aleatorizar el orden de los objetos del array. Para esto implementamos en la función 'barajar' el algoritmo Fisher-Yates:

const barajar = array => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
};

//Ahora usamos esa función para "barajar" nuestro array, obteniendo 'nuevaBaraja' cada vez que jugamos una ronda:

nuevaBaraja = barajar(baraja);

//Obtenemos los elementos del Index.html en las siguientes constantes:

const manoBanca = document.querySelector('.mano-banca');
const manoJugador = document.querySelector('.mano-jugador');
const btnCarta = document.querySelector('.btn-carta');
const btnPlantarse = document.querySelector('.btn-plantarse');
const contadorBanca = document.querySelector('.contador-banca');
const contadorJugador = document.querySelector('.contador-jugador');
const avisoBanca = document.querySelector('.aviso-banca');
const avisoJugador = document.querySelector('.aviso-jugador');

//Declaramos las variables, inicializándolas en 0.'indiceBaraja' recorrerá secuencialmente el array-baraja cada vez que se "saque una carta". 'cuentaBanca' y 'cuentaJugador' llevarán el cómputo de las puntuaciones:

let indiceBaraja = 0;
let cuentaBanca = 0;
let cuentaJugador = 0;

//Declaramos las funciones. 'sacarCarta' es la función básica: la primera carta que saca llevará el índice de array 0, y se le dará una clase de 'carta-oculta' para que parezca "bocabajo" en el tablero. Las siguientes aparecerán con clase 'carta-negra' o 'carta-roja' en función del palo. Por último, añadiremos cada nuevo elemento de carta al DOM en el lugar del 'tapete' que le hayamos pasado a la función por parámetro 'lugar'. Siempre que se "saque" una nueva carta de la baraja, se incrementa en 1 el array:

function sacarCarta(lugar) {
    const nuevaCarta = document.createElement('div');
    if (indiceBaraja === 0) {
        nuevaCarta.classList.add('carta-oculta');
        indiceBaraja++;
    }
    else if (nuevaBaraja[indiceBaraja].palo === 'picas' || nuevaBaraja[indiceBaraja].palo === 'treboles') {
        nuevaCarta.textContent = nuevaBaraja[indiceBaraja].display;
        nuevaCarta.classList.add('carta-negra');
        indiceBaraja++;
        
    } else {
        nuevaCarta.textContent = nuevaBaraja[indiceBaraja].display;
        nuevaCarta.classList.add('carta-roja');
        indiceBaraja++;
    }
        lugar.appendChild(nuevaCarta);
};

//La función 'empezarPartida' es con la iniciaremos el programa, la que será llamada al final de todo. Se empieza repartiendo 4 cartas en este orden: una primera al dealer ("bocabajo"), otra al jugador, otra al dealer y otra al jugador. Con setTimeout() hacemos que aparezcan una tras otra a intervalos de 0.5 segundos. Por último, aparecerá el contador del jugador debajo de su mano:

function empezarPartida () {
    setTimeout(() => {
        cuentaBanca += nuevaBaraja[indiceBaraja].valor;
        sacarCarta(manoBanca);
    }, 500);
           
    setTimeout(() => {
        cuentaJugador += nuevaBaraja[indiceBaraja].valor;
        sacarCarta(manoJugador);  
    }, 1000);
    setTimeout(() => {
        cuentaBanca += nuevaBaraja[indiceBaraja].valor;
        sacarCarta(manoBanca);
    }, 1500);
    setTimeout(() => {
        cuentaJugador += nuevaBaraja[indiceBaraja].valor;
        sacarCarta(manoJugador);
    }, 2000);
    setTimeout(() => {
        contadorJugador.textContent = `Jugador: ${cuentaJugador}`;
    }, 2500);
};

  //La función 'pedirCarta' gestiona las nuevas cartas que el jugador pide que se le den. Como vemos aquí por primera vez en el código, con 'window.location.reload()' hacemos que la página se reinicie cada vez que finaliza una ronda a los 5 segundos de haberse mostrado la resolución, y también eliminamos el 'eventListener' para bloquear los botones.

  function pedirCarta() {
    cuentaJugador += nuevaBaraja[indiceBaraja].valor;
    contadorJugador.textContent = `Jugador: ${cuentaJugador}`;
    sacarCarta(manoJugador);
    if (cuentaJugador > 21) {
        btnCarta.removeEventListener('click', pedirCarta);
        btnPlantarse.removeEventListener('click', plantarse);
        avisoJugador.textContent = 'JUGADOR PIERDE';
        setTimeout(() => {window.location.reload()}, 5000);
    }
};

// la función 'plantarse' es la última fase del juego, después de que el jugador haya pedido o no más cartas, y siempre tendrá una resolución final, ya sea victoria, derrota o empate. Lo primero que se hace es "dar la vuelta" a la primera carta que estaba "oculta": realmente, se le añade ahora el .display de la primera carta (índice de array 0) tras haberle quitado la clase de "oculta", y se le añade una "roja" o "negra" en función del palo. Después, el dealer pedirá cartas mientras su mano sea inferior a 17, y con las últimas condicionales se evaluará la resolución final:

function plantarse() {
        const cartaOculta = document.querySelector('.carta-oculta');
        cartaOculta.classList.remove('carta-oculta');
        cartaOculta.textContent = nuevaBaraja[0].display;
        if (nuevaBaraja[0].palo === 'picas' || nuevaBaraja[0].palo === 'treboles') {
            cartaOculta.classList.add('carta-negra');
        } else {
            cartaOculta.classList.add('carta-roja');
        }
        contadorBanca.textContent = `Banca: ${cuentaBanca}`;
        while (cuentaBanca < 17) {
            cuentaBanca += nuevaBaraja[indiceBaraja].valor;
            contadorBanca.textContent = `Banca: ${cuentaBanca}`;
            sacarCarta(manoBanca);
        };
        if (cuentaBanca > 21) {
            avisoBanca.textContent = 'SE PASA';
            avisoJugador.textContent = 'JUGADOR GANA';
            btnCarta.removeEventListener('click', pedirCarta);
            btnPlantarse.removeEventListener('click', plantarse);
            setTimeout(() => {window.location.reload()}, 5000);
        } else if (cuentaBanca === cuentaJugador) {
            avisoBanca.textContent= 'EMPATE';
            avisoJugador.textContent = 'EMPATE';
            btnCarta.removeEventListener('click', pedirCarta);
            btnPlantarse.removeEventListener('click', plantarse);
            setTimeout(() => {window.location.reload()}, 5000);
        } else if (cuentaBanca > cuentaJugador) {
            avisoBanca.textContent = 'LA BANCA GANA';
            avisoJugador.textContent = 'JUGADOR PIERDE';
            btnCarta.removeEventListener('click', pedirCarta);
            btnPlantarse.removeEventListener('click', plantarse);
            setTimeout(() => {window.location.reload()}, 5000);
        } else {
            avisoJugador.textContent = 'JUGADOR GANA';
            btnCarta.removeEventListener('click', pedirCarta);
            btnPlantarse.removeEventListener('click', plantarse);
            setTimeout(() => {window.location.reload()}, 5000);     
        }
    };

//Añadimos eventos de clicar botón. Esperamos 2.5 segundos (lo que tardan en repartirse las cartas iniciales) para activar los botones. Con 'btnCarta' el jugador pide otra carta (si se pasa, pierde automáticamente y la ronda termina). Con 'btnPlantarse' se llama a la función 'plantarse' que vimos justo antes:

setTimeout(() => { btnCarta.addEventListener('click', pedirCarta); }, 2500);
setTimeout(() => { btnPlantarse.addEventListener('click', plantarse); }, 2500);

//Y ya, por último, llamamos a la función 'empezarPartida' y se inicia el programa:

empezarPartida();











