<template>
  <nav class="menu">
    <a class="menu-item menu-repositories" href="">Repositories <span class="Counter-nl" data-search-type="Repositories" ref="childrenmenu">{{ Repositories }}</span></a>
    <a class="menu-item" href="">Code         <span class="Counter-ol" ></span></a>
    <a class="menu-item" href="">Commits      <span class="Counter-ol" ></span></a>
    <a class="menu-item" href="">Issues       <span class="Counter-ol" ></span></a>
    <a class="menu-item" href="">Marketplace  <span class="Counter-ml" >51</span></a>
    <a class="menu-item" href="">Topics       <span class="Counter-ml" >393k</span></a>
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
      return this.$store.state.Repositories
    }
  }
}
</script>

<style>
@import "./css/menu.css";
</style>
