function getShortMsgs(messages) {
  var filtered = messages.filter(function(obj){
    if(obj.message.length < 50)
      return obj.message
  })

  return filtered.map(function(obj){
    return obj.message
  })
}

module.exports = getShortMsgs
