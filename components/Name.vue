<template>
  <div>
    <header class="name">{{ name }}</header>
    <hr/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'James Keener' //Put your name here!
    }
  }
}
</script>

<style lang="sass" scoped>
.name {
  margin: 1rem 0;
  color: grey; //change color of name here
  font-weight: 700;
  margin-left: 23.9%;
  font-size: 1.7rem;
}
hr {
  width: 76.3%;
  margin-left: 23.8%;
}
</style>
