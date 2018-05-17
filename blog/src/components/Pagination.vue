<template>
	<div class="container pageNav" >
		<div class="row">
      <div class="col-md-8" v-if="size === 'small'">
        <nav class="small nav">
          <ul class="pagination">
            <li class="previous" v-if="hasPrevious">
              <a href="javascript:;" v-on:click="setCurrentPage(current - 1)">上一页</a>
            </li>

            <li class="active disabled" v-if="current == p.val" v-for="p in pageList">
              <a href="javascript:;" v-on:click="setCurrentPage(p.val)">{{ p.text }}</a>
            </li>
            <li v-else>
              <a href="javascript:;" v-on:click="setCurrentPage(p.val)">{{ p.text }}</a>
            </li>

            <li class="next" v-if="hasNext">
              <a href="javascript:;" v-on:click="setCurrentPage(current + 1)">下一页</a>
            </li>
            <!--  <li><span class='page-numbers current'>1</span></li>	 -->
          </ul>
        </nav>
      </div>
      <div class="col-md-4" v-else-if="size === 'mini'">
        <nav>
          <ul class="pagination">
            <li class="previous" v-if="hasPrevious">
              <a href="javascript:;" v-on:click="setCurrentPage(current - 1)">上一页</a>
            </li>

            <li class="active disabled" v-if="current == p.val" v-for="p in pageList">
              <a href="javascript:;" v-on:click="setCurrentPage(p.val)">{{ p.text }}</a>
            </li>
            <li v-else>
              <a href="javascript:;" v-on:click="setCurrentPage(p.val)">{{ p.text }}</a>
            </li>

            <li class="next" v-if="hasNext">
              <a href="javascript:;" v-on:click="setCurrentPage(current + 1)">下一页</a>
            </li>
            <!--  <li><span class='page-numbers current'>1</span></li>	 -->
          </ul>
        </nav>
      </div>
      <div class="col-md-12" v-else>
        <nav>
          <ul class="pagination">
            <li class="previous" v-if="hasPrevious">
              <a href="javascript:;" v-on:click="setCurrentPage(current - 1)">上一页</a>
            </li>

            <li class="active" v-if="current == p.val" v-for="p in pageList">
              <a href="javascript:;" v-on:click="setCurrentPage(p.val)">{{ p.text }}</a>
            </li>
            <li v-else>
              <a href="javascript:;" v-on:click="setCurrentPage(p.val)">{{ p.text }}</a>
            </li>

            <li class="next" v-if="hasNext">
              <a href="javascript:;" v-on:click="setCurrentPage(current + 1)">下一页</a>
            </li>
            <!--  <li><span class='page-numbers current'>1</span></li>	 -->
          </ul>
        </nav>
      </div>
		</div>
	</div>
</template>

<script>
  export default {
    props: {
      records: {      //总记录数
        type: Number,
        default: 0
      },
      pageSize: {     //每页的记录数
        type: Number,
        default: 10
      },
      currentPage: {   //当前页码
        type: Number,
        default: 1
      },
      pageGroup: {     //显示页码数
        type: Number,
        default: 5,
        coerce(val) {
          v = v > 0 ? v : 5
          return v % 2 === 0 ? v + 1 : v
        }
      },
      payload: {
        type: Object,
        default() {
          return {}
        }
      },
      size: {
        type: String,
        default: 'normal'
      }
    },
    data() {
      return {
        current: this.currentPage,
        hasPrevious: false,
        hasNext: true
      }
    },
    computed: {
      pages() {
        return Math.ceil(this.records / this.pageSize)
      },
      pageList() {
        let len = this.pages
        let temp = []
        let list = []
        let count = Math.floor(this.pageGroup / 2)

        if(this.current && this.current === 1) {
          this.hasPrevious = false
        }else {
          this.hasPrevious = true
        }

        if(this.current && this.current >= this.pages) {
          this.hasNext = false
        }else {
          this.hasNext = true
        }

        let curPage = this.current
        if(len <= this.pageGroup) {
          while(len--) {
            temp.push({ text: this.pages - len, val : this.pages - len })
          }
          return temp
        }
        while(len--) {
          temp.push(this.pages - len)
        }

        let idx
        for(let i = 0 ; i < temp.length ; ++i) {
          if(curPage === temp[i]) {
            idx = i
            break
          }
        }

        if(idx < count) {
          curPage = curPage + count - idx
        }

        if(this.current > this.pages - count) {
          curPage = this.pages - count
        }
        temp = temp.splice(curPage - count - 1, this.pageGroup)

        do{
          let t = temp.shift()
          list.push({
            text: t,
            val: t
          })
        }while(temp.length)

        if(this.pages > this.pageGroup) {

          if(this.current > count + 1) {
            list.unshift({
              text: '...',
              val: list[0].val -1
            })
          }
          if(this.current < this.pages - count) {
            list.push({
              text: '...',
              val: list[list.length - 1].val + 1
            })
          }
        }
        return list
      }
    },
    watch: {
      'currentPage': 'setCurrent',
      'current': 'setCurrent'
    },
    methods: {
      setCurrentPage(val) {
        if(this.current === val) {return}
        if(val > 0 && val <= this.pages) {
          this.current = val
          this.$emit('pageChange', this.current, this.pageSize, this.payload)
        }
      },
      setCurrent() {
        this.current = this.currentPage
      }
    }
  }
</script>

<style>
</style>
