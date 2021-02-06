<template>
  <div class="contacts">
    <Propped></Propped>
    <Test></Test>
    
    
  </div>
</template>
<script>
import Propped from "@/components/Propped.vue"
import Test from "@/components/Test.vue"
export default {
  
  name: "pro",
  components:{
    Propped,
    Test
    
  }
}

</script>
<style>
body{
  background-color: black;
}
</style>