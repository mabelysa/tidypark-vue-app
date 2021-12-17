<template>
  <div class="committeds-show">
    <!-- ======= Gallery Section ======= -->
    <br />
    <br />
    <br />
    <section id="gallery">
      <div class="container-fluid">
        <div class="section-header">
          <h3 class="section-title">Your Selected Park</h3>
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
    <!-- OLD CODE -->
    <div class="container">
      <p><img class="rounded img-thumbnail" v-bind:src="park.image_url" :alt="park.image_url" /></p>

      <p>
        <img class="rounded img-thumbnail" v-bind:src="urlString(park)" :alt="park.map_url" />
      </p>

      <h2>{{ park.name }}</h2>
      <span>
        <b>Borough:</b>
        {{ park.borough }}
      </span>
      <br />
      <span>
        <b>Size:</b>
        {{ park.size }}
      </span>
      <br />
      <span>
        <b>Observations:</b>
        {{ committed.observations }}
      </span>
      <br />
      <span>
        <b>Needs:</b>
        {{ committed.needs }}
      </span>
      <br />
      <span>
        <b>Teamsize:</b>
        {{ committed.teamsize }}
      </span>
      <br />
      <span>
        <b>Tentative Date:</b>
        {{ committed.tentativedate }}
      </span>
      <br />
      <span>
        <b>Experience:</b>
        {{ committed.experience }}
      </span>
      <br />
      <span>
        <b>Reason:</b>
        {{ committed.reason }}
      </span>
      <br />
      <br />
      <!-- <li v-if="$parent.getUserId() == post.user_id"> -->
      <router-link v-bind:to="`/committeds/${committed.id}/edit`"><button>Edit Commitment</button></router-link>
      <!-- </li> -->
      <br />
      <br />
      <router-link to="/committeds">Back to your committed events!</router-link>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
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
    <div class="garbagebin6" dat-aos-delay="100">
      <img src="/assets/img/clients/client-2.png" alt="garbagebin6" />
    </div>
  </div>
</template>

<style>
.garbagebin6 {
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
      committed: {},
      park: {},
      key: { api: process.env.VUE_APP_TOKEN },
    };
  },
  created: function () {
    axios
      .get("/committeds/" + this.$route.params.id)
      .then((response) => {
        this.committed = response.data;
        console.log(this.committed.park);
        this.park = response.data.park;
        console.log(this.park);
      })
      .catch((error) => {
        console.log("committed create error", error.response);
        this.errors = error.response.data.errors;
      });
  },
  methods: {
    urlString: function (park) {
      return `${park.map_url}?access_token=${this.key.api}`;
    },
  },
};
</script>
