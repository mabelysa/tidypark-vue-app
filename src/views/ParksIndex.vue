<template>
  <div class="parks-index">
    <h1>{{ message }}</h1>
    <div v-for="park in parks" :key="park.id">
      <h2>{{ park.name }}</h2>
      <p>Borough: {{ park.borough }}</p>
      <p>Address: {{ park.address }}</p>
      <!-- <p>All Info: {{ park }}</p> -->
      <p>Size: {{ park.size }}</p>
      <router-link v-bind:to="`/parks/${park.id}`">
        <img v-bind:src="park.image_url" alt="park.image_url" />
      </router-link>
    </div>
    <p>*pictures taken from nycgovparks.gov*</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "NYC Parks!",
      parks: [],
    };
  },
  created: function () {
    this.indexParks();
  },
  methods: {
    indexParks: function () {
      axios.get("http://localhost:3000/parks").then((response) => {
        this.parks = response.data;
        console.log("All parks:", this.parks);
      });
    },
  },
};
</script>
