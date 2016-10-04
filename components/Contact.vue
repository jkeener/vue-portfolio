<template>
  <div>
      <div class="1/2 grid__cell">
          <h1 class="1/1 grid__call">Your Name</h1>
          <a class="1/1 grid__call email" href=mailto:{{emailaddress}}>{{emailaddress}}</a>
          <h1 class="1/1 grid__call">Gallery</h1>
          <address>
            Gallery Information<br>
            Goes Here<br>
            Gallery address<br>
            USA
          </address>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      emailaddress: 'youremailhere@email.com' // email goes here.
    }
  }
}
</script>

<style lang="sass" scoped>
h1 {
  font-weight: 700;
  margin-bottom: 5px;
}
h1:nth-child(n+2) {
  margin-top: 20px;
}
</style>
