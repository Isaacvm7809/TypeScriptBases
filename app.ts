// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Car {
  encender : boolean
  velocidadMaxima :number;
  acelear():void;
}

const conducirBatimovil = ( auto:Car ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil:Car = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Villian  {
  reir?  : boolean,
  comer? : boolean,
  llorar?: boolean,
}

const guason: Villian = {
  reir: true,
  comer:true,
  llorar:false
}

interface Reir{
  (guason:Villian) : void
}

const reir:Reir = (guason:Villian): void =>{
    if( guason.reir ){
      console.log("JAJAJAJA");
    }
}


// Cree una interfaz para la siguiente funcion
interface Ciudad{
  (cuidadanos: string[]): number  
}

const ciudadGotica : Ciudad = (ciudadanos:string[]) : number => {
    return ciudadanos.length 
  }



// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface PersonaModel {
  nombre? : string
  edad? : number
  sexo? : boolean
  estadoCivil? : boolean
  imprimirBio?(): void // en consola una breve descripcion. : number

}
class Persona implements PersonaModel   {}