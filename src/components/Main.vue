<template>
<div class="wrapper">
  <Sidebar></Sidebar>
  <div class="container">
    <NavBar :userName="dataName"></NavBar>
    <span>query:{{ dataName }}</span>
    <span>------</span>
    <span>params:{{ userName }}</span>
    <hr>
    <ShowArea :userName="dataName"></ShowArea>
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
  // mounted() { console.log(this.$route) },

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