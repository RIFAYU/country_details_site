<template>
  <main class="px-10 sm:px-24 pt-16">
    <!-- Back button -->
    <div>
      <TheBackBtn />
    </div>

    <!-- Main div -->
    <div
      class="mt-20 dark:text-white"
      v-for="cd in filter_list"
      :key="cd.numericCode"
    >
      <!-- contidional rendering -->
      <section
        v-if="cd.name == country_name"
        class="flex flex-col sm:flex-col md:flex-col lg:flex-row"
      >
        <!-- Image Div -->
        <div class="sm:mr-0 md:mr-0 lg:mr-32">
          <img
            :src="cd.flag"
            class="object-fill w-[540px] sm:h-[420px] shadow-lg rounded-md"
          />
        </div>
        <!-- three box structure -->
        <div class="flex flex-col flex-1">
          <!-- two layer box -->
          <div class="flex flex-col sm:flex-row justify-between">
            <!-- Detail 1 -->
            <div class="">
              <h1 class="text-4xl font-bold mt-16">{{ cd.name }}</h1>
              <p class="mb-4 mt-10">
                <span class="font-semibold">Native Name : </span
                >{{ cd.nativeName }}
              </p>
              <p class="mb-4">
                <span class="font-semibold">Population : </span
                >{{ cd.population.toLocaleString("en-US") }}
              </p>
              <p class="mb-4">
                <span class="font-semibold">Region : </span>{{ cd.region }}
              </p>
              <p class="mb-4">
                <span class="font-semibold">Sub Region : </span
                >{{ cd.subregion }}
              </p>
              <p class="mb-4">
                <span class="font-semibold">Capital : </span>{{ cd.capital }}
              </p>
            </div>
            <!-- Detail 2 -->
            <div class="flex flex-col mt-16 sm:mt:0 justify-center">
              <p class="mb-4">
                <span class="font-semibold">Top Level Domain : </span
                >{{ cd.topLevelDomain[0] }}
              </p>
              <p class="mb-4">
                <span class="font-semibold">Curriences : </span
                >{{ cd.currencies[0].name }}
              </p>
              <p v-for="(lang, id) in cd.languages" class="mb-2">
                <span class="font-semibold">Language {{ id + 1 }} : </span>
                {{ lang.name }}
              </p>
            </div>
          </div>
          <!-- Border countries -->
          <div class="mt-20" v-if="cd.borders">
            <span class="font-semibold">Boders Countries : </span>
            <div v-for="border in cd.borders" class="inline-block">
              <p
                class="dark:bg-[#2b3743] bg-white drop-shadow-lg mt-4 ml-2 px-4 rounded-sm"
              >
                {{ border }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- The table -->
    <!-- <LazyTheTable /> -->
  </main>
</template>

<script setup>
import { usedata } from "@@/composables/state";
import { storeToRefs } from "pinia";
const { filter_list } = storeToRefs(usedata());
const { country_name } = useRoute().params;
</script>
