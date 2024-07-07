let rover = {
    direction: "N",
    x: 0,
    y: 0
  };
  
  function createGrid() {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < 100; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-index', i);
      grid.appendChild(cell);
    }
    updateRoverPosition();
  }
  
  function updateRoverPosition() {
    document.querySelectorAll('.cell').forEach(cell => {
      cell.classList.remove('rover');
    });
    const roverIndex = rover.y * 10 + rover.x;
    document.querySelector(`.cell[data-index='${roverIndex}']`).classList.add('rover');
  }
  
  function turnLeft(rover) {
    switch (rover.direction) {
      case "N":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "N";
        break;
    }
  }
  
  function turnRight(rover) {
    switch (rover.direction) {
      case "N":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "N";
        break;
    }
  }
  
  function moveForward(rover) {
    switch (rover.direction) {
      case "N":
        if (rover.y > 0) rover.y -= 1;
        break;
      case "E":
        if (rover.x < 9) rover.x += 1;
        break;
      case "S":
        if (rover.y < 9) rover.y += 1;
        break;
      case "W":
        if (rover.x > 0) rover.x -= 1;
        break;
    }
    updateRoverPosition();
  }
  
  function moveBackward(rover) {
    switch (rover.direction) {
      case "N":
        if (rover.y < 9) rover.y += 1;
        break;
      case "E":
        if (rover.x > 0) rover.x -= 1;
        break;
      case "S":
        if (rover.y > 0) rover.y -= 1;
        break;
      case "W":
        if (rover.x < 9) rover.x += 1;
        break;
    }
    updateRoverPosition();
  }
  
  function executeCommands(rover, commands) {
    for (let i = 0; i < commands.length; i++) {
      let command = commands[i];
      switch (command) {
        case "L":
          turnLeft(rover);
          break;
        case "R":
          turnRight(rover);
          break;
        case "F":
          moveForward(rover);
          break;
        case "B":
          moveBackward(rover);
          break;
      }
    }
    updateRoverPosition();
  }
  
  // Initialize the grid and rover position
  createGrid();