<template>
  <div class="home">
    <h1>{{ message1 }}</h1>
    <h2>
      <i>
        {{ message2 }}
      </i>
    </h2>
    <h3>{{ message3 }}</h3>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      message1: "Welcome to Tidy Park!",
      message2: "Go Green or Go Home!",
      message3: "Hitting the streets, to keep NYC parks neat!",
    };
  },
  created: function () {},
  methods: {},
};
</script>
