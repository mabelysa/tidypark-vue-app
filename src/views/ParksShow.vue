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
    </div>
    <div class="committed-new">
      <form v-on:submit.prevent="createCommitted()">
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Observations:</label>
          <input type="text" v-model="newCommittedParams.observations" />
        </div>
        <div>
          <label>Needs:</label>
          <textarea id="needs" input type="text" v-model="newCommittedParams.needs"></textarea>
          <!-- <small
            v-if="newCommittedParams.needs.length > 50 && newCommittedParams.needs.length < 100"
            class="text-danger"
          >
            There are {{ 100 - newCommittedParams.needs.length }} characters remaining.
          </small> -->
        </div>
        <div>
          <label>Team Size:</label>
          <input type="text" v-model="newCommittedParams.teamsize" />
        </div>
        <div>
          <label>Date: Type in dates you're available.</label>
          <input type="text" v-model="newCommittedParams.tentativedate" />
        </div>
        <div>
          <label for="checkbox">Experience: How many parks have you cleaned?</label>
          <input type="checkbox" v-model="newCommittedParams.experience" />
        </div>
        <div>
          <label>Reason:</label>
          <textarea id="needs" input type="text" v-model="newCommittedParams.needs"></textarea>
        </div>
        <!-- <router-link v-bind:to="`/committeds`"></router-link> -->
        <input type="submit" value="Commit to Pelham Bay Park " />
        <br />
        <br />
        <router-link to="/parks">Back to all Parks!</router-link>
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
      newCommittedParams: {},
    };
  },
  created: function () {
    axios.get("/parks/" + this.$route.params.id).then((response) => {
      this.park = response.data;
    });
    // axios.get("/committed/" + this.$route.params.id).then((response) => {
    //   this.committed = response.data;
    // });
  },
  methods: {
    createCommitted: function () {
      console.log("creating new commit.");
      this.newCommittedParams.park_id = `${this.park.id}`;
      console.log(this.newCommittedParams);
      axios.post("/committeds", this.newCommittedParams).then((response) => {
        console.log(response.data);
        this.$router.push("/committeds");
      });
    },
  },
};
</script>
