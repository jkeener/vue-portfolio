<template>
  <div>
    <div class="grid--center">
      <img class="1/2 grid__cell" :src=homeImage />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeImage: 'http://lorempixel.com/g/700/700/city/' // put your picture here
    }
  }
}
</script>

<style lang="sass" scoped>
img {
  height: auto;
}
</style>
