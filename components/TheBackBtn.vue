<template>
  <div class="">
    <button
      @click="navigateTo('/')"
      class="bg-white drop-shadow-xl px-10 py-2 rounded-md dark:bg-[#2b3743] dark:text-white"
    >
      <span class="dark:text-white">&larr;</span> Back
    </button>
  </div>
</template>

<style scoped>
span {
  font-size: 20px;
  transform: scale(0.5, 1);
}
</style>
