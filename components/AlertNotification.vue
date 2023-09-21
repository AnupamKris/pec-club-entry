<template>
  <div class="alert" :class="type">
    <span>
      <Icon :name="icon" />
    </span>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  type: String,
  message: String,
});

const icon = computed(() => {
  switch (props.type) {
    case "success":
      return "ep:success-filled";
    case "error":
      return "ep:circle-close-filled";
    case "warning":
      return "ep:warning-filled";
    default:
      return "ep:success-filled";
  }
});
</script>

<style lang="scss" scoped>
.alert {
  width: 300px;
  min-height: 60px;
  height: auto;

  display: flex;
  justify-content: space-between;
  //   align-items: center;

  background: #1f1f1f;
  border-radius: 5px;
  //   border: 2px solid;
  overflow: hidden;

  color: white;

  margin-bottom: 10px;

  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

  span {
    width: 50px;

    background: #61ff76;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 32px;
    color: #1f1f1f;
  }

  p {
    width: 250px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.success {
  border-right: #61ff76 5px solid;
  span {
    background: #61ff76;
  }
}

.error {
  border-right: #ff6161 5px solid;
  span {
    background: #ff6161;
  }
}

.warning {
  border-right: #ffda61 5px solid;
  span {
    background: #ffda61;
  }
}
</style>
