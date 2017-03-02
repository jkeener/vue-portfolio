<template>
  <nav>
      <ul>
          <li><a v-link="{ path: '/vue-portfolio/' }">Home</a></li>
          <li><a v-link="{ path: '/vue-portfolio/work' }">Work</a></li>
          <li><a v-link="{ path: '/vue-portfolio/resume' }">Resume</a></li>
          <li><a v-link="{ path: '/vue-portfolio/bio' }">Bio</a></li>
          <li><a v-link="{ path: '/vue-portfolio/contact' }">Contact</a></li>
      </ul>
    </nav>
</template>

<script>

</script>

<style lang="sass" scoped>

  nav {
      font-weight: 500;
      ul {
        display: flex;
        justify-content: space-around;
        padding:0;
        margin: 0;
      }
      li {
      }
  }
    @media screen and (min-width: 800px) {
      nav {
        display: flex;
        align-items: center;
        justify-content: flex-end;

      }
      ul {
        width: 75%;
      }
      a {
        position: relative;
      }
      a:after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0%;
        border-bottom: 2px solid #5596AE; // change the color of the hover animation here. I just picked a color from the picture in the home section.
        transition: 0.2s ease-in-out;
      }
      a:hover:after {
        width: 100%;
      }
    }
</style>
