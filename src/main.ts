import {createApp} from 'vue'
import App from './App.vue'
// @ts-ignore
import vuerouter from "./Router/index";
import Axios from "@/Axios/Axios";
import Store from "@/Store/Store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "../src/assets/animate.min.css"


const app = createApp(App);

app.use(vuerouter);
/**
 * v3 取消了prototype，所以不能使用该方法绑定到全局中
 */
//app.config.globalProperties.$http = Axios;
app.config.globalProperties.$Store = Store;
// app.use(Store);
app.use(ElementPlus);

app.mount('#app');



