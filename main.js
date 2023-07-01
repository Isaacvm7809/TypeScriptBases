"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (cadena) => {
        return (cadena.length > 3) ? true : false;
    };
    const validateDate = (fecha) => {
        return (isNaN(fecha.valueOf())) ? true : false;
    };
    console.log(Validations.validateText('Isaac'));
})(Validations || (Validations = {}));
//# sourceMappingURL=main.js.map