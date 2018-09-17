<template>
  <nav class="menu">
    <a class="menu-repositories" href="">Repositories <span class="Counter-nl" data-search-type="Repositories">{{ Repositories }}</span></a>
    <a class="menu-item" href="">Code         <span class="Counter-ol" ></span></a>
    <a class="menu-item" href="">Commits      <span class="Counter-ol" ></span></a>
    <a class="menu-item" href="">Issues       <span class="Counter-ol" ></span></a>
    <a class="menu-item" href="">Marketplace  <span class="Counter-ml" v-show="searchStart">54</span></a>
    <a class="menu-item" href="">Topics       <span class="Counter-ml" v-show="searchStart">396k</span></a>
    <a class="menu-item" href="">Wikis        <span class="Counter-ol" ></span></a>
    <a class="menu-item" href="">User         <span class="Counter-ol" ></span></a>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      Marketplace: '',
      Topics: ''
    }
  },
  computed: {
    Repositories () {
      if (this.$store.state.Repositories < 1000) {
        return this.$store.state.Repositories
      } else {
        return Math.floor(this.$store.state.Repositories / 1000) + 'k'
      }
    },
    searchStart () {
      return this.$store.state.searchStart
    }
  }
}
</script>

<style>
@import "./css/menu.css";
</style>
