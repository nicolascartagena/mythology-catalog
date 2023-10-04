// // https://refactoring.guru/es/design-patterns/factory-method
// const createErrorFactory = function (name: string) {
//     return class CustomizedError extends Error {
//         constructor(message) {
//             super(message);
//             this.name = name;
//         }
//     }
// }

// export const ConnectionError = createErrorFactory('ConnectionError');
// export const ValidationError = createErrorFactory('ValidationError');


//Tambien se puede hacer con INSTANCEOF de la siguiente manera:

import { HttpException, HttpStatus } from "@nestjs/common";

export class ValidationError extends HttpException {
    constructor(message) {
        super(message, HttpStatus.BAD_REQUEST)
    }
}


/*
se tiene que verificar el e.name para saber que tipo de error es
si sucede algo, debe lanzarse un throw new ConnectionError('mensaje')
*/