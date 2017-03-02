// var N = boolean

var compass = ["NORTH", "EAST", "SOUTH", "WEST"]
var roxy = {
  x: null,
  y: null,
  direction: null
  }

function PLACE(x, y, f) {
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
    console.log("Roxy the robot must be placed on the table top");
  }
  // return x
  // return y
}

function MOVE(x, y, f) {
  if (f == "NORTH") {
    if (y == 4) {
      console.log("Roxy the Robot will fall off the table, try LEFT or RIGHT");
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

PLACE(1,1,"NORTH")

REPORT()

roxy.direction



// PLACE 0,0,NORTH
// MOVE
// REPORT
// Output: 0,1,NORTH
