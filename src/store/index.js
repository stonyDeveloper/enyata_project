import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: (state) => ({ user: state.user, admin: state.admin }),

});

// reducer: (state) => ({ user: state.user });
// import Vuex from 'vuex'

// Vue.use(Vuex);

export default createStore({
    state: {
        user: {},
        admin: {},
        application_entries: {},
        token: null,
    },
    getters: {},
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        setAdmin(state, admin) {
            state.admin = admin;
        },

    },
    actions: {},
    modules: {},
    plugins: [vuexLocal.plugin],
});