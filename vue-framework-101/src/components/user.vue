<template>
  <div id="user">
    <h3>The user</h3>
    <p>My username {{ username }}</p>
    <app-info></app-info>
  </div><!-- wrappiong div that's the root, only one allowed. -->

</template>


<script>

import Info from './Info.vue'


export default {
    data() {
        return {
          username: 'Jerome'
      }
    },

    components: {
      'app-info' : Info
    }
}
</script>

<style scoped>

p {
  font-style: sans-serif;
  font-size: 2em;
  }

</style>
