import Vue from 'vue'
import App from './App.vue'
import BuyDialogComponent  from '@/components/common/ByDialog'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as fb from 'firebase/app'

Vue.component('app-buy-dialog', BuyDialogComponent )
Vue.config.productionTip = false
const firebaseConfig = {
apiKey: "AIzaSyBLOZgmUL0OoXvPKNjwYL80xrH7FJ5uzis",
authDomain: "storeleptop.firebaseapp.com",
databaseURL: "https://storeleptop.firebaseio.com",
projectId: "storeleptop",
storageBucket: "storeleptop.appspot.com",
messagingSenderId: "135909056326",
appId: "1:135909056326:web:71c09f3884c5404517cf47",
measurementId: "G-4BZJXNM5P5"
}
fb.initializeApp(firebaseConfig)
fb.analytics();
let app
fb.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
      created(){

     fb.auth().onAuthStateChanged(user=>{
      if(user){
        this.$store.dispatch('autoLoginUser', user)
      }
     }),
     this.$store.dispatch('fetchProducts')

      }
    }).$mount('#app')


    }

})
