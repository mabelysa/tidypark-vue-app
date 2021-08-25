<template>
  <div id="app">
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex justify-content-between align-items-center">
        <div id="logo">
          <h1><a href="index.html">Avilon</a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt=""></a> -->
        </div>

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="/">Home</a></li>
            <li><a class="nav-link scrollto" href="/signup">Sign Up</a></li>
            <li><a class="nav-link scrollto" href="/login">Login</a></li>
            <li><a class="nav-link scrollto" href="/parks">NYC Parks</a></li>
            <!-- <li><a class="nav-link scrollto" href="#committeds">My Account</a></li> -->
            <li><a class="nav-link scrollto" href="/logout">Logout</a></li>
            <li class="dropdown">
              <a href="#">
                <span>My Account</span>
                <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li><a href="/committeds">My Parks</a></li>
                <!-- <li class="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>
                    <i class="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li> -->
                <li><a href="/user/:id">Contact Info</a></li>
                <!-- <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li> -->
              </ul>
            </li>
            <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->

    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <div v-if="!isLoggedIn()" class="nav-item">
        |
        <router-link to="/signup">Signup</router-link>
      </div>
      <div v-if="!isLoggedIn()" class="nav-item">
        |
        <router-link to="/login">Login</router-link>
      </div>
      |
      <router-link to="/parks">NYC Parks</router-link>
      |
      <router-link to="/committeds">My Account</router-link>
      |
      <div v-if="isLoggedIn()" class="nav-item">
        <router-link to="/logout">Logout</router-link>
      </div>
    </div> -->
    <router-view />
    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 text-lg-start text-center">
            <div class="copyright">
              &copy; Copyright
              <strong>Avilon</strong>
              . All Rights Reserved
            </div>
            <div class="credits">
              <!--
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Avilon
          -->
              Designed by
              <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
          <div class="col-lg-6">
            <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
              <a href="#intro" class="scrollto">Home</a>
              <a href="#about" class="scrollto">About</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
    <!-- End  Footer -->
  </div>
</template>

<style></style>

<script>
// import axios from "axios";
/* global AOS */
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    mounted() {
      /**
       * Template Name: Avilon - v4.3.0
       * Template URL: https://bootstrapmade.com/avilon-bootstrap-landing-page-template/
       * Author: BootstrapMade.com
       * License: https://bootstrapmade.com/license/
       */
      (function () {
        "use strict";

        /**
         * Easy selector helper function
         */
        const select = (el, all = false) => {
          el = el.trim();
          if (all) {
            return [...document.querySelectorAll(el)];
          } else {
            return document.querySelector(el);
          }
        };

        /**
         * Easy event listener function
         */
        const on = (type, el, listener, all = false) => {
          let selectEl = select(el, all);
          if (selectEl) {
            if (all) {
              selectEl.forEach((e) => e.addEventListener(type, listener));
            } else {
              selectEl.addEventListener(type, listener);
            }
          }
        };

        /**
         * Easy on scroll event listener
         */
        const onscroll = (el, listener) => {
          el.addEventListener("scroll", listener);
        };

        /**
         * Navbar links active state on scroll
         */
        let navbarlinks = select("#navbar .scrollto", true);
        const navbarlinksActive = () => {
          let position = window.scrollY + 200;
          navbarlinks.forEach((navbarlink) => {
            if (!navbarlink.hash) return;
            let section = select(navbarlink.hash);
            if (!section) return;
            if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
              navbarlink.classList.add("active");
            } else {
              navbarlink.classList.remove("active");
            }
          });
        };
        window.addEventListener("load", navbarlinksActive);
        onscroll(document, navbarlinksActive);

        /**
         * Scrolls to an element with header offset
         */
        const scrollto = (el) => {
          let header = select("#header");
          let offset = header.offsetHeight;

          if (!header.classList.contains("header-scrolled")) {
            offset -= 20;
          }

          let elementPos = select(el).offsetTop;
          window.scrollTo({
            top: elementPos - offset,
            behavior: "smooth",
          });
        };

        /**
         * Toggle .header-scrolled class to #header when page is scrolled
         */
        let selectHeader = select("#header");
        if (selectHeader) {
          const headerScrolled = () => {
            if (window.scrollY > 100) {
              selectHeader.classList.add("header-scrolled");
            } else {
              selectHeader.classList.remove("header-scrolled");
            }
          };
          window.addEventListener("load", headerScrolled);
          onscroll(document, headerScrolled);
        }

        /**
         * Back to top button
         */
        let backtotop = select(".back-to-top");
        if (backtotop) {
          const toggleBacktotop = () => {
            if (window.scrollY > 100) {
              backtotop.classList.add("active");
            } else {
              backtotop.classList.remove("active");
            }
          };
          window.addEventListener("load", toggleBacktotop);
          onscroll(document, toggleBacktotop);
        }

        /**
         * Mobile nav toggle
         */
        // on("click", ".mobile-nav-toggle", function (e) {
        //   select("#navbar").classList.toggle("navbar-mobile");
        //   this.classList.toggle("bi-list");
        //   this.classList.toggle("bi-x");
        // });

        /**
         * Mobile nav dropdowns activate
         */
        on(
          "click",
          ".navbar .dropdown > a",
          function (e) {
            if (select("#navbar").classList.contains("navbar-mobile")) {
              e.preventDefault();
              this.nextElementSibling.classList.toggle("dropdown-active");
            }
          },
          true
        );

        /**
         * Scrool with ofset on links with a class name .scrollto
         */
        on(
          "click",
          ".scrollto",
          function (e) {
            if (select(this.hash)) {
              e.preventDefault();

              let navbar = select("#navbar");
              if (navbar.classList.contains("navbar-mobile")) {
                navbar.classList.remove("navbar-mobile");
                let navbarToggle = select(".mobile-nav-toggle");
                navbarToggle.classList.toggle("bi-list");
                navbarToggle.classList.toggle("bi-x");
              }
              scrollto(this.hash);
            }
          },
          true
        );

        /**
         * Scroll with ofset on page load with hash links in the url
         */
        window.addEventListener("load", () => {
          if (window.location.hash) {
            if (select(window.location.hash)) {
              scrollto(window.location.hash);
            }
          }
        });

        /**
         * Initiate gallery lightbox
         */
        // const galleryLightbox = GLightbox({
        //   selector: ".gallery-lightbox",
        // });

        /**
         * Animation on scroll
         */
        window.addEventListener("load", () => {
          AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
          });
        });
      })();
    },
  },
};
</script>
