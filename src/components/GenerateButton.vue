<template>
<div class="generate" >
    <button class="btn btn-primary" @click="fetchCities" v-on:click="show = !show" style="padding:10px">RenderCities</button>
    <transition name="fade">
    <dl v-if="show">
    
      <dt >{{msg}}</dt>
  
      <dt v-for="cities in city " :key="cities.id" >{{cities.name}}</dt>
      </dl>
    </transition>
    </div>
</template>
<script>
export default {
  data () {
    return {
      show: true,
      city: null,
      cities:"",
    name: "",
    population: "",
    msg: ""
    }
  },
  created () {
   
    
  },
  
  methods: {
    fetchCities() {
      fetch("https://avancera.app/cities/")
        .then((response) => response.json())
        .then((result) => {
          this.city = result;
          console.log(this.city);
          
          this.msg = "look at console"
        });
    },
  },
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>