<template>
  <div>
    <div class="my-explore">欢迎,这里是explore!</div>
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
.my-explore{
  text-align: center;
  margin-top: 50px;
  color: #409EFF;
}
</style>
