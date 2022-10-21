import { createStore } from 'vuex'
// import Vuex from 'vuex'

// Vue.use(Vuex);

export default createStore({
    state: {
        user: {},
        admin: {},
        token: null,
    },
    getters: {},
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setToken(state, token) {
            state.token = token
        },
        setAdmin(state, admin) {
            state.admin = admin
        },
    },
    actions: {},
    modules: {}
})