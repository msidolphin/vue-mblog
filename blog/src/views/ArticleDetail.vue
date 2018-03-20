<!--文章详情页-->
<template>
  <div class="articleDetail container">
    <div class="row">
      <div class="col-md-12">
        <div class="articleContent">
          <!-- article info start -->
          <div class="article-info-wrap">
            <!-- 标题 -->
            <div class="title">{{ articleInfo.title }}</div>
            <!-- 访问量 ...-->
            <div class="secTitleBar">
              <ul>
                <li>分类：<a :href="articleInfo.category_url" null>{{ articleInfo.category }}</a></li>
                <li>发表：{{ articleInfo.date }}</li>
                <li>围观：{{ articleInfo.views }}</li>
                <!--<li><a href="javascript:goTo('#SOHUCS',500);">前往评论</a></li>-->
                <li><a href="#comments">评论：{{ articleInfo.comments }}</a></li>
              </ul>
            </div>
          </div>
          <!-- article info end -->
          <!-- article content start -->
          <div class="articleCon post_content" v-html="content">
            <reproduce/>
          </div>
          <!-- article content end -->


          <div class="post_content" v-if="hasComment">
            <div id="comments" class="responsesWrapper">
              <meta content="UserComments:145" itemprop="interactionCount">
              <h3 class="comments-title">共有 <span class="commentCount">{{ commentCount }}</span> 条评论</h3>

              <ol class="commentlist">
                <li class="comment" :id="comment.commentId" v-for="comment in comments.data">
                  <div class="media">
                    <div class="media-left">
                      <img alt="" :src="comment.avatar" srcset="http://cn.gravatar.com/avatar/4a809b0ffadc2f088bc9bfb290a9eded?s=96&amp;d=monsterid&amp;r=g 2x" class="avatar avatar-48 photo" height="48" width="48">   			</div>
                    <div class="media-body">
                      <p class="author_name">{{ comment.name }}</p>
                      <p>{{ comment.content }}</p>
                    </div>
                  </div>
                  <div class="comment-metadata">
   			            <span class="comment-pub-time">{{ comment.date }}</span>
                    <span class="comment-btn-reply">
 				              <i class="fa fa-reply"></i>
                      <a rel="nofollow" class="comment-reply-link" href="http://vinceok.com/wordpress/128.html?replytocom=1253#respond" onclick="return addComment.moveForm( &quot;comment-1253&quot;, &quot;1253&quot;, &quot;respond&quot;, &quot;128&quot; )" aria-label="回复给白狼">回复</a>
                    </span>
                  </div>

                  <ol class="children" v-for="subComment in comment.replies">
                    <li class="comment" id="li-comment-549">
                      <div class="media">
                        <div class="media-left">
                          <img alt="" :src="subComment.avatar" srcset="http://cn.gravatar.com/avatar/48b84191abbd3263ac0157692219da08?s=96&amp;d=monsterid&amp;r=g 2x" class="avatar avatar-48 photo" height="48" width="48">   			</div>
                        <div class="media-body">
                          <p class="author_name">{{ subComment.name }}</p>
                          <p> 回复{{subComment.to}}: {{ subComment.content }}</p>
                        </div>
                      </div>
                      <div class="comment-metadata">
   			                <span class="comment-pub-time">{{ subComment.date }}</span>
                        <span class="comment-btn-reply">
                          <i class="fa fa-reply"></i>
                          <a rel="nofollow" class="comment-reply-link" href="http://vinceok.com/wordpress/128.html?replytocom=549#respond" onclick="return addComment.moveForm( &quot;comment-549&quot;, &quot;549&quot;, &quot;respond&quot;, &quot;128&quot; )" aria-label="回复给admin">回复</a>
   			              </span>
                      </div>
                    </li><!-- #comment-## -->
                  </ol>
                </li><!-- #comment-## -->

              </ol>

              <div id="respond" class="respond" role="form">
                <h2 id="reply-title" class="comments-title"> <small>
                  <a rel="nofollow" id="cancel-comment-reply-link" href="/wordpress/128.html#respond" style="display:none;">点击这里取消回复。</a>                </small></h2>
                <form action="http://vinceok.com/wp-comments-post.php" method="post" class="commentform" id="commentform">
                  <textarea class="form-control" rows="3" id="comment" onkeydown="if(event.ctrlKey&amp;&amp;event.keyCode==13){document.getElementById('submit').click();return false};" placeholder="当你的才华还撑不起你的野心时,那你就应该静下心来评论下..." tabindex="1" name="comment"></textarea>
                  <div class="commentform-info">
                    <label id="author_name" for="author">
                      <input class="form-control" id="author" type="text" tabindex="2" value="" name="author" placeholder="昵称[必填]" required="">
                    </label>
                    <label id="author_email" for="email">
                      <input class="form-control" id="email" type="text" tabindex="3" value="" name="email" placeholder="邮箱[必填]" required="">
                    </label>
                    <label id="author_website" for="url">
                      <input class="form-control" id="url" type="text" tabindex="4" value="" name="url" placeholder="网址(可不填)">
                    </label>
                  </div>
                  <div class="btn-group commentBtn" role="group">
                    <input name="submit" type="submit" id="submit" class="btn btn-sm btn-danger btn-block" tabindex="5" value="发表评论"></div>
                  <input type="hidden" name="comment_post_ID" value="128" id="comment_post_ID">
                  <input type="hidden" name="comment_parent" id="comment_parent" value="0">
                </form>
              </div>
            </div></div>
          <!--  -->
        </div>
      </div>
    </div>
    <!-- -->
  </div>
</template>

<script>
  import {fetch} from '@/scripts/ajax'
  import Reproduce    from '@/components/Reproduce'         //转载
  export default {
    name: "article-detail",
    props: ['id'],
    components: {
      Reproduce
    },
    data() {
      return {
        articleInfo : {
          title: "",
          category: "",
          category_url: "",
          date: "",
          views: null
        },
        content: null,
        hasComment: false,
        commentCount: 0,
        comments: []
      }
    },
    created() {
      this.fetchData()
//      hljs.initHighlighting

    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData: function () {
        const path = this.$route.path
        const id = path.substring(path.lastIndexOf('/') + 1)
        //获取文章详情
        fetch(path, 'get', null).then(response => {
          //文章摘要
          this.articleInfo = response.data.articleInfo
          //文章内容
          this.content = response.data.data
        }).then(() => {
          //获取文章评论
          fetch("/article/comments/" + id, "get", null).then(response => {
            this.comments = response.data.data
            this.hasComment = response.data.hasComment
            this.commentCount = response.data.commentCount
            //TODO 分页
          })
        })
      }
    },
    mounted() {
      //代码高亮 暂时这么解决...
      setTimeout(hljs.Highlighting, 300)
    }
  }
</script>

<style scoped>

</style>
