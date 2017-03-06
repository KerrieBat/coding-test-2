// Create Robot
// Place in starting position on set grid size
var roxy = null

function Robot(x, y, f) {
    this.x = x;
    this.y = y;
    this.f = f;
}

//set variables
var tabletop = (5,5)
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


    // } else if (action[0].toUpperCase() == "PLACE") {
    //   split second part of command into x,y,f
    //   var coords = action[1].split(",")
    //   var x = coords[0]
    //   var y = coords[1]
    //   var f = coords[2].toUpperCase()
    //   console.log(x)
    //   console.log(y)
    //   console.log(f)
    //   PLACE(x,y,f)
    // }

    switch (action[0].toUpperCase()) {
      case "PLACE":
        // split second part of command into x,y,f
        var coords = action[1].split(",")
        var x = coords[0]
        var y = coords[1]
        var f = coords[2].toUpperCase()
        PLACE(x,y,f)
        return
      case "MOVE":
        MOVE (x,y,f)
        return
      case "LEFT":
        LEFT (x,y,f)
        return
      case "RIGHT":
        RIGHT (x,y,f)
        return
      case "REPORT":
        REPORT (roxy)
        return
    }
    console.log(roxy);
}

// move robot to x,y
function PLACE(x,y,f) {
  if (x <= 5 && y <= 5 && (f==="NORTH" || f==="EAST" || f==="SOUTH" || f==="WEST")) {
    // var position = (x,y)
    var roxy = {
    x: x,
    y: y,
    direction: f
    }
    // var face = f
    console.log(roxy)
  } else {
    error.innerHTML = "Roxy the robot must be placed on the table top with valid facing"
  }
  console.log(roxy);
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
  var roxy = {
  x: x,
  y: y,
  direction: f
  }
  console.log(roxy)
}

function LEFT(x,y,f) {
  var startIndex = compass.indexof(f)
  if (startIndex = 0) {
    f = WEST
  } else {
    f = compass(startindex-1)
  }
  var roxy = {
  x: x,
  y: y,
  direction: f
  }
  console.log(roxy)
}

function RIGHT(x,y,f) {
  var roxy = {
  x: x,
  y: y,
  direction: f
  }
  console.log(roxy)
}

// when report, send final position and face.
function REPORT(roxy) {
  console.log("Output:" + roxy.x +"," + "," + roxy.y + "," + roxy.direction)
}

// roxy.direction
roxy = new Robot(0,0,"NORTH")

goBtn.addEventListener("click", doCommand)
