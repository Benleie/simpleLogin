<template>
  <div class="sidebar">
    <h1>Sidebar</h1>
    <ul>
      <li>
        <router-link to="/upload/image">upload</router-link>
      </li>
      <li>
        <router-link to="/left1/index">left1</router-link>
      </li>
      <li>
        <router-link to="/left2/index">left2</router-link>
      </li>
      <li>
        <router-link to="/left3/index">left3</router-link>
      </li>


    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  height: 100%;
  /*border: 1px solid red;*/
  background-color: lightgray;
}
.sidebar li{
  list-style: none;
}
a {
  text-decoration: none;
}
</style>