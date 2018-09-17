<template>
  <div class="languages-statistics" v-show="searchStart">
    <h1 class="languages-title">Languages</h1>
    <ul class="languages-list">
      <li class=""><a class="languages-item" href="">JavaScript <span class="count">80</span></a></li>
      <li class=""><a class="languages-item" href="">Python     <span class="count">20</span></a></li>
      <li class=""><a class="languages-item" href="">Java       <span class="count">15</span></a></li>
      <li class=""><a class="languages-item" href="">Go         <span class="count">12</span></a></li>
      <li class=""><a class="languages-item" href="">C++        <span class="count">11</span></a></li>
      <li class=""><a class="languages-item" href="">Ruby       <span class="count">8</span></a></li>
      <li class=""><a class="languages-item" href="">CSS        <span class="count">8</span></a></li>
      <li class=""><a class="languages-item" href="">HTML       <span class="count">7</span></a></li>
      <li class=""><a class="languages-item" href="">TypeScript <span class="count">7</span></a></li>
      <li class=""><a class="languages-item" href="">C          <span class="count">5</span></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    searchStart () {
      return this.$store.state.searchStart
    }
  }
}
</script>

<style>
@import "./css/language.css";
</style>
