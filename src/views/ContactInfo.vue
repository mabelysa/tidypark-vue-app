<template>
  <div class="contact-index">
    <form v-on:submit.prevent="updateContact()">
    <h1>{{ message }}</h1>
     <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <h2>Edit your contact info below:</h2>
      <div>
        <label>First Name:</label>
        <input type="text" v-model="currentUserParams.first_name" />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" v-model="currentUserParams.last_name" />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" v-model="currentUserParams.phone_number" />
      </div>
      <br />
      <input type="submit" value="Submit" />
      <router-link v-bind:to="`/users/${user.id}`">
        <button>Back to {{ user.first_name }} Account</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  data: function () {
    return {
      message: "Update your contact info here!",
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
