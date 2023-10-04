// https://refactoring.guru/es/design-patterns/factory-method
const createErrorFactory = function (name: string) {
    return class CustomizedError extends Error {
        constructor(message) {
            super(message);
            this.name = name;
        }
    }
}

export const ConnectionError = createErrorFactory('ConnectionError');
export const ValidationError = createErrorFactory('ValidationError');

/*
Tambien se puede hacer con INSTANCEOF de la siguiente manera:
class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ValidationError'
    }

    getErrorCode() {
        return 123
    }
}
*/

/*
se tiene que verificar el e.name para saber que tipo de error es
si sucede algo, debe lanzarse un throw new ConnectionError('mensaje')
*/