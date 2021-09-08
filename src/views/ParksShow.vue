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
      <p><img v-bind:src="park.image_url" alt="park.image_url" /></p>
      <p v-if="26 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.8096,40.8679,12.31,0/483x423?access_token=pk.eyJ1IjoibWFiZWx5c2EiLCJhIjoiY2tycDl4dTR1MDR5MDJwbjg3ZGxveHV3YiJ9.SkvlJ4UOYL86XpNotLqc1A"
          alt="park_id.map"
        />
      </p>
      <p v-if="2 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.8699,40.816,13.79,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="3 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.8902,40.8965,12.9,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="4 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.8878,40.8059,16.32,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="5 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.8847,40.8601,12.6,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="6 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.9662,40.7827,12.6,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="7 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.9279,40.7918,13.3,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="8 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.946,40.8415,14.01,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="9 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.9249,40.8729,14.21,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="10 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-74.015,40.7032,15.76,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="11 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.9475,40.7568,15.62,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="12 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.8441,40.7404,14.03,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="13 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.8532,40.7026,12.99,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="14 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.7782,40.7923,14.4,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="15 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.9224,40.7785,15.04,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="16 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.9975,40.6971,15.02,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="17 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.9785,40.5836,12.65,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="18 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-74.0312,40.6387,15.17,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="19 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-74.0046,40.672,14.04,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="20 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.9447,40.6586,16.1,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="21 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-74.0763,40.6373,17.21,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="22 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-74.0777,40.5825,14.56,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="23 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-74.1902,40.5812,13.5,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="24 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-74.1566,40.598,14.08,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
      <p v-if="25 == park.id">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-74.1598,40.5666,13.6,0/483x423?access_token=process.env.VUE_APP_TOKEN"
          alt="park_id.map"
        />
      </p>
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
