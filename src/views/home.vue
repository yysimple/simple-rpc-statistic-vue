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
              :default-selected-keys="[]"
              :default-open-keys="[]"
              style="height: 100%"
          >
            <a-sub-menu key="sub1">
<!--              <router-link to="/trace"/>-->
              <span slot="title"><a-icon type="user"/>link trace</span>
              <a-menu-item key="1">
                trace search
                <router-link to="/trace/traceSearch"/>
              </a-menu-item>
              <a-menu-item key="2">
                trace view
                <router-link to="/trace/traceView"/>
              </a-menu-item>
              <a-menu-item key="3">
                option3
              </a-menu-item>
              <a-menu-item key="4">
                option4
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
<!--              <router-link to="/register"/>-->
              <span slot="title"><a-icon type="laptop"/>register center</span>
              <a-menu-item key="5">
                app search
                <router-link to="/register/appSearch"/>
              </a-menu-item>
              <a-menu-item key="6">
                service search
                <router-link to="/register/serviceSearch"/>
              </a-menu-item>
              <a-menu-item key="7">
                option7
              </a-menu-item>
              <a-menu-item key="8">
                option8
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <span slot="title"><a-icon type="notification"/>subnav 3</span>
              <a-menu-item key="9">
                option9
              </a-menu-item>
              <a-menu-item key="10">
                option10
              </a-menu-item>
              <a-menu-item key="11">
                option11
              </a-menu-item>
              <a-menu-item key="12">
                option12
              </a-menu-item>
            </a-sub-menu>
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

<style>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
