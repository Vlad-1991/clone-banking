import { createStore, createLogger } from 'vuex'
import auth from "./modules/auth.module";
import request from "./modules/request.module";

const plugins: any [] = []

if(process.env.NODE_ENV === 'development'){
  plugins.push(createLogger())
}

type state = {message: null | string, sidebar: boolean}

// @ts-ignore
export default createStore({
  plugins,
  state(): state{
    return {
      message: null,
      sidebar: false
    }
  },
  mutations: {
    setMessage(state: state, message: string){
      state.message = message
    },
    clearMessage(state: state): void{
      state.message = null
    },
    openSideBar(state: state): void{
      state.sidebar = true
    },
    closeSideBar(state: state): void{
      state.sidebar = false
    }
  },
  actions: {
    setMessage({commit}, message: string): void{
      commit('setMessage', message)
      setTimeout((): void => {
        commit('clearMessage')
      }, 5000)
    }
  },
  modules: {
    auth, request
  }
})
