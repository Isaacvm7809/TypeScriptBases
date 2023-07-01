(()=>{

    interface Xmen {
        name : string,
        realName : string,
        getMethod(id:number):string
    }
    interface Human{
        age : number
    }

    class Mutant implements Xmen, Human{
        public name!: string
        public realName!: string
        public age!: number
        getMethod(id: number): string {
            throw new Error("Method not implemented.")
        }
        
    }

})()