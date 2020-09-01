<template>
  <div>
    <h1>我是男三号</h1>
    <button @click="showDialog">你还要看？</button>
    <MDialog
        @close="hideDialog"
        @submit="submitDialog"
        v-if="isShow"
        cancel="阅"
        submit="知道了"
    >
      <div>
        <h3>Dialog for User Info</h3>
        <h4>普普通通</h4>
      </div>
    </MDialog>
  </div>
</template>

<script>
import MDialog from "@/components/MDialog";

export default {
  name: "Left3",
  components:{MDialog},
  data() {
    return {
      isShow: false
    }
  },
  methods:{
    showDialog(){ this.isShow = true },
    hideDialog(){ this.isShow = false },
    submitDialog(){ this.isShow = false },
  },
}
</script>

<style scoped>

</style>