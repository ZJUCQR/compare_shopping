<template>
  <div class="end-page">
    <div class="content">
      <h1>感谢您的使用！</h1>
      <p>我们希望您有一个愉快的体验。</p>
      <button @click="goToHome">返回首页</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      // 点击返回首页按钮时跳转到首页
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
/* 页面容器样式 */
.end-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff6f61, #ff914d); /* 渐变背景 */
  text-align: center;
  color: white;
}

/* 内容区域 */
.content {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 40px 50px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

.content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}

.content p {
  font-size: 1.4rem;
  margin-bottom: 30px;
  font-weight: 300;
}

.content button {
  padding: 15px 30px;
  background-color: #34495e;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.content button:hover {
  background-color: #2c3e50;
  transform: translateY(-4px);
}
</style>
