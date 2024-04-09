import axios from "@/services/api/index";
import {useAuthStore} from "@/stores/AuthUserStore";
import {RequestType} from "../../../utils/requestType";


export async function create(request: RequestType): Promise<Object> {
    const AuthStore = useAuthStore()
    const token: string | null = AuthStore.getToken
    const {data} = await axios.post(`/requests.json?auth=${token}`, request)
    return data
}

export async function load(): Promise<RequestType[]> {
    const AuthStore = useAuthStore()
    const token: string | null = AuthStore.getToken
    const {data} = await axios.get(`/requests.json?auth=${token}`)
    const requests: RequestType[] = Object.keys(data).map((id: string) => ({...data[id], id}))
    return requests
}

export async function loadById(id: string): Promise<RequestType> {
    const AuthStore = useAuthStore()
    const token: string | null = AuthStore.getToken
    const {data} = await axios.get(`/requests/${id}.json?auth=${token}`)
    return data
}

export async function removeById(id: string): Promise<void> {
    const AuthStore = useAuthStore()
    const token: string | null = AuthStore.getToken
    await axios.delete(`/requests/${id}.json?auth=${token}`)
}

export async function updateRequest(request: RequestType): Promise<void> {
    console.log(request)
    const AuthStore = useAuthStore()
    const token: string | null = AuthStore.getToken
    await axios.put(`/requests/${request.id}.json?auth=${token}`, request)
}