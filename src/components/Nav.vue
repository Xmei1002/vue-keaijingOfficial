<template>
  <div class="nav">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="">
    </div>
    <div>
      <ul class="nav-list">
        <li v-for="(nav, index) in navList" :key="index" :class="{ active: activeIndex === index }"
          @click="changeNav(index)">{{ nav }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
let activeIndex = ref(0)
let navList = reactive(['首页', '业务类型', '解决方案', '项目流程', '合作伙伴'])

function changeNav(index: number) {
  activeIndex.value = index
  scroll(index)
}
function scroll(index: number) {
  window.scrollTo({
    top: index * 400,
    behavior: "smooth"
  });
}
</script>

<style scoped>
.nav {
  width: 100%;
  background-color: #34324a;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo {
  width: 6%;
}

.logo img {
  width: 100%;
  height: 100%;
}

.nav-list {
  display: flex;
}

.nav-list li {
  font-size: 1.6rem;
  color: white;
  margin-right: 2rem;
  padding: 0.3rem 0;
  cursor: pointer;
}

.active {
  /* 激活导航项的样式，包括下划线样式 */
  border-bottom: 0.2rem solid rgb(9, 100, 229);
  /* 这里以红色下划线为例，可按需修改 */
}

@media screen and (max-width: 700px) {
  .nav-list {
    display: none;
  }
  .nav{
    display: flex;
    justify-content: center;
  }
}
</style>