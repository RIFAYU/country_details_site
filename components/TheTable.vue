<template>
  <div  v-for="(con,index) in country_data" :key="con.numericCode">
    <table v-if="con.name == this.$route.path.slice(9)" >
      <tr>
        <th>Country Name : </th>
        <td>{{ con.name }}</td>
      </tr>
      <tr>
        <th>Domain Name : </th>
        <td>{{ con.topLevelDomain[0] }}</td>
      </tr>
      <tr>
        <th>Alpha Code : </th>
        <td>{{ con.alpha3Code }}</td>
      </tr>
      <tr>
        <th>Calling code : </th>
        <td>+{{ con.callingCodes[0] }}</td>
      </tr>
      <tr>
        <th>Region : </th>
        <td>{{ con.region }}</td>
      </tr>
      <tr>
        <th>Subregion : </th>
        <td>{{ con.subregion }}</td>
      </tr>
      <tr>
        <th>Capital : </th>
        <td>{{ con.capital }}</td>
      </tr>
      <tr>
        <th>Population : </th>
        <td>{{ con.population.toLocaleString('en-US') }}</td>
      </tr>
      <tr>
        <th>Independent : </th>
        <td>{{ con.independent ? "Yes" : "No"}}</td>
      </tr>
      <tr>
        <th>Time Zone : </th>
        <td>{{ con.timezones[0] }}</td>
      </tr>
      <tr>
        <th>Area : </th>
        <td>{{ con.area.toLocaleString('en-US') }}</td>
      </tr>
      <tr>
        <th>Native Name: </th>
        <td>{{ con.nativeName }}</td>
      </tr>
      <tr>
        <th>Country Code : </th>
        <td>{{ con.numericCode}}</td>
      </tr>
      <tr>
        <th>Demonym: </th>
        <td>{{ con.demonym}}</td>
      </tr>
      <tr>
        <th>Langtitude Code : </th>
        <td>{{ con.latlng}}</td>
      </tr>
      <tr>
        <th>Boders: </th>
        <td ><p class="inline-block mr-2" v-for="bor in con.borders">{{bor}},</p></td>
      </tr>
      <tr>
        <th>Currencies : </th>
        <td>
            <p class="inline-block mr-2" v-for="bor in con.currencies"></p>
            {{ con.currencies[0]}}</td>
      </tr>      
      <tr>
        <th>Languages: </th>
        <td>{{ con.languages}}</td>
      </tr>      <tr>
        <th>Subregion : </th>
        <td>{{ con.subregion }}</td>
      </tr>      <tr>
        <th>Subregion : </th>
        <td>{{ con.subregion }}</td>
      </tr>      <tr>
        <th>Subregion : </th>
        <td>{{ con.subregion }}</td>
      </tr>      <tr>
        <th>Subregion : </th>
        <td>{{ con.subregion }}</td>
      </tr>      <tr>
        <th>Subregion : </th>
        <td>{{ con.subregion }}</td>
      </tr>      <tr>
        <th>Subregion : </th>
        <td>{{ con.subregion }}</td>
      </tr>      <tr>
        <th>Subregion : </th>
        <td>{{ con.subregion }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { usedata } from "@@/composables/state";
const { country_data } = usedata();
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}


</style>
