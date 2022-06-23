import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import {user} from './modules/user'
import {blog} from './modules/blog'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})


const store = new Vuex.Store({
    /*modules: {
        user,
        blog
    },*/
    state: {
        user: {
            id: null
        },
        userInfo: {},
        blogInfo: {},
        blogTag: {}
    },

    mutations: {
        UPDATE_USER(state, user) {
            state.user = user
        },
        UPDATE_USER_INFO(state, userInfo) {
            state.userInfo = userInfo
        },
        UPDATE_BLOG(state, blogInfo) {
            state.blogInfo = blogInfo
        },
        UPDATE_BLOG_TAG(state, blogTag) {
            state.blogTag = blogTag
        }
    },
    plugins: [vuexLocal.plugin]
})

export default store