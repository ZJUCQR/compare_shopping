<template>
  <div class="popup" v-if="visible">
    <div class="popup-overlay" @click="close"></div>
    <div class="popup-content">
      <div class="popup-header">
        <h3>{{ title }}</h3>
        <button @click="close">×</button>
      </div>
      <div class="popup-body">
        <p>{{ message }}</p>
      </div>
      <div class="popup-footer">
        <button @click="close">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    },
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

.popup-content {
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.popup-header h3 {
  margin: 0;
  font-size: 1.2rem;
}

.popup-header button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.popup-body p {
  margin: 0;
  font-size: 1rem;
}

.popup-footer {
  text-align: right;
}

.popup-footer button {
  padding: 6px 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.popup-footer button:hover {
  background-color: #2980b9;
}
</style>
