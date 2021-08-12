<template>
  <div class="parks-show">
    <div class="container">
      <p><img v-bind:src="park.image_url" alt="park.image_url" /></p>
      <h2>{{ park.name }}</h2>
      <p>
        <b>Borough:</b>
        {{ park.borough }}
      </p>
      <p>
        <b>Address:</b>
        {{ park.address }}
      </p>
      <p>
        <b>Size:</b>
        {{ park.size }}
      </p>
      <p><b>Observations:</b></p>
      <p><b>Needs:</b></p>
      <p><b>Team Size:</b></p>
      <p><b>Date:</b></p>
      <p><b>Experience: How many parks have you created?</b></p>
      <p><b>Reason:</b></p>
      <router-link v-bind:to="`/committeds`">
        <button>Commit to {{ park.name }}!</button>
      </router-link>
      <!-- <li v-if="$parent.getUserId() == park.user_id"> -->
      <!-- </li> -->
      <!-- <router-link v-bind:to="`/parks/${park.id}/committeds`"> -->
      <br />
      <br />
      <router-link to="/parks">Back to all Parks!</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      park: {},
    };
  },
  created: function () {
    axios.get("/parks/" + this.$route.params.id).then((response) => {
      this.park = response.data;
    });
  },
};
</script>
