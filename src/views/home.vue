<template>
  <a-layout id="components-layout-demo-top-side">
    <a-layout-header class="header">
      <div class="logo"/>
      <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['2']"
          :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          nav 1
        </a-menu-item>
        <a-menu-item key="2">
          nav 2
        </a-menu-item>
        <a-menu-item key="3">
          nav 3
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
              mode="inline"
              style="height: 100%"
              :selected-keys="selectedKeys"
              :default-open-keys="defaultOpenKeys"
              :default-selected-keys="defaultSelectedKeys"
          >
            <template v-for="(item, index) in routers">
              <a-sub-menu v-if="!item.hidden" :key="item.path" >
                  <span slot="title">
                    <a-icon :type="item.meta && item.meta.icon"/>
                    {{item.meta && item.meta.title || item.name}}
                  </span>
                  <template v-if="item.children && item.children.length">
                    <template v-for="(e, i) in item.children">
                      <a-menu-item v-if="!e.hidden" :key="e.name" @click="handleTo(e)">
                        <span>
                          <a-icon :type="e.meta && e.meta.icon"/>
                          {{e.meta && e.meta.title || e.name}}
                        </span>
                      </a-menu-item>
                    </template>
                  </template>
              </a-sub-menu>
            </template>
          </a-menu>
        </a-layout-sider>

        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      defaultOpenKeys: [],
      defaultSelectedKeys: [],
      selectedKeys: [],
    }
  },
  computed: {
    routers() {
      return this.$router.options.routes || []
    },
  },
  watch: {
    '$route': {
      handler() {
        const name = this.$route.name
        this.selectedKeys = [name]
      }
    }
  },
  beforeMount() {
    this.initDefaultKeys()
  },
  methods: {
    handleTo(route) {
      const name = this.$route.name
      if(name === route.name) return
      this.$router.push({name: route.name})
    },
    initDefaultKeys() {
      const name = this.$route.name
      this.selectedKeys = [name]
      this.defaultSelectedKeys = [name]
    },
  }
}
</script>

<style>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
