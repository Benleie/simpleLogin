<template>
  <div class="dialog-wrapper" ref="dialogWrapper" >
    <div class="dialog-container">
      <div class="dialog-header">dialog-header: </div>
      <div class="dialog-body">
        <slot></slot>
      </div>
      <div class="dialog-footer">
        <button class="btn-left" @click="dialogClose">{{ cancel }}</button>
        <button class="btn-right" @click="dialogSubmit">{{ submit }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MDialog",
  props:{
    cancel:{ type: String, default:'' },
    submit:{ type: String, default:'' },
  },
  methods: {
    dialogClose(){ this.$emit('close') },
    dialogSubmit(){ this.$emit('submit') },
  },
}
</script>

<style scoped>
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
  display: flex;
}
.dialog-container {
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
</style>