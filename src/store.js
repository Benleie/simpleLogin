import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    userName: ''
}

const mutations = {
    getUserName(state, userName){
        state.userName = userName;
    }
}

const actions = {
    changeUserName: ({ commit }, userName) => commit('getUserName', userName)
}
export default new Vuex.Store({
    state,
    actions,
    mutations
})