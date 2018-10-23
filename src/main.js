import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueProgressBar from 'vue-progressbar'

Vue.config.productionTip = false

const PbOptions = {
  color: '#0E1017',
  failedColor: 'red',
  thickness: '2px',
  transition: {
    speed: '0.4s',
    opacity: '0.6s',
    termination: 300
  },
  location: 'top'
}

Vue.use(VueProgressBar, PbOptions)

router.beforeEach((to, from, next) => {
  console.log('route change!')
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
