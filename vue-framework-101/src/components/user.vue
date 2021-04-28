<template>
  <div id="user">
    <h3>The user</h3>
    <p>My username {{ username }}</p>
  </div><!-- wrappiong div that's the root, only one allowed. -->

</template>


<script>

export default {
    data() {
        return {
          username: 'Jerome'
      }
    }
}
</script>

<style>

p{
  font-style: cursive;
}

</style>
