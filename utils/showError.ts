import {useUiStore} from "@/stores/UiStore";
import {error} from "./error";


export async function showError(e: any): Promise<void>{
    const UiStore = useUiStore()
    await UiStore.setMessage({
        value: error(e.message),
        type: 'danger'
    })
}