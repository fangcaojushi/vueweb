// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global_ from './global/Global'
import ElementUI from 'element-ui'
import  'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import VueI18n from 'vue-i18n'
import VueTouch from 'vue-touch'

Vue.use(ElementUI, { locale })
Vue.use(VueI18n)
Vue.config.productionTip = false
Vue.prototype.GLOBAL = global_
Vue.use(VueTouch, {name: 'v-touch'})

const i18n=new VueI18n({
    locale:localStorage.getItem('languageSet')||'cn',   //从localStorage里获取用户中英文选择，没有则默认中文
    messages:{
        'cn':require('@/language/cn'),
        'en':require('@/language/en')
    }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
