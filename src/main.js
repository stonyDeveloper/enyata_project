import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NavBar from './components/NavBar'
import ButtonComponent from './components/ButtonComponent'
import EnyataLogo from './components/EnyataLogo'
// import axios from 'axios'

createApp(App).component("EnyataLogo", EnyataLogo).component("NavBar", NavBar).component("ButtonComponent", ButtonComponent).use(store).use(router).mount('#app')