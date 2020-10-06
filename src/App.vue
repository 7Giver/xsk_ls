<template>
  <div id="app" v-cloak>
    <div id="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/connection">人脉追踪</router-link>
      <router-link to="/circle">圈子</router-link>
      <router-link to="/mine">我的</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
[v-cloak] {
  display: none !important;
}
#app {
  overflow-x: hidden;
}
#nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 16px;
  background: #fff;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #F5F5F5;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
