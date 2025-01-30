let numeroSecreto;
let intentos = 1;
let listaNumerosSorteados = [];
const inputNumero =  document.querySelector('input');
const botonReiniciar = document.querySelector('#reiniciar');
let numeroMaximo =  10;


const asignarTextoElemento = (elemento, texto) => {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

const generaNumeroAleatorio =  (maximoRango) => {
    let numeroGenerado = Math.floor(Math.random() * maximoRango + 1);
    console.log(listaNumerosSorteados);
    //si el numero ya existia en la lista 
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
        
            return generaNumeroAleatorio(numeroMaximo);
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            
            return numeroGenerado;
        }
    }       
}

const limpiarInput = () => {
    inputNumero.value = "";
}

const inicializarJuego =  () => {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p','Indica un número del 1 al 10');
    numeroSecreto = generaNumeroAleatorio(numeroMaximo);
    botonReiniciar.setAttribute('disabled', true);
    intentos = 1;
}
 
const verificarIntento = () => {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Adivinaste el número en ${intentos} ${intentos > 1 ? 'intentos' : 'intento'} `);
        botonReiniciar.removeAttribute('disabled');

    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','Número secreto es menor');
            
        }else{
            asignarTextoElemento('p','Número secreto es mayor');
            
        }
        limpiarInput();
        intentos++;
    }
}
/**
 * 
 */
const reiniciarJuego = () => {
    limpiarInput();
      
    inicializarJuego();


    
}

inicializarJuego();


