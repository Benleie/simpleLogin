<template>
  <div class="container">
    <h1>home</h1>
    <div class="pxDiv">px</div>
    <div class="remDiv">rem</div>
  </div>
</template>

<script>
export default {
  name: "Home.vue"
}
</script>

<style scoped>
/*html, body {
  font-size: 62.5%;
}*/
.container {
  width: 1920px;
  height: 666px;
  /*overflow: hidden;*/
}

.pxDiv {
  width: 320px;
  height: 300px;
  background-color: #42b983;
}
h1 {
  font-size: 3rem;
}

.remDiv {
  width: 2rem;
  height: 200px;
  background-color: lightgrey;
}

</style>