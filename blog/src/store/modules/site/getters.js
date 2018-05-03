const getters = {
  header(state) {
    return state.site.header
  },
  footer(state) {
    return state.site.footer
  },
  isLoading(state) {
    return state.isLoading
  }
}

export default getters
