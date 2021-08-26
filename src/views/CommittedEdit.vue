<template>
  <div class="committeds-edit">
    <!-- ======= Gallery Section ======= -->
    <br />
    <br />
    <br />
    <section id="gallery">
      <div class="container-fluid">
        <div class="section-header">
          <h3 class="section-title">-Edit Your Commitment-</h3>
          <span class="section-divider"></span>
          <p class="section-description">{{ park.name }}</p>
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
    <!-- ORIGINAL CODE -->
    <div class="container">
      <p><img v-bind:src="park.image_url" alt="park.image_url" /></p>
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
      <form v-on:submit.prevent="updateCommitted()">
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label><b>Observations:</b></label>
          <textarea id="observations" input type="text" v-model="currentCommittedParams.observations"></textarea>
          <small
            v-if="currentCommittedParams.observations.length > 20 && currentCommittedParams.observations.length < 100"
            class="text-danger"
          >
            There are {{ 100 - currentCommittedParams.observations.length }} characters remaining.
          </small>
        </div>
        <div>
          <label><b>Needs:</b></label>
          <textarea id="needs" input type="text" v-model="currentCommittedParams.needs"></textarea>
          <small
            v-if="currentCommittedParams.needs.length > 20 && currentCommittedParams.needs.length < 100"
            class="text-danger"
          >
            There are {{ 100 - currentCommittedParams.needs.length }} characters remaining.
          </small>
        </div>
        <div>
          <label><b>Team Size:</b></label>
          <input type="text" v-model="currentCommittedParams.teamsize" />
        </div>
        <div>
          <label><b>Date (Type in dates you're available):</b></label>
          <input type="text" v-model="currentCommittedParams.tentativedate" />
        </div>
        <!-- <div>
          <label for="checkbox">Experience (How many parks have you cleaned?):</label>
          <input type="checkbox" v-model="currentCommittedParams.experience" />
        </div> -->
        <div>
          <label><b>Experience: (Prior park cleanups?)</b></label>
          <select v-model="currentCommittedParams.experience">
            <option disabled value="">Please select one</option>
            <option>0</option>
            <option>1-2</option>
            <option>3+</option>
          </select>
          <span>Selected: {{ currentCommittedParams.experience }}</span>
        </div>
        <div>
          <label><b>Reason:</b></label>
          <textarea id="reasons" input type="text" v-model="currentCommittedParams.reason"></textarea>
        </div>
        <!-- <router-link v-bind:to="`/committeds`"></router-link> -->
        <input type="submit" value="Update Commitment!" />
        <!-- <router-link v-bind:to="`/committeds/${committed.id}`">
          <button>Back to {{ park.name }}</button>
        </router-link> -->
      </form>
      <br />
      <button v-on:click="destroyCommitted(committed)">Delete Commitment!</button>
      <br />
      <br />
      <router-link v-bind:to="`/committeds/${committed.id}`">Back to {{ park.name }} !</router-link>
      <br />
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
    <div class="garbagebin7" dat-aos-delay="100">
      <img src="/assets/img/clients/client-2.png" alt="garbagebin7" />
    </div>
    <!-- <li v-if="$parent.getUserId() == park.user_id"> -->
    <!-- </li> -->
    <!-- <router-link v-bind:to="`/parks/${park.id}/committeds`"> -->
  </div>
</template>

<style>
.garbagebin7 {
  position: fixed;
  top: 19%;
  left: 4%;
  transform: translate(-50%, -50%);
}
</style>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  data: function () {
    return {
      errors: [],
      park: {},
      currentCommittedParams: { needs: "", observations: "" },
      committed: {},
    };
  },
  created: function () {
    axios.get("/committeds/" + this.$route.params.id).then((response) => {
      this.committed = response.data;
      this.park = response.data.park;
      this.currentCommittedParams = response.data;
      console.log(this.park);
    });
  },
  methods: {
    updateCommitted: function () {
      axios
        .patch(`/committeds/${this.$route.params.id}`, this.currentCommittedParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/committeds/${response.data.id}`);
          swal("Updated!", "Your committment has been updated!", "success");
        })
        .catch((error) => {
          console.log("updated committed create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    destroyCommitted: function (committed) {
      axios.delete("/committeds/" + committed.id).then((response) => {
        console.log("Committment Deleted", response.data);
        this.$router.push("/committeds");
        // swal({
        //   title: "Are you sure?",
        //   text: "Are you sure that you want to delete this commitment?",
        //   icon: "warning",
        //   dangerMode: true,
        // }).then((willDelete) => {
        //   if (willDelete) {
        //     swal("Deleted!", "Your committment has been deleted!", "success");
        //   }
        // });
        swal("Deleted!", "Your committment has been deleted!", "success", {
          buttons: "Return to your account!",
        });
      });
    },
  },
};
</script>
