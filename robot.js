// Create Robot
// Place in starting position on set grid size
var roxy = null

function Robot(x, y, f) {
    this.x = x;
    this.y = y;
    this.f = f;
}

// roxy = new Robot(0,0,"NORTH")

//set variables
var tabletop = (5,5)
var compass = ["NORTH", "EAST", "SOUTH", "WEST"]
var error = document.getElementById("error");
var report = document.getElementById("report");
var goBtn = document.getElementById('btn')

// Get command
function doCommand() {
  debugger
  error.innerHTML = " "

  var command = document.getElementById('command')
  // split first part of command up to the space
  var action = command.value.split(" ")
  console.log(action[0].toUpperCase())


  // Check if first command is a place
if (action[0].toUpperCase() === "PLACE" && roxy.value == null) {
  // split second part of command into x,y,f
  var coords = action[1].split(",")
  var x = coords[0]
  var y = coords[1]
  var f = coords[2].toUpperCase()
  console.log(x)
  console.log(y)
  console.log(f)
  PLACE (x,y,f)
} else {
error.innerHTML = "Roxy the robot must be placed before any other command"
}
}


function PLACE(x,y,f) {
  if (x < 5 && y < 5) {
    // var position = (x,y)
    var roxy = {
    x: x,
    y: y,
    direction: f
    }
    // var face = f
    // console.log(face)
  } else {
    error.innerHTML = "Roxy the robot must be placed on the table top"
  }
  // return x
  // return y
}

function MOVE(x, y, f) {
  if (f == "NORTH") {
    if (y == 4) {
      console.log("Roxy the Robot will fall off the table, try LEFT or RIGHT")
    } else {
      y += 1
    }
  }
  if (f == "SOUTH") {
    if (y == 0) {
      console.log("Roxy the Robot will fall off the table, try LEFT or RIGHT");
    } else {
      y -= 1
    }
  }
  if (f == "EAST") {
    if (x == 4) {
      console.log("Roxy the Robot will fall off the table, try LEFT or RIGHT");
    } else {
      x += 1
    }
  }
  if (f == "WEST") {
    if (x == 0) {
      console.log("Roxy the Robot will fall off the table, try LEFT or RIGHT");
    } else {
      x -= 1
    }
  }
  return x
  return y
}

function LEFT(f) {
  var startIndex = compass.indexof(f)
  if (startIndex = 0) {
    f = WEST
  } else {
    f = compass(startindex-1)
  }
  return f
}

function RIGHT(f) {


}

function REPORT(x,y,f) {
  console.log("Output:" + x +"," + "," + y + "," + f)
}

// PLACE(1,1,"NORTH")
//
// REPORT()
debugger
// roxy.direction
roxy = new Robot(0,0,"NORTH")

goBtn.addEventListener("click", doCommand)

// PLACE 0,0,NORTH
// MOVE
// REPORT
// Output: 0,1,NORTH
