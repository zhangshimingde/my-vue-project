import api from "@/api";
export default {
  namespaced: true,
  state: {
    products: [],
    company: undefined,
    demo: []
  },
  getters: {
    // 从state派生出来的状态,相当于计算属性
    firstProduct: state => {
      return state.products.length > 0 ? state.products[0] : undefined;
    },
    companyName: state => {
      return state.company ? state.company.label : "";
    }
  },
  actions: {
    // 获取数据,并提交相应的mutation,触发mutation对状态的变更
    fetchProducts({ commit }) {
      commit("setProducts", [1, 2, 3]);
    },
    async fetchCompany({ commit }) {
      const res = await api.fetchCompany();
      commit("setCompany", res.userData[0]);
    },
    async fetchDemo({ commit }) {
      const res = await api.fetchDemo();
      commit("setDemo", res);
    }
  },
  mutations: {
    // 对state进行变更
    setProducts(state, data) {
      state.products = data;
    },
    setCompany(state, data) {
      state.company = data;
    },
    setDemo(state, data) {
      state.demo = data;
    }
  }
};
