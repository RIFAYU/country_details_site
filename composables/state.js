import { defineStore } from "pinia";
import country_data from "@@/assets/static/data.json";

export const usedata = defineStore("data", () => {


  // search Component code
  const ip = ref("");
  const ipf = ref("");
  const filter_list = computed(() => {
    return country_data.filter((dats_cn) => {
      if(ip.value.length){
        return dats_cn.name.toLowerCase().includes(ip.value.toLowerCase());
      }
      else {
        
        return dats_cn.region.toLowerCase().includes(ipf.value.toLowerCase());
      }
    });
  });


  return { country_data, filter_list, ip, ipf};
});
