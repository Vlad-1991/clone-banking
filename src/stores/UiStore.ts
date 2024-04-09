import {defineStore} from "pinia";
type state = {message: MessageType | null, sidebar: boolean}
interface MessageType {
    value: any
    type: string
}

export const useUiStore = defineStore("UiStore", {
        state: (): state => {
            return {
                message: null,
                sidebar: false
            };
        },
        actions: {
            async setMessage(message: MessageType): Promise<void>{
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