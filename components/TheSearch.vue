<template>
  <div class="flex flex-row">
    <input
      v-model="ip"
      type="text"
      placeholder="Search for a country..."
      class="drop-shadow-sm p-4 rounded-sm pl-20 flex-auto mr-8 text-lg sm:w-[360px] md:w-[450px] dark:bg-[#2b3743] dark:text-white"
    />
    <span class="material-symbols-outlined absolute mt-4 ml-8 dark:text-white"> search </span>
  </div>
</template>

<script setup>
import { usedata } from "@@/composables/state";
import { storeToRefs } from "pinia";
const {ip} = storeToRefs(usedata());
</script>
