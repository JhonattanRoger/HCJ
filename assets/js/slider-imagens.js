const controls = document.querySelectorAll(".control");

let currentItem = 0;

const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    // Verifica se contém a classe arrow-left
    const isLeft = control.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }
    // Se for menor que 0 vai para o último elemento
    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }
    // cconsole.log para ver o exemplo do loop do carrosel
    // console.log("Controle", isLeft, currentItem);

    // Remover a classe do item
    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
        inline: "center",
        behavior : "smooth"
    });

    items[currentItem].classList.add("current-item");
  });
});
