<template>
  <div id="appVue">
   <!--  <img src="./image/logo.png"> -->
    <headerTop :dataParent="msg"></headerTop>
     <div class="middle">
            <div class="goods flexStyle">
                <router-link to="/goods" class="routerLink">商品</router-link>
            </div>
            <div class="evalate flexStyle">
                 <router-link to="/ratings" class="routerLink">评论</router-link>
            </div>
            <div class="sellFamily flexStyle">
                 <router-link to="/sell" class="routerLink">商家</router-link>
            </div>
     </div>
      <router-view :tableDataGoods="tableData"></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import HeaderTop from './components/headerTop'
import goods from './components/goods'
import axios from 'axios'
import Vue from 'vue'
import $ from 'jquery'

export default {
  name: 'app',
  data() {
     return {
        msg:{"name":"版权所有，盗版必究"},
        goodsNum:{
          num1:2121,
          num2:45454
        },
        tableData:{}
     };
  },
  components: {
    Hello,
    HeaderTop
  },
  methods:{
      
      showChildToParentMsg:function(data){
              //this.msg = data;
      },
      showJquery:function(){
          alert($("appVue").attr("aa",11111));
      }

  }
};
</script>

<style>
.routerLink{
    font-size: 38px;
    color: #c1c1c1;
}
#btnTest{
        color: white;
        background-color: red;
        border: none;
        padding: 8px 16px;
        font-size: 20px;
        margin: 8px 21px;
        cursor:pointer;
}
 .middle{
     display:flex;
     height:40px;
     width:100%;
}
.flexStyle{
    flex:1;
    text-align:center;
    line-height:40px;
}
.router-link-active {
    text-decoration: none;
}
</style>
