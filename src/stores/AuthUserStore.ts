import {defineStore} from "pinia";
const TOKEN_KEY: string = 'jwt-token'
type state = {token: (string | null)}

export const useAuthStore = defineStore("AuthStore", {
    state: (): state => {
        return {
            token: localStorage.getItem(TOKEN_KEY)
        }
    },
    getters: {
        getToken(): string | null {
            return this.token
        },
        /* function returns true if token exists and false if token is empty */
        isAuthentificated(): boolean{
            return !!this.getToken
        }
    },
    actions: {
        setToken(token: string): void{
            this.token = token
            localStorage.setItem(TOKEN_KEY, token)
        },
        logout(): void{
            this.token = null
            localStorage.removeItem(TOKEN_KEY)
        }
    }
})