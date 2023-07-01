(()=>{
    abstract class Mutant{
        constructor(
            public name:string,
            public fullName:string){}

        public addMutant(character: Mutant) {
            return `${character.name} added`
        }
            
    }
    class Xmen extends Mutant{
    }
    class Villian extends Mutant{
    }


    const xmen: Mutant = new Xmen('Wolverine','Logan');
    const villian: Villian = new Villian('Magneto','Don Magne');
    // console.log(    xmen.addMutant(villian) );
    // console.log({xmen});
        
    

})()