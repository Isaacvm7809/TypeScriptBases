(()=>{
    class Avenger{
        constructor(
            public name:string,
            public fullName:string){
                console.log('Avengers Constructor!!!')
        }
        protected getFullName() {  
            return `${ this.name } is ${this.fullName}.`    ;
        }
        private getFullNameNotAccesible() {  
            return `${ this.name } is ${this.fullName}.`    ;
        }

    }
    class Xmen extends Avenger{
        constructor(name:string, fullName:string, public isMutant:boolean){
            super(name, fullName)
            console.log('Xmen constructor');
        }

        getFullNameinXmen(){
            return super.getFullName();
        }
        get fullNamegettersetter() {
            return `${this.name}-${this.fullName}`;
        } 
        set fullNamegettersetter(name:string) {
            if (name.length <3){
                throw Error('Nombre debe ser mayor a 3 letras');
            } 
            else{
                this.name = `${name} desde setter` ;
            }
             
        }
        
    }

    // const xmen: Xmen = new Xmen('Wolverine', 'Logan', true);
    // const xmen2: Avenger = new Avenger('Wolverine2', 'Logan2');
    // console.log({xmen});
    // // console.log(xmen.getFullNameinXmen() );
    // xmen.fullNamegettersetter = 'Isaac';
    // console.log(xmen.fullNamegettersetter );



})()