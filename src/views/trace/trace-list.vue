<template>
  <div>
    <a-input-search class="search-input" placeholder="input search text" enter-button @search="onSearch"/>
    <a-table :data-source="data" :columns="columns" :pagination="false"/>
    <div class="pagination-class">
      <template>
        <a-pagination
            v-model="current"
            :page-size-options="pageSizeOptions"
            :total="total"
            show-size-changer
            :page-size="pageSize"
            @showSizeChange="onShowSizeChange"
        >
          <template slot="buildOptionText" slot-scope="props">
            <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
            <span v-if="props.value === '50'">全部</span>
          </template>
        </a-pagination>
      </template>
    </div>
  </div>

</template>

<script>

import {listTrace} from '@/api/trace'

export default {
  data() {
    return {
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      current: 1,
      pageSize: 10,
      total: 50,
      data: [],
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      traceParam: {
        clazzName: null,
        methodName: null,
        startTime: null,
        endTime: null
      },
      columns: [
        {
          title: '链路id',
          dataIndex: 'traceId',
          key: 'traceId',
        },
        {
          title: '链路调用深度',
          dataIndex: 'invokeDeep',
          key: 'invokeDeep'
        },
        {
          title: '链路方法数',
          dataIndex: 'invokeMethodNum',
          key: 'invokeMethodNum'
        },
        {
          title: '调用时间',
          dataIndex: 'invokeTime',
          key: 'invokeTime'
        },
        {
          title: '链路健康状态',
          dataIndex: 'health',
          key: 'health'
        },
        {
          title: '链路调用耗时',
          dataIndex: 'fullTime',
          key: 'fullTime'
        }
      ],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.listTrace()
    },
    async listTrace() {
      let page = await listTrace(this.traceParam);
      this.data = page.records;
      this.pageSize = page.size;
      this.current = page.current;
      this.total = page.total;
      console.log("", page)
    },
    onSearch(value) {
      console.log(value)
      this.listTrace(value)
    },
    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
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

.pagination-class {
  margin-top: 20px;
  float: right;
}
</style>