<template>
  <div>
    <header>
      <h1>{{ name }}</h1>
    </header>
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

header {
  font-weight: 700;
  text-align: center;
  width:100%;
}
  h1 {
    font-size: 3em;
    margin: 0;
  }
@media screen and (min-width: 800px) {
  header {
    text-align: left;
  }
}
</style>
