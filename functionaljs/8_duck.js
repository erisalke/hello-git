function duckCount() {
  var args = Array.prototype.slice.call(arguments)

  return args.filter(function(element){
    return Object.prototype.hasOwnProperty.call(element, 'quack')
  }).length
}

module.exports = duckCount
