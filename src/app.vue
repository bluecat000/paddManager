<style>
html{
  width: 100%;
  height: 100%;
}
body{
  width: 100%;
  height: 100%;
}
.main-box{
  width: 100%;
  height: 100%;
}
.ivu-row-flex{
  width: 100%;
  height: 100%;
}
.layout{
  height: 100%;
}
</style>

<template>
  <div class="main-box">
    <Main/>
  </div>
</template>
<script>
import Main from "./views/Main.vue"
export default {
  name: "App",
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {},
  components: {
    Main
  }
}
</script>
