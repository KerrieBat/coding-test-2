// Create Robot
// Place in starting position on set grid size
var roxy = {}

//set variables
var compass = ["NORTH", "EAST", "SOUTH", "WEST"]
var error = document.getElementById("error")
var report = document.getElementById("report")
var goBtn = document.getElementById('btn')
var firstMove = true

// Get command function
function doCommand() {
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
      case "MOVE":
        MOVE ()
        break
      case "LEFT":
        LEFT ()
        break
      case "RIGHT":
        RIGHT ()
        break
      case "REPORT":
        REPORT ()
        break
      default:
        error.innerHTML = "I don't recognise that command, please try again"
    }
    console.log(roxy)
}

// move robot to x,y
function PLACE() {
  //check place command is valid
  if (roxy.x < 5 && roxy.y < 5 && (roxy.direction==="NORTH" || roxy.direction==="EAST" || roxy.direction==="SOUTH" || roxy.direction==="WEST")) {
    console.log(roxy)
  } else {
    error.innerHTML = "Roxy the robot must be placed on the table top (5x5) with a valid facing"
  }
}

function MOVE() {
  debugger
  switch (roxy.direction) {
  case "NORTH":
    if (roxy.y == 4) {
      offError()
    } else {
      roxy.y += 1
    }
    break
  case "SOUTH":
    if (roxy.y == 0) {
      offError()
    } else {
      roxy.y -= 1
    }
    break
  case "EAST":
    if (roxy.x == 4) {
      offError()
    } else {
      roxy.x += 1
    }
    break
  case "WEST":
    if (roxy.x == 0) {
      offError()
    } else {
      roxy.x -= 1
    }
    break
  }
  console.log(roxy)
}

function LEFT() {
  var startIndex = compass.indexOf(roxy.direction)
  if (startIndex == 0) {
    roxy.direction = "WEST"
  } else {
    roxy.direction = compass[startIndex-1]
  }
}

function RIGHT() {
  var startIndex = compass.indexOf(roxy.direction)
  if (startIndex == 4) {
    roxy.direction = "NORTH"
  } else {
    roxy.direction = compass[startIndex+1]
  }
}

// when report, send final position and face.
function REPORT() {
  console.log("Report:" + roxy.x +"," + roxy.y + "," + roxy.direction)
  report.innerHTML = "Position: " + roxy.x +", " + roxy.y + ", " + roxy.direction
}

function offError() {
    error.innerHTML = "Roxy the Robot will fall off the table, try LEFT or RIGHT"
}
