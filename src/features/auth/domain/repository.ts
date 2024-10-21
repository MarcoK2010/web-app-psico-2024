import Responses from "../../../core/responses";
import Token from "./entities/token";
import AuthFailure from "./failures";
import LoginParams from "./params/loginParams";
import RegisterParams from "./params/registerParams";
import VerifyParams from "./params/verifyParams";

interface AuthRepository {
    signout(): undefined;
    login(params : LoginParams): Promise<AuthFailure | Token>;
    register(params : RegisterParams): Promise<AuthFailure | Responses>;
    verify(params :VerifyParams) : Promise<AuthFailure| Token>;
    save(params: Token): undefined;
    get():AuthFailure | Token;
}

export default AuthRepository