<template>
  <div class="parks-show">
    <!-- ======= Gallery Section ======= -->
    <br />
    <br />
    <br />
    <section id="gallery">
      <div class="container-fluid">
        <div class="section-header">
          <h3 class="section-title">Interested in This Park?</h3>
          <span class="section-divider"></span>
          <p class="section-description">Commit to this park by clicking the button below.</p>
        </div>
        <!-- <div class="row no-gutters">
          <div class="col-lg-4 col-md-6">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-1.jpg" data-gall="portfolioGallery" class="gallery-lightbox">
                <img src="assets/img/gallery/gallery-1.jpg" alt="" />
              </a>
            </div>
          </div>
        </div> -->
      </div>
    </section>
    <!-- End Gallery Section -->
    <!-- OLD CODE -->
    <div class="container">
      <p><img class="rounded img-thumbnail" v-bind:src="park.image_url" alt="park.image_url" /></p>

      <p>
        <img class="rounded img-thumbnail" v-bind:src="park.map_url + '?access_token=' + key.api" alt="park.map_url" />
      </p>

      <!-- <p><img :src="`${park.map_url}?access_token="${key.api}`" alt="park_id.map" /></p> -->
      <br />
      <!-- <div id="map"></div> -->
      <h2>{{ park.name }}</h2>
      <span>
        <b>Borough:</b>
        {{ park.borough }}
      </span>
      <br />
      <span>
        <b>Address:</b>
        {{ park.address }}
      </span>
      <br />
      <span>
        <b>Size:</b>
        {{ park.size }}
      </span>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
    </div>
    <div class="committed-new">
      <form v-on:submit.prevent="createCommitted()">
        <div>
          <label><b>Observations:</b></label>
          <textarea id="observations" input type="text" v-model="newCommittedParams.observations"></textarea>
          <small
            v-if="newCommittedParams.observations.length > 20 && newCommittedParams.observations.length < 100"
            class="text-danger"
          >
            There are {{ 100 - newCommittedParams.observations.length }} characters remaining.
          </small>
        </div>
        <div>
          <label><b>Needs:</b></label>
          <textarea id="needs" input type="text" v-model="newCommittedParams.needs"></textarea>
          <small
            v-if="newCommittedParams.needs.length > 20 && newCommittedParams.needs.length < 100"
            class="text-danger"
          >
            There are {{ 100 - newCommittedParams.needs.length }} characters remaining.
          </small>
        </div>
        <div>
          <label>
            <b>Team Size:</b>
          </label>
          <input type="text" v-model="newCommittedParams.teamsize" />
        </div>
        <div>
          <label><b>Date (Type in dates you're available):</b></label>
          <input type="text" v-model="newCommittedParams.tentativedate" />
        </div>
        <!-- <div v-if="hasDone0()"> -->
        <!-- <div>
          <label>Experience: How many parks have you cleaned?</label>
          <label for="none">0?</label>
          <input type="checkbox" value="0" v-model="newCommittedParams.experience" />
        </div> -->
        <div>
          <label><b>Experience: (Prior park cleanups?)</b></label>
          <select v-model="newCommittedParams.experience">
            <option disabled value="">Please select one</option>
            <option>0</option>
            <option>1-2</option>
            <option>3+</option>
          </select>
          <span>Selected: {{ newCommittedParams.experience }}</span>
        </div>
        <div>
          <label><b>Reason:</b></label>
          <textarea id="reasons" input type="text" v-model="newCommittedParams.reason"></textarea>
        </div>
        <!-- <router-link v-bind:to="`/committeds`"></router-link> -->
        <input type="submit" value="Commit to this Park!" />
        <!-- <router-link v-bind:to="`/committeds`">
          <button>Commit to {{ park.name }}!</button>
        </router-link> -->
        <br />
        <br />
        <router-link to="/parks">Back to all Parks!</router-link>
        <br />
      </form>
    </div>
    <!-- ======= Call To Action Section ======= -->
    <section id="call-to-action">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 text-center text-lg-start">
            <h3 class="cta-title"></h3>
            <p class="cta-text"></p>
          </div>
          <div class="col-lg-3 cta-btn-container text-center"></div>
        </div>
      </div>
    </section>
    <!-- End Call To Action Section -->
    <!-- <li v-if="$parent.getUserId() == park.user_id"> -->
    <!-- </li> -->
    <!-- OLD CODE -->
    <div class="garbagebin4" dat-aos-delay="100">
      <img src="/assets/img/clients/client-2.png" alt="garbagebin4" />
    </div>
  </div>
</template>

<style>
.container {
  text-align: center;
}
.committed-new {
  text-align: center;
}
.garbagebin4 {
  position: fixed;
  top: 20%;
  left: 97%;
  transform: translate(-50%, -50%);
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      park: {},
      newCommittedParams: { needs: "", observations: "" },
      status: "",
      key: { api: process.env.VUE_APP_TOKEN },
    };
  },
  created: function () {
    axios.get("/parks/" + this.$route.params.id).then((response) => {
      this.park = response.data;
    });
  },
  methods: {
    createCommitted: function () {
      console.log("creating new commit.");
      this.newCommittedParams.park_id = `${this.park.id}`;
      console.log("this is new committed params", this.newCommittedParams);
      axios
        .post("/committeds", this.newCommittedParams)
        .then((response) => {
          console.log("this is response data", response.data);
          this.$router.push("/committeds");
        })
        .catch((error) => {
          console.log("committed create error", error.response);
          this.status = error.response.status;
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
