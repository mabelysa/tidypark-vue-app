<template>
  <div class="committeds-edit">
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
      <form v-on:submit.prevent="updateCommitted()">
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Observations:</label>
          <input type="text" v-model="currentCommittedParams.observations" />
        </div>
        <div>
          <label>Needs:</label>
          <textarea id="needs" input type="text" v-model="currentCommittedParams.needs"></textarea>
          <!-- <small
            v-if="newCommittedParams.needs.length > 50 && newCommittedParams.needs.length < 100"
            class="text-danger"
          >
            There are {{ 100 - newCommittedParams.needs.length }} characters remaining.
          </small> -->
        </div>
        <div>
          <label>Team Size:</label>
          <input type="text" v-model="currentCommittedParams.teamsize" />
        </div>
        <div>
          <label>Date (Type in dates you're available.):</label>
          <input type="text" v-model="currentCommittedParams.tentativedate" />
        </div>
        <div>
          <label for="checkbox">Experience (How many parks have you cleaned?):</label>
          <input type="checkbox" v-model="currentCommittedParams.experience" />
        </div>
        <div>
          <label>Reason:</label>
          <textarea id="reasons" input type="text" v-model="currentCommittedParams.reason"></textarea>
        </div>
        <!-- <router-link v-bind:to="`/committeds`"></router-link> -->
        <input type="submit" value="Update Commitment!" />
        <br />
        <br />
        <router-link to="/committeds/:id">Back to {{ park.name }} !</router-link>
      </form>
    </div>
    <!-- <li v-if="$parent.getUserId() == park.user_id"> -->
    <!-- </li> -->
    <!-- <router-link v-bind:to="`/parks/${park.id}/committeds`"> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      park: {},
      currentCommittedParams: {},
    };
  },
  created: function () {
    axios.get("/parks/" + this.$route.params.id).then((response) => {
      this.park = response.data;
    });
    axios.get("/committeds/" + this.$route.params.id).then((response) => {
      this.committed = response.data;
    });
  },
  methods: {
    updateCommitted: function () {
      // console.log("updating committed park.");
      // this.currentCommittedParams.park_id = `${this.park.id}`;
      // console.log(this.currentCommittedParams);
      axios.patch(`/committeds/${this.$route.params.id}`, this.currentCommittedParams).then((response) => {
        console.log(response.data);
        this.$router.push(`/committeds/${response.data.id}`);
      });
    },
  },
};
</script>
