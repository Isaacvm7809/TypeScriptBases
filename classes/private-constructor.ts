(()=>{
    class Apocalipsis{
        private static instance: Apocalipsis ;
        private constructor(public name:string){}

        static getInstance(): Apocalipsis{
            if (!this.instance ){
                this.instance = new Apocalipsis('The only one Apocalipsis');
            }
                return this.instance;
        }
    }

    let apocalipsis1:Apocalipsis = Apocalipsis.getInstance();
    let apocalipsis2:Apocalipsis = Apocalipsis.getInstance();
    // console.log({apocalipsis1});
    // console.log({apocalipsis2});

})()

