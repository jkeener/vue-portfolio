<template>
  <div>
    <div class="grid--center">
      <img class="1 grid__cell" :src=homeImage />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeImage: 'assets/images/9.jpg' // put the homepage inamge here
    }
  }
}
</script>

<style lang="sass" scoped>
img {
  height: auto;
}
</style>
