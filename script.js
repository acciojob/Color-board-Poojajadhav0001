//your JS code here. If required.
const container = document.getElementById("board");


// Create 800 squares
for (let i = 0; i < 800; i++) {
const square = document.createElement("div");
square.classList.add("square");


square.addEventListener("mouseover", () => {
const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
square.style.backgroundColor = randomColor;


// Reset color after 1s
setTimeout(() => {
square.style.backgroundColor = "#eee";
}, 1000);
});


container.appendChild(square);
}