import {defineStore} from "pinia";
import {requestType} from "../../utils/requestType";
type state = { requests: requestType[] }

export const useRequestsStore = defineStore("RequestsStore", {
    state: (): state => {
        return {
            requests: []
        }
    },
    getters: {
        getRequests(): requestType[] {
            return this.requests
        }
    },
    actions: {
        setRequests(requests: requestType[]): void {
            this.requests = requests
        },
        addRequest(request: requestType): void {
            this.requests.push(request)
        }
    }
})