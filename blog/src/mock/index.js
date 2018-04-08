import mock from 'mockjs'

// const Random = Mock.Random

const header = {
  avatar: 'https://note.youdao.com/yws/api/personal/file/WEB67826504207b8e7d6b33975cb709d4ab?method=download&shareKey=fb8da8af98adb8f2a3efbfa71d8d9e38',
  title: '谦和之中见卓越'
}

const footer = {
  contact: {
    email: {
      icon: 'fa fa-envelope-o',
      text: '1226771922@qq.com',
      url: '#'
    }
  },
  copyright: {
    date: '2017-2018',
    ipc: '粤ICP备16066078号-2',
    site: {
      url: 'https://github.com/msidolphin',
      text: 'msidolphin.com'
    }
  }
}

const articles = {
  1: {
    pageNum: 1,
    size: 10,
    startPage: 1,
    endPage: 6,
    hasNext: true,
    hasPrevious: false,
    records: 100,
    list: [
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      }
    ]
  },
  2: {
    pageNum: 2,
    size: 10,
    startPage: 1,
    endPage: 6,
    hasNext: true,
    hasPrevious: false,
    records: 100,
    list: [
      {
        title: 'JS生成随机的Web安全色1',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      }
    ]
  },
  3: {
    pageNum: 3,
    size: 10,
    startPage: 1,
    endPage: 6,
    hasNext: true,
    hasPrevious: false,
    records: 100,
    list: [
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      }
    ]
  },
  4: {
    pageNum: 4,
    size: 10,
    startPage: 1,
    endPage: 6,
    hasNext: true,
    hasPrevious: false,
    records: 100,
    list: [
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      }
    ]
  },
  5: {
    pageNum: 5,
    size: 10,
    startPage: 1,
    endPage: 6,
    hasNext: true,
    hasPrevious: false,
    records: 100,
    list: [
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      }
    ]
  },
  6: {
    pageNum: 6,
    size: 10,
    startPage: 1,
    endPage: 6,
    hasNext: true,
    hasPrevious: false,
    records: 100,
    list: [
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      }
    ]
  },
  7: {
    pageNum: 7,
    size: 10,
    startPage: 1,
    endPage: 6,
    hasNext: true,
    hasPrevious: false,
    records: 100,
    list: [
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      }
    ]
  },
  8: {
    pageNum: 8,
    size: 10,
    startPage: 1,
    endPage: 10,
    hasNext: true,
    hasPrevious: false,
    records: 100,
    list: [
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      }
    ]
  },
  9: {
    pageNum: 9,
    size: 10,
    startPage: 1,
    endPage: 6,
    hasNext: true,
    hasPrevious: false,
    records: 100,
    list: [
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      }
    ]
  },
  10: {
    pageNum: 10,
    size: 10,
    startPage: 1,
    endPage: 6,
    hasNext: true,
    hasPrevious: false,
    records: 100,
    list: [
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      },
      {
        title: 'JS生成随机的Web安全色',
        pic: 'http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/400/h/200',
        url: '/article/1',
        summary: '前言 今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写' +
        '到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了 获取随机颜色 获取随机颜色就一' +
        '行代码，摘自网络 function g……',
        author: 'admin',
        date: '2016-09-19 10:12:24',
        views: 2449,
        tags: []
      },
      {
        title: '使用 CSS3 实现 tip 提示 ',
        url: '/article/2',
        pic: 'https://note.youdao.com/yws/api/personal/file/0E2A880EEF6140E49190A148AEE9D5BB?method=download&shareKey=d4837d7e2efa1b12db27ef000f904a1c',
        summary: '这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰' +
        '乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，...',
        author: 'admin',
        date: '2017-06-03',
        views: 294,
        tags: []
      }
    ]
  }
}


