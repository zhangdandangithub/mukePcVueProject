<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import storage from './storage';
export default {
  name: 'app',
  components: {

  },
  data () {
    return {

    }
  },
  mounted () {
    // console.log(storage);
    // storage.setItem('a', 1);
    // storage.setItem('user', {a:1});
    // storage.setItem('abc', 1, {a:1}, 'user');
    // storage.clear
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
