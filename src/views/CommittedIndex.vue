<template>
  <div class="committeds-index">
    <!-- ======= More Features Section ======= -->
    <br />
    <br />
    <br />
    <section id="more-features" class="section-bg">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Welcome to Your Account, {{ user.first_name }}!</h2>
          <span class="section-divider"></span>
          <h3>{{ message2 }}</h3>
          <p class="section-description">
            {{ message3 }}
            <br />
            {{ message4 }}
          </p>
          <router-link v-bind:to="`/users/${user.id}/edit`">
            <button>Edit Contact Info</button>
          </router-link>
          <div v-for="(committed, index) in committeds" :key="committed.id">
            <h2>{{ committed.park.name }} - {{ index + 1 }}</h2>
          </div>
          <p>
            <b>Borough:</b>
            {{ committed.park.borough }}
          </p>
          <p>
            <b>Address:</b>
            {{ committed.park.address }}
          </p>
          <p>
            <b>Size:</b>
            {{ committed.park.size }}
          </p>
          <p>
            <b>Observations:</b>
            {{ committed.observations }}
          </p>
          <p>
            <b>Needs:</b>
            {{ committed.needs }}
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
          <router-link v-bind:to="`/committeds/${committed.id}`">
            <img v-bind:src="committed.park.image_url" alt="committed.park.image_url" />
          </router-link>
        </div>
        <router-link to="/parks"><b>Back to all Parks!</b></router-link>
        <p>*pictures taken from nycgovparks.gov*</p>

        <!-- <div class="row gy-4">
          <div class="col-lg-6">
            <div class="box">
              <div class="icon"><i class="bi bi-briefcase"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">
                Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                non provident etiro rabeta lingo.
              </p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="box">
              <div class="icon"><i class="bi bi-card-checklist"></i></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad
                limino ata nodera clas.
              </p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="box">
              <div class="icon"><i class="bi bi-bar-chart"></i></div>
              <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
              <p class="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                trinige zareta lobur trade.
              </p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="box">
              <div class="icon"><i class="bi bi-binoculars"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum rideta zanox satirente madera
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </section>
    <!-- End More Features Section -->
    <!-- OLD CODE
    <h1>Welcome to Your Account, {{ user.first_name }}!</h1>
    <h2>{{ message2 }}</h2>
    <h3>{{ message3 }}</h3>
    <h3>{{ message4 }}</h3>
    <router-link v-bind:to="`/users/${user.id}/edit`">
      <button>Edit Contact Info</button>
    </router-link>
    <div v-for="(committed, index) in committeds" :key="committed.id">
      <h2>{{ committed.park.name }} - {{ index + 1 }}</h2> -->
    <!-- <h2>{{ committed }}</h2> -->
    <!-- <p>
        <b>Borough:</b>
        {{ committed.park.borough }}
      </p>
      <p>
        <b>Address:</b>
        {{ committed.park.address }}
      </p> -->
    <!-- <p>All Info: {{ park }}</p> -->
    <!-- <p>
        <b>Size:</b>
        {{ committed.park.size }}
      </p>
      <p>
        <b>Observations:</b>
        {{ committed.observations }}
      </p>
      <p>
        <b>Needs:</b>
        {{ committed.needs }}
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
      <router-link v-bind:to="`/committeds/${committed.id}`">
        <img v-bind:src="committed.park.image_url" alt="committed.park.image_url" />
      </router-link> -->
    <!-- <img v-bind:src="park.image_url" alt="park.image_url" /> -->
    <br />
    <!-- <router-link v-bind:to="`/parks/${park.id}`">
        <button>Commit to {{ park.name }}!</button>
      </router-link> -->
    <!-- </div>
    <router-link to="/parks"><b>Back to all Parks!</b></router-link>
    <p>*pictures taken from nycgovparks.gov*</p>
    OLD CODE -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Your Account",
      message2: "Don't stress, we'll clean this mess.",
      message3: "You may be small but you are mighty...",
      message4: "now let's go make these parks nice and tidy!",
      committeds: [],
      user: {},
      current_user_id: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    axios.get("http://localhost:3000/users/" + this.current_user_id).then((response) => {
      this.user = response.data;
      console.log("prints user", this.user);
    });
    this.indexCommitteds();
  },
  methods: {
    indexCommitteds: function () {
      axios.get("http://localhost:3000/committeds").then((response) => {
        this.committeds = response.data;
        console.log("Your Committed Parks:", this.committeds);
      });
    },
  },
};
</script>
