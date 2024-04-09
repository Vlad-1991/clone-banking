import {defineStore} from "pinia";
import {RequestType} from "../../utils/requestType";

type state = { requests: RequestType[] }



export const useRequestsStore = defineStore("RequestsStore", {
    state: (): state => {
        return {
            requests: []
        }
    },
    getters: {
        getRequests(): RequestType[] {
            return this.requests
        }
    },
    actions: {
        setRequests(requests: RequestType[]): void {
            this.requests = requests
        },
        addRequest(request: RequestType): void {
            this.requests.push(request)
        }
    }
})