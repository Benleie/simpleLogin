<template>
  <div>
    <span>{{ this.userName }}</span>
    <el-button @click="logout">Logout</el-button>
  </div>
</template>

<script>
const urlSpringLogout = "/api/logout"
const urlLogin = "/api/user/info"
export default {
  name: "NavBar",
  data(){
    return { userName: ""}
  },
  /*props: {
    userName: {
      type: String,
      default: ''
    }
  },*/
  created(){
    let self = this;
    self.$http.get(urlLogin, {
      headers: {
        "Authorization": "bearer " + window.localStorage.getItem('loginToken')
      }
    }).then(({ status,data }) => {
      if(status === 200){
        if(data && data.code == 200){
          this.userName = data.data.companyName
        }
      }
    })
  },

  methods: {
    logout(){
      let self = this;
      self.$http.post(urlSpringLogout, {},{
        headers: {
          "Authorization": "bearer " + window.localStorage.getItem('loginToken')
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