<template>
  <div>
    <div class="border">
    </div>
      <div>
          <h2>Your Name</h2>
          <a href=mailto:{{emailaddress}}>{{emailaddress}}</a>
          <h2>Gallery</h2>
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

</style>
