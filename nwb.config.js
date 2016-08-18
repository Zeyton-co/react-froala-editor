module.exports = {
  type: 'react-component',
  build: {
    externals: {
      'react': 'React'
    },
    global: 'ReactFroalaEditor',
    jsNext: true,
    umd: true
  }
}
