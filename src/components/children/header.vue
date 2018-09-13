<template>
  <div>
    <header class="header">
    <div id="js-details-container">
      <div class="flex-item-center"><a href="https://github.com/"><img src="./png/github-logo.png"></a></div>
        <div class="HeaderMenu">
          <div :class="{HeaderSearch:SearchNoChange,triggercontorl:SearchIsChange}">
              <input type="text" class="formcontrol" :style="{ color }" v-model="search" @focus="searchInput()" @blur="recoveryInput()" @keyup.enter="searchData();recoveryInput()">
              <img src="https://assets-cdn.github.com/images/search-shortcut-hint.svg" class="HeaderSearchImg" v-show="HeaderImgIsShow">
          </div>
          <a class="search-innertext" v-show="SearchInnerText" @click="searchData()">
              <img src="./png/Magnifier.png" class="magnifier">
              <span class="search-copy">{{ search }}</span>
              <div class="all-github">All Github</div>
          </a>
          <ul class="HeaderFlexItem">
              <li class="HeaderFlexLi"><router-link class="HeaderNavlink" :to="{ path: 'requests' }">Pull requests</router-link></li>
              <li class="HeaderFlexLi"><router-link class="HeaderNavlink" :to="{ path: 'issues' }">Issues</router-link></li>
              <li class="HeaderFlexLi"><router-link class="HeaderNavlink" :to="{ path: 'marketplace' }">Marketplace</router-link></li>
              <li class="HeaderFlexLi"><router-link class="HeaderNavlink" :to="{ path: 'explore' }">Explore</router-link></li>
          </ul>
          <ul class="HeaderFlexLinks">
              <li class="HeaderLinksli">
              <a class="oction-bell" href="https://github.com/notifications"></a>
              </li>
              <li class="HeaderLinksli">
              <div class="details-reset">
                <div class="octionplus"></div>
              </div>
              </li>
              <li class="HeaderLinksli">
                <div class="details-overlay"></div>
              </li>
          </ul>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
var page = 1
export default {
  data () {
    return {
      search: 'stars:>20000',
      HeaderImgIsShow: true,
      SearchInnerText: false,
      SearchNoChange: true,
      SearchIsChange: false,
      color: '#fff'
    }
  },
  methods: {
    searchData () {
      this.$router.push({ path: '/' })
      this.axios.get('https://api.github.com/search/repositories?q=' + this.search + '&order=desc&page=' + page)
        .then((res) => {
          var searchData = res.data.items.slice(0, 10)
          this.$store.commit('searchresult', searchData)
          var repositories = res.data.total_count
          this.$store.commit('inputresults', this.search)
          this.$store.commit('repositoryresults', repositories)
          this.$store.commit('Paginationresult', repositories)
        })
        .catch((err) => {
          console.log('err: ', err)
        })
    },
    initialData () {
      this.axios.get('https://api.github.com/search/repositories?q=' + this.search + '&order=desc&page=' + page)
        .then((res) => {
          this.$store.commit('searchresult', res.data.items.slice(0, 10))
          this.$store.commit('inputresults', this.search)
          this.$store.commit('repositoryresults', res.data.total_count)
          this.$store.commit('Paginationresult', res.data.total_count)
        })
        .catch((err) => {
          console.log('err: ', err)
        })
    },
    searchInput () {
      this.SearchNoChange = false
      this.SearchIsChange = true
      this.color = '#24292e'
      this.HeaderImgIsShow = false
      this.SearchInnerText = true
    },
    recoveryInput () {
      setTimeout(() => {
        this.SearchNoChange = true
        this.SearchIsChange = false
        this.color = '#fff'
        this.HeaderImgIsShow = true
        this.SearchInnerText = false
      }, 300)
    }
  },
  mounted () {
    this.initialData()
  }
}
</script>

<style scoped>
@import "./css/header.css";
</style>
