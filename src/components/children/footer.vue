<template>
    <footer>
        <div class="flex-finaly">
            <ul class="footer-left">
                <li class="mr-3"><span>© 2018 GitHub, Inc.</span></li>
                <li class="mr-3"><a class="guidance" href="https://github.com/site/terms">Terms</a></li>
                <li class="mr-3"><a class="guidance" href="https://github.com/site/privacy">Privacy</a></li>
                <li class="mr-3"><a class="guidance" href="https://help.github.com/articles/github-security/">Security</a></li>
                <li class="mr-3"><a class="guidance" href="https://status.github.com/">Status</a></li>
                <li class="mr-3"><a class="guidance" href="https://help.github.com/">Help</a></li>
            </ul>
            <a class="footer-center" href="https://github.com/"></a>
            <ul class="footer-right">
                <li class="mr-4"><a class="about" href="">About</a></li>
                <li class="mr-4"><a class="about" href="">Blog</a></li>
                <li class="mr-4"><a class="about" href="">Training</a></li>
                <li class="mr-4"><a class="about" href="">API</a></li>
                <li class="mr-4"><a class="about" href="">Pricing</a></li>
                <li class="mr-4"><a class="about" href="">Contact GitHub</a></li>
            </ul>
        </div>
    </footer>
</template>

<script type="es6">
export default{
  data () {
    return {
      current: 1
    }
  },
  methods: {
    pagechange: function (currentPage) {
    }
  }
}
</script>

<style scoped>
@import "./css/footer.css";
</style>
