import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/tailwind.css';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Projects from './pages/Projects.vue';
import Skills from './pages/Skills.vue';
import Contact from './pages/Contact.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/skills', component: Skills },
  { path: '/contact', component: Contact },
];

const router = new VueRouter({
  routes,
});

new Vue({
  created() {
    AOS.init();
  },
  render: h => h(App),
  router,
}).$mount('#app');