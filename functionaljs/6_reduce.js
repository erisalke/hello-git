function reduceWords(words) {
  return words.reduce(function(result, word) {
    if (result.hasOwnProperty(word))
      ++result[word]
    else
      result[word] = 1
    return result
  }, {})
}

module.exports=reduceWords
