<template>
  <div class="wrapper">
    <div class="site">
      <img src="@/assets/logo.png" class="logo">
      <span class="site-name">XD云课堂</span>
    </div>
    <!-- <div class="from"> -->
    <div class="login-wrapper">
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
                size="mini"
                placeholder="请输入你的账号昵称"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="logiForm.password"
                prefix-icon="el-icon-lock"
                show-password
                type="password"
                class="form-item"
                size="mini"
                placeholder="请输入你的密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                @click="submitLogiForm('logiForm')"
                 class="form-item"
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
                size="mini"
                placeholder="请输入2到8个字符的昵称"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="regiForm.password"
                prefix-icon="el-icon-lock"
                type="password"
                show-password
                class="form-item"
                size="mini"
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
                class="regiBtn"
              >注册</el-button>
            </el-form-item>
            <p class="tips">请注意确认你的账号身份！</p>
          </el-form>
        </el-tab-pane>
      </el-tabs>
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
    // handleClickTab(tab, event) {
    //   this.$message(tab, event);
    // }
  }
};
</script>

<style lang="scss">
@import '@/theme/variable.scss';
// tab调整
.is-top {
  font-size: 0.1rem;
}
.el-tabs__header {
  margin-bottom: 5px;
}
.el-tabs__nav {
height: 34px;
}
.el-form-item {
  margin-bottom: 5px;
}
.el-button {
  font-size: 0.1rem;
  width: 100%;
  padding: 8px 0;
  border: 1px solid #7986bd;
  color: #fff;
  border-radius: 40px;
  background: linear-gradient(90deg, #0162c8, #55e7fc);
  margin-top: 30px;
}
.el-button:hover {
  // 不设置
  background: linear-gradient(90deg, #0162c8, #55e7fc);
  color: #fff;
  font-size: 0.12rem;
}
.el-form-item__error {
  font-size: 0.08rem;
  padding: 0;
}
.el-input__inner {
  font-size: 0.08rem;
  // height: 0.01rem;
  // padding: 2px;
}
#identify {
  padding: 0;
  margin: 0;
  margin-top: -8px;
  height: 30px;
}
.el-radio__label {
  font-size: 0.1rem;
}
.el-radio__input {
  width: 0.1rem;
  height: 0.14rem;
  // border: 1px solid;
  // line-height: 0.1rem;
}
</style>
<style lang="scss" scoped>
@import '@/theme/variable.scss';

.wrapper {
  height: 350px;
  padding-top: 20px;
  background-color: $--color-bgc;
  text-align: center;
}
.logo {
  width: 28px;
  height: 28px;
  background-color: $--color-logo;
  border: 1px solid transparent;
  border-radius: 50%;
}
.site-name {
  font-weight: bold;
  color: $--color-word;
  margin-left: 10px;
  font-size: 0.15rem;
}
.login-wrapper {
  width: 140px;
  height: 210px;
  padding: 0 25px;
  // height: 200px;
  border-radius: 2px;
  background-color: #fff;
  margin: 15px auto;
  text-align: center;
  overflow: hidden;
}
.regiBtn {
  margin-top: 0;
  background: linear-gradient(90deg, #755bea, #ff72c0);
}
.regiBtn:hover {
  background: linear-gradient(90deg, #755bea, #ff72c0);
  color: #fff;
  font-size: 0.12rem;
}
.tips {
  font-size: 0.07rem;
  color: $--color-primary;
  text-decoration: underline;
}
</style>
