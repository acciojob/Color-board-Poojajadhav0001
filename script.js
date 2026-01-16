const container = document.getElementById("board");
    const BOXES = 800;

    for (let i = 0; i < BOXES; i++) {
      const square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("mouseenter", () => {
        const color = randomColor();
        square.style.backgroundColor = color;

        setTimeout(() => {
          square.style.backgroundColor = "#1d1d1d";
        }, 1000);
      });

      container.appendChild(square);
    }

    function randomColor() {
      const colors = [
        "#e74c3c",
        "#8e44ad",
        "#3498db",
        "#e67e22",
        "#2ecc71",
        "#f1c40f"
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }