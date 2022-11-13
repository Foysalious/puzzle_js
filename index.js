let row = 3;
let column = 3;
let currentCard;
let otherCard;
let parentofFill;
let swapElement;
let doesExit;
let turn = 0;
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
      cards.addEventListener("dragstart", dragStart);
      cards.addEventListener("dragover", dragOver);
      cards.addEventListener("dragenter", dragEnter);
      cards.addEventListener("dragleave", dragLeave);
      cards.addEventListener("drop", dragDrop);
      cards.addEventListener("dragend", dragEnd);

      document.getElementById("board").append(cards);
    }
  }
};

//Creating functions of Drag
function dragStart() {
  currentCard = this;
  // parentofFill = currentCard.parentNode;
  setTimeout(() => {
    return (this.style.visibility = "hidden");
  }, 0);
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  if (this.querySelector("img") !== null) {
    doesExit = true;
    const element = this.querySelectorAll("img");
    swapElement = element[0];
  } else {
    doesExit = false;
  }
}
function dragLeave() {}
function dragDrop() {
  otherCard = this;

  currentCard.style.visibility = "visible";
  if (doesExit) {
    parentofFill.append(otherCard);
  }
  parentofFill.children[1].value = "";
  this.append(otherCard);
}
function dragEnd() {
  let currentImg = currentCard.src;
  let otherImg = otherCard.src;
  currentCard.src = otherImg;
  otherCard.src = currentImg;
  turns += 1;
  document.getElementById("turns").innerText = turns;
}
