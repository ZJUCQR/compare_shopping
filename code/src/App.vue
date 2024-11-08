<template>
  <div id="app">
    <router-view></router-view>
    <footer>
      <p>© 2024 比价购物平台 | <a href="https://github.com/ZJUCQR/compare_shopping" target="_blank">问题反馈</a> | <a href="mailto:3220103318@zju.edu.cn">联系我们</a></p>
    </footer>
  </div>
</template>

<script>
import register from './components/register.vue'; // 自定义注册组件
import login from './components/login.vue'; // 自定义登录组件
import welcome from './components/welcome.vue';

export default {
  name: 'App',
  components: {
    register, // 注册页面组件
    login,    // 登录页面组件
    welcome,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 使页面占满整个视口高度 */
  background-color: #f4f4f9;
  color: #333;
}

router-view {
  flex-grow: 1;  /* 使 router-view 填充剩余空间 */
  padding: 10px;
}

footer {
  position: fixed;
  bottom: 0;  /* 固定在底部 */
  left: 0;    /* 距离左侧 0 */
  width: 100%; /* 宽度 100% */
  background-color: #34495e;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 0.9rem;
  border-top: 4px solid #2c3e50;
  z-index: 10; /* 确保 footer 在页面的最上层 */
}

footer a {
  color: #ecf0f1;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }

  .header p {
    font-size: 1rem;
  }
}
</style>
