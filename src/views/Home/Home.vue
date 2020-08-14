<template>
  <div class="login">
     <el-carousel  height="800px" width=100% :interval="3000" arrow="always"  direction="vertical">
         <el-carousel-item v-for="item in 4" :key="item">

             <div class="login"> </div>
              <div class="lis">
                  <ul>
                    <li>
                      <router-link to='/Home' >
                        <p>首页</p>
                        <span>Hone</span>
                      </router-link>
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

       </el-carousel-item>
  </el-carousel>
  </div>

</template>

<script>
export default {

}
</script>

<style lang='less' scoped>

.login{

   .el-carousel__item  {

    // color:papayawhip;
    font-size: 18px;
    opacity: 0.75;
    line-height: 20px;
    margin: 0;

         .login{
      margin-left: 28.2px;
      margin-top:24.7px;
      width:200px;
      height: 40px;
      background: url('../../assets/login/logo.png')no-repeat;
      margin-right: 118px;
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
        color: #fff;
      }
    }

  }

  .el-carousel__item:nth-child(1) {
    background:url('../../assets/login/login_1.jpg');
    background-size: 100%;
  }

  .el-carousel__item:nth-child(2) {
    background:url('../../assets/login/login_2.jpg');
    background-size: 100%;
  }
 .el-carousel__item:nth-child(3) {
    background:url('../../assets/login/login_3.jpg');
    background-size: 100%;
  }
   .el-carousel__item:nth-child(4) {
    background:url('../../assets/login/login_4.jpg');
    background-size: 100%;
  }
  }

</style>
