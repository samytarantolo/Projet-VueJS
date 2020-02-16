<template>
  <div id="app">
    
  <b-nav>
    <router-link to="/">Home</router-link>
    <router-link to="/Paris">Météo de Paris</router-link>
    <router-link to="/Londres">Météo de Londres</router-link>
  </b-nav>

  <router-view/>

  </div>
</template>

<script>

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  data() {
    return {
     
      }  
          },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:rgb(193, 227, 231);
  

}

body {
  background-color: rgb(179, 158, 114);
}

#titre {
  color: green;
  margin-left: 0%;
}
</style>