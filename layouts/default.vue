<template>
  <div>
    <header class="flex flex-row justify-between align-top py-6 px-4 sm:px-6 md:px-24 bg-white dark:bg-[#2b3743]  dark:shadow-md shadow-md">
      <h1 class=" dark:text-white text-black font-bold sm:text-2xl">Where in the world?</h1>
      <h1 @click="toggleDark()" class="text-black dark:text-white text-base font-medium sm:text-lg cursor-pointer">{{ isdark ? "Light" : "Dark" }} Mode</h1>
    </header>
    <slot></slot>
  </div>
</template>

<script setup>
import {useDark, useToggle} from "@vueuse/core"
const isdark = useDark();
const toggleDark = useToggle(isdark);
</script>