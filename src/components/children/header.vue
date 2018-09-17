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
            <li class="HeaderFlexLi"><router-link class="HeaderNavlink" :to="{ path: 'mystar' }">Mystar</router-link></li>
            <li class="HeaderFlexLi"><router-link class="HeaderNavlink" :to="{ path: '/' }">Repository</router-link></li>
            <li class="HeaderFlexLi"><router-link class="HeaderNavlink" :to="{ path: 'marketplace' }">Marketplace</router-link></li>
            <li class="HeaderFlexLi"><router-link class="HeaderNavlink" :to="{ path: 'explore' }">Explore</router-link></li>
          </ul>
          <ul class="HeaderFlexLinks">
            <li class="HeaderLinksli">
              <a class="el-icon-bell" href="https://github.com/notifications"></a>
            </li>
            <li class="HeaderLinksli">
              <el-dropdown trigger="click">
                <div class="details-reset">
                  <div class="octionplus"></div>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>New repositories</el-dropdown-item>
                  <el-dropdown-item>Import repository</el-dropdown-item>
                  <el-dropdown-item>New gist</el-dropdown-item>
                  <el-dropdown-item>New organization</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li class="HeaderLinksli">
              <el-dropdown trigger="click">
                <div class="details-overlay"></div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>Your profile</el-dropdown-item>
                  <el-dropdown-item>Your repositories</el-dropdown-item>
                  <el-dropdown-item>Your stars</el-dropdown-item>
                  <el-dropdown-item>Your gists</el-dropdown-item>
                  <i class="dropdown-divider"></i>
                  <el-dropdown-item>Help</el-dropdown-item>
                  <el-dropdown-item>Settings</el-dropdown-item>
                  <el-dropdown-item>Sign out</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
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
      this.openFullScreen()
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
          this.$store.state.searchStart = true
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
    },
    openFullScreen () {
      const loading = this.$loading({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
    }
  },
  created () {
    this.openFullScreen()
    this.initialData()
  }
}
</script>

<style scoped>
@import "./css/header.css";
</style>
