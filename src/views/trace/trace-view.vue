<template>
  <div id="trace-view">
    <a-input-search
        class="search-input"
        placeholder="input search text"
        enter-button
        @search="onSearch"/>
    <a-tree :tree-data="treeData" :fieldNames="replaceField">
      <template #title="{ key: treeKey, methodName }">
        <a-dropdown :trigger="['contextmenu']">
          <span>{{ methodName }}</span>
          <template #overlay>
            <a-menu @click="({ key: menuKey }) => onContextMenuClick(treeKey, menuKey)">
              <a-menu-item key="1">1st menu item</a-menu-item>
              <a-menu-item key="2">2nd menu item</a-menu-item>
              <a-menu-item key="3">3rd menu item</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </template>
    </a-tree>
  </div>
</template>
<script>

import {traceEntryTreeView, traceExitTreeView} from '@/api/trace'

const treeData = [
  {
    "id": 10,
    "traceId": "1541097580610588672",
    "spanId": "0",
    "clazzName": "com.simple.rpc.test.starter.consumer.controller.StarterConsumerController",
    "methodName": "noE",
    "parentSpanId": "",
    "children": [
      {
        "id": 9,
        "traceId": "1541097580610588672",
        "spanId": "0.1",
        "clazzName": "com.simple.rpc.test.starter.consumer.impl.ConsumerInnerServiceImpl",
        "methodName": "hasArgNoE",
        "parentSpanId": "0",
        "children": [
          {
            "id": 11,
            "traceId": "1541097580610588672",
            "spanId": "0.1.1",
            "clazzName": "com.simple.rpc.test.starter.provider.impl.StarterProviderImpl",
            "methodName": "p1",
            "parentSpanId": "0.1",
            "children": [
              {
                "id": 12,
                "traceId": "1541097580610588672",
                "spanId": "0.1.1.1",
                "clazzName": "com.simple.rpc.test.starter.provider.two.impl.ProviderTwoServiceImpl",
                "methodName": "pt1",
                "parentSpanId": "0.1.1",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": 16,
        "traceId": "1541097580610588672",
        "spanId": "0.2",
        "clazzName": "com.simple.rpc.test.starter.consumer.impl.ConsumerInnerServiceImpl",
        "methodName": "simpleInvoke",
        "parentSpanId": "0",
        "children": [
          {
            "id": 18,
            "traceId": "1541097580610588672",
            "spanId": "0.2.1",
            "clazzName": "com.simple.rpc.test.starter.consumer.impl.ConsumerInnerServiceImpl",
            "methodName": "consumerInner",
            "parentSpanId": "0.2",
            "children": []
          }
        ]
      }
    ]
  }
]

export default {
  data() {
    return {
      treeData,
      replaceField: {children: 'children', title: 'methodName', key: 'id'}
    };
  },
  methods: {
    onContextMenuClick(treeKey, menuKey) {
      console.log(`treeKey: ${treeKey}, menuKey: ${menuKey}`);
    },
    async traceEntryTreeVie(traceId) {
      this.treeData = await traceEntryTreeView(traceId)
      console.log('', this.treeData)
    },
    onSearch(traceId) {
      console.log('', traceId)
      this.traceEntryTreeVie(traceId)
    },
  },
};
</script>

<style>
.search-input {
  width: 400px;
}
</style>
