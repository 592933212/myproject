<template>
  <div class="search-reseluts" v-if="searchData">
    <div class="flex-md-row">
      <h2 class="flex-md-results">{{ Repositories }} repository results</h2>
    </div>
    <template  v-for="(item, index) in searchData" >
      <div :key="index">
      <div class='flex-column'>
        <div class="col-md-8">
          <h3><a class="full-name" :href="item.html_url">{{item.full_name}}</a></h3>
          <p class="text-gray">{{item.description}}</p>
          <div class="topics-row-container">
            <a href="" class="topics-tag">react</a>
            <a href="" class="topics-tag">nodejs</a>
            <a href="" class="topics-tag">javascript</a>
            <a href="" class="topics-tag">d3</a>
            <a href="" class="topics-tag">teachers</a>
          </div>
          <div class="flex-wrap">
            <p class="license">BSD-3-Clause license</p>
            <p class="license">Updated 2 hours ago</p>
            <a class="license-help" href="">36 issues need help</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="flex-type">
            <span class="language-color"  ref="typeColor" :style="getLangIconColor(item.language)"></span>
            {{item.language}}
          </div>
          <div class="collection-number">
            <a class="muted-link" @click="AddStar(searchData,index)">
              <i class="el-icon-star-on el-icon-star-off" ref="starChange"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </template>
    <div class="newpagination">
      <el-pagination
        class="mypagination"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :total="PaginationTotal">
      </el-pagination>
    </div>
  </div>
</template>

<script>
var page = 1
var newpage = ''
export default {
  data () {
    return {
      isActive: true,
      search: ''
    }
  },
  methods: {
    getLangIconColor (lang) {
      switch (lang) {
        case 'JavaScript':
          return {backgroundColor: '#f1e05a'}
        case 'CSS':
          return {backgroundColor: '#563d7c'}
        case 'Python':
          return {backgroundColor: '#3572A5'}
        case 'Java':
          return {backgroundColor: '#b07219'}
        case 'Go':
          return {backgroundColor: '#375eab'}
        case 'C++':
          return {backgroundColor: '#f34b7d'}
        case 'Ruby':
          return {backgroundColor: '#701516'}
        case 'HTML':
          return {backgroundColor: '#e34c26'}
        case 'TypeScript':
          return {backgroundColor: '#2b7489'}
        case 'C':
          return {backgroundColor: '#555555'}
        case 'Shell':
          return {backgroundColor: '#89e051'}
        case 'PHP':
          return {backgroundColor: '#4F5D95'}
        case null:
          return {}
        default:
          return {backgroundColor: '#555'}
      }
    },
    handleCurrentChange (val) {
      const loading = this.$loading({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
      }, 1200)
      page = Math.ceil(val / 3)
      this.search = this.$store.state.input
      this.axios.get('https://api.github.com/search/repositories?q=' + this.search + '&order=desc&page=' + page)
        .then((res) => {
          newpage = val % 3
          if (newpage === 1) {
            this.$store.commit('searchresult', res.data.items.slice(0, 10))
          } else if (newpage === 2) {
            this.$store.commit('searchresult', res.data.items.slice(10, 20))
          } else {
            this.$store.commit('searchresult', res.data.items.slice(20, 30))
          }
        })
        .catch((err) => {
          console.log('err: ', err)
        })
    },
    AddStar (searchData, index) {
      if (this.$store.state.mystar.indexOf(searchData[index]) === -1) {
        this.$notify({
          title: '添加成功',
          message: '已收藏至Mystar',
          type: 'success',
          duration: '1800'
        })
        this.$refs.starChange[index].classList.remove('el-icon-star-off')
        this.$store.commit('mystarresults', searchData[index])
      } else {
        this.$notify({
          title: '取消收藏',
          duration: '1800'
        })
        this.$refs.starChange[index].classList.add('el-icon-star-off')
        this.$store.state.mystar.splice(this.$store.state.mystar.indexOf(searchData[index]), 1)
      }
    }
  },
  computed: {
    Repositories () {
      return this.$store.state.Repositories
    },
    searchData () {
      return this.$store.state.searchData
    },
    PaginationTotal () {
      return this.$store.state.Pagination
    }
  }
}
</script>

<style lang='less'>
@import "./css/main.css";
</style>
