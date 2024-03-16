import axios from "@/services/api/index";
import {useStore} from 'vuex'

export async function login(payload: any): Promise<any> {
    const store = useStore()
        const url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
        const {data} = await axios.post(url, {...payload, returnSecureToken: true})
        return data
}