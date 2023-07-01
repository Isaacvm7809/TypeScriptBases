(()=>{
    type Avenger = {
        name: string,
        power:string;
    }
    const ironman: Avenger = {
        name: 'Ironman', 
        power: 'Armour shield'
    }
    const thor: Avenger = {
        name: 'Thor', 
        power: 'Miljor'
    }
    const wonderWoman: Avenger = {
        name: 'WonderWoman', 
        power: 'Shield and whip'
    }

    const Avengers:Avenger[] = [wonderWoman, ironman, thor]
    for (const avenger of Avengers) {
        console.log(avenger);
    }
})()