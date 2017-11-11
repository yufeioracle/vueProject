<template>
  <div class="hello">
    <h1 v-for = "personInfor in personInfor">
          {{ personInfor.name }}
          <span>{{ personInfor.age }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      personInfor : [{"name":"小明","age":18},{"name":"小花","age":20}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
