<template>
  <div>
    <div class="home">
      <!-- ======= Hero Section ======= -->
      <section id="hero">
        <div class="hero-text">
          <br />
          <br />
          <br />
          <br />
          <h2>{{ message1 }}</h2>
          <h1>
            <b>
              <i>{{ message2 }}</i>
            </b>
          </h1>
          <p>{{ message3 }}</p>
          <p>{{ message4 }}</p>
          <a href="#signup" class="btn-get-started scrollto">Sign Up Here</a>
        </div>

        <div class="product-screens">
          <div class="product-screen-1" data-aos="fade-up" data-aos-delay="400">
            <img src="assets/img/product-screen-1.png" alt="" />
          </div>

          <div class="product-screen-2" data-aos="fade-up" data-aos-delay="200">
            <img src="assets/img/product-screen-2.png" alt="" />
          </div>

          <div class="product-screen-3" data-aos="fade-up">
            <img src="assets/img/product-screen-3.png" alt="" />
          </div>
        </div>
      </section>
      <!-- End Hero Section -->
      <!-- OLD HOME CODE
      <h1>{{ message1 }}</h1>
      <h2>
        <i>
          {{ message2 }}
        </i>
      </h2>
      <h3>{{ message3 }}</h3>
      <h3>-Let's Get Started-</h3>
      <h3>Create an account using the signup button.</h3>
      <h3>{{ message4 }}</h3>
      <router-link v-bind:to="`/signup/`">
        <button>Sign Up Here!</button>
      </router-link>
      OLD HOME CODE -->
      <br />
      <!-- <router-link v-bind:to="`/parks/`">
      <button>NYC Parks</button>
    </router-link> -->
    </div>
  </div>
</template>

<style></style>

<script>
import swal from "sweetalert";
swal("Welcome to Tidy Park!");
swal({
  title: "-Welcome to Tidy Park-",
  text: "Let's get ready to tackle some mess!",
  icon: "success",
  button: "Right On!!",
});
export default {
  data: function () {
    return {
      message1: "Welcome to Tidy Park!",
      message2: "Go Green or Go Home!",
      message3: "Hitting the streets, to keep New York City parks neat!",
      message4: "Login to select which parks need some TLC ;)",
    };
  },
  created: function () {},
  methods: {},
};
</script>
