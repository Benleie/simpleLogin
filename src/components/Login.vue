<template>
  <div id="root">
        <div class="content">
            <div class="v2ex">
                <el-button
                    class="btn-v2ex"
                    type="primary"
                    @click="fetchV2ex">加载API
                </el-button>
                <!-- <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                    <span>这是一段信息</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog> -->
            </div>
            <div class="form">
                
                
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
                    <el-form-item  prop="userName">
                        <el-input 
                            v-model="ruleForm.userName"
                            prefix-icon="el-icon-user-solid"
                            placeholder="请输入您的用户名"></el-input>
                    </el-form-item>
                    <el-form-item  prop="password">
                        <el-input 
                            v-model="ruleForm.password"
                            prefix-icon="el-icon-lock"
                            show-password
                            placeholder="请输入您的密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            class="btn-login"
                            type="success"
                            @click="login">登录
                        </el-button>
                    </el-form-item>
                    <!-- <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item> -->
                </el-form>
                
                <!-- prefix-icon="el-icon-user-solid" -->

                <!-- <el-input
                    v-model="user"
                    prefix-icon="el-icon-user-solid"
                    placeholder="请输入账号">
                </el-input>
                <el-input 
                    placeholder="请输入密码" 
                    v-model="password" 
                    show-password>
                        <el-button class="btn-password" slot="prepend" icon="el-icon-lock" size="mini"></el-button>
                </el-input>

                <el-button
                    class="btn-login"
                    type="success"
                    @click="login">登录
                </el-button> -->

            </div>
        </div>

    </div>
</template>

<script>

import qs from 'qs';
const urlGetToken = "/oauth/token";
// const urlV2ex = "/api/topics/latest.json"
// const urlOriginV2ex = "https://www.v2ex.com/api/topics/latest.json"

export default {
   data: function () {
        return {
            tokenData:{},
            ruleForm: {
                userName: '',
                password: ''
            },
            rules: {
                userName:[
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password:[
                    {required: true, message:"请输入密码", trigger: 'blur'},
                    {max:10, message:"密码超过10位", trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        login: function () {
            
            let self = this;
            let obj = {
                client_id: 'client',
                client_secret: '123456',
                grant_type: 'password',
                scope: 'read write',
                username: this.ruleForm.userName,
                password: this.ruleForm.password,
                role_name: ''
            }

            self.$http.post(urlGetToken, qs.stringify(obj))
            .then(({ status, data }) => {
                if (status === 200) {
                    if (data && data.code == 200) {
                        // console.log(typeof data.data.access_token)
                        //data.data.token_type
                        // self.tokenData = data.data;
                        window.localStorage.setItem("loginToken", data.data.access_token)
                        console.log(window.localStorage.getItem('loginToken'))


                        // location.href = '/aaa'
                        self.getUserName(self.ruleForm.userName)
                        self.$router.push({
                          name:"MainBoard",
                          // params:{userName: self.ruleForm.userName},
                          // query:{userName: self.ruleForm.userName}
                        })

                    } else {
                        self.$message({
                            showClose: true,
                            message: data.msg,
                            type: 'error',
                            center: true
                        });
                    }
                } else {
                    self.$message.error = `服务器出错`
                }
            })
        },
        getUserName(userName) {
          this.$store.dispatch("changeUserName", userName)
        },
        fetchV2ex: function() {
            /*let self = this;
            self.$http.get(urlV2ex)
            .then(({status, data}) => {
                if(status === 200){
                    console.log("v2ex!")
                    console.log(data.length)
                }
            });*/
            this.$router.push({name: "Home"})

        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
    
}
</script>


<style scoped>
#root {
    width: 100%;
    height: 100%;
    margin:0;
    padding:0;
}

/* iput arrow */
input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { 
    -webkit-appearance: none; 
}
input[type="number"]{ -moz-appearance: textfield; }

/* 去掉星号 */
.el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before{
    content: "";
}
#root {
    /*margin-top: -100px;*/
    /* position: relative; */
    /* background-color: aliceblue; */

    /* width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center; */

}
.content {
    /* height: 300px; */
    /* margin: auto; */
    /* border: 1px solid gold; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.form {
    width: 300px;
    margin-top: 20px;
}

.el-input {
    margin-top: 10px;
}
.btn-login {
    margin-top: 20px;
    width: 300px;
}
.btn-password {
    /* width: 10px; */
}
/* .form-input{
    font-size: 28px;
}
.form div {
    margin-bottom: 10px;
} */
</style>