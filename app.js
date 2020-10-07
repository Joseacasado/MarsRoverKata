// Rover object goes here:
const rover1 = {
  id: 1,
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [{ x: 0, y: 0 }],
};

const rover2 = {
  id: 2,
  direction: "W",
  x: 9,
  y: 9,
  travelLog: [{ x: 9, y: 9 }],
};

// Obstacles:

const obstacle1 = { x: 2, y: 4 };
const obstacle2 = { x: 7, y: 6 };

// ====== FUNCTIONS
function turnLeft(rover) {
  if (rover.direction === "N") {
    rover.direction = "W";
  } else if (rover.direction === "W") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "E";
  } else {
    rover.direction = "N";
  }
  console.log(`The Rover${rover.id} direction is ${rover.direction}`);
}

function turnRight(rover) {
  if (rover.direction === "N") {
    rover.direction = "E";
  } else if (rover.direction === "E") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "W";
  } else {
    rover.direction = "N";
  }
  console.log(`The Rover${rover.id} direction is ${rover.direction}`);
}

function moveForward(rover) {
  if (rover.x >= 0 && rover.x < 10 && rover.y >= 0 && rover.y < 10) {
    switch (rover.direction) {
      case "N":
        rover.y--;
        break;
      case "W":
        rover.x--;
        break;
      case "S":
        rover.y++;
        break;
      case "E":
        rover.x++;
        break;
    }
    console.log(`The Rover${rover.id} has moved forward`);
    console.log(`The Rover${rover.id} is now at x:${rover.x}, y:${rover.y}`);

    let newPosition = { x: rover.x, y: rover.y };
    rover.travelLog.push(newPosition);
  } else {
    console.log(`The Rover${rover.id} can't leave the grid!!!`);
    return;
  }
}

function moveBackward(rover) {
  if (rover.x >= 0 && rover.x < 10 && rover.y >= 0 && rover.y < 10) {
    switch (rover.direction) {
      case "N":
        rover.y++;
        break;
      case "W":
        rover.x++;
        break;
      case "S":
        rover.y--;
        break;
      case "E":
        rover.x--;
        break;
    }
    console.log(`The Rover${rover.id} has moved backward`);
    console.log(`The Rover${rover.id} is now at x:${rover.x}, y:${rover.y}`);

    let newPosition = { x: rover.x, y: rover.y };
    rover.travelLog.push(newPosition);
  } else {
    console.log(`The Rover${rover.id} can't leave the grid!!!`);
    return;
  }
}

function command(rover, orders) {
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    if (order === "l" || order === "r" || order === "f" || order === "b") {
      switch (order) {
        case "l": // left
          turnLeft(rover);
          break;
        case "r": // rigth
          turnRight(rover);
          break;
        case "f": // fordward
          moveForward(rover);
          break;
        case "b": // backward
          moveBackward(rover);
          break;
      }
    } else {
      continue;
    }
  }
  console.log(`The Rover${rover.id} is facing ${rover.direction}`);
  // Print the path
  console.log(`** The las route of the Rover${rover.id} has been:`);
  for (let i = 0; i < rover.travelLog.length; i++) {
    console.log(
      `Position ${i}: x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`
    );
  }
}

// ====== ROVER MOVEMENT / INSTRUCTIONS

command(rover1, "rfflf");
command(rover2, 'lff');

/* TO BE COMPLETED:
    Bonus 1 - Enforce boundaries
    Bonus 4 - Obstacles
*/
