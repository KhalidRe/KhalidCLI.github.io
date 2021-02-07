<template>

  <div class="home">
    
    <Model txt-send="Send"></Model>
    <Test></Test>
    
    
  </div>
</template>

<script>
import Test from "@/components/Test.vue"
import Model from '@/components/Model.vue'





 
  
 
   


export default {
  name: 'Home',
  components: {
    Model,
    Test
    
    
    
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