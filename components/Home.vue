<template>
  <div>
      <img v-bind:src="homeImage" >
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeImage: 'assets/images/9.jpg' // put the homepage image here
    }
  }
}
</script>

<style lang="sass" scoped>
img {
  width:100%;
}
</style>
