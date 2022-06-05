<template>
    <div>
        {{ name }}
        <h1>姓名：{{ info.name }}</h1>
        <h1>年龄：{{ info.age }}</h1>
        <h1>兴趣：{{ info.interest }}</h1>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            name: "hello world"
        }
    },
    /*这个是使用axios获取参数
    asyncData(){
        return axios.get('http://127.0.0.1:5000/') //因为myjson进不去，这里我用的是flask自己搭的
        .then((res=>{
            return{info:res.data}
        }))
    }
    */
    async asyncData() {
        let { data } = await axios.get('http://127.0.0.1:5000/')
        return { info: data }
    }
}
</script>