<template>
  <div class="body-wrapper">
    <name class="name"></name>
    <navigation class="navigation"></navigation>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import name from './Name.vue'
import navigation from './Navigation.vue'
import resume from './Resume.vue'
import home from './Home.vue'

export default {
  components: {
    name,
    navigation,
    home
  }
}
</script>

<style lang="sass">

// glabal css

*{
  box-sizing: border-box;
}

body {
  font-family: "Roboto";
  font-size: 16px;
  line-height: 1.4;
}
.body-wrapper {
  display:flex;
  flex-wrap: wrap;
}
.name,.navigation,.view {
  width: 100%;
}
h2 {
  color: gray;
  margin-bottom: 0;
}
a {
  text-decoration: none;
  color: black;
}
a:visited {
  color: black;
}
li {
  list-style: none;
}

.lb-container {
    padding: 0 !important; //this is just overiding some weird styling in the lightbox css
}

.border {
  height: 1px;
  width: 100%;
  border: 1px solid black;
}

@media screen and (min-width: 800px) {
  body {
    max-width: 980px;
    margin: 0 auto;
  }
  .name,.navigation {
    width: 50%;
  }
}
</style>
