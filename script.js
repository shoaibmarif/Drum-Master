window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const keys = document.querySelectorAll(".keys div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "lightslategrey",
    "red",
  ];

  keys.forEach((key, index) => {
    key.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      const bubble = document.createElement("div");
      visual.appendChild(bubble);
      bubble.style.animation = "jump 1s ease";
      bubble.style.backgroundColor = colors[index];
      bubble.addEventListener("animationend", () => {
        bubble.remove(this);
      });
    });
  });
});
