<template>
  <div
    class="flex flex-row flex-wrap justify-center px-0 sm:pr-12 animate-fade-up animate-once animate-ease-in"
  >
    <section
      v-for="cd in filter_list"
      @click="country_redriect(cd.name)"
      :key="cd.numericCode"
      class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 flex flex-col mb-20 bg-white shadow-md sm:ml-16 rounded-md cursor-pointer dark:bg-[#2b3743] dark:text-white"
    >
      <!-- card in image -->
      <div class="">
        <img
          :src="cd.flag"
          class="object-cover w-[300px] h-[170px] rounded-t-md"
        />
      </div>
      <!-- card in country name -->
      <div class="pl-10 pt-8 w-72 sm:w-80">
        <h1 class="font-bold text-xl">{{ cd.name }}</h1>
      </div>
      <!-- card in other details -->
      <div class="ml-10 mt-6 mb-10">
        <p class="mb-2">
          <b class="font-semibold">Population :</b>
          {{ cd.population.toLocaleString("en-US") }}
        </p>
        <p class="mb-2">
          <b class="font-semibold">Region : </b>{{ cd.region }}
        </p>
        <p class=""><b class="font-semibold">Captial :</b> {{ cd.capital }}</p>
      </div>
    </section>
    <!-- No-result-Found-div -->
    <div v-if="!filter_list.length" class="sm:mt-72">
      <h1 class="sm:text-3xl text-xl font-bold m-8">"{{ ip }}" Country Not Found ....</h1>
    </div>
  </div>
</template>

<script setup>
import { usedata } from "@@/composables/state";
import { storeToRefs } from "pinia";
const { ip, filter_list, fbc } = storeToRefs(usedata());
const country_redriect = (cn_name) => {
  navigateTo(`country/${cn_name}`);
};
</script>
