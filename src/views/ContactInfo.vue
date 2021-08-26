<template>
  <div class="contact-index">
    <h1>Your Contact Info Below: {{ user.first_name }}!</h1>
    <h2>{{ committed.current_user }}</h2>
    <!-- <h3>{{ message3 }}</h3>
    <h3>{{ message4 }}</h3> -->
    <br />
    <router-link to="/committeds"><b>Back Your Committments!</b></router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "",
      user: {},
      current_user_id: localStorage.getItem("user_id"),
    };
  },

  created: function () {
    axios.get("http://localhost:3000/users/" + this.current_user_id).then((response) => {
      this.user = response.data;
      console.log("prints user", this.user);
    });
  },
  // methods: {
  //   indexParks: function () {
  //     axios.get("http://localhost:3000/parks").then((response) => {
  //       this.parks = response.data;
  //       console.log("All parks:", this.parks);
  //     });
  //   },
  // },
};
</script>
