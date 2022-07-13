<template> 
  <ul class="todo-main">
    <MyItem/>
  </ul>
</template>

<script>
  import MyItem from './MyItem'
  
  export default {
    name:'MyList',
    components:{
      MyItem
    },
    data(){
      return {
        todos:[
          {id:'001',name:"打代码"},
          {id:'002',name:"睡觉"},
          {id:'003',name:"吃饭"}
        ]
      }
    },
    methods:{
      add(){
        const p = MyItem//{id:'004',name:'老刘',age:40}
						this.persons.unshift(p)
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
  
