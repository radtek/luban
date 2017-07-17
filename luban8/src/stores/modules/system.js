const state = {
    wallpaper: 'wood.jpg',
    id: '',
    name: '',
    tel: '',
    face: '',
    birth: '',
    login: false,
    theme: 'rgba(208, 150, 21, 0.8)',
    router: ''
}
const getters = {}
const actions = {}

const mutations = {
    wallpaper: (state, obj) => {
        state.wallpaper = obj
        window.localStorage.setItem('system', JSON.stringify(state))
    },
    theme: (state, obj) => {
        state.theme = obj
        window.localStorage.setItem('system', JSON.stringify(state))
    },
    router: (state, obj) => {
        state.router = obj
        window.localStorage.setItem('system', JSON.stringify(state))
    },
    user: (state, obj) => {
        state.name = obj.name
        state.id = obj._id
        state.tel = obj.tel
        state.birth = obj.birth
        window.localStorage.setItem('system', JSON.stringify(state))
    },
    system: (state, obj) => {
        state.router = obj.router
        state.wallpaper = obj.wallpaper
        state.theme = obj.theme
        state.name = obj.name
        state.id = obj.id
        state.tel = obj.tel
        state.birth = obj.birth
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}