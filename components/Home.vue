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
      homeImage: 'assets/images/9.jpg' // put the homepage image here
    }
  }
}
</script>

<style lang="sass" scoped>
img {
  height: auto;
  padding-top: .7em;
  filter: drop-shadow(.2em .2em .2em rgba(0,0,0,.6));
}
</style>
