import Mock from "mockjs";
export default {
  getList: () => {
    return Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      "list|1-10": [
        {
          "id|+1": 1,
          "number|123.1-10": 1
        }
      ]
    });
  }
};
