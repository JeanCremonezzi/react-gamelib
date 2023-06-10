export interface SignupInterface {
    username: string,
    email: string,
    password: string
}

export interface SigninInterface {
    email: string,
    password: string
}

export interface GamesInterface {
    cover: string,
    id: string,
    initial_release: string,
    name: string
}

export interface AddGameInterface {
    gameId: string,
    gameName: string,
    platform: string,
    yearPlayed: number,
    hoursPlayed?: number
}

export interface EditGameInterface {
    gameId: string,
    platform: string,
    yearPlayed: string,
    hoursPlayed: string
}