import Vue from 'vue'
import Vuex from 'vuex'
import model from './modules/model'
import dailoglist from './modules/dialog'
import env from './modules/env'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        models: model,
        dialogs: dailoglist,
        envs: env
    }
})
