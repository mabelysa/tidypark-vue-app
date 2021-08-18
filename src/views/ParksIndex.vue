<template>
  <div class="parks-index">
    <h1>{{ message }}</h1>
    View By Borough:
    <input v-model="boroughFilter" />
    <div v-for="(park, index) in filterBy(parks, boroughFilter, 'borough')" :key="park.id">
      <h2>{{ park.name }} - {{ index + 1 }}</h2>
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
import Vue2Filters from "vue2-filters";

export default {
  data: function () {
    return {
      message: "NYC Parks!",
      parks: [],
      boroughFilter: "",
    };
  },
  mixins: [Vue2Filters.mixin],
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
