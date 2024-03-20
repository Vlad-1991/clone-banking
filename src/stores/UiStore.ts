import {defineStore} from "pinia";
type state = {message: null | string, sidebar: boolean}

export const useUiStore = defineStore("UiStore", {
        state: (): state => {
            return {
                message: null,
                sidebar: false
            };
        },
        actions: {
            async setMessage(message: any): Promise<void>{
                this.message = message
                setTimeout((): void => {
                    this.clearMessage()
                }, 5000)
            },
            clearMessage(): void{
                this.message = null
            },
            openSideBar(): void{
                this.sidebar = true
            },
            closeSideBar(): void{
                this.sidebar = false
            }
        }
    }
);