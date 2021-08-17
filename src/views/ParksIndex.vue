<template>
  <div class="parks-index">
    <h1>{{ message }}</h1>
    <div v-for="park in parks" :key="park.id">
      <ol>
        <li>
          <h2>{{ park.name }}</h2>
        </li>
        <p>
          <b>Borough:</b>
          {{ park.borough }}
        </p>
        <p>
          <b>Address:</b>
          {{ park.address }}
        </p>
        <!-- <p>All Info: {{ park }}</p> -->
        <p>
          <b>Size:</b>
          {{ park.size }}
        </p>
      </ol>
      <img v-bind:src="park.image_url" alt="park.image_url" />
      <br />
      <router-link v-bind:to="`/parks/${park.id}`">
        <button>Commit to {{ park.name }}!</button>
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
