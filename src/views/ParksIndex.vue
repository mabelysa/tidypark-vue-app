<template>
  <div class="parks-index">
    <h1>{{ message }}</h1>
    <div id="map"></div>
    <!-- <button v-on:click="mostRequested()">Most Requested Park</button> -->
    <h1>Next Park to Clean Is...{{ mostRequestedPark }}</h1>
    View By Borough, Name or Size:
    <input v-model="searchFilter" />
    <div v-for="(park, index) in filterBy(parks, searchFilter, 'borough', 'name', 'size')" :key="park.id">
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

<style>
body {
  margin: 0;
  padding: 0;
}
#map {
  width: 50%;
  height: 700px;
}
</style>

<script>
/* global mapboxgl*/
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  data: function () {
    return {
      message: "NYC Parks!",
      parks: [],
      searchFilter: "",
      committeds: [],
      mostRequestedPark: "",
    };
  },
  mixins: [Vue2Filters.mixin],
  created: function () {
    this.indexParks();
    this.indexCommitteds();
  },
  mounted: function () {
    this.displayMap();
  },
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
      setTimeout(() => this.mostRequested(), 7000);
    },

    mostRequested: function () {
      console.log("displaying most requested park");
      var newCommitteds = this.committeds.map(function (committed) {
        return committed["park"]["name"];
      });
      console.log("displays most requested park", newCommitteds);
      // if (condition) {
      //   //  block of code to be executed if the condition is true
      // } else {
      //   //  block of code to be executed if the condition is false
      // }

      var sortedCommitteds = newCommitteds.sort();
      var start = newCommitteds[0],
        mostRequestedPark;
      for (var i = 0; i < sortedCommitteds.length; i++) {
        if (start === sortedCommitteds[i] || sortedCommitteds[i] === sortedCommitteds[i + 1]) {
          mostRequestedPark = sortedCommitteds[i];
        }
      }
      console.log("counts most requested park", mostRequestedPark);
      this.mostRequestedPark = mostRequestedPark;
    },

    displayMap: function () {
      mapboxgl.accessToken = process.env.VUE_APP_TOKEN;

      var map = new mapboxgl.Map({
        container: "map",
        // Replace YOUR_STYLE_URL with your style URL.
        style: "mapbox://styles/mabelysa/cksorx77f1yyd17n4f9mye5ty",
        center: [-73.98553821722048, 40.743916217262516],
        zoom: 9.0,
      });
      console.log("this is the map", map);

      map.on("click", function (e) {
        // If the user clicked on one of your markers, get its information.
        var features = map.queryRenderedFeatures(e.point, {
          layers: ["nyc-parks"], // replace with your layer name
        });
        if (!features.length) {
          return;
        }
        var feature = features[0];

        var popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML("<h3>" + feature.properties.name + "</h3>" + "<p>" + feature.properties.description + "</p>")
          .addTo(map);
        popup.addTo(map);
      });
      console.log("shows map again", map);
    },
  },
};
</script>
