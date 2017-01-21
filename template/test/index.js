var vue = require('vue')
require('es6-promise').polyfill()
var component = require('./../src/components/Vuex.vue')

describe('Example test', function () {

  it('Example static', function() {
    expect('a').toBe('a')
  })


  it('data test', () => {
   const defaultData = component.computed
   let prev = defaultData.count()
   expect(prev).toBe(0)
 })

})
