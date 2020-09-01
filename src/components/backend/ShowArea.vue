<template>
 <transition-group name="fade">
   <div :key="key" class="show-area">
     <button @click="showDialog" >用户信息</button>
     <MDialog
         @close="hideDialog"
         @submit="submitDialog"
         v-if="isShow"
         cancel="阅"
         submit="知道了"
     >
       <div>
         <h3>Dialog for User Info</h3>
         <h4>当前用户:{{ userName }}</h4>
       </div>
     </MDialog>

     <router-view />
   </div>
 </transition-group>
</template>

<script>
import MDialog from "@/components/MDialog";
export default {
  name: "ShowArea",
  components:{MDialog},
  data() {
    return {
      isShow: false
    }
  },
  props: {
    userName: {
      type: String,
      default: ''
    }
  },
  computed: {
    key() { return this.$route.path }
  },
  methods:{
    showDialog(){ this.isShow = true },
    hideDialog(){ this.isShow = false },
    submitDialog(){ this.isShow = false },
  },
}
</script>

<style scoped>
.show-area {
  position: relative;
}
.dialog-wrapper {

  position: fixed;
  z-index: 30;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  margin: 0;
  background-color: lightgray;
  opacity: 0.9;

  align-items: center;
  justify-content: center;
  display: none;
}
.dialog {
  /*position: relative;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 200px;
  background-color: #fff;
  border: 1px solid red;
}
.dialog-btn {
  margin-top: 15px;
}
</style>