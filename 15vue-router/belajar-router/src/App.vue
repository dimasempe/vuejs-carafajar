<template>
  <!-- Kayak a href -->
  <!-- <RouterLink to="/">Home</RouterLink> 
  <RouterLink to="/about">About</RouterLink> -->
  <div class="menu">
    <Navbar/>
  </div>

  <div class="main">
    <RouterView/> <!-- jangan lupa ini buat nampilin -->
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'

  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
  body{
    margin:0
  }
</style>

<style scoped>
  .menu{
    background-color: #eee;
    line-height: 2;
    padding: 10px;
  }

  .main{
    padding: 10px;
  }
</style>