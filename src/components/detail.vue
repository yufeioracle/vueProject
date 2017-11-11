<template>
    <div>
        <div class="name">hahahahahahahahahha</div>
        <p>{{index}}</p>
        <div>
           中方已经表明，印方越界人员和设备已全部撤回边界印方一侧，中国边防部队继续在洞朗地区巡逻驻守。为了守边需要和改善当地军民生产生活条件，中方长期以来在洞朗地区进行包括道路在内的基础设施建设。我们将综合考虑天气等各方面因素，根据实际情况做好有关建设规划。
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
             index:this.$route.query.index
        }
    }
};
</script>

<style>
.name{
    font-size:25px;
}
</style>
