// Create Robot
// Place in starting position on set grid size
var roxy = {}

// function Robot(x, y, f) {
//     this.x = x
//     this.y = y
//     this.f = f
// }

//set variables
// var tabletop = (5,5)
var compass = ["NORTH", "EAST", "SOUTH", "WEST"]
var error = document.getElementById("error")
var report = document.getElementById("report")
var goBtn = document.getElementById('btn')
var firstMove = true

// Get command function
function doCommand() {
  debugger
  //reset error message
  error.innerHTML = " "
  //get command
  var command = document.getElementById('command')
  // split first part of command up to the space
  var action = command.value.split(" ")
  console.log(action[0].toUpperCase())
  // Check if first command is a place
    if (action[0].toUpperCase() != "PLACE" && firstMove) {
      error.innerHTML = "Roxy the robot must be placed before any other command"
      return
    } else if (action[0].toUpperCase() == "PLACE" && firstMove) {
        // if its the first move and a place, toggle firstMove
        firstMove = false
    }
    debugger
    switch (action[0].toUpperCase()) {
      case "PLACE":
        // split second part of command into x,y,f
        var coords = action[1].split(",")
        //set roxy to place position
        roxy = {
          x: parseInt(coords[0]),
          y: parseInt(coords[1]),
          direction: coords[2].toUpperCase()
        }
        PLACE()
        break
        // return roxy
      case "MOVE":
        MOVE ()
        // return
        break
      case "LEFT":
        LEFT ()
        // return roxy
      case "RIGHT":
        RIGHT ()
        // return
      case "REPORT":
        REPORT ()
        break
        // return
    }
    console.log(roxy);
}

// move robot to x,y
function PLACE() {
  //check place command is valid
  debugger
  if (roxy.x < 5 && roxy.y < 5 && (roxy.direction==="NORTH" || roxy.direction==="EAST" || roxy.direction==="SOUTH" || roxy.direction==="WEST")) {
    console.log(roxy)
  } else {
    error.innerHTML = "Roxy the robot must be placed on the table top (5x5) with a valid facing"
  }
}

function MOVE() {
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
  roxy = {
  x: x,
  y: y,
  direction: f
  }
  console.log(roxy)
  // return roxy
}

function LEFT() {
  var startIndex = compass.indexof(roxy.direction)
  if (startIndex = 0) {
    f = WEST
  } else {
    f = compass(startindex-1)
  }
  roxy = {
  x: x,
  y: y,
  direction: f
  }
  console.log(roxy)
}

function RIGHT() {
  var startIndex = compass.indexof(roxy.direction)
  if (startIndex = 4) {
    f = NORTH
  } else {
    f = compass(startindex+1)
  }
  roxy = {
  x: x,
  y: y,
  direction: f
  }
  console.log(roxy)
}

// when report, send final position and face.
function REPORT() {
  debugger
  console.log("Output:" + roxy.x +"," + roxy.y + "," + roxy.direction)
  // return roxy
}

// roxy.direction
// roxy = new Robot(0,0,"NORTH")
//
// goBtn.addEventListener("click", doCommand())
