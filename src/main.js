import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import router from './router'
import Router from 'vue-router';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import store from './store'


// 全局组件注册
import VCharts from 'v-charts'
import components from './utils/components'

// use
Vue.use(mavonEditor)
Vue.use(components)
Vue.use(VCharts)
Vue.use(Router)
Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
