import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ParksIndex from "../views/ParksIndex.vue";
import ParksShow from "../views/ParksShow.vue";
import CommittedIndex from "../views/CommittedIndex.vue";
import CommittedShow from "../views/CommittedShow.vue";
import CommittedEdit from "../views/CommittedEdit.vue";
import ContactInfo from "../views/ContactInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/parks", name: "parks-index", component: ParksIndex },
  { path: "/parks/:id", name: "parks-show", component: ParksShow },
  { path: "/committeds", name: "committeds-index", component: CommittedIndex },
  { path: "/committeds/:id", name: "committeds-show", component: CommittedShow },
  { path: "/committeds/:id/edit", name: "committeds-edit", component: CommittedEdit },
  { path: "/users/:id", name: "contact-index", component: ContactInfo },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
