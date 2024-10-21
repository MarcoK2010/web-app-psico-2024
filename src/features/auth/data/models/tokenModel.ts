import Token from "../../domain/entities/token";

class TokenModel implements Token {
    access: string;
    refresh: string;

    constructor(access: string, refresh: string) {
        this.access = access;
        this.refresh = refresh;
    }
}

export default TokenModel;