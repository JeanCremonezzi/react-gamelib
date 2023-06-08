import api from './api.ts'

import { SignupInterface, SigninInterface } from './interfaces.ts';

export const signup = async (data: SignupInterface) => {
    return await api.post("/user/signup", data);
}

export const signin = async (data: SigninInterface) => {
    return await api.post("/user/signin", data);
}