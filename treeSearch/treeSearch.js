function Tree(name, level) {
  this.name = name
  this.children = []
  this.parent = null
  this.counter = level

  this.findCommonParent=function(a, b){
    if (a.counter <= b.counter){
      var res = a.find(b.name)
      if (res !== null && res !== undefined ){
        return a
      }
      return this.findCommonParent(a.parent,b)
    } else {
      var res = b.find(a.name)
      if (res !== null && res !== undefined ){
        return b
      }
      return this.findCommonParent(b.parent,a)
    }
  }

  this.find = function (n) {
    if (this.name === n)
      return this
    return this.findDeeper(n, this.children)
  }

  this.addChild = function(obj){
    if(this.children.length<2){
      obj.counter = this.counter+1
      obj.parent = this
      this.children.push(obj)
    }
  }

  this.findDeeper = function (n, children){
    if (children === null || children.length === 0)
      return null

    var left = children[0]
    if (left != null && left != undefined)
      if (left.find(n) != null)
        return left.find(n)

    var right = children[1]
    if (right != null && right != undefined)
      if (right.find(n) != null)
        return right.find(n)
  }
}

var input = [["Bob","Joe"],["Joe","Charlie"],["Charlie","Lue"],["Joe","Will"],["Bob", "Ann"],
              ["Ann", "Kate"], ["Ann", "Tom"], ["Tom", "Jerry"]]

var root = new Tree(input[0][0], 0)

input.forEach(function(x){
  var parent = root.find(x[0])
  parent.addChild(new Tree(x[1]))
})

var a = root.find("Ann")
var b = root.find("Bob")
var l = root.find("Lue")
var w = root.find("Will")
var j = root.find("Jerry")
var c = root.find("Charlie")
var k = root.find("Kate")
var t = root.find("Tom")

console.log("Bob? ", root.findCommonParent(a, w).name)
console.log("Bob? ", root.findCommonParent(j, c).name)
console.log("Bob? ", root.findCommonParent(w, k).name)
console.log("Bob? ", root.findCommonParent(a, b).name)
console.log("Joe? ", root.findCommonParent(l, w).name)
console.log("Ana? ", root.findCommonParent(j, k).name)
console.log("Tom? ", root.findCommonParent(t, j).name)
console.log("Tom? ", root.findCommonParent(j, t).name)
