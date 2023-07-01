"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 44,
        poderes: ['Super velocidad', 'Viajar en el tiempo'],
    };
    let superMan = {
        name: 'Clark Kent',
        age: 60,
        poderes: ['Super velocidad', 'Volar'],
        getName: function () {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        getMethod(id) {
            throw new Error("Method not implemented.");
        }
    }
})();
(() => {
    const client = {
        name: 'Isaac',
        age: 44
    };
    const client2 = {
        name: 'Sofia',
        age: 19,
        address: {
            id: 1,
            zip: 29000,
            desc: 'Tuxtla'
        }
    };
})();
//# sourceMappingURL=main.js.map