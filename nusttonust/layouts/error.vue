<template>
<div>
    <h2 v-if="error.statusCode==404">404页面，页面没有</h2>
    <h2 v-else>500页面，服务器错误</h2>
</div>
</template>

<script>
export default{
    props: ['error']
}
</script>