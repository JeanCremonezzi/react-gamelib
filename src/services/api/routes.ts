import api from './api.ts'

import { SignupInterface } from './interfaces.ts';

export const signup = async (data: SignupInterface) => {
    return await api.post("/user/signup", data);
}