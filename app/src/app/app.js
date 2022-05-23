import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import Vue3Lottie from 'vue3-lottie'

import App from './App.vue';
import store from '../store.js'
import routes from '../routes.js';

const app_store = createStore(store);
const app_router = createRouter({
	routes: routes,
	history: createWebHistory()
})

createApp(App)
	.use(app_store)
	.use(app_router)
	.use(Vue3Lottie)
	.mount('#app');