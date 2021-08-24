<template>
  <div class="home">
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
      <button>SignUp Here!</button>
    </router-link>
    <br />
    <br />
    <!-- <router-link v-bind:to="`/parks/`">
      <button>NYC Parks</button>
    </router-link> -->
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
      message3: "Hitting the streets, to keep NYC parks neat!",
      message4: "Login to select which parks need some TLC ;)",
    };
  },
  created: function () {},
  methods: {},
};
</script>
