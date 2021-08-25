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
        <div class="form">
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
        </div>
        <br />
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
            <p>Progress status: 1/3...</p>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Section -->
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
    <div class="garbagebin1" dat-aos-delay="100">
      <img src="assets/img/clients/client-1.png" alt="garbagebin1" />
    </div>
  </div>
</template>

<style>
.form {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  text-align: center;
  /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
}
.garbagebin1 {
  position: fixed;
  top: 18%;
  left: 4%;
  transform: translate(-50%, -50%);
}
</style>

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
