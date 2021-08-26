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
                <p>You're on your way, to clean a park for a day!</p>
                <i class="bi bi-bar-chart"></i>
                <p>Progress Status: 2/3 ...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Advanced Featuress Section -->
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
    <div class="garbagebin2" dat-aos-delay="100">
      <img src="assets/img/clients/client-2.png" alt="garbagebin2" />
    </div>
  </div>
</template>

<style>
.submitbutton {
  top: 50%;
  left: 50%;
}

.col-12 {
  text-align: left;
}

.submitbutton {
  padding-left: 110px;
}

.garbagebin2 {
  position: fixed;
  top: 20%;
  left: 97%;
  transform: translate(-50%, -50%);
}
</style>

<script>
import axios from "axios";
import swal from "sweetalert";

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
          swal({
            title: "-Welcome Back-",
            text: "Let's get ready to tackle some mess!",
            icon: "success",
            button: "Right On!!",
          });
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
