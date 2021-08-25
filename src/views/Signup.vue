<template>
  <div class="signup">
    <!-- ======= About Section ======= -->
    <br />
    <br />
    <section id="about" class="section-bg">
      <div class="container-fluid">
        <div class="section-header">
          <h3 class="section-title">Sign Up</h3>
          <span class="section-divider"></span>
          <p class="section-description">
            First step: Create an account with us!
            <br />
            Input your information below.
          </p>
        </div>
        <form v-on:submit.prevent="submit()">
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          <div>
            <label>First Name:</label>
            <input type="text" v-model="newUserParams.first_name" />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" v-model="newUserParams.last_name" />
          </div>
          <div>
            <label>Email Address:</label>
            <input type="email" v-model="newUserParams.email_address" />
          </div>
          <div>
            <label>Phone Number:</label>
            <input type="text" v-model="newUserParams.phone_number" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" v-model="newUserParams.password" />
          </div>
          <div>
            <label>Password confirmation:</label>
            <input type="password" v-model="newUserParams.password_confirmation" />
          </div>
          <input type="submit" value="Submit" />
        </form>

        <div class="row">
          <div class="col-lg-6 about-img" dat-aos-delay="100">
            <img src="assets/img/about-img.jpg" alt="" />
          </div>

          <div class="col-lg-6 content" dat-aos-delay="100">
            <h2>Get Excited!</h2>
            <h3>To tackle some trash!</h3>
            <p>#BinIt!</p>
            <ul>
              <li>
                <i class="bi bi-check-circle"></i>
                Create an account.
              </li>
              <li>
                <i class="bi bi-check-circle"></i>
                Login.
              </li>
              <li>
                <i class="bi bi-check-circle"></i>
                Choose a park and input your observations!
              </li>
            </ul>
            <p>Account creation in progress...</p>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Section -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
