<template>
 <transition-group >
   <div :key="key" class="show-area">
     <button @click="showDialog" >用户信息</button>
     <div class="dialog_wrapper" ref="dialog" @click="hideDialog">
       <div class="dialog">
         <h3>Dialog for User Info</h3>
         <h4>当前用户:{{ userName }}</h4>
         <div>
           <button @click="hideDialog" class="dialog-confirm">关闭</button>
         </div>
       </div>
     </div>

     <router-view />
   </div>
 </transition-group>
</template>

<script>
export default {
  name: "ShowArea",
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
    showDialog(){
      this.$refs.dialog.style.display = "flex";
    },
    hideDialog(event){
      // console.log(event.target)
      let classFirst = event.target.classList[0]
      if(classFirst == "dialog_wrapper" || classFirst == "dialog-confirm"){
        this.$refs.dialog.style.display = 'none'
      }
    }
  },
}
</script>

<style scoped>
.show-area {
  position: relative;
}
.dialog_wrapper {

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