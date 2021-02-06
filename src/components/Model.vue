<template>
    <div class="oke">
        <form @submit.prevent="onSubmit">
        <input v-model="userName" placeholder="Type anything" />
        <input type="submit" value="Send" />
      </form>
      <div>{{ message }}</div>

    </div>
</template>
<script>
export default {
    
  data() {
      return{message: "",
    userName: "",}
    
  },
  methods: {
    onSubmit() {
      console.log(this.userName);
      this.message = " " + this.userName + " Sent into the singularity";
    },
  },
  

}
</script>