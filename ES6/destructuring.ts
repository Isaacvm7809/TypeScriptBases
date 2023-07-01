(()=>{
    type Avengers  = {
        nick: string,
        ironman:string,
        vision :string,
        activo: boolean,
        poder: number,

    }
    const avengers :Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision : 'Paul Bettany',
        activo: true,
        poder: 1500.23
    }
    const { vision , poder  } = avengers
    // console.log(vision.toLocaleUpperCase(), poder.toFixed(2));
    const printAvenger = ({vision, ...resto}:Avengers)=>{
        console.log(vision.toLowerCase(), resto )
    }
    // printAvenger(avengers);

    const avengersArr = ['Ironman', 'Spiderman', 'WonderWoman'];
    const [,spider,...resto] = avengersArr;
    // console.log(spider, resto  );


}) ()