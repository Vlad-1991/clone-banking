import axios from "@/services/api/index";
import {GenericObject} from "vee-validate";


export async function login(payload: GenericObject): Promise<any> {

    const url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
    const {data} = await axios.post(url, {...payload, returnSecureToken: true})
    return data
}