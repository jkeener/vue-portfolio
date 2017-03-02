
 // If you don't need this page, remove it from Navigation.vue, main.js (the require and the router), and App.vue. If you miss somewhere it will show up as an error.

 <template>
  <div>
    <div class="border">

    </div>
  <section>
          <h2>Solo Exhibitions</h2>
        <div class="show-section" v-for="show in solo">
          <p >{{show.date}}</p>
          <p>{{show.name}}</p>
        </div>
          <h2>Group Exhibitions</h2>
        <div class="show-section" v-for="show in group">
          <p >{{show.date}}</p>
          <p>{{show.name}}</p>
        </div>
  </section>
</div>
</template>

<script>
export default {
  data () {
    return {
        solo: [
            //Add your solo exibitions here
            {date: '1-1-2016',name: 'Solo exhibition one'},
            {date: '1-2-2016',name: 'Solo exhibition two'},
            {date: '1-3-2016',name: 'Solo exhibition three'},
            {date: '1-4-2016',name: 'Solo exhibition four'},
            {date: '1-5-2016',name: 'Solo exhibition five'}
        ],
        group: [
            //Add your group exibitions here
            {date: '1-1-2016',name: 'Group exhibition one'},
            {date: '1-2-2016',name: 'Group exhibition two'},
            {date: '1-3-2016',name: 'Group exhibition three'},
            {date: '1-4-2016',name: 'Group exhibition four'},
            {date: '1-5-2016',name: 'Group exhibition five'}
        ],
    };
  },
}
</script>

<style lang="sass" scoped>

section {
  display: flex;
  flex-wrap: wrap;
}
div {
  width: 100%;
}
.show-section {
  display: flex;
}
p:first-child {
  margin-right: .5em;
}
</style>
