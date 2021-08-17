<template>
  <div class="committeds-index">
    <h1>{{ message }}</h1>
    <h2>{{ message2 }}</h2>
    <h2>{{ message3 }}</h2>
    <div v-for="committed in committeds" :key="committed.id">
      <h2>{{ committed }}</h2>
      <p>
        <b>Borough:</b>
        {{ committed.park.borough }}
      </p>
      <p>
        <b>Address:</b>
        {{ committed.park.address }}
      </p>
      <!-- <p>All Info: {{ park }}</p> -->
      <!-- <p>
        <b>Size:</b>
        {{ park.size }}
      </p> -->
      <!-- <img v-bind:src="park.image_url" alt="park.image_url" /> -->
      <br />
      <!-- <router-link v-bind:to="`/parks/${park.id}`">
        <button>Commit to {{ park.name }}!</button>
      </router-link> -->
    </div>
    <router-link to="/parks"><b>Back to all Parks!</b></router-link>
    <p>*pictures taken from nycgovparks.gov*</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Your Account!",
      message2: "Don't stress, we'll clean this mess.",
      message3: "You might be small and tiny but we'll make these parks nice and tidy!",
      committeds: [],
    };
  },
  created: function () {
    this.indexCommitteds();
  },
  methods: {
    indexCommitteds: function () {
      axios.get("http://localhost:3000/committeds").then((response) => {
        this.committeds = response.data;
        console.log("Your Committed Parks:", this.committeds);
      });
    },
  },
};
</script>
