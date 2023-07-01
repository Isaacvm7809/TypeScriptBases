(()=>{
    // class Avenger{
    //     private name!: string;
    //     public  team!:string;
    //     public  realName?:string;
    //     static  averageAge?:number = 35;
    //     constructor(name:string, team:string, realName?:string ){
    //         this.name = name,
    //         this.team= team,
    //         this.realName = realName
    //     }
    // }
    
    //Short way in typescript
     class Avenger{
        static  averageAge?:number = 35;
        constructor(private name:string,public team:string, public realName?:string ){
        }
        static getaverageAge(){
            return this.averageAge?.toFixed(2) ;
        }

        bio() {  
            return `${ this.name } belongs to ${this.team}.`    ;
        }
        
    }
    
    const antMan:Avenger = new Avenger('AntMan', 'Aero')
    // console.log({antMan} );
    // console.log(antMan.bio());
    // console.log(Avenger.getaverageAge());


})()