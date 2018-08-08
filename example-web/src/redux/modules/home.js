/**
 * 测试页的Model 在src/store/index.js中被挂载到store上，命名为home
 * 项目中不同的大模块可以创建不同的js作为model
 * 此model中包含了用于src/container/home模块的数据和方法
 * **/
import Server from '../utils/fetch-api'; // 自己封装的异步请求方法
// import axios from 'axios';

const model = {
  /** store数据 **/
  state: {
    count: 0, // 测试数字
    msg: ''
  },
  /** reducers **/
  reducers: {
    add(state, payload) {
      return { ...state, count: payload };
    },
    saveRes(state, payload) {
      return { ...state, msg: payload };
    }
  },
  /** actions **/
  actions: {
    // 测试 - 数字加1
    onTestAdd(params) {
      this.add(params + 1); // 调用上面reducers中的add方法
    },
    async onTestSave() {
      const res = await Server.newFetch('/example-www/test/saveUser', {})
      console.log(res);
      this.saveRes(res.data.notes);
    }
  }
};

export default model;
