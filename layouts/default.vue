<template>
  <main>
    <slot />
  </main>
</template>

<script setup></script>

<style lang="scss">
// import poppins
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  &::-webkit-scrollbar {
    display: none;
  }
}

main {
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
