/** 全局唯一数据中心 **/
import { createStore } from "retalk";

import ModelHome from "../redux/modules/home";
const store = createStore({
  home: ModelHome
});

export default store;
