<template>
  <div class="zhuanzai">
    <p>除特别注明外，本站所有文章均为原创，转载请注明原文链接：<a :href="url"
                                      :title="title">{{ text }}}</a>
    </p>
  </div>
</template>

<script>
    export default {
        name: "reproduce",
        data() {
          return {
            url: 'https://www.myblogbo.com//article/9.html',
            title: '使用JavaScript随机生成十六进制颜色值',
            text: 'https://www.myblogbo.com/article/9.html'
          }
        }
    }
</script>

<style scoped>

</style>
