<template>
  <div>
    <!-- <div class="myMessage"> -->
      <el-card class="box-card">
        <div class="my-message">
          <div class="name-part">
            <p class="user-name">这里是用户名</p>
            <p>欢迎来到XD云课堂！</p>
          </div>
          <div class="account-part">
            <p>您的余额为：{{account}}￥</p>
            <el-button
              type="primary"
              @click="dialogVisible = true"
              class="charge-btn"
            >充值</el-button>

            <el-dialog title="账户充值" :visible.sync="dialogVisible">
              <el-select v-model="chargeMon" placeholder="请选择充值金额">
                <el-option
                  v-for="(item,index) in options"
                  :key="index"
                  :label="`${item} ￥`"
                  :value="item">
                </el-option>
              </el-select>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="handleCharge()">确定</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
      </el-card>
    <!-- </div> -->
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'personal',
  data() {
    return {
      account: 34,
      options: [10,20,30,50,100,200],
      chargeMon: null,
      dialogVisible: false,
    };
  },
  methods: {
    handleCharge() {
      // alert('充值金额为：', this.chargeMon);
      console.log(this.chargeMon);
    }
  }
};
</script>

<style lang="scss" scoped>
.box-card {
  width: 900px;
  margin: 0 auto;
  height: 200px;
  .my-message {
    display: flex;
    .name-part {
      flex: 1;
      p {
        padding-bottom: 30px;
      }
    }
    .account-part {
      width: 200px;
      p {
        margin-bottom: 30px;
      }
      .charge-btn {
        width: 140px;
      }
    }
  }
}

</style>
