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
    game: string,
    platform: string,
    yearPlayed: number,
    hoursPlayed?: number
}