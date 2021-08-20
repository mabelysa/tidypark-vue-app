<template>
  <div class="committeds-index">
    <h1>Welcome to Your Account, {{ user.first_name }}!</h1>
    <h2>{{ message2 }}</h2>
    <h3>{{ message3 }}</h3>
    <h3>{{ message4 }}</h3>
    <router-link v-bind:to="`/users/${user.id}/edit`">
      <button>Edit Contact Info</button>
    </router-link>
    <div v-for="(committed, index) in committeds" :key="committed.id">
      <h2>{{ committed.park.name }} - {{ index + 1 }}</h2>
      <!-- <h2>{{ committed }}</h2> -->
      <p>
        <b>Borough:</b>
        {{ committed.park.borough }}
      </p>
      <p>
        <b>Address:</b>
        {{ committed.park.address }}
      </p>
      <!-- <p>All Info: {{ park }}</p> -->
      <p>
        <b>Size:</b>
        {{ committed.park.size }}
      </p>
      <p>
        <b>Observations:</b>
        {{ committed.observations }}
      </p>
      <p>
        <b>Teamsize:</b>
        {{ committed.teamsize }}
      </p>
      <p>
        <b>Tentative Date:</b>
        {{ committed.tentativedate }}
      </p>
      <p>
        <b>Experience:</b>
        {{ committed.experience }}
      </p>
      <p>
        <b>Reason:</b>
        {{ committed.reason }}
      </p>
      <router-link v-bind:to="`/committeds/${committed.id}`">
        <img v-bind:src="committed.park.image_url" alt="committed.park.image_url" />
      </router-link>
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
      message: "Welcome to Your Account",
      message2: "Don't stress, we'll clean this mess.",
      message3: "You may be small but you are mighty...",
      message4: "now let's go make these parks nice and tidy!",
      committeds: [],
      user: {},
      current_user_id: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    axios.get("http://localhost:3000/users/" + this.current_user_id).then((response) => {
      this.user = response.data;
      console.log(response.data.users);
    });
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
