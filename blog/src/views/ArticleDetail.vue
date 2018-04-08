<!--文章详情页-->
<template>
  <div class="articleDetail container">
    <div class="row">
      <div class="col-md-12">
        <div class="articleContent">
          <!-- article info start -->
          <div class="article-info-wrap">
            <!-- 标题 -->
            <div class="title">{{ article.title }}</div>
            <!-- 访问量 ...-->
            <div class="secTitleBar">
              <ul>
                <li>分类：<a :href="articleInfo.category_url" null>{{ article.typeName }}</a></li>
                <li>发表：{{ article.createTime }}</li>
                <li>围观：{{ article.views }}</li>
                <!--<li><a href="javascript:goTo('#SOHUCS',500);">前往评论</a></li>-->
                <li><a href="#comments">评论：{{ article.replies }}</a></li>
              </ul>
            </div>
          </div>
          <!-- article info end -->
          <!-- article content start -->
          <div class="articleCon post_content" v-html="article.content">
            <reproduce/>
          </div>
          <!-- article content end -->


          <div class="post_content" >
            <div id="comments" class="responsesWrapper">
              <meta content="UserComments:145" itemprop="interactionCount">
              <h3 class="comments-title">共有 <span class="commentCount">{{ article.replies }}</span> 条评论</h3>
              <!-- 评论列表 start -->
              <ol class="commentlist" v-if="article.replies > 0">
                <li class="comment" :id="comment.id" v-for="(comment, index) in comments.list">
                  <div class="media">
                    <div class="media-left">
                      <img alt="" :src="comment.user.avatar" srcset="http://cn.gravatar.com/avatar/4a809b0ffadc2f088bc9bfb290a9eded?s=96&amp;d=monsterid&amp;r=g 2x" class="avatar avatar-48 photo" height="48" width="48">   			</div>
                    <div class="media-body">
                      <p class="author_name">{{ comment.user.nickname }}</p>
                      <p>{{ comment.content }}</p>
                    </div>
                  </div>
                  <div class="comment-metadata">
   			            <span class="comment-pub-time">{{ comment.createTime }}</span>
                    <span class="comment-btn-reply">
 				              <i class="fa fa-reply"></i>
                      <a rel="nofollow" class="comment-reply-link"  href="javascript:;" @click="submitReply(comment.id, comment.user.id)">回复</a>
                    </span>
                  </div>

                  <template v-if="comment.replies">
                    <ol class="children" v-for="reply in comment.replies.list" >
                      <li class="comment" id="li-comment-549">
                        <div class="media">
                          <div class="media-left">
                            <img alt="" :src="reply.user.avatar" srcset="http://cn.gravatar.com/avatar/48b84191abbd3263ac0157692219da08?s=96&amp;d=monsterid&amp;r=g 2x" class="avatar avatar-48 photo" height="48" width="48">   			</div>
                          <div class="media-body">
                            <p class="author_name">{{ reply.user.nickname }}</p>
                            <p> 回复{{reply.toUser.nickname}}: {{ reply.content }}</p>
                          </div>
                        </div>
                        <div class="comment-metadata">
                          <span class="comment-pub-time">{{ reply.createTime }}</span>
                          <span class="comment-btn-reply">
                          <i class="fa fa-reply"></i>
                          <a rel="nofollow" class="comment-reply-link" href="javascript:;" @click="submitReply(comment.id, reply.user.id)">回复</a>
   			              </span>
                        </div>
                      </li><!-- #comment-## -->
                    </ol>
                    <pagination  v-if="comment.replies.pages > 1" :payload="{index:index, commentId:comment.id}" :pageNum="comment.replies.pageNum" :pageSize="comment.replies.pageSize" :records="comment.replies.total" @pageChange="changeReplies" />

                  </template>

                </li><!-- #comment-## -->

              </ol>
              <!-- pagination start -->
              <div style="display: inline-block; text-align: center">
                <el-pagination
                  v-if="comments.pages > 1"
                  background
                  layout="prev, pager, next"
                  :page-size="comments.pageSize"
                  :current-page="comments.pageNum"
                  :total="comments.total"
                @current-change="changeComments">
                </el-pagination>
              </div>
              <!-- pagination end -->
              <!-- 评论列表 end -->
              <div id="respond" class="respond" role="form">
                <h2 id="reply-title" class="comments-title"></h2>
                  <!--<small><a rel="nofollow" id="cancel-comment-reply-link" href="/wordpress/128.html#respond" style="display:none;">点击这里取消回复。</a>                </small></h2>-->
                <form name="replyForm" action="#" method="post" class="commentform" id="commentform">
                  <textarea class="form-control" rows="3" id="comment" onkeydown="if(event.ctrlKey&amp;&amp;event.keyCode==13){document.getElementById('submit').click();return false};" placeholder="当你的才华还撑不起你的野心时,那你就应该静下心来评论下..." tabindex="1" name="content"></textarea>
                  <div class="commentform-info">
                    <label id="author_name" for="author">
                      <input class="form-control" id="author" type="text" tabindex="2" :value="user.username" name="username" placeholder="昵称[必填]" required="">
                    </label>
                    <label id="author_email" for="email">
                      <input class="form-control" id="email" type="text" tabindex="3" :value="user.email" name="email" placeholder="邮箱[必填]" required="">
                    </label>
                    <label id="author_website" for="url">
                      <input class="form-control" id="url" type="text" tabindex="4" :value="user.website" name="website" placeholder="网址(可不填)">
                    </label>
                  </div>
                  <div class="btn-group commentBtn" role="group">
                  <button name="submit" type="button" id="submit" class="btn btn-sm btn-danger btn-block" tabindex="5" @click="publish">发表评论</button>
                  </div>
                    <!-- 重要参数 -->
                  <input type="hidden" name="comment_id">
                  <input type="hidden" name="article_id" :value="article.id">
                  <input type="hidden" name="to_user_id">
                  <!-- 0:评论 1-回复 -->
                  <input type="hidden" name="type" value="0"/>
                </form>
              </div>
            </div>

          </div>
          <!--  -->
        </div>
      </div>
    </div>
    <!-- -->
  </div>
