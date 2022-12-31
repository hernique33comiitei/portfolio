const container = document.querySelector(".container");
const btnMenu = document.querySelector(".menu");
const imgMenu = document.querySelector(".menu__image");
const menuOptMobile = document.querySelector(".menuOptMobile");
const notMenu = document.querySelectorAll(".not--menu");
const notMenuArray = Array.prototype.slice.call(notMenu);
const menuOptDeskOption = document.querySelectorAll(".menuOptDeskOption");
const menuOptDeskOptionArray = Array.prototype.slice.call(menuOptDeskOption);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 150) {
    btnMenu.style.backgroundColor = "#1a191a";
    btnMenu.style.boxShadow = "0 0 30px #1a191a77";
  } else {
    btnMenu.style.backgroundColor = "#0D0A0E";
    btnMenu.style.boxShadow = "none";
  }
});

// CONFIG PARA O TOOGLE DA VISIBILITY DO MENU MOBILE

imgMenu.addEventListener("click", () => {
  // TROCA DO ICON DO MENU

  if (imgMenu.innerText === "menu") imgMenu.innerText = "close";
  else imgMenu.innerText = "menu";

  notMenuArray.map((item) => {
    item.classList.toggle("not--menu");
  });
});

// CLOSE AFTER CLICK TO OPTIONS MENU MOBILE

window.addEventListener("resize", () => {
  if (
    window.innerWidth >= 500 &&
    notMenuArray[0].classList[1] !== "not--menu"
  ) {
    notMenuArray.map((i) => {
      i.classList.toggle("not--menu");
      imgMenu.innerText = "menu";
    });
  }
});

// CONFIG PARA CLIQUE DA OPÇAO DO MENU FECHAR ELE

menuOptDeskOptionArray.map((item) => {
  item.addEventListener("click", () => {
    notMenuArray.map((i) => {
      i.classList.toggle("not--menu");
      imgMenu.innerText = "menu";
    });
  });
});
