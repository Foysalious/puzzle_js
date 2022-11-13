let row = 3;
let column = 3;
let size = 3;
let currentCard;
let otherCard;
let parentofFill;
let swapElement;
let doesExit;
let turn = 0;
handleInput();
const imageOrder = [
  "images/1",
  "images/2",
  "images/3",
  "images/4",
  "images/5",
  "images/6",
  "images/7",
  "images/8",
  "images/9",
];
for (let i = 0; i < imageOrder.length; i++) {
  let j = Math.floor(Math.random() * imageOrder.length);

  //swap
  let tmp = imageOrder[i];
  imageOrder[i] = imageOrder[j];
  imageOrder[j] = tmp;
}

window.onload = () => {
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      let cards = document.createElement("img");
      cards.id = r.toString() + "-" + c.toString();
      cards.src = imageOrder.shift() + ".jpg";
      //Draging Funtionality
      // cards.addEventListener("dragstart", dragStart);
      // cards.addEventListener("dragover", dragOver);
      // cards.addEventListener("dragenter", dragEnter);
      // cards.addEventListener("dragleave", dragLeave);
      // cards.addEventListener("drop", dragDrop);
      // cards.addEventListener("dragend", dragEnd);

      document.getElementById("board").append(cards);
    }
  }
};
function handleInput() {
  document.addEventListener("keydown", handleKeyDown);
}
function handleKeyDown(e) {
  // console.log(e.key);
  switch (e.key) {
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
    case "ArrowUp":
      moveUp();
      break;
    case "ArrowDown":
      moveDown();
      break;
  }
}

function moveLeft() {
  const emptyPuzzle = getEmptyPuzzle();
  const rightPuzzle = getRightPuzzle();
  console.log(emptyPuzzle, rightPuzzle);
}
function moveRight() {}
function moveUp() {}
function moveDown() {}

function getRightPuzzle() {
  const emptyPuzzle = getEmptyPuzzle();
  const isRightEdge = emptyPuzzle.imageOrder === size;
  if (isRightEdge) {
    return null;
  }
  const puzzle = getPuzzlebyPos(emptyPuzzle.imageOrder + 1);
  return puzzle;
}
function getLeftPuzzle() {
  const emptyPuzzle = getEmptyPuzzle();
  const isLeftEdge = emptyPuzzle.imageOrder === 1;
  if (isLeftEdge) {
    return null;
  }
  const puzzle = getPuzzlebyPos(emptyPuzzle.imageOrder - 1);
  return puzzle;
}
function getTopPuzzle() {
  const emptyPuzzle = getEmptyPuzzle();
  const isTopEdge = emptyPuzzle.imageOrder === 1;
  if (isTopEdge) {
    return null;
  }
  const puzzle = getPuzzlebyPos(emptyPuzzle.imageOrder - row);
  return puzzle;
}
function getBottomPuzzle() {
  const emptyPuzzle = getEmptyPuzzle();
  const isBottomEdge = emptyPuzzle.imageOrder === row;
  if (isBottomEdge) {
    return null;
  }
  const puzzle = getPuzzlebyPos(emptyPuzzle.imageOrder + 1);
  return puzzle;
}

function getEmptyPuzzle() {
  return imageOrder.find((item) => item.imageOrder["images/3.jpg"]);
}
function getPuzzlebyPos(pos) {
  return imageOrder.find((item) => item.imageOrder === pos);
}
// //Creating functions of Drag
// function dragStart() {
//   currentCard = this;
//   setTimeout(() => {
//     return (this.style.visibility = "hidden");
//   }, 0);
// }

// function dragOver(e) {
//   e.preventDefault();
// }
// function dragEnter(e) {
//   e.preventDefault();
//   if (this.querySelector("img") !== null) {
//     doesExit = true;
//     const element = this.querySelectorAll("img");
//     swapElement = element[0];
//   } else {
//     doesExit = false;
//   }
// }
// function dragLeave() {}
// function dragDrop() {
//   otherCard = this;

//   currentCard.style.visibility = "visible";
//   if (doesExit) {
//     parentofFill.append(otherCard);
//   }
//   parentofFill.children[1].value = "";
//   this.append(otherCard);
// }
// function dragEnd() {
//   let currentImg = currentCard.src;
//   let otherImg = otherCard.src;
//   currentCard.src = otherImg;
//   otherCard.src = currentImg;
//   turns += 1;
//   document.getElementById("turns").innerText = turns;
// }
