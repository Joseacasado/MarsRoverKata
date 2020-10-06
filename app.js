// Rover object goes here:
const rover = { 
  direction: 'N', 
  x: 0, 
  y: 0,
  travelLog: [{ x: 0, y: 0}]
};

// ======================
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
  if ((rover.x >= 0 && rover.x < 10) && (rover.y >= 0 && rover.y < 10)) {
    if (rover.direction === 'N') {
      rover.y--;
    } else if (rover.direction === 'W') {
      rover.x--;
    } else if (rover.direction === 'S') {
      rover.y++;
    } else {
      rover.x++;
    }
    console.log(`The Rover has position x:${rover.x}, y:${rover.y}`);

    let newPosition = { x: rover.x, y: rover.y };
    rover.travelLog.push(newPosition);

  } else {
    console.log('The Rover has left the grid!!!');
  }
}

for (let i = 0; i < rover.travelLog.length; i++) {
  console.log(`Position ${i} was x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);
}

function command(rover, orders) {
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


command(rover, 'rfrfrff');

// The Rover can leave the grid, it must be fixed.
// Next step: Iteration 5