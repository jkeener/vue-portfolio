<template>
  <nav>
      <ul>
          <li><a v-link="{ path: '/home' }">Home</a></li>
          <li><a v-link="{ path: '/work' }">Work</a></li>
          <li><a v-link="{ path: '/resume' }">Resume</a></li>
          <li><a v-link="{ path: '/bio' }">Bio</a></li>
          <li><a v-link="{ path: '/contact' }">Contact</a></li>
      </ul>
    </nav>
</template>

<script>
var $ = require('jquery');

  $(window).scroll(function () {
      if ($(window).scrollTop() > $("nav").offset().top) {
          $("nav").stop().animate({
              marginTop: $(window).scrollTop() + 20
          });
      } else {
          $("nav").stop().animate({
              marginTop: $(window).scrollTop() + 20
          });
      }
  });
</script>

<style lang="sass" scoped>
nav {
    font-size: 1.2rem;
    border-right: 1px solid black;
    text-align: right;
    margin-top: 3rem;
    font-weight: 400;
    li {
        margin-bottom: 20px;
        margin-right: 10px;
    }
}
</style>
