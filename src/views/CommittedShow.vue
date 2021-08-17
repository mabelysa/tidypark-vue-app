<template>
  <div class="committeds-show">
    <div class="container">
      <h2>{{ park.name }}</h2>
      <p>{{ park.borough }}</p>
      <p>{{ park.size }}</p>
      <p>{{ committed.observations }}</p>
      <p>{{ committed.teamsize }}</p>
      <p>{{ committed.tentativedate }}</p>
      <p>{{ committed.experience }}</p>
      <p>{{ committed.reason }}</p>
      <p><img v-bind:src="park.image_url" alt="park.image_url" /></p>
      <!-- <li v-if="$parent.getUserId() == post.user_id"> -->
      <router-link v-bind:to="`/committed/${committed.id}/edit`"><button>Edit Commit</button></router-link>
      <!-- </li> -->
      <br />
      <router-link to="/committed">Back to your committed events!</router-link>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      committed: {},
      park: {},
    };
  },
  created: function () {
    axios.get("/committeds/" + this.$route.params.id).then((response) => {
      this.committed = response.data;
      console.log(this.committed.park);
      this.park = response.data.park;
      console.log(this.park);
    });
  },
};
</script>
