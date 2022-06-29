<template>
  <div id="trace-view">
    <a-input-search
        class="search-input"
        placeholder="input search text"
        enter-button
        @search="onSearch"/>
    <template>
      <div id="components-a-tooltip-demo-placement">
          <a-tooltip placement="right">
            <template slot="title">
              <span>prompt text</span>
            </template>
            <a-tree :tree-data="treeData" :replaceFields="replaceField" @select="onSelect"/>
          </a-tooltip>
      </div>
<!--      <a-popover v-model="visible" title="Title" placement="right" trigger="click">-->
<!--        <a slot="content" @click="hide"></a>-->
<!--        <a-tree :tree-data="treeData" :replaceFields="replaceField" @select="onSelect"/>-->
<!--      </a-popover>-->
    </template>

  </div>
</template>
<script>

import {traceEntryTreeView, traceExitTreeView} from '@/api/trace'

export default {
  data() {
    return {
      visible: false,
      buttonWidth: 70,
      treeData: [],
      replaceField: {children: 'children', title: 'showTitle', key: 'id'}
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
    traceDetails(key) {
      console.log(key)
    },
    onSearch(traceId) {
      console.log('', traceId)
      this.traceEntryTreeVie('1541097580610588672')
    },
    onSelect(selectedNodes) {
      console.log('Trigger Select', selectedNodes[0]);
    },
    hide() {
      console.log(111);
      this.visible = false;
    },
  },
};
</script>

<style>
.search-input {
  width: 400px;
}
#components-a-tooltip-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
