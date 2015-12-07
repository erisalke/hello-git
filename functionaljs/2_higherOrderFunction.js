function repeat(operation, num) {
  if (num <= 0) {
    operation()
  }
  else {
    repeat(operation, num-1)
  }
}

module.exports = repeat
