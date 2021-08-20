<template>
  <div>
    <el-container>
      <el-header>
        <Nav></Nav>
        <Settings></Settings>
      </el-header>
      <el-container>
        <Sidebar></Sidebar>
        <el-container>
          <TagsView></TagsView>
          <AppMain></AppMain>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Nav, Sidebar, Settings, TagsView, AppMain } from "./components/index";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",
  components: {
    Nav,
    Sidebar,
    Settings,
    TagsView,
    AppMain,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
