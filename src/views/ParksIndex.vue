<template>
  <div class="parks-index">
    <h1>{{ message }}</h1>
    View By Borough:
    <input v-model="boroughFilter" />
    <div v-for="(park, index) in filterBy(parks, boroughFilter, 'borough')" :key="park.id">
      <button v-on:click="mostRequested()">Most Requested</button>
      {{ mostRequestedPark }}
      <br />

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
      committeds: [],
      mostRequestedPark: "",
    };
  },
  mixins: [Vue2Filters.mixin],
  created: function () {
    this.indexParks();
    this.indexCommitteds();
    this.mostRequested();
    setTimeout(this.mostRequested(), 1);
  },
  // mounted: function () {
  // },
  methods: {
    indexParks: function () {
      axios.get("http://localhost:3000/parks").then((response) => {
        this.parks = response.data;
        console.log("All parks:", this.parks);
      });
    },
    indexCommitteds: function () {
      axios.get("http://localhost:3000/committeds/all").then((response) => {
        this.committeds = response.data;
        console.log("All committeds:", this.committeds);
      });
    },

    mostRequested: function () {
      console.log("displaying most requested park");
      var newCommitteds = this.committeds.map(function (committed) {
        return committed["park"]["name"];
      });
      console.log(newCommitteds);

      var sortedCommitteds = newCommitteds.sort();
      var start = newCommitteds[0],
        mostRequestedPark;
      for (var i = 0; i < sortedCommitteds.length; i++) {
        if (start === sortedCommitteds[i] || sortedCommitteds[i] === sortedCommitteds[i + 1]) {
          mostRequestedPark = sortedCommitteds[i];
        }
      }
      console.log(mostRequestedPark);
      this.mostRequestedPark = mostRequestedPark;
    },
  },
};
</script>
