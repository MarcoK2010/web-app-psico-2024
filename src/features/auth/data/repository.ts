import { axiosInstance } from "../../../core/api";
import LocalNames from "../../../core/localnames";
import Responses from "../../../core/responses";
import Token from "../domain/entities/token";
import AuthFailure from "../domain/failures";
import LoginParams from "../domain/params/loginParams";
import RefreshParams from "../domain/params/refreshParams";
import RegisterParams from "../domain/params/registerParams";
import VerifyParams from "../domain/params/verifyParams";
import AuthRepository from "../domain/repository";
import TokenModel from "./models/tokenModel";

class AuthRepositoryImpl implements AuthRepository{
    get(): AuthFailure | Token {
        try{
            return {
                access: localStorage.getItem(LocalNames.access)!,
                refresh: localStorage.getItem(LocalNames.refresh)!,
            }
        }catch(_){
            return new AuthFailure("Local Error")
        }
    }

    save(params: Token): undefined {
        localStorage.setItem(LocalNames.access,params.access)
        localStorage.setItem(LocalNames.refresh,params.refresh)    
    }

    signout(): undefined {
        localStorage.clear()
    }

    async verify(params: VerifyParams): Promise<AuthFailure | Token> {
        try{
            let dataVerify = JSON.stringify(params)
            await axiosInstance.post('/auth/token/verify/',dataVerify)
            let dataRefresh : RefreshParams = {
                refresh:params.token
            }
            let response =  await axiosInstance.post('/auth/token/refresh/', JSON.stringify(dataRefresh))
            const { access } = response.data;
            return new TokenModel(access, params.token); 
        }catch(_){
            return new AuthFailure("Verify Error");
        }    
    }

    async login(params: LoginParams): Promise<AuthFailure | Token> {
        try{
            let data = JSON.stringify(params)
            let response = await axiosInstance.post('/auth/login/',data)
            const { access, refresh } = response.data;
            return new TokenModel(access, refresh); 

        }catch(_){
            return new AuthFailure("Login Error");
        }
    }

    async register(params: RegisterParams) {
        try{
            let data = JSON.stringify(params)
            await axiosInstance.post('/auth/registration/',data)
            return Responses.success;
        }catch(_){
            return new AuthFailure("Register Error");
        }
    }

}

export default AuthRepositoryImpl;