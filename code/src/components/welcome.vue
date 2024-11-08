<template>
  <div class="start-page">
    <div class="overlay"></div>
    <div class="content">
      <h1 class="title">欢迎来到购物比价助手</h1>
      <p class="description">让我们帮你找到最优价格，开始您的购物之旅吧！</p>
      <button @click="goToLogin" class="start-button">开始</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push('/login');  // 点击按钮后跳转到 login 页面
    },
  },
};
</script>

<style scoped>
/* 背景的动画效果 */
@keyframes moveBackground {
  0% { background-position: 0 0; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0 0; }
}

/* 整体布局 */
.start-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(45deg, #ff6f61, #ff914d, #6a1b9a, #1e88e5, #26c6da);
  background-size: 400% 400%;
  animation: moveBackground 10s ease infinite;
  overflow: hidden;
  position: relative;
}

/* 遮罩效果 */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

/* 内容居中 */
.content {
  text-align: center;
  color: white;
  z-index: 2;
}

.title {
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.description {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 40px;
}

.start-button {
  padding: 16px 32px;
  font-size: 1.5rem;
  background-color: #34495e;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.start-button:hover {
  background-color: #2c3e50;
  transform: scale(1.1);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .description {
    font-size: 1.2rem;
  }

  .start-button {
    font-size: 1.2rem;
    padding: 12px 24px;
  }
}
</style>
