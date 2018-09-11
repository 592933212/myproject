<template>
  <div id="app">
    <myheader></myheader >
    <div class="projectMain">
      <div class="container-lg">
        <div class="Data-column">
          <mymenu ref="parentsmenu"></mymenu>
          <mylanguage></mylanguage>
        </div>
        <mymain></mymain>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from './header.vue'
import myfooter from './footer.vue'
import mymenu from './menu.vue'
import mylanguage from './language.vue'
import mymain from './main.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    getMyEvent (msg) {
      this.searchData = msg
    },
    getMyrepositories (rep) {
      this.$refs.parentsmenu.$refs.childrenmenu.innerText = rep
    }
  },
  components: {myfooter, myheader, mymenu, mylanguage, mymain}
}
</script>

<style scoped>
@import "./css/home.css";
</style>
