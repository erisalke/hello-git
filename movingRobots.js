function Robot(pos, dir, id){
  this.id = id
  this.factory = [pos, dir]
  this.position = pos
  this.direction = dir
  this.instructions
  this.giveInstructions = function(insStr){
    // if (this.instructions.length>0){
    //   throw "Error:CannotOverwriteMemory"
    // }


    // console.log(typeof(insStr.split('')))

    this.instructions = insStr.split("")
  }

  this.reset = function(pos, dir){
    if (this.factory === undefined){
    return;
    }

    if ((dir !== undefined) && (pos !== undefined)){
      this.position = pos
      this.direction = dir
    }
    if ((dir === undefined) && (pos === undefined)){
      this.position = this.factory[0]
      this.direction = this.factory[1]
    }
  }

  this.beep = function(operation){
    if (operation !== undefined)
      return console.log(" .me:", this.id, " is:", this.position,
                        " see:", this.direction, " do:", operation)//pos())
    if (this.instructions.length === 0)
      return console.log(this.id, ". is:", this.position," see:", this.direction)
    ///return console.log("   ", " newPos:", this.position," see:",this.direction)
  }


 // NOTE: S, E, N, W <=> 0,1,2,3
 // S=0, E=1, N=2, W=3
  this.move = function(operation){
    this.beep(operation)
    if (operation === "M"){ // 'M' is move
      if (this.direction % 2){
        // 1 is west (pos[0] -1), 3 is east (pos[0] +1)
        this.position[0] += (this.direction - 2)
      }
      else {
        // 0 is south (pos[1] -1), 2 is north (pos[1] +1)
        this.position[1] += (this.direction - 1)
      }
    }
    if (operation === "R"){
      this.direction = (this.direction+1) % 4
    }
    if (operation === "L"){
      this.direction = (this.direction+3) % 4
    }
  }

  this.executeAll = function(){
    while(this.instructions.length>0){
      this.executeOperation()
    }
  }

  this.executeOperation = function(){
    if (this.instructions === undefined){
      return console.log("throw cannot move, no instructions defined")
    }
    if (this.instructions === null){
      return console.log("dear gods! i dont exist im just a code execution 93")
    }

    this.move(this.instructions.shift())
  }
}

function doJob(dataSets){
  var r1 = new Robot([2,3], 0, "Bolek")
  r1.giveInstructions("RMLMRMLMMMMLLMMM")

  var r2 = new Robot([2,3], 0, "Lolek")
  r2.giveInstructions("RRRRRRRRLMMMLMRMLMMMMLLMMM")



  // [04.02.2016, 20:24] Katarzyna Żarnowiec (katarzyna.zarnowiec@gmail.com): Test Input:
  // 5 5
  // 1 2 N
  // LMLMLMLMM
  // 3 3 E
  // MMRMMRMRRM
  // Expected Output:

  // 1 3 N
  // 5 1 E

  var r1 = new Robot([1,2], 2, "R1" )
  r1.giveInstructions("LMLMLMLMM")

  var r2 = new Robot([3,3], 3 , "R222")
  r2.giveInstructions("MMRMMRMRRM")

  r1.executeAll()
  console.log("EXPECTED: 1 3 2")
  r1.beep()

  r2.executeAll()
  console.log("EXPECTED: 5 1 3")
  r2.beep()
}

// ---------------------------------------------------------------------------
// -------------- Execution below --------------------------------------------
// ---------------------------------------------------------------------------
function print(){}
function readAndInterpret(testFileSrc){}
var testFileSrc = Number(process.argv[2]) || "movingRobotsTest.txt"
var data = readAndInterpret(testFileSrc)
print(doJob(data))
