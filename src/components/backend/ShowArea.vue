<template>
 <transition-group  name="slide-fade">
   <div :key="key">
     <h1>ShowArea</h1>
     <router-view />
   </div>

 </transition-group>
</template>

<script>
export default {
  name: "ShowArea",
  computed: {
    key() { return this.$route.path }
  }
}
</script>

<style scoped>

</style>