<template>
  <div class="backdrop" @click.self="closeModal">
    <div :class="['modal', theme]">
      <div class="modal-header">{{ title }}</div>
      <div class="modal-body">
        <slot></slot>
        <p>{{ content }}</p>
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: String,
    content: String,
    theme: {
      type: String,
      default: 'light'
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.modal {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  height: 200px;
  max-width: 80%;
  z-index: 1051;
}

.modal-header {
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
  color: rgb(159, 158, 158);
}

.modal-body {
  margin-bottom: 20px;
  font-size: 16px;
}

.light {
  background: #fff;
  color: #000;
}

.dark {
  background: #333;
  color: #fff;
}
</style>
