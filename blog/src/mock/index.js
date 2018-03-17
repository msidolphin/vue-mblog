import mock from 'mockjs'

// const Random = Mock.Random

const list = [
  {

  },
  {

  },
  {

  },
  {

  }
]


const detail = {
  1 : {
    articleInfo: {
      title: "JS生成随机的Web安全色",
      category: "JavaScript",
      category_url: "#",
      date: "2016-09-19 10:12:24",
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
    articleInfo: {
      title: "使用 CSS3 实现 tip 提示",
      category: "CSS",
      category_url: "#",
      date: "2017-06-03 13:08:05",
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

mock.mock('/article/1', 'get', () => {
  return detail['1']
})

mock.mock('/article/2', 'get', () => {
  return detail['2']
})
