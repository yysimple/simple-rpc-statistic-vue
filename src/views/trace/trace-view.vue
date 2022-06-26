<template>
  <div id="trace-view">
    <a-input-search
        class="search-input"
        placeholder="input search text"
        enter-button
        @search="onSearch"/>
    <a-tree show-line :default-expanded-keys="['0.0.0']" @select="onSelect">
      <a-icon slot="switcherIcon" type="down"/>
      <a-tree-node key="0.1" title="parent 1">
        <a-tree-node key="0.1.1" title="parent 1-0">
          <a-tree-node key="0.1.1.1" title="leaf"/>
        </a-tree-node>
        <a-tree-node key="0.1.2" title="parent 1-1">
          <a-tree-node key="0.1.2.1" title="leaf"/>
        </a-tree-node>
        <a-tree-node key="0.1.3" title="parent 1-2">
          <a-tree-node key="0.1.3.1" title="leaf"/>
          <a-tree-node key="0.1.2.2" title="leaf"/>
        </a-tree-node>
      </a-tree-node>
    </a-tree>
  </div>
</template>
<script>
export default {
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
    onSearch(value) {
      console.log(value)
    },
  },
};
</script>

<style>
.search-input {
  width: 400px;
}
</style>
