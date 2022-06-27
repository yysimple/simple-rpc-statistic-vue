<template>
  <div id="trace-view">
    <a-input-search
        class="search-input"
        placeholder="input search text"
        enter-button
        @search="onSearch"/>
    <a-tree :tree-data="treeData" :replaceFields="replaceField" @select="onSelect"/>
  </div>
</template>
<script>

import {traceEntryTreeView, traceExitTreeView} from '@/api/trace'

export default {
  data() {
    return {
      treeData: [],
      replaceField: {children: 'children', title: 'showTitle', key: 'idAndTraceId'}
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
  },
};
</script>

<style>
.search-input {
  width: 400px;
}
</style>
