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

export interface PlatformInterface {
    id: string,
    name: string,
    logo: {
        logo_url: string
    }
}

export interface GameInterface {
    cover?: string,
    id?: string,
    initial_release?: string,
    name?: string,
    platforms?: PlatformInterface[]
}