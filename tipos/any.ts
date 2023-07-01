( ()=> {
    let avenger: any = '';
    avenger = 'Doctor Greenthumb';

    let power;
    let exists;

    
    console.log( (avenger as string).charAt(14) );

    avenger = 665.666;
    console.log( <number>avenger.toFixed(2));



})()