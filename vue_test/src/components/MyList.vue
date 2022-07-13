<template> 
  <ul class="todo-main">
    <MyItem/>
  </ul>
</template>

<script>
  import MyItem from './MyItem'
  const todoOptions = ["打代码","睡觉","吃饭"]
  export default {
    name:'MyList',
    components:{
      MyItem
    },
    data(){
      return {
        todos:todoOptions
      }
    }
    
  }
</script>
<style scoped>
    /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
  
