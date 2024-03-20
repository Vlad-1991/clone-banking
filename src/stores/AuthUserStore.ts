import {defineStore} from "pinia";
const TOKEN_KEY = 'jwt-token'
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
        isAuthentificated(getters: any): boolean{
            return !!getters.token
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