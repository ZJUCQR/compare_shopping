<template>
  <div>
    <h2>欢迎回来，{{ username }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  created() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.$router.push('/login');
    } else {
      // Extract user info from the token or make an API call to get user details
      this.username = '用户';  // This is a placeholder, you should extract the username from the JWT token or API
    }
  },
};
</script>
