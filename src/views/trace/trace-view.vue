<template>
  <div id="trace-view">
    <a-input-search
        class="search-input"
        placeholder="input search text"
        enter-button
        @search="onSearch"/>
    <template>
      <div id="components-a-tooltip-demo-placement">
        <a-tree :tree-data="treeData" :replaceFields="replaceField" @select="onSelect" style="display: inline-block;">
          <template #title="{ showTitle, id }">
            <a-tooltip class="class-a-tooltip" placement="right" trigger="click">
              <template slot="title">
                <div><span>id: </span><span>{{ detailLog.id }}</span></div>
                <div><span>traceId: </span><span>{{ detailLog.traceId }}</span></div>
                <div><span>spanId: </span><span>{{ detailLog.spanId }}</span></div>
                <div><span>parentSpanId: </span><span>{{ detailLog.parentSpanId }}</span></div>
                <div><span>level: </span><span>{{ detailLog.level }}</span></div>
                <div><span>entryTime: </span><span>{{ detailLog.entryTime }}</span></div>
                <div><span>exitTime: </span><span>{{ detailLog.exitTime }}</span></div>
                <div><span>appName: </span><span>{{ detailLog.appName }}</span></div>
                <div><span>host: </span><span>{{ detailLog.host }}</span></div>
                <div><span>clazzName: </span><span>{{ detailLog.clazzName }}</span></div>
                <div><span>methodName: </span><span>{{ detailLog.methodName }}</span></div>
                <div><span>requestInfo: </span><span>{{ detailLog.requestInfo }}</span></div>
                <div><span>resultInfo: </span><span>{{ detailLog.resultInfo }}</span></div>
                <div><span>exceptionInfo: </span><span>{{ detailLog.exceptionInfo }}</span></div>
                <div><span>resultInfo: </span><span>{{ detailLog.resultInfo }}</span></div>
              </template>
              <span>{{ showTitle }}</span>
            </a-tooltip>
          </template>
        </a-tree>
      </div>
      <!--      <a-popover v-model="visible" title="Title" placement="right" trigger="click">-->
      <!--        <a slot="content" @click="hide"></a>-->
      <!--        <a-tree :tree-data="treeData" :replaceFields="replaceField" @select="onSelect"/>-->
      <!--      </a-popover>-->
    </template>

  </div>
</template>
<script>

import {traceEntryTreeView, traceExitTreeView, getSimpleAgentLog} from '@/api/trace'

export default {
  data() {
    return {
      visible: false,
      buttonWidth: 70,
      treeData: [],
      replaceField: {children: 'children', title: 'showTitle', key: 'id'},
      detailLog: {},
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
    async traceDetails(key) {
      console.log(key)
      this.detailLog = await getSimpleAgentLog(key)
    },
    onSearch(traceId) {
      console.log('', traceId)
      this.traceEntryTreeVie('1541097580610588672')
    },
    onSelect(selectedNodes) {
      let id = selectedNodes[0];
      console.log('Trigger Select', selectedNodes[0]);
      if (id === null || id === undefined) {
        return;
      }
      this.traceDetails(id)
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

.class-a-tooltip {
  width: 600px;
}
</style>
