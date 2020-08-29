<template>
  <!-- <div id="app"> -->
      <div>
        <div>
          <el-button @click="logout">Logout</el-button>
        </div>
        <br>
        <!--
        /api/image/upload/original?module=atlas
          :headers="headers"
          :http-request="myUpload"
          :on-success="handleSucceed"
          :http-request="myUpload"
          slot="trigger"
          :http-request="myUpload"
          list-type="picture"
         -->
        <div>
          <el-upload
              class="upload-"
              ref="upload"
              :http-request="myUpload"
              action="/api/image/upload/original?module=atlas"
              :headers="headers"
              :on-success="handleSucceed"

              multiple
              :on-change="handleChange"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"

              :limit="5"
              :on-exceed="handleExceed"
              :file-list="whatIsFileList"
              list-type="text"
              :before-upload="beforeUpload"
              :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <!--<ul class="showImage">
            <img width="100px" fit="contain" :src="ImageUrl" alt="">
          </ul>-->
        </div>

      </div>


  <!-- </div> -->
</template>

<script>
// const urlLogin = "/api/user/info"
const urlSpringLogout = "/api/logout"
const urlUpload = "/api/image/upload/original"
const loginToken = window.localStorage.getItem('loginToken')
export default {
  // name: 'Welcome',
  data(){
    return {
      whatIsFileList: [],
      headers:{},
      ImageUrl: '',
      // url
    }
  },
  //{ headers: this.headers }
  created() {
    this.headers = { "Authorization": "bearer" + loginToken };
    // this.$http.get(urlLogin, {headers:this.headers}  ).then(() => {});
  },
  updated() { console.log("welcome updated!") },
  destroyed() { console.log("welcome destroyed!") },

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
    submitUpload() {
      console.log(this.$refs.upload)
      this.$refs.upload.submit();
    },
    beforeUpload() {  },
    myUpload(params) {
      const self = this;
      let fd = new FormData();
      // console.log(params.file)
      fd.append("file", params.file);
      fd.append("FileName", params.file.name);
      fd.append("FileSize", params.file.size / 1024 / 1024 );
      this.$http.post(urlUpload, fd,{
        headers: {
          "Authorization": "bearer" + loginToken,
          // "Content-Type": "multipart/form-data",
        },
        params: {  'module': "atlas" },
        // data: fd
      }).then(({ status, data }) => {
        // console.log(status)
        if(status === 200){
          if(data && data.code == 200){
            self.$message({
              showClose: true,
              message: data.msg,
              type: 'success',
              center: true
            });
            // console.log(self.$refs.upload)
            let upLoader = self.$refs.upload.$el.querySelector('.el-upload-list  li');
            upLoader.classList.add('is-success')
            // console.log(upLoader)
          }
        }
      })
    },
    handleSucceed(response){
      // console.log(response)
      this.$message({
        showClose: true,
        message: response.msg + " You're so excellent!",
        type: 'success',
        center: true
      });
    },
    // 预览
    handleChange( file ){
      // file.raw === params.file
      console.log(file)
      // this.ImageUrl = file.raw;

      //手动添加图片预览. 然而不太需要，用list-type即可
      /*let self = this;
      let reader = new FileReader();
      reader.onload = function(e){
        console.log(e.target)
        self.ImageUrl = e.target.result;
      };
      // file is not a blob, but file.raw is.
      reader.readAsDataURL(file.raw)*/


    },
    handleRemove() { },
    handlePreview(file) { console.log(file) },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
