<template>
  <div>
    <h1>Méteo de Paris</h1>
  <div id="temp">
  </div>

  </div>
</template>

<script>
export default {
  name: 'Paris',
  components: {
  },
  props: {
    msg: String
  },
  data(){
    return{

    };
  },
  mounted(){
  console.log('cc')
{
window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&appid=f7db27cbf760435e207262b27f1335a6')
.then(res => res.json())
.then(resJson => document.getElementById("temp").innerHTML = (resJson.main.temp));
  }
  }
  }
</script>

<style>
</style>