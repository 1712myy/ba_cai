<template>
  <div>
      <div class="login">
          <h3>八彩跨进</h3>
      </div>
      <div class="lis">
                  <ul>
                    <li>
                        <p>首页</p>
                        <span>Hone</span>
                    </li>
                    <li>
                        <p>产品</p>
                        <span>Prducts</span>
                    </li>
                    <li>
                        <p>服务</p>
                        <span>Serivce</span>
                    </li>
                    <li>
                        <p>新闻</p>
                        <span>News</span>
                    </li>
                    <li>
                        <p>关于我们</p>
                        <span>About</span>
                    </li>
                    <li>
                        <p>联系我们</p>
                        <span>Contact</span>
                    </li>
                  </ul>
              </div>
                <el-card class="box-card" >
                    <div slot="header" class="clearfix">
                <span>系统的主要功能</span>

                  </div>

                </el-card>
  </div>

</template>

<script>

export default {
  data () {
    return {
      lis: []
    }
  }
}
</script>

<style lang='less'>
.login{
      margin-left: 28.2px;
      margin-top:24.7px;
      width:200px;
      height: 40px;
      background:   url('../../assets/login/login_5.png')no-repeat;

      margin-right: 118px;

      h3{
          float:right;
          font-size: 27px;
          margin: 0 22px 10px 2px;
      }
   }

.lis{

      width: 1000px;
      height:45px;
      position: fixed;
      top: 26px;
      left: 19%;

      li{
        margin-left:50px ;
        text-align: center;
        float: left;
        margin-right:38px;
        color:black;
      }
    }

    .el-card{
        margin: 100px auto;
            width: 800px;
            height: 400px;
    .text {
       font-size: 14px;
       }

     .item {
    margin-bottom: 18px;
      }

       .clearfix:before,
        .clearfix:after {
       display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

    }

</style>
