<template>
  <div>
    <h1>我是男二号</h1>
    <p @click="showDialog">你确定想看？</p>
    <!--

     -->
    <MDialog
        @close="hideDialog"
        @submit="submitDialog"
        v-if="isShow"
        cancel="取消"
        submit="确定"
    >
      <div class="slot-content">
        <h1>this is a slot content</h1>
        <h3>Dialog for User Info</h3>
      </div>
    </MDialog>
  </div>
</template>

<script>
// import MDialog from "../MDialog.vue"
import MDialog from "@/components/MDialog";
export default {
  name: "Left2",
  components: {MDialog},
  data() {
    return {
      isShow: false
    }
  },
  methods:{
    showDialog(){
      console.log("please show dialog")
      this.isShow = true
      console.log(this.isShow)
    },
    hideDialog(){ this.isShow = false },
    submitDialog(){ this.isShow = false },
  },
}
</script>

<style scoped>
.slot-content {
  background-color: #42b983;
}
</style>