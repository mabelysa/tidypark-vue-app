<template>
  <div>
    <div class="home">
      <!-- ======= Hero Section ======= -->
      <section id="hero">
        <div class="hero-text">
          <br />
          <br />
          <h2>{{ message1 }}</h2>
          <h3>
            <b>
              <i>{{ message2 }}</i>
            </b>
          </h3>
          <p>{{ message3 }}</p>
          <p>{{ message4 }}</p>
          <a href="/signup" v-on:onclick="sweetalertpop()" class="btn-get-started scrollto">Sign Up Here</a>
        </div>

        <div class="product-screens">
          <div class="product-screen-1" data-aos-delay="400">
            <img src="assets/img/product-screen-1.png" alt="" />
          </div>

          <div class="product-screen-2" data-aos-delay="200">
            <img src="assets/img/product-screen-2.png" alt="" />
          </div>

          <div class="product-screen-3">
            <img src="assets/img/product-screen-3.png" alt="" />
          </div>
        </div>
      </section>
      <!-- End Hero Section -->
      <main id="main">
        <!-- ======= Call To Action Section ======= -->
        <section id="call-to-action">
          <div class="container">
            <div class="row">
              <div class="col-lg-9 text-center text-lg-start">
                <h3 class="cta-title">What is Tidy Park?</h3>
                <p class="cta-text">
                  Tidy Park is an app where people can band together to clean up NYC, one park at a time!
                </p>
              </div>
              <div class="col-lg-3 cta-btn-container text-center">
                <a class="cta-btn align-middle" href="/parks">NYC Parks</a>
              </div>
            </div>
          </div>
        </section>
        <!-- End Call To Action Section -->
        <!-- ======= Clients Section ======= -->
        <section id="clients">
          <div class="container">
            <div class="row">
              <div class="col-md-2">
                <img src="assets/img/clients/client-1.png" alt="" />
              </div>

              <div class="col-md-2">
                <img src="assets/img/clients/client-3.png" alt="" />
              </div>

              <div class="col-md-2">
                <img src="assets/img/clients/client-4.png" alt="" />
              </div>

              <div class="col-md-2">
                <img src="assets/img/clients/client-5.png" alt="" />
              </div>

              <div class="col-md-2">
                <img src="assets/img/clients/client-6.png" alt="" />
              </div>
              <!-- <span style="display: inline-block; width: 2"></span> -->
              <div class="col-md-2">
                <img src="assets/img/clients/client-2.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <!-- End Clients Section -->
        <!-- ======= Contact Section ======= -->
        <section id="contact">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="contact-about">
                  <h3>Tidy Park</h3>
                  <p><b>Want to reach us? Use the form to contact us!</b></p>
                  <p>
                    Post your park cleanup on social media using the hashtag
                    <b>#TidyPark</b>
                    and/or
                    <b>#BinIt</b>
                    !
                  </p>
                  <div class="social-links">
                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                    <!-- <a href="#" class="snapchat"><i class="bi bi-snapchat"></i></a> -->
                    <!-- <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a> -->
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-4">
                <div class="info">
                  <div>
                    <i class="bi bi-geo-alt"></i>
                    <p>
                      717 Park Avenue
                      <br />
                      New York, NY 10065
                    </p>
                  </div>

                  <div>
                    <i class="bi bi-envelope"></i>
                    <p>hello@tidypark.com</p>
                  </div>

                  <div>
                    <i class="bi bi-phone"></i>
                    <p>212-555-5757</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-5 col-md-8">
                <div class="form">
                  <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                    <div class="row">
                      <div class="form-group col-lg-6">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          id="name"
                          placeholder="Your Name"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                        />
                      </div>
                      <div class="form-group col-lg-6 mt-3 mt-lg-0">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          data-rule="email"
                          data-msg="Please enter a valid email"
                        />
                      </div>
                    </div>
                    <div class="form-group mt-3">
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                    </div>
                    <div class="form-group mt-3">
                      <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                    </div>
                    <div class="my-3">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div class="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End Contact Section -->
      </main>
      <!-- End #main -->
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
// import swal from "sweetalert";
// swal("Welcome to Tidy Park!");
// swal({
//   title: "-Welcome to Tidy Park-",
//   text: "Let's get ready to tackle some mess!",
//   icon: "success",
//   button: "Right On!!",
// });
export default {
  data: function () {
    return {
      message1: "Hi...Welcome to Tidy Park!",
      message2: "Go Green or Go Home!",
      message3: "Hitting the streets, to keep New York City parks neat!",
      message4: "Create an account & login to select which parks need some TLC ;)",
    };
  },
  created: function () {},
  // methods: {
  //   sweetalertpop: function () {
  //     swal({
  //       title: "-Welcome to Tidy Park-",
  //       text: "Let's get ready to tackle some mess!",
  //       icon: "success",
  //       button: "Right On!!",
  //     });
  //   },
  // },
};
</script>
