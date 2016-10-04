<template>
  <div>
    <header class="name">{{ name }}</header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Your Name Here' //Put your name here!
    }
  }
}
</script>

<style lang="sass" scoped>
.name {
  margin: 1rem 0;
  margin-left: 23.9%;
  font-size: 2rem;
  position: relative;
}
.name:after {
    content:"";
    background: grey;
    position: absolute;
    top: 120%;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
}
</style>
