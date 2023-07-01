(()=>{

    interface Client {
        name: string,
        age:  number,
        address? :Address,
        getFullAddress?():string
    }
    interface  Address  {
        id: number,
        zip:number,
        desc: string    
    }

    const client:Client = {
        name: 'Isaac',
        age: 44
    };
    const client2:Client = {
        name: 'Sofia',
        age: 19,
        address: {
            id: 1,
            zip: 29000,
            desc: 'Tuxtla'    

        }
    };

    // console.log({client2});

})()