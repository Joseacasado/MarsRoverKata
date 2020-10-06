// Rover object goes here:
const rover = { 
  direction: 'N', 
  x: 0, 
  y: 0,
  travelLog: [{ x: 0, y: 0}]
};

// ====== FUNCTIONS
function turnLeft(rover) {
  if (rover.direction === 'N') {
    rover.direction = 'W';
  } else if (rover.direction === 'W') {
    rover.direction = 'S';
  } else if (rover.direction === 'S') {
    rover.direction = 'E';
  } else {
    rover.direction = 'N';
  }
  console.log(`The Rover direction is ${rover.direction}`);
}

function turnRight(rover) {
  if (rover.direction === 'N') {
    rover.direction = 'E';
  } else if (rover.direction === 'E') {
    rover.direction = 'S';
  } else if (rover.direction === 'S') {
    rover.direction = 'W';
  } else {
    rover.direction = 'N';
  }
  console.log(`The Rover direction is ${rover.direction}`);
}

function moveForward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.y--;
      break;
    case 'W':
      rover.x--;
      break;
    case 'S':
      rover.y++;
      break;
    case 'E':
      rover.x++;
      break;
  }
  console.log(`The Rover has moved forward`);
  console.log(`The Rover is now at x:${rover.x}, y:${rover.y}`);

  let newPosition = { x: rover.x, y: rover.y };
  rover.travelLog.push(newPosition);
}

function command(rover, orders) {
  // if (rover.x >= 0 && rover.x < 10 && rover.y >= 0 && rover.y < 10) {

  // } else {
  //   console.log("The Rover can't leave the grid!!!");
  // }
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    switch (order) {
      case 'l': // left
        turnLeft(rover);
        break;
      case 'r': // rigth
        turnRight(rover);
        break;
      case 'f': // fordward
        moveForward(rover);
        break;
    }
  }
  console.log(`The Rover is facing ${rover.direction}`);
}

function monitoring() {
  console.log('** The las route of the Rover has been:');
  for (let i = 0; i < rover.travelLog.length; i++) {
    console.log(`Position ${i}: x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);
  }
}


// ====== ROVER MOVEMENT / INSTRUCTIONS

command(rover, 'rrfflflfff');
monitoring();


// The Rover can leave the grid, it must be fixed.