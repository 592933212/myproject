<template>
  <div>
    <div class="toto">欢迎,来到marketplace!</div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myfooter from '../footer.vue'
export default {
  components: {myfooter}
}
</script>

<style>
.toto{
  text-align: center;
  margin-top: 50px;
  color: red;
}
</style>
