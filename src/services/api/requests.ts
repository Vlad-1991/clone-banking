import axios from "@/services/api/index";
import store from '@/store/index'

export async function create(payload: any): Promise<any> {
    const token = store.getters["auth/token"]
    const {data} = await axios.post(`/requests.json?auth=${token}`, payload)
    return data
}

export async function load(): Promise<any> {
    const token = store.getters["auth/token"]
    const {data} = await axios.get(`/requests.json?auth=${token}`)
    const requests: any[] = Object.keys(data).map(id => ({...data[id], id}))
    return requests
}

export async function loadById(id: string | string[]): Promise<any> {
    const token = store.getters["auth/token"]
    const {data} = await axios.get(`/requests/${id}.json?auth=${token}`)
    return data
}

export async function removeById(id: string | string[]): Promise<void> {
    const token = store.getters["auth/token"]
    await axios.delete(`/requests/${id}.json?auth=${token}`)
}

export async function updateRequest(request: any): Promise<void> {
        const token = store.getters["auth/token"]
        await axios.put(`/requests/${request.id}.json?auth=${token}`, request)
}