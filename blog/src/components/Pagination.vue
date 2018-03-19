<template>
	<div class="container pageNav">
		<div class="row">
			<div class="col-md-12">
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
		</div>
	</div>
</template>

<script>
  export default {
    props: {
      records: {
        type: Number,
        default: 100
      },
      pageSize: {
        type: Number,
        default: 10
      },
      currentPage: {
        type: Number,
        default: 1
      },
      pageGroup: {
        type: Number,
        default: 5,
        coerce(val) {
          v = v > 0 ? v : 5
          return v % 2 === 0 ? v + 1 : v
        }
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
    methods: {
      setCurrentPage(val) {
        if(this.current === val) {return}
        if(val > 0 && val <= this.pages) {
          this.current = val
          this.$emit('pageChange', this.current, this.pageSize)
        }
      }
    }
  }
</script>

<style>
</style>
