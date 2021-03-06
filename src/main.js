import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import httpApi from '@/constant/http-api';
import httpUtil from '@/util/http-util';
import { ElMessage } from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn'

const app = createApp(App);

app.use(store)
    .use(router)
    .use(ElementPlus,{locale})
    .mount('#app');

// 设置全局配置
app.config.globalProperties.$message = ElMessage;
app.config.globalProperties.$httpUtil = httpUtil;
app.config.globalProperties.$httpApi = httpApi;
