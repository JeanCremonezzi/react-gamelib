import api from './api.ts'

import { SignupInterface, SigninInterface, AddGameInterface } from './interfaces.ts';

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

export const addGame = async (data: AddGameInterface) => {
    return await api.post("/collections", data);
}

export const getCollection = async () => {
    return await api.get("/collections");
}

export const deleteGame = async (id: string) => {
    return await api.delete(`/collections/${id}`);
}