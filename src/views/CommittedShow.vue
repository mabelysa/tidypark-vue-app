<template>
  <div class="committeds-show">
    <div class="container">
      <h2>{{ park.name }}</h2>
      <p>
        <b>Borough:</b>
        {{ park.borough }}
      </p>
      <p>
        <b>Size:</b>
        {{ park.size }}
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
      <p><img v-bind:src="park.image_url" alt="park.image_url" /></p>
      <!-- <li v-if="$parent.getUserId() == post.user_id"> -->
      <router-link v-bind:to="`/committed/${committed.id}/edit`"><button>Edit Commit</button></router-link>
      <!-- </li> -->
      <br />
      <router-link to="/committeds">Back to your committed events!</router-link>
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
