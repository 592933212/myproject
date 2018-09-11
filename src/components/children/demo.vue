<template>
<div>
<div class=".box-shadow">222</div>
<a class="box">111</a>
</div>
</template>

<script>
export default {
  data () {
  }
}
</script>

<style lang="less" scoped>
@base: #f938ab;
@c: #f938ab;

.box-shadow(@style, @c) when (iscolor(@c)) {
  -webkit-box-shadow: @style @c;
  box-shadow:         @style @c;
}
.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
  .box-shadow(@style, rgba(0, 0, 0, @alpha));
}
.box {
  color: saturate(@base, 5%);
  border-color: lighten(@base, 30%);
  div { .box-shadow(0 0 5px, 30%) }
}
</style>
