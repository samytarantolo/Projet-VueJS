<template>
  <div>
    <h1 id="titre">Météo de Londres</h1>
    <h2 id="temp"></h2>

  </div>
</template>

<script>
export default {
  name: 'Londres',
  components: {
  },
  props: {
    msg: String
  },
  data(){
    return{

      info: null
    };
  },
  mounted(){
    window.fetch('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=f7db27cbf760435e207262b27f1335a6')
    .then(res => res.json())

    .then(resJson => document.getElementById("temp"). innerHTML =(resJson.main.temp));
  }
  }
</script>

<style>


</style>