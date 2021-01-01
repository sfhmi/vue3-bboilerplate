<template>
  <div class="home container">
    <div class="row">
      <div class="col-lg-6">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <div class="col-lg-6">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
