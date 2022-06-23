<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: white;
  height: 100%;
}

.ant-layout-header {
  padding: 0 !important;
}

.ant-layout ant-layout-has-sider {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

label {
  font-weight: 700;
}

html {
  height: 100%;
  margin: 0;
  box-sizing: border-box;
}

* {
  margin: 0;
}

.tui-editor .te-preview-style-vertical .te-preview {
  width: unset !important;
}

.ant-layout-header {
  background: #fff !important;
  width: 100%;
  position: fixed;
  z-index: 9;
}

.ant-layout-sider {
  background: unset !important;
}

.ant-col {
  z-index: 1 !important;
}
</style>
