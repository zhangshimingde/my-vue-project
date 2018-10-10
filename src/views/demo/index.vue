<template>
  <div>
    <div>vuex示例</div>
    <div>{{`firstProduct:${firstProduct}`}}</div>
    <el-button type="primary" @click="fetchCompany">获取公司</el-button>
    <div>{{`companyName:${companyName}`}}</div>
    <el-button type="primary" @click="fetchDemo">调用mock接口</el-button>
    <div>{{`mock demo:${JSON.stringify(demo)}`}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  mounted() {
    this.fetchProducts();
  },
  computed: {
    ...mapState("demo", ["products", "company", "demo"]),
    ...mapGetters("demo", ["firstProduct", "companyName"])
  },
  methods: {
    ...mapActions("demo", ["fetchProducts", "fetchCompany", "fetchDemo"])
  }
};
</script>
