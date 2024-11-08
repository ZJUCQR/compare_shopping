<template>
  <div class="login-page">
    <div class="header">
      <h1>欢迎来到我的应用</h1>
      <p>您的购物比价助手</p>
    </div>

    <div class="login-form">
      <h2>登录</h2>
      <form @submit.prevent="loginUser">
        <div>
          <label>用户名:</label>
          <input v-model="username" type="text" required />
        </div>
        <div>
          <label>密码:</label>
          <input v-model="password" type="password" required />
        </div>

        <div class="button-group">
          <button @click.prevent="loginUser" type="button">登录</button>
          <button @click.prevent="goToRegister" type="button">注册</button>
        </div>
      </form>
    </div>

    <Popup
      :visible="showPopup"
      :title="'提示'"
      :message="popupMessage"
      @close="showPopup = false"
    />
  </div>
</template>

<script>
import api from '@/api';
import Popup from './Popup.vue'; // 引入自定义提示框组件

export default {
  components: {
    Popup,  // 注册 Popup 组件
  },
  data() {
    return {
      username: '',
      password: '',
      showPopup: false,  // 控制弹出框显示
      popupMessage: '',  // 弹出框的消息内容
    };
  },
  methods: {
    async loginUser() {
      if (!this.username || !this.password) {
        this.popupMessage = '用户名或密码不能为空';  // 设置弹出框内容
        this.showPopup = true;  // 显示弹出框
        return;
      }

      try {
        const response = await api.post('login/', {
          username: this.username,
          password: this.password,
        });

        localStorage.setItem('token', response.data.access_token);
        this.$router.push('/welcome');
      } catch (error) {
        this.popupMessage = '用户名或密码错误';  // 设置弹出框内容
        this.showPopup = true;  // 显示弹出框
      }
    },

    goToRegister() {
      this.$router.push('/register');
    },
  },
};
</script>

<style scoped>
/* 通用样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

/* 登录页面的整体布局 */
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff6f61, #ff914d); /* 渐变背景：时尚感更强 */
  padding: 20px; /* 增加内边距减少顶部空白 */
}

/* Header 样式 */
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
  color: white;
  padding: 30px 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  transform: translateY(-20px); /* 轻微向上漂浮效果 */
  width: 100%;
  max-width: 700px; /* 设置最大宽度 */
  text-align: center; /* 居中文本 */
}

.header h1 {
  font-size: 3.5rem;
  margin-bottom: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
}

.header p {
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 0;
}

/* 登录表单样式 */
.login-form {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  transform: translateY(-20px);
  animation: fadeIn 0.6s ease-out;
}

.login-form h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  color: #34495e;
  font-weight: bold;
}

.login-form div {
  margin-bottom: 20px;
}

.login-form label {
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
  color: #555;
}

.login-form input {
  width: 100%;
  padding: 14px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.login-form input:focus {
  border-color: #ff914d;
  outline: none;
  box-shadow: 0 0 12px rgba(255, 145, 77, 0.5);
}

/* 登录和注册按钮样式 */
.button-group {
  display: flex;
  justify-content: space-between;
}

.login-form button {
  width: 48%;
  padding: 16px;
  background-color: #34495e;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.login-form button:hover {
  background-color: #2c3e50;
  transform: translateY(-4px);
}

/* 按钮间的间距 */
.button-group button:first-child {
  margin-right: 4%;
}

/* 动画效果 */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .header h1 {
    font-size: 2.8rem;
  }

  .header p {
    font-size: 1.1rem;
  }

  .login-form h2 {
    font-size: 2.2rem;
  }

  .login-form button {
    width: 100%;
    margin-bottom: 10px;
  }

  .button-group {
    flex-direction: column;
  }
}
</style>
