<template>
  <div class="register-page">
    <!-- Header 部分 -->
    <div class="header">
      <h1>欢迎来到我的应用</h1>
      <p>您的购物比价助手</p>
    </div>

    <!-- 注册表单 -->
    <div class="register-form">
      <h2>注册</h2>
      <form @submit.prevent="registerUser">
        <div>
          <label>新用户名:</label>
          <input v-model="username" type="text" required />
        </div>
        <div>
          <label>邮箱:</label>
          <input v-model="email" type="email" required />
        </div>
        <div>
          <label>密码:</label>
          <input v-model="password" type="password" required />
        </div>
        <div>
          <label>确认密码:</label>
          <input v-model="confirmPassword" type="password" required />
        </div>
        
        <!-- 拆分按钮 -->
        <div class="button-group">
          <button type="button" @click="registerUser">注册</button>
          <button type="button" @click="goToLogin">去登录</button>
        </div>
      </form>
    </div>

    <!-- Popup 弹出框 -->
    <Popup
      :visible="showPopup"
      :title="'提示'"
      :message="popupMessage"
      @close="closePopup"
    />
  </div>
</template>

<script>
import api from '@/api';
import Popup from './Popup.vue';

export default {
  components: {
    Popup,  // 注册 Popup 组件
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPopup: false,   // 控制弹出框显示的标志
      popupMessage: '',   // 弹出框的提示内容
    };
  },
  methods: {
    async registerUser() {
      // 检查必填项是否填写
      if (!this.username || !this.email || !this.password || !this.confirmPassword) {
        this.popupMessage = '请填写所有必填项';  // 设置弹出框内容
        this.showPopup = true;  // 显示弹出框
        return;
      }

      // 检查密码和确认密码是否一致
      if (this.password !== this.confirmPassword) {
        this.popupMessage = '密码和确认密码不一致';  // 设置弹出框内容
        this.showPopup = true;  // 显示弹出框
        return;
      }

      if (this.username.length < 6) {
          this.popupMessage = '用户名至少为 6 个字符';  // 设置弹出框内容
          this.showPopup = true;  // 显示弹出框
          return;
      }

      if (this.password.length < 6) {
        this.popupMessage = '密码至少为 6 个字符';  // 设置弹出框内容
        this.showPopup = true;  // 显示弹出框
        return;
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(this.email)) {
        this.popupMessage = '请输入有效的邮箱地址';  // 设置弹出框内容
        this.showPopup = true;  // 显示弹出框
        return;
      }

      try {
        // 调用后端接口进行注册
        const response = await api.post('register/', {
          username: this.username,
          email: this.email,
          password: this.password,
          confirm_password: this.confirmPassword,
        });

        this.popupMessage = '注册成功！';  // 设置注册成功的提示
        this.showPopup = true;  // 显示弹出框
        this.popupTitle = '成功'; // 设置弹出框标题
        setTimeout(() => {
          this.$router.push('/login');  // 注册成功后跳转到登录页面
        }, 1500);  // 延迟1.5秒后跳转

      } catch (error) {
        this.popupMessage = `"该用户名或密码已被占用，请选择其他用户名。"`;  // 错误提示
        this.showPopup = true;  // 显示弹出框
      }
    },

    goToLogin() {
      this.$router.push('/login');  // 跳转到登录页面
    },

    // 关闭弹出框
    closePopup() {
      this.showPopup = false;
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

/* 注册页面的整体布局 */
.register-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff6f61, #ff914d); /* 渐变背景：时尚感更强 */
  padding: 0px; /* 增加内边距减少顶部空白 */
}

/* Header 样式 */
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
  color: white;
  padding: 8px 20px;
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
  margin-bottom: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
}

.header p {
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 0;
}

/* 注册表单样式 */
.register-form {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  transform: translateY(-20px);
  animation: fadeIn 0.6s ease-out;
}

.register-form h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  color: #34495e;
  font-weight: bold;
}

.register-form div {
  margin-bottom: 20px;
}

.register-form label {
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
  color: #555;
}

.register-form input {
  width: 100%;
  padding: 14px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.register-form input:focus {
  border-color: #ff914d;
  outline: none;
  box-shadow: 0 0 12px rgba(255, 145, 77, 0.5);
}

/* 注册按钮和登录按钮样式 */
.button-group {
  display: flex;
  justify-content: space-between;
  gap: 10px;  /* 添加按钮之间的间距 */
}

.register-form button {
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

.register-form button:hover {
  background-color: #2c3e50;
  transform: translateY(-4px);
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
    font-size: 1rem;
  }

  .register-form h2 {
    font-size: 2rem;
  }

  .register-form button {
    width: 100%;
    margin-bottom: 10px;
  }

  .button-group {
    flex-direction: column;
  }
}
</style>
