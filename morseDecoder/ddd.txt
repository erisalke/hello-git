var letterCodes = { ".-"   : "a",
                    "-..." : "b",
                    "-.-." : "c",
                    "-.."  : "d",
                    "."    : "e",
                    "..-." : "f",
                    "--."  : "g",
                    "...." : "h",
                    ".."   : "i",
                    ".---" : "j",
                    "-.-"  : "k",
                    ".-.." : "l",
                    "--"   : "m",
                    "-."   : "n",
                    "---"  : "o",
                    ".--." : "p",
                    "--.-" : "q",
                    ".-."  : "r",
                    "..."  : "s",
                    "-"    : "t",
                    "..-"  : "u",
                    "...-" : "v",
                    ".--"  : "w",
                    "-..-" : "x",
                    "-.--" : "y",
                    "--.." : "z"
                  }

// silly stuff extracted to not confuze the code
function justAByeByeNote() {
  console.log()
  console.log("-----END-----")
  console.log(solution + temp)
}
function justACrashNote(){
  console.log("-----CRASHED-----")
  console.log("sorry app blown up :(")
}
function justAProgressNote() {
  console.log(++count + ". HEAD: " + head + "+" + offset + " DECODED: " + solution)
}
function justAnotherProgressNote(letter, encoded) {
  console.log("   " + encoded + " ==> " + temp + " < " + letter)
}

// read the words from file
var dictionary = require("fs").readFileSync("ddd.txt").toString().split("\n")
var message = "-.-.-------.-.-...--.--...-......-..-..---.--.--.-.-.-...--.---.-.----..-...-.--.---.....-.-...-.-...-......-....-..-..-.--...-......-.---.-......----..-.....-....-......-.-..--.--.--..-....-.-..-..-.....-..----.-..-.-..-....---......-.....-.--..-.......-.-..-...---..-...-...-.-...-....--.-..--..----.-..--..----..-.-..-.-..-.-.-........--.-.-.--.-..--.---...-.-....-.-..-.-..-.--..-...-........-.-.-------..--...--.--.--..-......-....-.--.....-.-...-.--.--.-.--.....----..-.....--............--..--...-.--..-.......-....-.-.......--....---.-.-.--....-.--..-...-.---.-...---"

// some globals defined
var count = 0
var STOP = 10000
var maxLetterSize = 4
var head = 0
var offset = 5
var headLog = []
var offsetLog = []
var temp = ""
var solution = ""

function saveWordAndResetTemp() {
  solution += temp + " "
  temp = ""
}

function rollbackHead(){
  var matchingWord = dictionary.find(function(x){
    return x === temp
  })
  // when rolling back - so it is when no
  if(matchingWord !== undefined){
    saveWordAndResetTemp()
    saveStateAndMoveOn()
  } else {
    head = headLog.pop()
    offset = offsetLog.pop()
    temp = temp.slice(0,-1)
  }
}

function saveStateAndMoveOn(){
  headLog.push(head)
  offsetLog.push(offset)
  head += offset
  offset = maxLetterSize + 1
}

function goForward(){
  // stop condition
  if (head > message.length) {
    return justAByeByeNote()
  }

  // alternative stop condition
  if (count > STOP) {
    return justACrashNote()
  }

  // move scope of the current char
  if (--offset <= 0){
    // nothing to do here, step back now
    rollbackHead()
    return goForward()
  }

  justAProgressNote()
  var encoded = message.slice(head, head+offset)
  var letter = letterCodes[encoded]
  justAnotherProgressNote(letter, encoded)

  // is the code a letter at all?
  if (letter !== undefined){
    temp += letter

    // is the temp a word at all?
    var matching = dictionary.filter(function(w){
      return w.indexOf(temp) === 0
    }).length

    if (matching > 0) {
      // //uncommenting that will speed the execution a bit
      // if (matching === 1){
      //   saveWordAndResetTemp()
      // }
      saveStateAndMoveOn()
    }
    else {
      temp = temp.slice(0,-1)
    }
  }

  return goForward()
}

goForward()
console.log()
console.log("erisalke@gmail.com 160116")
