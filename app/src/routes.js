import Home from './views/Home.vue';
import Project from './views/Project.vue';
import AboutMe from './views/AboutMe.vue'
import Unavailable from './views/Unavailable.vue'

export default [
   { name: 'home', path: '/', component: Home },
   { name: 'project', path: '/:projectSlug',  component: Project},
   { name: 'about', path: '/about-me', component: AboutMe},
   { name: 'unavailable', path: '/unavailable', component: Unavailable},
]