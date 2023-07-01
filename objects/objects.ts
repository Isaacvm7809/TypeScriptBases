(() =>{
    
   
    let flash:{name:string, age:number, poderes:string[], getName?: ()=>string} = {
        name : 'Barry Allen',
        age : 44, 
        poderes: ['Super velocidad','Viajar en el tiempo'],
        getName():string {
            return this.name;
        }
    }
    console.log({flash});

    

})()