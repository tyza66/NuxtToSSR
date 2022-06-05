<template>
    <div>
        <h2>New界面</h2>
        <p>ID:{{$route.params.newsId}}</p>
        <ul>
            <li><nuxt-link :to="{name:'index'}">主界面</nuxt-link></li>
            <li><a href="/news/1">新闻1</a></li>
            <li><nuxt-link :to="{name:'news-id',params:{id:2}}">新闻2</nuxt-link></li>
            <li><nuxt-link :to="{path:'/news/3'}">新闻3</nuxt-link></li>
        </ul>
    </div>
</template>