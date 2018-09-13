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
            <a href="url0_2" class="topics-tag">react</a>
            <a href="url0_3" class="topics-tag">nodejs</a>
            <a href="url0_4" class="topics-tag">javascript</a>
            <a href="url0_5" class="topics-tag">d3</a>
            <a href="url0_6" class="topics-tag">teachers</a>
          </div>
          <div class="flex-wrap">
            <p class="license">BSD-3-Clause license</p>
            <p class="license">Updated 2 hours ago</p>
            <a class="license-help" href="url0_7">36 issues need help</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="flex-type">{{item.language}}</div>
          <div class="collection-number">
            <a class="muted-link" @click="AddStar(searchData,index)">
              <svg aria-label="star" class="octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img">
                <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
              </svg>
              294k
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
    handleCurrentChange (val) {
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
      alert('star添加成功!')
      var star = searchData[index]
      this.$store.commit('mystarresults', star)
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
      if (!this.$store.state.Pagination) {
        return 100
      } else {
        return this.$store.state.Pagination
      }
    }
  }
}
</script>

<style lang='less'>
@import "./css/main.css";
</style>
