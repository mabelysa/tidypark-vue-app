<template>
  <div class="login">
    <!-- ======= Advanced Featuress Section ======= -->
    <section id="advanced-features">
      <div class="features-row">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <br />
              <br />
              <br />
              <br />
              <img class="advanced-feature-img-right" src="assets/img/advanced-feature-2.jpg" alt="" />
              <div>
                <h2>Login to Your Account Below!</h2>
                <i class="bi bi-brightness-high"></i>
                <form v-on:submit.prevent="submit()">
                  <h1>Login</h1>
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                  <div>
                    <label>Email Address:</label>
                    <input type="email" v-model="newSessionParams.email_address" />
                  </div>
                  <div>
                    <label>Password:</label>
                    <input type="password" v-model="newSessionParams.password" />
                  </div>
                  <div class="submitbutton">
                    <input type="submit" value="Submit" />
                  </div>
                </form>
                <!-- <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam.
                </p> -->
                <br />
                <i class="bi bi-calendar4-week"></i>
                <p>You're on your way to selecting your day!</p>
                <i class="bi bi-bar-chart"></i>
                <p>Progress Status: 2/3 ...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Advanced Featuress Section -->
    <div class="garbagebin" dat-aos-delay="100">
      <img src="assets/img/clients/client-1.png" alt="garbagebin" />
    </div>
  </div>
</template>

<style>
.submitbutton {
  top: 50%;
  left: 50%;
}
.garbagebin {
  position: fixed;
  top: 18%;
  left: 97%;
  transform: translate(-50%, -50%);
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          console.log(response.data);
          this.$router.push("/parks");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
