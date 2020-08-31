<template>
<div class="wrapper">
  <Sidebar ></Sidebar>
  <div class="container">
    <NavBar :userName="dataName"></NavBar>
    <hr>
    <h1> h1, {{ userName }}</h1>
    <h2>h2, {{ this.dataName }}</h2>
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
  data() {
    return {
      dataName:this.$route.query.userName
    }
  },
  components: {
    Sidebar,
    NavBar,
    ShowArea
  },
  //$route.params
  props: {
    userName: {
      type: String,
      default: ''
    }
  },
  mounted() { console.log(this.$route) },

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