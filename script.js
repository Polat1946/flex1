const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  const passTop = panel.querySelectorAll("p:nth-child(1)");
  const textUpSize = panel.querySelectorAll("p:nth-child(2)");
  const passBot = panel.querySelectorAll("p:nth-child(3)");

  panel.addEventListener("click", () => {
    panel.classList.toggle("grow");
    passTop.forEach((element) => {
      element.classList.toggle("top-slide");
    });
    passBot.forEach((element) => {
      element.classList.toggle("bottom-slide");
    });
    textUpSize.forEach((element) => {
      element.classList.toggle("textUpSize");
    });
  });
});