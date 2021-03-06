const rover1 = {
  id: "Rover 1",
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [{ x: 0, y: 0 }],
};

const rover2 = {
  id: "Rover 2",
  direction: "W",
  x: 9,
  y: 9,
  travelLog: [{ x: 9, y: 9 }],
};

// Obstacles:
const obstacles = [
  { x: 2, y: 2 },
  { x: 5, y: 1 },
  { x: 4, y: 5 },
  { x: 7, y: 6 },
  { x: 3, y: 9 },
  { x: 8, y: 8 }
];

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
  console.log(
    `The ${rover.id} has turned left, it's direction is ${rover.direction}`
  );
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
  console.log(
    `The ${rover.id} has turned right, it's direction is ${rover.direction}`
  );
}

function moveForward(rover) {
  // if (rover.x >= 0 && rover.x < 10 && rover.y >= 0 && rover.y < 10)
  // this if statemen doesn't work, let's try somethign else
  switch (rover.direction) {
    case "N":
      rover.y--;
      if (rover.y < 0) { //  **** BONUS 1 ****
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.y++;
        return;
      }
      preventCollision(rover);
      break;
    case "W":
      rover.x--;
      if (rover.x < 0) {
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.x++;
        return;
      }
      preventCollision(rover);
      break;
    case "S":
      rover.y++;
      if (rover.y > 9) {
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.y--;
        return;
      }
      preventCollision(rover);
      break;
    case "E":
      rover.x++;
      if (rover.x > 9) {
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.x--;
        return;
      }
      preventCollision(rover);
      break;
  }
  console.log(`The ${rover.id} has moved forward`);
  console.log(`The ${rover.id} is now at x:${rover.x}, y:${rover.y}`);

  let newPosition = { x: rover.x, y: rover.y };
  rover.travelLog.push(newPosition);
}

function moveBackward(rover) { // **** BONUS 2 ****
  switch (rover.direction) {
    case "N":
      rover.y++;
      if (rover.y > 9) {
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.y--;
        return;
      }
      preventCollision(rover);
      break;
    case "W":
      rover.x++;
      if (rover.x > 9) {
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.x--;
        return;
      }
      preventCollision(rover);
      break;
    case "S":
      rover.y--;
      if (rover.y < 0) {
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.y++;
        return;
      }
      preventCollision(rover);
      break;
    case "E":
      rover.x--;
      if (rover.x < 0) {
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.x++;
        return;
      }
      preventCollision(rover);
      break;
  }
  console.log(`The ${rover.id} has moved backward`);
  console.log(`The ${rover.id} is now at x:${rover.x}, y:${rover.y}`);

  let newPosition = { x: rover.x, y: rover.y };
  rover.travelLog.push(newPosition);
}

function command(rover, orders) {
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
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
      default: // none of the above **** BONUS 3 ****
        continue;
    }
  }
  console.log(`The ${rover.id} is facing ${rover.direction}`);
  // Print the path
  console.log(`** The las route of the ${rover.id} has been:`);
  for (let i = 0; i < rover.travelLog.length; i++) {
    console.log(
      `Position ${i}: x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`
    );
  }
}

function preventCollision(rover) { // **** BONUS 4 / I can't make Rover stop after collision!!
  obstacles.forEach(position => {
    if (rover.x == position.x && rover.y == position.y) {
      console.log(`The ${rover.id} has found an obstacle at x: ${rover.x}, y: ${rover.y}`);
      return false;
    } else if (rover1.x == rover2.x && rover1.y == rover2.y) {
      console.log(`The ${rover.id} will collide with another Rover. Aborted movement`);
      return false;
    } else {
      return true;
    }
  });
}

// ====== ROVER MOVEMENT / INSTRUCTIONS

command(rover1, "2frffmrfflhfrff9f");
command(rover2, "ff4fff5tfrffjflplb");

/* TO BE COMPLETED:
    Bonus 4 - Avoid collision
*/
