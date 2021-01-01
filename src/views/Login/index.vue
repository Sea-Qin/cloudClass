<template>
  <div>
    <div class="site">
      <img src="@/assets/logo.png" class="logo">
      <span class="site-name">XD云课堂</span>
    </div>
    <!-- <div class="from"> -->
    <div class="card-wrapper">
      <el-card class="box-card" width=340>
        <el-tabs v-model="activeName">
          <el-tab-pane label="登录" name="login">
            <!-- 登录表单-->
            <el-form
              :model="logiForm"
              status-icon
              :rules="rules"
              ref="logiForm"
              class="demo-ruleForm"
            >
              <el-form-item prop="name">
                <el-input
                  v-model="logiForm.name"
                  prefix-icon="el-icon-user-solid"
                  class="form-item"
                  size="large"
                  placeholder="请输入你的账号昵称"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="logiForm.password"
                  prefix-icon="el-icon-lock"
                  show-password
                  type="password"
                  class="form-item"
                  size="large"
                  placeholder="请输入你的密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  @click="submitLogiForm('logiForm')"
                  type="primary"
                  class="handle-button login-btn"
                >登录</el-button>
              </el-form-item>
              <p class="tips">若未注册账户，请先注册！</p>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <!-- 注册表单-->
            <el-form
              :model="regiForm"
              status-icon
              :rules="rules"
              ref="regiForm"
              class="demo-ruleForm"
            >
              <el-form-item prop="name">
                <el-input
                  v-model="regiForm.name"
                  prefix-icon="el-icon-user-solid"
                  class="form-item"
                  size="large"
                  placeholder="请输入2到8个字符的昵称"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="regiForm.password"
                  prefix-icon="el-icon-lock"
                  type="password"
                  show-password
                  class="form-item"
                  size="large"
                  placeholder="请输入6到15个字符的密码"></el-input>
              </el-form-item>
              <el-form-item prop="identify" id="identify">
                <el-radio-group v-model="regiForm.identify">
                  <el-radio label="0">教师</el-radio>
                  <el-radio label="1">学生</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item>
                <el-button
                  @click="submitRegiForm('regiForm')"
                  type="success"
                  class="handle-button"
                >注册</el-button>
              </el-form-item>
              <p class="tips">请注意确认你的账号身份！</p>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'login',
  data() {
    return {
      activeName: 'login', // tab
      logiForm: {
        name: '',
        password: ''
      },
      regiForm: {
        name: '',
        password: '',
        identify: "1"
      },
      rules: {
        name: [
          {
            required: true, message: '*请输入账号', trigger: 'blur'
          },
          {
            min: 2, max: 8, message: '*长度在 2 到 8 个字符', trigger: 'blur'
          }
        ],
        password: [
          {
            required: true, message: '*请输入密码', trigger: 'blur'
          },
          {
            min: 6, max: 15, message: '*长度在 6 到 15 个字符', trigger: 'blur'
          }
        ]
      }
    };
  },
  methods: {
    submitRegiForm(formName) { // formName为ref参数值
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('注册', this.regiForm);
          // this.isError = !this.isError;
          // return true;
        }
      });
    },
    submitLogiForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('登录', this.logiForm);
          // this.isError = !this.isError;
          // return true;
          this.$router.push('/main');
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import '@/theme/variable.scss';
// tab调整
// .el-button {
//   font-size: 14px;
//   width: 100%;
//   padding: 8px 0;
//   border: 1px solid #7986bd;
//   color: #fff;
//   border-radius: 40px;
//   background: linear-gradient(90deg, #0162c8, #55e7fc);
//   margin-top: 66px;
// }
// .el-button:hover {
//   // 不设置
//   background: linear-gradient(90deg, #0162c8, #55e7fc);
//   color: #fff;
//   font-size: 16px;
// }
</style>
<style lang="scss" scoped>
@import '@/theme/variable.scss';

.site {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}
.logo {
  width: 33px;
  height: 32px;
  background-color: $--color-logo;
  border: 1px solid transparent;
  border-radius: 50%;
}
.site-name {
  font-weight: bold;
  color: $--color-word;
  margin-left: 10px;
  font-size: 16px;
}
.card-wrapper {
  width: 300px;
  height: 380px;
  padding: 0 25px;
  // height: 200px;
  // border-radius: 2px;
  // background-color: #fff;
  margin: 15px auto;
  text-align: center;
  // overflow: hidden;
}
.handle-button {
  // padding: 15px;
  width: 100%;
}
.login-btn {
  margin-top: 62px;
}
.tips {
  font-size: 14px;
  color: $--color-primary;
  text-decoration: underline;
}
</style>
