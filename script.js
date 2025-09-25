//your JS code here. If required.
 const container = document.getElementById("board");

    // Create 800 squares
    for (let i = 0; i < 800; i++) {
      const square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("mouseover", () => {
        square.classList.add("hovered");

        // Reset color after 1s
        setTimeout(() => {
          square.classList.remove("hovered");
        }, 1000);
      });

      container.appendChild(square);
    }