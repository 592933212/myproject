<template>
  <div>
    <div class="toto">您的star</div>
    <template  v-for="(item, index) in mystar" >
      <div :key="index" ref="data" class="center">
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
          <div class="flex-type">{{item.language}}</div>
          <div class="collection-number">
            <a class="muted-link" >
              <svg aria-label="star" class="octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img">
                <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
              </svg>
              294k
            </a>
            <el-button type="primary" icon="el-icon-delete" @click="deletestar(index)"></el-button>
          </div>
        </div>
      </div>
    </div>
    </template>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myfooter from '../footer.vue'
export default {
  components: {myfooter},
  computed: {
    mystar () {
      return this.$store.state.mystar
    }
  },
  methods: {
    deletestar (index) {
      this.$store.state.mystar.splice(index, 1)
    }
  }
}
</script>

<style lang="postcss">
.center{
  margin: 0px auto;
  width: 715px;
}
.toto{
  text-align: center;
  margin-top: 50px;
  color: red;
  margin-bottom: 20px;
}
.mypagination{
  margin: 0px 120px;
}
.newpagination{
  width: 715px;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 15px;
}
.muted-link{
  float: right;
  font-size: 14px;
  color: #2c3e50;
}
.collection-number{
  float: left;
  width: 96px;
  height: 160px;
}
.flex-type{
  float: left;
  width: 125px;
  height: 160px;
  font-size: 13px;
}
.col-md-4{
  width: 222px;
  height: 160px;
  float: right;
  padding: 8px 16px 0 0;
}

.license{
  float: left;
  margin: 8px 16px 0px 0px;
  font-size: 12px;
  color: #586069;
}
.license-help{
  float: left;
  margin: 8px 16px 0px 0px;
  font-size: 12px;
  color: #586069;
}
.license-help:hover{
  color: #0366d6;
}

.flex-wrap{
  height: 26px;
}
.topics-tag{
  color: #0366d6;
  padding: 3.6px 10.8px;
  margin: 4px 6px 4px 0px;
  font-size: 12px;
  background-color: #f1f8ff;
  float: left;
}
.topics-tag:hover{
  background-color: #def;
}
.topics-row-container{
  width: 345px;
  height: 30px;
  margin: 4px 0;
}
.text-gray{
  font-size: 15px;
  width: 345px;
  height: 66px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  padding-right: 24px;
  margin-bottom: 8px;
  text-align: left;
  line-height: 1.5;
}
.full-name{
  display:block;
  color: #0366d6;
  font-size: 18px;
  text-align: left;
  padding: 3px 0px;
}
.full-name:hover{
  text-decoration: underline;
}
.col-md-8{
  width: 460px;
  height: 168px;
  float: left;
}
.flex-column{
  width: 715px;
  height: 168px;
  padding: 24px 0px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.flex-md-results{
  float: left;
  font-size: 20px;
}
.flex-md-row{
  width: 715px;
  height: 30px;
  padding-bottom: 16px;
}
.search-reseluts{
  float: left;
  width: 731px;
  height: 2300px;
  padding: 0 8px;
}
*{
  padding:  0px;
  margin: 0px;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
    text-decoration: none;
}
</style>
