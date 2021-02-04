<template>
    <div class="oke">
        <form @submit.prevent="onSubmit">
        <input v-model="userName" placeholder="Skriv något" />
        <input type="submit" value="Spela" />
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
      this.message = "Hej " + this.userName + "!";
    },
  },
  

}
</script>