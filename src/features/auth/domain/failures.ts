import Failure from "../../../core/failure";

class AuthFailure extends Failure{
    constructor(message: string) {
        super(); // Llama al constructor de la clase base
        this.name = "AuthFailure"; // Establece el nombre del error
        this.message = message; // Establece el mensaje del error
    }

    toString() {
        return `${this.name}: ${this.message}`;
    }
}

export default AuthFailure