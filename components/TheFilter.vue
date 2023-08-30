<template>
  <div>
    <!-- <h1>Selected : {{ ipf }}</h1> -->
    <!-- <h2>{{ fbc }}</h2> -->
    <select v-model="ipf" class="bg-white shadow-sm px-4 py-5 font-medium rounded-md mt-8 sm:mt-0 dark:bg-[#2b3743] dark:text-white">
      <option value="">Filter by Region</option>
      <option>Asia</option>
      <option>Africa</option>
      <option>Americas</option>
      <option>Antarctic ocean</option>
      <option>Europe</option>
      <option>Oceania</option>
      <option>Polar</option>
    </select>
  </div>
</template>

<script setup>
import { usedata } from "@@/composables/state";
import { storeToRefs } from "pinia";
const { ipf} = storeToRefs(usedata());


</script>
