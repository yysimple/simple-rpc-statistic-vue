import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import Router from 'vue-router';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'


// 全局组件注册
import VCharts from 'v-charts'

// use
Vue.use(mavonEditor)
Vue.use(VCharts)
Vue.use(Router)
Vue.use(Antd)
Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
