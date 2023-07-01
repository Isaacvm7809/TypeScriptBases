namespace Validations{

    export const validateText = (cadena:string): boolean => {
        return (cadena.length>3)? true: false;
    }

    const validateDate = (fecha: Date): boolean =>{
        return ( isNaN(fecha.valueOf()))? true: false;
    }


    console.log(Validations.validateText('Isaac'));
}