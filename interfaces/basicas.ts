(() =>{
    
    interface Heroe  {
        name : string,
        age : number, 
        poderes: string[],
        getName?:  ()=> string
    }

    let flash:Heroe = {
        name: 'Barry Allen',
        age: 44,
        poderes: ['Super velocidad', 'Viajar en el tiempo'],
        // getName: function (): string {
        //     return this.name;
        // }
    }

    let superMan:Heroe = {
        name : 'Clark Kent',
        age : 60, 
        poderes: ['Super velocidad','Volar'],
        getName: function (): string {
            return this.name;
        }
    }
    // console.log({flash});

    

})()