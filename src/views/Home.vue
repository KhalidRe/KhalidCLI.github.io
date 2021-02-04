<template v-for="city in cities">

  <div class="home">
    <Model></Model>
  </div>
</template>

<script>
import Model from '@/components/Model.vue'




 
  
 
   


export default {
  name: 'Home',
  components: {
    Model
   
    
    
    
  },
}
 

</script>
<style>
body{
  background-color: black;
}
#ok{
  margin-top: 30vh;
  margin-left: 50vw;
  position: relative;
}
</style>