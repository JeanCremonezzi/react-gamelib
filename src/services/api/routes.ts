import api from './api.ts'

import { SignupInterface, SigninInterface, GamesInterface } from './interfaces.ts';

export const signup = async (data: SignupInterface) => {
    return await api.post("/user/signup", data);
}

export const signin = async (data: SigninInterface) => {
    return await api.post("/user/signin", data);
}

export const gamesByName = async (name: string) => {
    return await api.get("/games", { params: { name } });
}

export const gameById = async (id: string) => {
    return await api.get(`/games/${id}`);
}