// Funciones Básicas
const sumar =  (a:number,b:number):number =>  a + b ; 

const contar = ( heroes:string[]) => heroes.length;

const superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);


//Parametros por defecto
const llamarBatman = ( llamar:boolean=true) => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}
llamarBatman();

// Rest?
const unirheroes = ( ...personas:string[] ):string =>  personas.join(", ");

// Tipo funcion
const noHaceNada = (numero:number, texto:string, booleano:boolean, arreglo:[] )=> {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco:(n:number, t:string, b:boolean, a:[]) => void ;
noHaceNadaTampoco = noHaceNada