</template>

<script>
  import { fetch } from '@/scripts/ajax'
  import Reproduce    from '@/components/Reproduce'         //转载
  import Pagination from '@/components/Pagination'
  import { mapGetters } from 'Vuex'
  import {addComment, addReply, fetchReplies} from '@/utils/api'
  import types from '@/store/types'
  export default {
    name: "article-detail",
    props: ['id'],
    components: {
      Reproduce,
      Pagination
    },
    computed: mapGetters(['article', 'user', 'comments']),
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
        commentCurPage: 1,
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData: function () {
        //获取用户信息
        this.$store.dispatch(types.GET_USER)
        const path = this.$route.path
        //获取文章id
        const id = path.substring(path.lastIndexOf('/') + 1)
        //获取文章详情
        this.$store.dispatch(types.GET_ARTICLE_DETAIL, {id})
      },
      submitComment(articleId) {
        //滚动到评论区
        this.scroll();

      },
      submitReply(commentId, toUserId) {
        this.scroll();
        //设置到表单隐藏域
        replyForm.comment_id.value = commentId
        replyForm.to_user_id.value = toUserId
        //回复
        replyForm.type.value = 1
      },
      scroll() {
        $('html, body').animate({
          scrollTop: $("#respond").offset().top
        }, 500)
      },
      publish() {
        //TODO 校验


        if(replyForm.type.value === '0') {
          addComment({
            text: "", //无用，貌似qs有Bug，一个参数后端无法接收
            articleId: replyForm.article_id.value,
            content:   replyForm.content.value,
            username:  replyForm.username.value,
            email:     replyForm.email.value,
            website:   replyForm.website.value,
          }).then(response => {
            //刷新评论列表
            this.changeComments(this.commentCurPage);
          })

        }else if(replyForm.type.value === '1') {
          addReply({
            text: "",
            commentId: replyForm.comment_id.value,
            toUserId: replyForm.to_user_id.value,
            content: replyForm.content.value,
            username:  replyForm.username.value,
            email:     replyForm.email.value,
            website:   replyForm.website.value,
          }).then((response)=>{
            //刷新评论列表
            this.changeComments(this.commentCurPage);
          })
        }
        replyForm.type.value = '0'
      },
      //改变评论页码
      changeComments(pageNum) {
        this.commentCurPage = pageNum
        this.$store.dispatch(types.GET_COMMENT, {pageNum, articleId: this.article.id})
      },
      //改变回复页码
      changeReplies(pageNum, pageSize, payload) {
        payload.pageNum = pageNum
        fetchReplies(payload).then(response => {
          //设置相关层级的回复
          this.comments.list[payload.index].replies = response.data.data
        })
      },

    },
    mounted() {
      this.fetchData()
      //代码高亮 暂时这么解决...
      setTimeout(hljs.Highlighting, 300)
    }
  }
</script>

<style scoped>
  .el-pager.active {
    background-color: #6c9;
  }
</style>
