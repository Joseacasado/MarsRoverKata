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

const obstacle1 = {
  position: { x: 2, y: 4 },
};
const obstacle2 = {
  position: { x: 7, y: 6 },
};

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
      if (rover.y < 0) {
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.y++;
        return;
      }
      break;
    case "W":
      rover.x--;
      if (rover.x < 0) {
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.x++;
        return;
      }
      break;
    case "S":
      rover.y++;
      if (rover.y > 9) {
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.y--;
        return;
      }
      break;
    case "E":
      rover.x++;
      if (rover.x > 9) {
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.x--;
        return;
      }
      break;
  }
  console.log(`The ${rover.id} has moved forward`);
  console.log(`The ${rover.id} is now at x:${rover.x}, y:${rover.y}`);

  let newPosition = { x: rover.x, y: rover.y };
  rover.travelLog.push(newPosition);
}

function moveBackward(rover) {
  // **** BONUS 2 ****
  switch (rover.direction) {
    case "N":
      rover.y++;
      if (rover.y > 9) {
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.y--;
        return;
      }
      break;
    case "W":
      rover.x++;
      if (rover.x > 9) {
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.x--;
        return;
      }
      break;
    case "S":
      rover.y--;
      if (rover.y < 0) {
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.y++;
        return;
      }
      break;
    case "E":
      rover.x--;
      if (rover.x < 0) {
        console.log("The Rover can't leave the grid!! this order will not be executed");
        rover.x++;
        return;
      }
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
      default:
        // none of the above **** BONUS 3 ****
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

// ====== ROVER MOVEMENT / INSTRUCTIONS

command(rover1, "r3fgruf");
command(rover2, "fwqr34nfp");

/* TO BE COMPLETED:
    Bonus 1 - Enforce boundaries
    Bonus 4 - Obstacles
*/
