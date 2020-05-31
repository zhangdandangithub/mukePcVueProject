<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  },
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    // 本地家在请求静态json文件的形式
    this.axios.get('/mock/user/login.json').then((res) => {
      this.res = res.data;
    });
    // // 通过easy-mock平台实现数据mock
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res.data;
    // });
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
