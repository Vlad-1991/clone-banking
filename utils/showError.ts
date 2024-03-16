//import store from "vuex";
import store from "@/store/index"
import {error} from "./error";

export async function showError(e: any): Promise<void>{
    await store.dispatch('setMessage', {
        value: error(e.message),
        type: 'danger'
    }, {root: true})
}