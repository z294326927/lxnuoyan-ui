/*
 * @Author: 
 * @Date: 2021-12-03 14:26:48
 * @LastEditTime: 2021-12-16 14:59:35
 * @LastEditors: tanhaolong
 * @Descripttion: 
 */
// 导入颜色选择器组件
import Dialog from "./Dialog/index.js";
import Cell from "./Cell/index.js";
import Message from "./Message/index.js";
import Toast from "./Toast/index.js";
import Loading from "./Loading/index.js";
import Empty from "./Empty/index.js";
import Tag from "./Tag/index.js";
import CountUp  from "./CountUp/index.js";
import Ellipsis from "./Ellipsis/index.js";
import Numeral from "./Numeral/index.js";
import Actionsheet from "./Actionsheet/index.js";
import Switch from "./Switch/index.js";
import Evaluate from "./Evaluate/index.js";
import './index.css';

// 存储组件列表
const components = [Dialog,Cell,Empty,Tag,CountUp,Ellipsis,Actionsheet,Switch,Evaluate];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  });
  Vue.config.globalProperties.$Numeral = Numeral;
  Vue.config.globalProperties.$Message = Message;
  Vue.config.globalProperties.$Toast = Toast;
  Vue.config.globalProperties.$Loading = Loading;
};
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  Dialog,Cell,Empty,Tag,CountUp,Ellipsis,Actionsheet,Switch,Evaluate
};