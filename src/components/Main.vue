<template>
<div class="wrapper">
  <Sidebar></Sidebar>
  <div class="container">
    <NavBar></NavBar>
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
  comments: {
    Sidebar,
    NavBar,
    ShowArea
  }
}
</script>

<style scoped>

</style>