const detail = {
  1: {
    id: 1,
    articleInfo: {
      title: 'JS生成随机的Web安全色',
      category: 'JavaScript',
      category_url: '#',
      date: '2016-09-19 10:12:24',
      views: 2449,
      comments: 0
    },
    data: '<h1>前言</h1>\n' +
    '<p>今天本来打算学习下原生的ajax，后来写着写着就跑偏了，写到了我的偶像-许嵩，于是写了个小demo，当写到音乐的时候，每个色块颜色都一样，不好玩，于是我准备搞一个随机色，最终效果如图了</p>\n' +
    '<p><img class="alignnone size-full wp-image-262" srcset="http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/2120/h/902 2x" src="http://vince.qiniudn.com/wp-content/uploads/2016/09/QQ截图20160919154531.png?imageView2/2/w/1060/h/451" alt="qq%e6%88%aa%e5%9b%be20160919154531" width="1060" height="451" /></p>\n' +
    '<h1>获取随机颜色</h1>\n' +
    '<p>获取随机颜色就一行代码，摘自网络</p>\n' +
    '<pre class="pure-highlightjs"><code class="javascript">function getRandomColor() {\n' +
    '    return \'#\'+(\'00000\'+(Math.random()*0x1000000&lt;&lt;0).toString(16)).slice(-6); \n' +
    '}</code></pre>\n' +
    '<h1>获取随机安全色</h1>\n' +
    '<p>[原创]这里使用16进制来表示颜色，例如白色的#FFFFFF，黑色的#000000，Web安全色主要由00，33，66，99，CC，FF组成，因此，总的颜色总数就是6*6=216种，先产出所有可能的情况(216种)，放于数组中，然后再生成一个1-216的随机数，最后使用array[random]的形式随机返回一个数组成员，就算成功了。下面贴出代码：</p>\n' +
    '<pre class="pure-highlightjs"><code class="javascript">function getRandomSafeColor() {\n' +
    '    var base = [\'00\',\'33\',\'66\',\'99\',\'CC\',\'FF\'];     //基础色代码\n' +
    '    var len = base.length;                          //基础色长度\n' +
    '    var bg = new Array();                           //返回的结果\n' +
    '    var random = Math.ceil(Math.random()*215+1);    //获取1-216之间的随机数\n' +
    '    var res;\n' +
    '    for(var r = 0; r &lt; len; r++){  \n' +
    '        for(var g = 0; g &lt; len; g++){  \n' +
    '            for(var b = 0; b &lt; len; b++){   \n' +
    '                bg.push(\'#\'+base[r].toString()+base[g].toString()+base[b].toString());\n' +
    '            }  \n' +
    '        };  \n' +
    '    };\n' +
    '    for(var i=0;i&lt;bg.length;i++){\n' +
    '        res =  bg[random];\n' +
    '    }\n' +
    '    return res;\n' +
    '}</code></pre>\n' +
    '<p>二者的应用也很简单，比如给某个元素设置背景色：</p>\n' +
    '<pre class="pure-highlightjs"><code class="javascript">document.getElementById(\'btn-load\').style.background = getRandomColor();\n' +
    'document.getElementById(\'btn-load\').style.background = getRandomSafeColor();</code></pre>\n' +
    '<h1>结束语</h1>\n' +
    '<p>随机颜色应用还挺广泛的，比如各类网站的标签云,最后放出一个Web安全色的网站，里面颜色很纯正，适合应用于各类设计</p>\n' +
    '<p><a href="http://www.bootcss.com/p/websafecolors/">Web安全色</a></p>'
  },
  2: {
    id: 2,
    articleInfo: {
      title: '使用 CSS3 实现 tip 提示',
      category: 'CSS',
      category_url: '#',
      date: '2017-06-03 13:08:05',
      views: 304,
      comments: 0
    },
    data: '<p>这里是使用了CSS的after和before两个伪元素实现的tip小提示。伪元素的特性就是：允许我们添加额外元素而不扰乱文档本身。事实上，伪元素表现上就像是《真正》的元素，我们能够给它们添加任何样式，比如改变它们的颜色、添加背景色、调整字体大小、调整它们中的文本等等。</p> \n' +
    '<p>HTML：</p> \n' +
    '<pre class="language-html"><code>&lt;a href="https://www.baidu.com/" target="_blank" class="css-tip" data-tip="点击访问"&gt;百度一下&lt;/a&gt;\n' +
    '</code></pre> \n' +
    '<p>CSS:</p> \n' +
    '<pre class="language-css"><code> .css-tip {\n' +
    '    position: relative;\n' +
    '    z-index: 99;\n' +
    '}\n' +
    ' .css-tip:hover:after, .css-tip:hover:before {\n' +
    '    opacity: 1;\n' +
    '}\n' +
    '.css-tip:before {\n' +
    '    content: "";\n' +
    '    border: 4px transparent solid;\n' +
    '    border-top-color: #428bca;\n' +
    '    position: absolute;\n' +
    '    bottom: 22px;\n' +
    '    left: 50%;\n' +
    '    opacity: 0;\n' +
    '    -webkit-transition: opacity .5s ease-in-out;\n' +
    '    -moz-transition: opacity .5s ease-in-out;\n' +
    '    -ms-transition: opacity .5s ease-in-out;\n' +
    '    -o-transition: opacity .5s ease-in-out;\n' +
    '    transition: opacity .5s ease-in-out;\n' +
    '}\n' +
    '\n' +
    '.css-tip:after {\n' +
    '    border: 1px solid #428bca;\n' +
    '    background-color: #C1E8F9;\n' +
    '    border-radius: 3px;\n' +
    '    bottom: 30px;\n' +
    '    color: #428bca;\n' +
    '    content: attr(data-tip);\n' +
    '    font-size: 12px;\n' +
    '    line-height: 1.3;\n' +
    '    padding: 5px;\n' +
    '    position: absolute;\n' +
    '    text-align: center;\n' +
    '    width: 100px;\n' +
    '    margin-left: -85px;\n' +
    '    opacity: 0;\n' +
    '    -webkit-transition: opacity .5s ease-in-out;\n' +
    '    -moz-transition: opacity .5s ease-in-out;\n' +
    '    -ms-transition: opacity .5s ease-in-out;\n' +
    '    -o-transition: opacity .5s ease-in-out;\n' +
    '    transition: opacity .5s ease-in-out;\n' +
    '}</code></pre> \n' +
    '<p>&nbsp;</p> \n' +
    '<p>&nbsp;</p>'
  }
}

