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
            <a-tooltip class="class-a-tooltip" placement="bottom" trigger="click">
              <template slot="title">
                <div v-for="(value, key) in detailLog" :key="key" class="obj-item">
                  <div class="item-key">{{ key }}：</div>
                  <p class="item-value">{{ value }}</p>
                </div>
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

<style scoped lang="scss">
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

.obj-item {
  margin-bottom: 5px;
  overflow: hidden;
  .item-key {
    float: left;
    background: rgba(253, 198, 20, .5)
  }
  .item-value {
  }
}
.class-a-tooltip {
  width: 600px;
}
</style>
