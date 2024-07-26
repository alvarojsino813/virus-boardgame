
const cards = document.querySelectorAll(".card");
cards.forEach(element => {
   element.addEventListener("dragstart", dragStart);
   element.addEventListener("dragend", dragEnd);
});

const slots = document.querySelectorAll(".player");
slots.forEach(element => {
   element.addEventListener("dragenter", dragEnter);
   element.addEventListener("dragover", dragOver);
   element.addEventListener("dragleave", dragLeave);
   element.addEventListener("drop", drop);
});

var cpu_slots = document.querySelectorAll(".cpu");
var available_slots = [0, 1, 2, 3];


function dragStart(e) {
   e.target.style.visibility = "hidden";
}

function dragEnd(e) {
   e.target.style.visibility = "visible";
}


function dragEnter(e) {
   e.preventDefault();
   e.target.style.borderColor = "red";
}


function dragOver(e) {
   e.preventDefault();
   e.target.style.visibility = "visible";
}

function dragLeave(e) {
   e.target.style.borderColor = "black";
   e.target.style.visibility = "visible";
}

function drop(e) {
   e.target.classList.add("organ-player-selected");
   e.target.style.borderColor = "black";
   // CPU turn

   if (available_slots.length > 0) {
      idx = Math.floor(Math.random() * available_slots.length) % available_slots.length;
      cpu_slots.item(available_slots[idx]).classList.add("organ-cpu-selected");
      available_slots.splice(idx, 1);
      console.log("idx: " + idx + " available: " + available_slots);
   }
}
