<template>
    <div>
        <h2>New界面</h2>
        <p>ID:{{$route.params.newsId}}</p>
        <ul>
            <li><nuxt-link :to="{name:'index'}">主界面</nuxt-link></li>
            <li><a href="/news/1">新闻1</a></li>
            <li><a href="/news/aa">新闻2</a></li>
        </ul>
    </div>
</template>