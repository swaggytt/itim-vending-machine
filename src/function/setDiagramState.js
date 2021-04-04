function setStateDiagram(input, key) {
  if (input === "cone") {
    if (key === 0 || key === 2) {
      return 1;
    } else if (key === 4) {
      return 3;
    } else if (key === 7 || key === 8 || key === 11 || key === 12) {
      return key - 2;
    } else {
      return key;
    }
  } else if (input === "bread") {
    if (key === 0 || key === 1) {
      return 2;
    } else if (key === 3) {
      return 4;
    } else if (key === 5 || key === 6 || key === 9 || key === 10) {
      return key + 2;
    } else {
      return key;
    }
  } else if (input === "sticky") {
    if (key === 1 || key === 2) {
      return key + 2;
    } else if (key === 3 || key === 4) {
      return key - 2;
    } else if (key === 5 || key === 6 || key === 7 || key === 8) {
      return key + 4;
    } else if (key === 9 || key === 10 || key === 11 || key === 12) {
      return key - 4;
    } else {
      return key;
    }
  } else if (input === "choco") {
    if (key === 1) {
      return 5;
    } else if (key === 2) {
      return 7;
    } else if (key === 3) {
      return 9;
    } else if (key === 4) {
      return 11;
    } else if (key === 5) {
      return 1;
    } else if (key === 6 || key === 8 || key === 10 || key === 12) {
      return key - 1;
    } else if (key === 7) {
      return 2;
    } else if (key === 9) {
      return 3;
    } else if (key === 11) {
      return 4;
    } else {
      return key;
    }
  } else if (input === "vanilla") {
    if (key === 1) {
      return 6;
    } else if (key === 2) {
      return 8;
    } else if (key === 3) {
      return 10;
    } else if (key === 4) {
      return 12;
    } else if (key === 6) {
      return 1;
    } else if (key === 5 || key === 7 || key === 9 || key === 11) {
      return key + 1;
    } else if (key === 8) {
      return 2;
    } else if (key === 10) {
      return 3;
    } else if (key === 12) {
      return 4;
    } else {
      return key;
    }
  } else if (input === "confirm") {
    if (key === 0 || key === 1 || key === 2 || key === 3 || key === 4) {
      return key;
    } else {
      return 13;
    }
  } else if (input === "start") {
    return 0;
  }
}

export default setStateDiagram;
