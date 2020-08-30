<template>
<div class="wrapper">
  <Sidebar ></Sidebar>
  <div class="container">
    <NavBar></NavBar>
    <hr>
    <ShowArea></ShowArea>
  </div>
</div>
</template>

<script>
import Sidebar from './backend/Sidebar.vue'
import NavBar from './backend/NavBar.vue'
import ShowArea from './backend/ShowArea.vue'

export default {
  name: "Main",
  components: {
    Sidebar,
    NavBar,
    ShowArea
  }
}
</script>

<style scoped>

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}
.container {
  width: 100%;
  border: 1px solid red;
}
</style>