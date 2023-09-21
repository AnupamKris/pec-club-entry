<template>
  <div class="input-field" v-if="type == 'text'">
    <div class="icon">{{ number }}</div>
    <div class="col">
      <label for="input">{{ label }}</label>
      <input
        type="text"
        id="input"
        :name="label"
        placeholder="Enter you full name"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
  <div class="input-field" v-else-if="type == 'select'">
    <div class="icon">{{ number }}</div>
    <div class="col">
      <label for="input">{{ label }}</label>
      <select
        :value="modelValue"
        :name="label"
        @input="$emit('update:modelValue', $event.target.value)"
      >
        <option value="">Select your department</option>
        <option value="AIDS">AI & DS</option>
        <option value="AIML">AI & ML</option>
        <option value="CS">CS</option>
        <option value="IT">IT</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="EEE">EEE</option>
        <option value="BT">BT</option>
        <option value="MECH">Mechanical</option>
        <option value="MECHATRONICS">Mechatronics</option>
        <option value="CIVIL">Civil</option>
      </select>
    </div>
  </div>
  <div class="input-field" v-else-if="type == 'section'">
    <div class="icon">{{ number }}</div>
    <div class="col">
      <label for="input">{{ label }}</label>
      <select
        :value="modelValue"
        :name="label"
        @input="$emit('update:modelValue', $event.target.value)"
      >
        <option value="">Select your section</option>
        <option value="None">None</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
    </div>
  </div>
  <div class="input-field" v-else>
    <div class="icon">{{ number }}</div>
    <div class="col">
      <label for="input">{{ label }}</label>
      <select
        :value="modelValue"
        :name="label"
        @input="$emit('update:modelValue', $event.target.value)"
      >
        <option value="">Select your year</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  modelValue: String,
  number: String,
  type: {
    type: String,
    default: "text",
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.input-field {
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 20px;

  .icon {
    width: 50px;

    font-size: 14px;
    border-radius: 20px;

    border: 1px solid #ffffff;
    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .col {
    width: calc(100% - 50px);
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    color: #ffffff;

    padding-left: 10px;

    input {
      width: 100%;
      height: 50px;
      border: none;
      outline: none;
      //   padding: 0 20px;
      background: inherit;
      color: #ffffff;
      border-bottom: 1px solid #ffffff;
      &::placeholder {
        color: white;
      }
    }

    select {
      width: 100%;
      height: 50px;
      border: none;
      outline: none;
      //   padding: 0 20px;
      background: inherit;
      color: #ffffff;
      border-bottom: 1px solid #ffffff;
    }
  }
}

@media only screen and (max-width: 768px) {
  .input-field {
    flex-direction: column;
    margin-bottom: 20px;

    .icon {
      width: 40px;
      height: 40px;
      font-size: 12px;

      display: flex;
      justify-content: center;
      align-items: center;

      margin-left: 10px;
    }

    .col {
      width: 100%;
    }
  }
}
</style>
