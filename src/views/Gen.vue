<template>
  <div>
    <h1>Home</h1>
  <div id="temp">
  </div>

  </div>
</template>

<script>
export default {
  name: 'Gen',
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
window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&appid=30993fcfddf5e5dc0d751ef71eb430e4%27%27')
.then(res => res.json())
.then(resJson => document.getElementById("temp").innerHTML = (resJson.main.temp));
  }
  }
  }
</script>

<style>
</style>