<template>
<div class="generate" >
    <button class="btn btn-primary" @click="fetchCities" style="padding:10px">RenderCities</button>
    
    <dl v-if="fetchCities">
    
      <dt >{{msg}}</dt>
  
      <dt v-for="cities in city " :key="cities.id" >{{cities.name}}</dt>
      
    
  </dl>
    </div>
</template>
<script>
export default {
  data () {
    return {
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
