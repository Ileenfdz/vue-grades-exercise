<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Notas />
  </div>
</template>

<script>
// @ is an alias to /src
import Notas from "@/components/Notas.vue";

export default {
  name: "Home",
  components: {
    Notas,
  },
};
</script>
