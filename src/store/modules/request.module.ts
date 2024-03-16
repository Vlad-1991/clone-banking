type state = {requests: any[]}

export default {
    namespaced: true,
    state(): state {
        return {
            requests: []
        }
    },
    mutations: {
        setRequests(state: state, requests: any[]): void {
            state.requests = requests
        },
        addRequest(state: state, request: any): void {
            state.requests.push(request)
        }
    },
    getters: {
        requests(state: state): any[] {
            return state.requests
        }
    }
}