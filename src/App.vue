<template>
  <Nav />
  <div class="container">
    <div class="first">
      <div class="banner">
        <div class="first-left">
          <p class="one">低代码让工作更高效</p>
          <p class="two">最优的互联网整体解决方案</p>
          <button class="button">电话联系我们</button>
          <p class="three">咨询电话：17638529098（9：00~18：00）</p>
        </div>
        <div class="first-right">
          <img src="@/assets/images/1.png" alt="">
        </div>
      </div>
    </div>
    <div class="second">
      <Title class="second-title">
        <template #zh>
          <p>业务类型</p>
        </template>
        <template #en>
          <p>Business type</p>
        </template>
      </Title>
      <div class="second-content">
        <div class="content-left">
          <img src="@/assets/images/2.png" alt="">
        </div>
        <div class="content-right">
          <div>
            <p class="right-title">低代码定制</p>
            <p>“低代码”是一种可视化编程方法，允许企业不必通过编写代码 而是通过图形界面快速搭建应用程序。</p>
          </div>
          <div>
            <p class="right-title">纯代码订制</p>
            <p>“纯代码”多用于解决复杂的业务场景，适用多业务，多场景，长维护等中大型项目。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="third">
      <div class="banner">
        <Title class="third-title">
          <template #zh>
            <p>解决方案</p>
          </template>
          <template #en>
            <p>Solution</p>
          </template>
        </Title>
        <div class="third-content">
          <div v-for="(item, index) in solutionList" :key="index" class="min-content"
            @click="showDialog(item.title, item.content, item.img, item.tag)">
            <img src="@/assets/images/kaiguan.png" alt="">
            <p class="third-content-title">{{ item.title }}</p>
            <p class="third-content-content">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <el-dialog v-model="dialogVisible" :title="dialogInfo.title" width="50%">
      <el-button style="margin-bottom: 2rem;" type="primary" round v-for="(item, index) in dialogInfo.tag" :key="index">{{
        item }}</el-button>
      <br>
      <span style="line-height: 2rem;">{{ dialogInfo.content }}</span>
      <br>
      <img class="dialog-img" :src="dialogInfo.img" alt="">
    </el-dialog>
    <div class="fourth">
      <Title class="fourth-title">
        <template #zh>
          <p>项目流程</p>
        </template>
        <template #en>
          <p>Project process</p>
        </template>
      </Title>
      <div class="fourth-content-max">
        <div class="fourth-content-min">
          <div class="fourth-content-title">沟通需求</div>
          <div class="fourth-content-content">项目经理了解客户需求</div>
        </div>
        <div class="fourth-content-min">
          <div class="fourth-content-title">需求评估</div>
          <div class="fourth-content-content">根据需求评估选择更合适的定制方式</div>
        </div>
        <div class="fourth-content-min">
          <div class="fourth-content-title">定制方案</div>
          <div class="fourth-content-content">技术负责人订制 项目开发方案</div>
        </div>
        <div class="fourth-content-min">
          <div class="fourth-content-title">项目开发</div>
          <div class="fourth-content-content">确认方案后开发人员进行项目开发</div>
        </div>
        <div class="fourth-content-min">
          <div class="fourth-content-title">测试验收</div>
          <div class="fourth-content-content">开发完成后 客户测试验收</div>
        </div>
      </div>
    </div>
    <div class="fifth">
      <img src="@/assets/images/dibu.png" alt="">
    </div>
  </div>
  <div class="footer">
    <div class="serve footer-content">
      <div class="title">服务</div>
      <ul>
        <li>网站建设</li>
        <li>软件开发</li>
        <li>电商平台建设</li>
        <li>APP开发</li>
        <li>微信小程序开发</li>
        <li>企业微信/钉钉定制开发</li>
      </ul>
    </div>
    <div class="solution footer-content">
      <div class="title">解决方案</div>
      <ul>
        <li>物联网类</li>
        <li>跨境电商解决方案</li>
        <li>新零售解决方案</li>
        <li>移动电商类</li>
        <li>移动办公类</li>
        <li>政务类</li>
        <li>新媒体资讯类</li>
      </ul>
    </div>

    <div class="contact footer-content">
      <div class="title">联系我们</div>
      <ul>
        <li>客服热线 :0371-61875099 </li>
        <li>合作垂询 :17638529098 </li>
        <li>客服邮箱 :service@vchaoxi.com</li>
        <li>友情链接：<a href="http://vchaoxi.com/" target="_blank">微潮汐</a> <a href="http://linqugui.com"
            target="_blank">邻取柜</a> <a href="https://blog.keaijing.com.cn/" target="_blank">可爱鲸博客</a></li>
        <li>地址： </li>
        <li>河南省郑州市长椿路11号 国家大学科技园孵化1号楼3A07</li>
        <li>备案号：沪ICP备2023010675号-1</li>
      </ul>

    </div>
  </div>
