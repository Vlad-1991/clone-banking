import axios from "axios";
import {error} from '../../../utils/error'
const TOKEN_KEY = 'jwt-token'
type state = {token: (string | null)}

export default {
    namespaced: true,
    state(): state{
        return {
            token: localStorage.getItem(TOKEN_KEY)
        }
    },
    mutations: {
        setToken(state: state, token: string): void{
            state.token = token
            localStorage.setItem(TOKEN_KEY, token)
        },
        logout(state: state): void{
            state.token = null
            localStorage.removeItem(TOKEN_KEY)
        }
    },
    actions: {
      async login({ commit, dispatch }: any, payload: any){
          try{
              const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
              const {data} = await axios.post(url, {...payload, returnSecureToken: true})
              commit('setToken', data.idToken)
              commit('clearMessage', null, {root: true})
          }catch (e: any){
              dispatch('setMessage', {
                  value: error(e.response.data.error.message),
                  type: 'danger'
          }, {root: true})
              throw new Error()
          }
      }
    },
    getters: {
        token(state: state): string | null {
            return state.token
        },
        isAuthentificated(_: any, getters: any){
            return !!getters.token
        }
    }
}