<template>
    <div>
        <h2>主界面</h2>
        <ul>
            <li><nuxt-link :to="{name:'index'}">主界面</nuxt-link></li>
            <li><nuxt-link :to="{name:'news',params:{newsId:6666}}">NEW界面</nuxt-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'IndexPage',
  loading: true
}
</script>
