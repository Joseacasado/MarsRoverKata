// Rover object goes here:
const rover = { direction: 'N', x: '0', y: '0'};

// ======================
function turnLeft(rover) {
  if (rover.direction === 'N') {
    rover.direction = 'W';
    console.log(`The Rover direction is ${rover.direction}`);
  } else if (rover.direction === 'W') {
    rover.direction = 'S';
    console.log(`The Rover direction is ${rover.direction}`);
  } else if (rover.direction === 'S') {
    rover.direction = 'E';
    console.log(`The Rover direction is ${rover.direction}`);
  } else {
    rover.direction = 'N';
    console.log(`The Rover direction is ${rover.direction}`);
  }
}

function turnRight(rover) {
  if (rover.direction === 'N') {
    rover.direction = 'E';
    console.log(`The Rover direction is ${rover.direction}`);
  } else if (rover.direction === 'E') {
    rover.direction = 'S';
    console.log(`The Rover direction is ${rover.direction}`);
  } else if (rover.direction === 'S') {
    rover.direction = 'W';
    console.log(`The Rover direction is ${rover.direction}`);
  } else {
    rover.direction = 'N';
    console.log(`The Rover direction is ${rover.direction}`);
  }
}

function moveForward(rover) {
  if ((rover.x >= 0 && rover.x < 10) && (rover.y >= 0 && rover.y < 10)) {
    if (rover.direction === 'N') {
      rover.y--;
      console.log(`The Rover has position x:${rover.x}, y:${rover.y}`);
    } else if (rover.direction === 'W') {
      rover.x--;
      console.log(`The Rover has position x:${rover.x}, y:${rover.y}`);
    } else if (rover.direction === 'S') {
      rover.y++;
      console.log(`The Rover has position x:${rover.x}, y:${rover.y}`);
    } else {
      rover.x++;
      console.log(`The Rover has position x:${rover.x}, y:${rover.y}`);
    }
  } else {
    console.log('The Rover has left the grid!!!');
  }
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