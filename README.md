# NuxtToSSR
### 使用Nuxt实现SSR渲染
- 使用Nust的前端页面以及功能测试
- 尝试了Nuxt的一些基本功能
- 路由传参，nuxt-link，动态切换界面效果，模板，使用axios请求参数...
- 由于myjson打不开，我这里弄了一个falsk的工具实现单个json，就算不懂flask没关系直接按照里面改就行，要有python环境，只依赖于falsk库
- 我这里面使用的是新版的nuxt
- "jsonMake"是实现可访问json的
- "musttonust"里是代码主体（为node项目，名字是随便打的）
- "资料"里面是开发过程中遇到的问题以及解决方案
- dev运行端口为3000，jsonMake端口为5000， live-server运行时端口为8080
- 使用到的技术：webpack，vue，nuxt
  
##### 在本地运行jsonMake
- 目录为"jsonMake"
``` 
    pip install flask
    python jsonMake.py
```

##### 在本地运行dev
- 目录为"musttonust"
```
    npm i
    npm run dev
```

##### 编译
- 目录为"musttonust"
- 输出目录为"dist"
```
    npm i
    npm run generate
```

##### 使用live-server运行dev
- 目录为编译后产生目录
```
    npm install -g live-server
    live-server
```

By:tyza66(洮羱芝闇)