</template>

<script setup lang="ts">
import Nav from "@/components/Nav.vue";
import Title from "@/components/Title.vue";

import { reactive, ref } from "vue";
let solutionList = reactive([
  { title: '后勤设备报修系统', content: '用于学校后勤设备损坏后报修、指派、维修、反馈、归档等业务流程的闭环管理，实现过程跟踪监管和工单统计功能。', img: '/src/assets/images/houqin.png', tag: ['低代码', '企业微信'] },
  { title: '邻取BPM系统', content: '打通线索、客户、商机、报价到订单的全流程自动化闭环管理，驱动业绩增长，让企业的线索获取更高质、签单转化更快速。', img: '/src/assets/images/linqu.png', tag: ['低代码', '钉钉'] },
  { title: '工程项目管理系统', content: '工程项目管理指的是企业按照合同约定，在工程项目决策阶段，为业主编制可行性研究报告，进行可行性分析和项目策划；在工程项目实施阶段，为业主提供招标代理、设计管理、采购管理、施工管理和试运行(竣工验收)等服务，代表业主对工程项目进行质量、安全、进度、费用、合同、信息等管理和控制。', img: '/src/assets/images/gongcheng.png', tag: ['低代码', '氚云'] },
  { title: '消防救援智慧管理平台', content: '打造“一个平台”即智慧管理平台，“四个系统”即“灭火救援指挥部、政治部、后勤、防火”四个业务子系统，平台拥有强大的扩展性，便于二次开发和硬件接入。实现工作流程在线化、协同数据共享化、队伍管理精细化、任务跟踪精准化。', img: '/src/assets/images/xiaofang.png', tag: ['纯代码', '钉钉'] },
  { title: '蜜雪冰城网点管理平台', content: '通过参与公益活动，为企业营造健康向上的企业文化氛围，增强员工的身体素质，打造一个团结友爱、富有朝气的员工团队。', img: '/src/assets/images/mixue.png', tag: ['纯代码', '企业微信'] },
  { title: '机房动环监控系统', content: '机房动环监控系统是一款高安全、稳定可靠的满足大数据要求的机房环境监控系统。系统与前端各智能环境设备进行实时通讯交互，通过智能监控、分析、控制，并以多样化的报警处理机制和友好的展现方式，使机房运维人员及时了解机房设备运行状况，实现统一监控、统一管理、统一展示的运维管理目的，大大降低管理人员负担，提高运维效率。系统具备稳定、可靠、安全的特性，提供7*24*365不间断的系统监控及运行保障。', img: '/src/assets/images/jifang.png', tag: ['纯代码', '系统平台'] }
])
let dialogInfo = reactive({
  title: '',
  content: '',
  img: '',
  tag: ['']
})
let dialogVisible = ref(false)
function showDialog(title: string, content: string, img: string, tag: Array<string>) {
  dialogInfo.title = title
  dialogInfo.content = content,
  dialogInfo.tag = tag
  dialogInfo.img = img
  dialogVisible.value = true
}
</script>
<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif, "宋体";
}

