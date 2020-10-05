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
  console.log('turnRight was called!');
}

function moveForward(rover) {
  console.log('moveForward was called');
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

command(rover, 'rlllf');