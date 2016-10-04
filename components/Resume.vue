
 // If you don't need this page, remove it from Navigation.vue, main.js (the require and the router), and App.vue. If you miss somewhere it will show up as an error.

 <template>
  <div class="3/4 grid__cell">
  <section class="resume grid">
        <div class="1/1 grid__cell">
          <h2>Solo Exhibitions</h2>
        </div>
        <p class="1/1 grid__cell" v-for="show in solo">{{show.date}}<span>{{show.name}}</span></p>
        <div class="1/1 grid__cell">
          <h2>Group Exhibitions</h2>
        </div>
        <p class="1/1 grid__cell" v-for="show in group">{{show.date}}<span>{{show.name}}</span></p>
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
.resume {
    p {
        font-weight: 700;
        padding-bottom: 5px;
        span {
            margin-left: 3%;
            font-weight: 400;
        }
    }
    h2 {
        text-decoration: underline;
        color: darkgray;
        font-weight: 700;
        font-size: 1rem;
        padding: 10px;
    }
}
</style>
