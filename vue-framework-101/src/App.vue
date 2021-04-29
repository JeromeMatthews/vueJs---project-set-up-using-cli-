<template>
  <div id="app">
      <app-user></app-user>
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
