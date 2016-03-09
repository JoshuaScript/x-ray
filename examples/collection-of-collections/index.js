var read = require('fs').readFileSync
var html = read(__dirname + '/index.html')
var Xray = require('..')
var x = Xray()

x(html, '.item', [{
  title: 'h2',
  tags: x('.tags', ['li'])
}])(function (err, arr) {
  console.log(arr)
})
