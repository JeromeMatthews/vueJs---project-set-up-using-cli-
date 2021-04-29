<template>
  <div id="app">
    <router-view> </router-view>
    <!-- where all our views will be outputred.
    The router functionality comes here.-->


      <!-- <app-user></app-user> -->

  <!-- If we're creating links for differnt views in the app
  They are done with the router-link tag -->


    <router-link to="/">Home</router-link>
    <router-link to="/blog/">Blog</router-link>
    <router-link to="account">Account</router-link>


      <hr>
      <p>This content is outside of the child components (in the root app component), <br>
      so the styling applied in them won't be seen here.</p>
 </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
