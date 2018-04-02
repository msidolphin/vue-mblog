import getters   from './getters'
import actions   from './actions'
import mutations from './mutations'

const site = {
  state: {
    header: {
      avatar: 'https://note.youdao.com/yws/api/personal/file/WEB67826504207b8e7d6b33975cb709d4ab?method=download&shareKey=fb8da8af98adb8f2a3efbfa71d8d9e38',
      title: '博客标语'
    },
    footer: {
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
  },
  getters,
  actions,
  mutations
}

export default site
