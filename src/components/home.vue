<template>
  <div class="container">
    <h1>home</h1>
    <div class="pxDiv">px</div>
    <div class="remDiv">rem</div>
    <div class="inlineDiv" style="width: 320px;height: 150px;background-color: #42b983;">inline-px</div>
  </div>
</template>

<script>
export default {
  name: "Home.vue"
}
</script>

<style scoped>

h1 {
  font-size: 36px;
}
.container {
  width: 1280px;
  height: 616px;
  /*overflow: hidden;*/
}

.pxDiv {
  width: 320px;
  height: 150px;
  background-color: #42b983;
}

.remDiv {
  width: 20rem;
  height: 150px;
  background-color: lightgrey;
}



</style>