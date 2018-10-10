import Mock from "mockjs";
import demo from "./demo";

if (process.env.NODE_ENV === "development") {
  Mock.mock(/\/demo\/get/, "get", demo.getList);
}

export default Mock;
