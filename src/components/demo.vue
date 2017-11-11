<template>
    <div>
        <div class="name">我是一个demo{{ dataGoods1.num }}</div>
        <input type="text" id="txtMsg" placeholder="请输入您要删除商品编号"/>
        <input type="button" value="提交" id="btnSubmit" @click="submitDeleteNum()"/>
    </div>
</template>

<script>
export default{
    data(){
        return{
            num:9
        }
    },
    props:{
       dataGoods1:{
           type:Object
       }
    },
    methods:{
           filterToDou(n){
                 return n < 10 ? '0' + n : '' + n;
           },
           submitDeleteNum(){
               let submitDeleteData = document.getElementById("txtMsg").value;
               this.$emit("submitDeleteData",submitDeleteData);
           }
    }
};

</script>

<style>
.name{
    font-size:25px;
}
</style>
