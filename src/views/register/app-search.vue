<template>
  <div>
    <a-input-search class="search-input" placeholder="input search text" enter-button @search="onSearch"/>
    <a-table :data-source="data" :columns="columns"/>
  </div>

</template>

<script>

import {listApp} from '@/api/register'

export default {
  data() {
    return {
      data: [],
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      columns: [
        {
          title: '应用名',
          dataIndex: 'applicationName',
          key: 'applicationName',
        },
        {
          title: 'RPC服务数',
          dataIndex: 'serviceNum',
          key: 'serviceNum'
        },
        {
          title: '应用机器数量',
          dataIndex: 'machineNum',
          key: 'machineNum'
        }
      ],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.listApp("")
    },
    async listApp(appName) {
      this.data = await listApp(appName);
    },
    onSearch(value) {
      console.log(value)
      this.listApp(value)
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