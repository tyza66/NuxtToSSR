<template>
    <div>
    <h1>动态路由</h1>
    <p>动态路由传进来的id：{{$route.params.id}}</p>
        <ul>
            <li>
                <nuxt-link :to="{name:'index'}">主界面</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    //校验传进来的动态路由参数
    validate({params}){
        return /^\d+$/.test(params.id);
    }
}
</script>