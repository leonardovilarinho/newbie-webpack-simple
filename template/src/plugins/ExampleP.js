function ExampleP() {}

ExampleP.install = function (Vue, options) {
  Vue.myGlobalMethod = function () {
    console.log('This plugin works!')
  }
}

export default ExampleP
