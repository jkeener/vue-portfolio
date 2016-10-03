// main.js
var Vue = require('vue')
// require a *.vue component
var Router = require('vue-router')
var App = require('./components/App.vue')
// mount a root Vue instance
var $ = require('jquery');
var lightbox = require('lightbox2')
var Home = require('./components/Home.vue')
var Work = require('./components/Work.vue')
var Resume = require('./components/Resume.vue')
var Bio = require('./components/Bio.vue')
var Contact = require('./components/Contact.vue')

Vue.use(Router);
var router = new Router({
  history: true,
})
router.map({
  '/': {
    component: Home
  },
  '/home': {
    component: Home
  },
  '/work': {
    component: Work
  },
  '/resume': {
    component: Resume
  },
  '/bio': {
    component: Bio
  },
  '/contact': {
    component: Contact
  }
})

router.start(App, 'app')
