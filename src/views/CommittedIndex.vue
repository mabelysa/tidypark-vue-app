<template>
  <div class="committeds-index">
    <h1>{{ message }}</h1>
    <h2>{{ message2 }}</h2>
    <div v-for="committed in committeds" :key="committed.id">
      <h2>{{ park.name }}</h2>
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

export default {
  data: function () {
    return {
      message: "Welcome to Your Account!",
      message2:
        "Don't stress, we'll clean this mess. You might be small and mighty but we'll make these parks nice and tidy!",
      committeds: [],
    };
  },
  created: function () {
    this.indexCommitteds();
  },
  methods: {
    indexParks: function () {
      axios.get("http://localhost:3000/committeds").then((response) => {
        this.parks = response.data;
        console.log("Your Committed Parks:", this.committeds);
      });
    },
  },
};
</script>
