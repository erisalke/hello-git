function reduce(array, fun, initial){
  function recur(state, index){
    var head= array[index]
    var state= fun(initial, head, index, array)
    var tail= array.slice(index+1)
    if (!tail.length) return state

    return recur(state, ++index)
  }
  return recur(initial, 0)
}

module.exports = reduce


// function reduce(array, fun, initial){
//   if (!array.length) return initial
//   var tail = array.slice(1)
//   initial = fun(initial, array[0])
//   return reduce(tail, fun, initial)
// }
// module.exports = reduce
