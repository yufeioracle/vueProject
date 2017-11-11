<template>
    <div id="app">
            <h3>凤凰商城全部商品</h3>
            <div id="less">111111111111111111111111</div>
            <input style="margin-left: 46px; margin-top: 27px;" class="btn btn-default" type="button" value="显示所有商品" @click="showData"/>
                    <table class="table">
                            <thead>
                            <tr>
                                <th>产品</th>
                                <th>付款日期</th>
                                <th>状态</th>
                                <th>数量</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr :class=[item.color] v-for="(item,index) in tableData.produceInfor">
                                    <td>{{item.name}}{{index+1}}</td>
                                    <td>{{item.date}}</td>
                                    <td>{{item.state}}</td>
                                    <td>
                                       <router-link :to="{path: '/detail', query: {index: index}}">{{item.num}}</router-link>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
            <keep-alive>
                 <router-view></router-view>
            </keep-alive>
            <demo v-on:submitDeleteData="submitDeleteFun" :dataGoods1="dataGoods"></demo>
    </div>
</template>
<script type="text/esmascript-6">
import demo from './demo.vue'
import Vue from 'vue'
import $ from "jquery"
import axios from 'axios'

Vue.filter("aaa",function(val,str){
        return val > 0 ? val : Math.abs(val);
  });
  export default  {
      data(){
           return{
               dataGoods:{
                   num:1111111111
               },
               tableData:{}
           }
      },
      props:{
          tableDataGoods: {
                    type:Object
           }
      },
      components:{
         demo
      },
      mounted:function(){
            this.submitDeleteFun();
      },
      methods:{
         childToParent(){
                 this.$emit("childToParentMsg", 5);
           },
         toPlusNumber : function(num){
                return num >0 ? num : Math.abs(num);
         },
         submitDeleteFun(){
            // alert("我是父级，我接收到你要删除的商品ID了："+data);
            console.log($("tableTr"));
         },
         showData:function(){
                    var self = this;
                    axios.get('http://192.168.2.38:8889/static/data/data.txt')
                        .then(function(response){
                            self.tableData = response.data;
                            console.log(response.data);
                    }).catch(function(err){
                    console.log(err);
                    })
                 }
      }
  };
</script>
<style lang="less">
@width:200px;
@height:200px;
.red{
    color:red;
}
.abc(@width,@height){
    width:@width;
    height:@height;
}
#less{
    .abc(200px,100px);
    border:1px solid red;
    .red;
}
</style>