// 文章评论
const comments = {
  1: {
    articleId: 1,
    hasComment: true,
    commentCount: 4,
    data: {
      pageNum: 1,
      startPage: 1,
      endPage: 6,
      hasNext: true,
      hasPrevious: false,
      data: [
        {
          commentID: 1,
          avatar: 'http://cn.gravatar.com/avatar/4a809b0ffadc2f088bc9bfb290a9eded?s=48&d=monsterid&r=g',
          name: '白狼',
          content: '看看',
          hasReply: false,
          date: '2017-02-27 21:09:22'
        },
        {
          commentID: 2,
          avatar: 'http://cn.gravatar.com/avatar/f83693065fe1ba21aa5696a70afbf718?s=48&d=monsterid&r=g',
          name: 'June',
          content: '百度云这地址下载不了了，点击下载js会报错，导致没反应',
          hasReply: false,
          date: '2017-02-24 18:21:23'
        },
        {
          commentID: 3,
          avatar: 'http://cn.gravatar.com/avatar/6e3ee46a960e3126ac08de4fc9584769?s=48&d=monsterid&r=g',
          name: 'Hello',
          content: '可以给个Html模板吗',
          hasReply: true,
          replies: [
            {
              commentID: 4,
              avatar: 'http://cn.gravatar.com/avatar/48b84191abbd3263ac0157692219da08?s=48&d=monsterid&r=g',
              name: 'admin',
              content: '1.0的有，在之前的文章里，你可以找找',
              hasReply: false,
              date: '2016-10-28 14:18:54',
              to: 'Hello'
            },
            {
              commentID: 4,
              avatar: 'http://cn.gravatar.com/avatar/48b84191abbd3263ac0157692219da08?s=48&d=monsterid&r=g',
              name: 'admin',
              content: '1.0的有，在之前的文章里，你可以找找',
              hasReply: false,
              date: '2016-10-28 14:25:54',
              to: 'admin'
            }
          ],
          date: '2017-02-24 18:21:23'
        }
      ]
    }
  }
}

//获取网站头部信息
// mock.mock('/header', 'get', () => {
//   return header
// })

//获取网站底部信息
mock.mock('/footer', 'get', () => {
  return footer
})

// 文章列表
mock.mock('/article', 'post', (res) => {
  console.log(res)
  return articles[JSON.parse(res.body).pageNum]
})

// 文章详情
for (let key in detail) {
  mock.mock('/article/' + key, 'get', (res) => {
    return detail[res.url.substring(res.url.lastIndexOf('/') + 1)]
  })
}

// 文章评论
for (let key in detail) {
  mock.mock('/article/comments/' + key, 'get', (res) => {
    return comments[res.url.substring(res.url.lastIndexOf('/') + 1)]
  })
}
