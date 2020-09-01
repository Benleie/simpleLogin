<template>
  <div>
    <span>{{ this.$store.state.userName }}</span>
    <el-button @click="logout">Logout</el-button>
  </div>
</template>

<script>
const urlSpringLogout = "/api/logout"
export default {
  name: "NavBar",
  props: {
    userName: {
      type: String,
      default: ''
    }
  },
  methods: {
    logout(){
      let self = this;
      self.$http.post(urlSpringLogout, {},{
        headers: {
          "Authorization": "bearer" + window.localStorage.getItem('loginToken')
        }
      }).then(({ status, data }) => {
        if(status === 200){
          if(data && data.code == 200){
            window.localStorage.removeItem('loginToken');
            this.$router.push({name:"login"})
          }
        }
      });
    },
  }
}
</script>

<style scoped>

</style>