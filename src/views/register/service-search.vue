<template>
  <div>
    <a-input-search class="search-input" placeholder="input search text" enter-button @search="onSearch"/>
    <a-table :data-source="data" :columns="columns"/>
  </div>

</template>

<script>

import {listService} from '@/api/register'

export default {
  data() {
    return {
      data: [],
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      columns: [
        {
          title: '接口简称',
          dataIndex: 'alias',
          key: 'alias',
        },
        {
          title: 'RPC服务接口',
          dataIndex: 'interfaceName',
          key: 'interfaceName'
        },
        {
          title: '应用机器数量',
          dataIndex: 'machineNum',
          key: 'machineNum'
        },
        {
          title: '服务器地址',
          dataIndex: 'url',
          key: 'url'
        }
      ],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.listService("")
    },
    async listService(serviceName) {
      this.data = await listService(serviceName);
    },
    onSearch(value) {
      console.log(value)
      this.listService(value)
    },
  },
};
</script>
<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}

.search-input {
  width: 300px;
}
</style>