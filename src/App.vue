<template>
  <div id="app">
    <div id="nav">
      <p style="color: green; position: absolute; margin-top:25px">
        You are {{ set }}
      </p>
      <router-link to="/">Home</router-link> |
      <router-link to="/Listrender">Listrender</router-link> |
      <router-link to="/pro">props</router-link>
    </div>

    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      set: navigator.onLine ? "Online" : "Offline",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
body {
  background-color: black;
  background-image: url("./assets/Emran.gif");
  background-repeat: no-repeat;
  background-position-x: 40vw;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #638b71;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background: (url("./assets/Emran.gif"), black);
}
</style>
