import '@/assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  htmlDom.style.fontSize = `${htmlWidth / 75}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();