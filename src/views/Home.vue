<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ t("header.home") }}</p>

    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const { t, locale } = useI18n();

    return {
      t,
      locale,
    };
  },
});
</script>
