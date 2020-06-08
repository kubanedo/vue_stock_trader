<template>
  <div id="app" class="container">
    <Header/>
    <div class="row">
      <div class="col mt-4">
            <router-view/>
      </div> 
    </div> 
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  created() {
    this.$store.dispatch('initStocks'); 
  }
}
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
body {
  padding: 30px 0;
}
</style>