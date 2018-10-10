import request from "@/utils/request";

export default {
  async fetchCompany() {
    return await request({ url: "/meeting/get-company", method: "post" });
  },
  async fetchDemo() {
    return await request({ url: "/demo/get", method: "get" });
  }
};