.first {
  padding: 40px;
  background-color: #e1e3fa;

}

.first .banner {
  /* height: 40rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  margin: 0 auto;
}

.first-right img {
  width: 30rem;
}

.first-left {
  .one {
    font-size: 2.8rem;
    font-weight: 900;
    margin-bottom: 2rem;
  }

  .two {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 2rem;
  }

  .three {
    margin-bottom: 2rem;
    font-family: San Francisco;
  }

  .button {
    background-color: #266fe8;
    /* Green */
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.6rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
}

.second {
  width: 65%;
  margin: 0 auto;
  margin-bottom: 4rem;
}

.second-title {
  margin: 4rem 0;
}

.second-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.second-content img {
  margin-right: 3rem;
  width: 30rem;
}

.content-right p:nth-child(2) {
  color: rgb(138, 138, 138);
}

.content-right div {
  padding: 2rem;
  border: 0.1rem solid rgb(211, 209, 209);
  margin-bottom: 1rem;
}

.right-title {
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 900;
  margin-bottom: 2rem;
}

.right-title::before {
  content: "";
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  background-image: url('@/assets/images/ico1.png');
  background-size: cover;
  margin-right: 0.5rem;
}

.banner {
  width: 80%;
  margin: 0 auto;
}

.third {

  padding: 6rem 0;
  background-color: #e1e3fa;
}

.third-title {
  margin-bottom: 3rem;
}

.third-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.third-content img {
  width: 4rem;
  margin-bottom: 1rem;
}

.min-content {
  box-sizing: border-box;
  margin: 1rem;
  width: 30%;
  /* height: 10rem; */
  background-color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(100, 100, 111, 0.2) 0rem 0.7rem 2.9rem 0rem;
  cursor: pointer;
}

.min-content:hover {
  box-shadow: 0 0 20px 3px #687adf;
}

.third-content-title {
  font-weight: 900;
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.third-content-content {
  color: rgb(138, 138, 138);
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.fourth {
  width: 80%;
  margin: 0 auto;
  padding: 8rem 0;

}

.fourth-title {
  margin-bottom: 5rem;
}

.fourth-content-max {
  display: flex;
  justify-content: center;
}

.fourth-content-min {
  width: 10rem;
  height: 8rem;
  margin-right: 2rem;
}

.fourth-content-content {
  margin-top: 1rem;
  width: 10rem;
  padding-left: 1rem;
  color: #4a4949;
}

.fourth-content-min:nth-child(2n+1) .fourth-content-title {
  width: 10rem;
  font-size: 1.6rem;
  color: #fff;
  font-weight: 900;
  padding: 1rem;
  background-image: url('@/assets/images/shen.png');
  background-size: contain;
  background-repeat: no-repeat;
  padding-left: 2rem;
}

.fourth-content-min:nth-child(2n) .fourth-content-title {
  width: 10rem;

  font-size: 1.6rem;
  color: #5462e6;
  font-weight: 900;
  font-size: 1.6rem;
  padding: 1rem;
  padding-left: 2rem;
  background-image: url('@/assets/images/qian.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.fifth img {
  width: 100%;
}

.footer {
  /* background-color: #fbfbfb; */
  padding: 3rem 0;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

}

.footer .title {
  font-size: 2rem;
  font-weight: 900;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid rgb(187, 185, 185);
  margin-bottom: 2rem;
}

.footer-content ul li {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.footer-content a {
  color: #4a90e7;
}

.dialog-img{
  width: 40rem;
  margin-top: 2rem;
}
@media screen and (max-width: 700px) {
  .first img {
    width: 10rem;
  }

  .second-content img {
    width: 10rem;
  }

  .third-content {
    display: block;
  }

  .min-content {
    width: 100%;
  }
  .dialog-img{
    width: 20rem;
  }
}
</style>
