<template>
  <el-card>
    <template #header>
      基本用法
      <el-tag>注册</el-tag>
      <el-tag>跳转</el-tag>
      <el-tag>编程式导航</el-tag>
      <el-tag>命名路由</el-tag>
      <el-tag>传参</el-tag>
    </template>

    <nav class="routelink-nav">
      <RouterLink :to="currentPath + '/SubView1'">SubView1</RouterLink>
      <RouterLink :to="currentPath + '/SubView2'">SubView2</RouterLink>

      <el-tooltip class="box-item" effect="dark"
        content="router.push({ name: 'RouterDemoSubView1WithId', params: { id: 1 } })" placement="top">
        <el-button type="danger" style="margin: 0 10px;" link
          @click="router.push({ name: 'RouterDemoSubView1WithId', params: { id: 1 } })">
          SubView1(params传参)
        </el-button>
      </el-tooltip>
      <el-tooltip class="box-item" effect="dark" content="router.push({ path: currentPath + '/SubView1/2' })"
        placement="top">
        <el-button type="danger" style="margin: 0 10px;" link
          @click="router.push({ path: currentPath + '/SubView1/2' })">
          SubView1(params传参)
        </el-button>
      </el-tooltip>

      <el-tooltip class="box-item" effect="dark" content='to="/SubView2?id=1"' placement="top">
        <router-link :to="currentPath + '/SubView2?id=1'">SubView2(query传参)</router-link>
      </el-tooltip>
      <el-tooltip class="box-item" effect="dark" content='to="{ path: currentPath + "/SubView2", query: { id: 2 } }'
        placement="top">
        <router-link :to="{ path: currentPath + '/SubView2', query: { id: 2 } }">SubView2(query传参)</router-link>
      </el-tooltip>

      <el-tooltip class="box-item" effect="dark" content='router中props:true' placement="top">
        <router-link :to="currentPath + '/SubView3/3'">SubView3(props传参)</router-link>
      </el-tooltip>
    </nav>

    <div class="router-contant">
      <RouterView />
    </div>

    <div class="router-footer">
      <el-button type="" @click="router.go(-1)" text>
        <el-icon>
          <ArrowLeft />
        </el-icon>
      </el-button>
      <el-button type="" @click="router.go(1)" text>
        <el-icon>
          <ArrowRight />
        </el-icon>
      </el-button>
    </div>
  </el-card>

  <br />

  <el-card>
    <template #header>
      命名视图(RouterView)
      <el-tag type="danger">点击下方菜单时，上方RouterView会清空，是因为在同一层路由中存在多个RouterView时，不指定名称默认为空。</el-tag>
    </template>
    <div class="router-main">
      <div class="router-header">
        <!-- 使用el-menu -->
        <el-menu mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
          <el-menu-item :index="currentPath + '/View1'">View1</el-menu-item>
          <el-menu-item :index="currentPath + '/View2'">View2</el-menu-item>
        </el-menu>
      </div>
      <div class="router-contant">
        <div class='n-header'>
          <RouterView name="header" />
        </div>
        <div class='n-contant'>
          <RouterView name="contant" />
        </div>
        <div class='n-footer'>
          <RouterView name="footer" />
        </div>
      </div>
    </div>

  </el-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const demoRoutes = [
  {
    path: 'SubView1/',
    name: 'RouterDemoSubView1',
    component: () => import('@/views/scaling-up/SubViews/SubView1.vue')
  },
  {
    path: 'SubView2/',
    name: 'RouterDemoSubView2',
    component: () => import('@/views/scaling-up/SubViews/SubView2.vue'),
    props: true
  },
  {
    path: 'SubView1/:id',
    name: 'RouterDemoSubView1WithId',
    component: () => import('@/views/scaling-up/SubViews/SubView1.vue')
  },
  {
    path: 'SubView3/:id',
    name: 'RouterDemoSubView3WithId',
    component: () => import('@/views/scaling-up/SubViews/SubView3.vue'),
    props: true
  },

  {
    path: 'View1/',
    name: 'NamedRouterView1',
    // 注意复数components
    components: {
      header: () => import('@/views/scaling-up/SubViews/HeaderView1.vue'),
      contant: () => import('@/views/scaling-up/SubViews/ContantView.vue'),
      footer: () => import('@/views/scaling-up/SubViews/FooterView1.vue')
    }
  },
  {
    path: 'View2/',
    name: 'NamedRouterView2',
    // 注意复数components
    components: {
      header: () => import('@/views/scaling-up/SubViews/HeaderView2.vue'),
      contant: () => import('@/views/scaling-up/SubViews/ContantView.vue'),
      footer: () => import('@/views/scaling-up/SubViews/FooterView2.vue')
    }
  },
]

const router = useRouter()
const route = useRoute()
const currentPath = ref("")
onMounted(() => {
  // 易错点：`<script setup>` 是编译阶段处理的语法糖，它相当于直接把变量写在 setup() 函数体中。在模块严格模式下普通函数this绑定undefined。（非严格模式是window）
  // 所以setup不能用this.$route，而template可以用（有实例）
  // console.log(this.$route)
  console.log("route", route)
  currentPath.value = route.path
  demoRoutes.forEach((item) => router.addRoute(route.name, item))
  console.log("router", router)
});

</script>

<style scoped>
.router-main {
  display: flex;
  flex-direction: column;
  height: 280px;
  border: solid 1px lightgrey;
}

/* .router-header {
  height: 80px;
} */

.routelink-nav {
  background-color: lightblue;
  width: 100%;
}

.routelink-nav a {
  /* text-decoration: none; */
  margin: 20px;
  display: inline-block;
  font-size: 14px;
}

.router-contant {
  /* 吸收剩余空间 */
  flex: 1;
  /* 防止溢出 */
  overflow: auto;
  height: 120px;
  display: flex;
  flex-direction: column;
}

.router-footer {
  display: flex;
  flex-direction: row;
  justify-content: right;
}

.router-contant .n-header {
  height: 60px;
}

.router-contant .n-footer {
  height: 20px;
}

.router-contant .n-contant {
  /* 吸收剩余空间 */
  flex: 1;
}

.el-card__header span {
  margin: 0 5px;
}
</style>