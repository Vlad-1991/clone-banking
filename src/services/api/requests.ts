import axios from "@/services/api/index";
import {useAuthStore} from "@/stores/AuthUserStore";


export async function create(payload: any): Promise<any> {
    const AuthStore = useAuthStore()
    const token = AuthStore.getToken
    const {data} = await axios.post(`/requests.json?auth=${token}`, payload)
    return data
}

export async function load(): Promise<any> {
    const AuthStore = useAuthStore()
    const token = AuthStore.getToken
    const {data} = await axios.get(`/requests.json?auth=${token}`)
    const requests: any[] = Object.keys(data).map(id => ({...data[id], id}))
    return requests
}

export async function loadById(id: string | string[]): Promise<any> {
    const AuthStore = useAuthStore()
    const token = AuthStore.getToken
    const {data} = await axios.get(`/requests/${id}.json?auth=${token}`)
    return data
}

export async function removeById(id: string | string[]): Promise<void> {
    const AuthStore = useAuthStore()
    const token = AuthStore.getToken
    await axios.delete(`/requests/${id}.json?auth=${token}`)
}

export async function updateRequest(request: any): Promise<void> {
    const AuthStore = useAuthStore()
    const token = AuthStore.getToken
    await axios.put(`/requests/${request.id}.json?auth=${token}`, request)
}