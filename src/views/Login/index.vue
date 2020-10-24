<template>
  <div class="wrapper">
    <div class="site">
      <img src="@/assets/logo.png" class="logo">
      <span class="site-name">XD云课堂</span>
    </div>
    <!-- <div class="from"> -->
    <div class="login-wrapper">
      <el-tabs v-model="activeName">
        <el-tab-pane label="登录" name="login"> <!-- 登录-->
          <el-form
            :model="logiData"
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
            size="mini"
          >
            <el-form-item prop="name">
              <el-input v-model="logiData.name"
                placeholder="请输入昵称"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="logiData.password"
                placeholder="请输入密码"
                show-password autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
              >登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register"> <!-- 注册-->
          <el-form
            :model="regiData"
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
            size="mini"
          >
            <el-form-item prop="name">
              <el-input v-model="regiData.name"
                placeholder="请输入昵称"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="regiData.password"
                placeholder="请输入密码"
                show-password autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="success"
                @click="submitForm('ruleForm')"
              >注册</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      activeName: 'login',
      logiData: {
        name: '',
        password: ''
      },
      regiData: {
        name: '',
        password: ''
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          return true;
        }
        return false;
      });
    }
  }
};
</script>

<style lang="scss">
.login-wrapper .is-top{
  font-size: 0.1rem;
}
.el-input__inner {
  border: none;
  font-size: 0.08rem;
  // height: 0.20rem;
  // line-height: 0.20rem;
  // font-weight: normal;
  // margin: 0;
  // width: 1.24rem;
  // width: 1.5rem;
}
.el-form-item {
    margin-bottom: 0.1rem;
}
.el-form-item__label {
  // margin-right: 3px;
  font-size: 0.1rem;
  color: #000;
}
.el-button {
  line-height: 0.05rem;
  font-size: 0.09rem;
  padding: 8px 60px;
  margin-top: 25px;
  // background-color: #fff;
  // color: #000;
}
.is-error {
  font-size: 0.05rem;
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
  padding: 0 25px;
  // height: 200px;
  border-radius: 4px;
  background-color: rgb(11, 134, 143);
  margin: 15px auto;
  text-align: center;
}
</style>
