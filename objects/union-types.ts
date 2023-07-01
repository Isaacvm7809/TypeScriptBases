(()=>{
    type Heroe = {
        name : string,
        age : number, 
        poderes: string[],
        getName?:  ()=> string
    }

    let myCustomVar: (Heroe | string) = { name :'Isaac', age: 20, poderes:['Programar']  } 
    


})()