<template>
  <div>
    <div class="my-marketplace">欢迎,这里是marketplace!</div>
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
.my-marketplace{
  text-align: center;
  margin-top: 50px;
  color: #E6A23C;
}
</style>
