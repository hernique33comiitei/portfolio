const container = document.querySelector(".container");
const btnMenu = document.querySelector(".menu");
const imgMenu = document.querySelector(".menu__image");
const menuOptMobile = document.querySelector(".menuOptMobile");
const notMenu = document.querySelectorAll(".not--menu");
const notMenuArray = Array.prototype.slice.call(notMenu);
const menuOptDeskOption = document.querySelectorAll(".menuOptDeskOption");
const menuOptDeskOptionArray = Array.prototype.slice.call(menuOptDeskOption);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 120) {
    btnMenu.style.cssText += `
      background: rgba( 34, 30, 34, 0.4 );
      box-shadow: 5px 0 32px 0 rgba( 34, 30, 34, .3 );
      -webkit-backdrop-filter: blur( 13px );`;
  } else {
    btnMenu.style.cssText += `
      background: #0d0a0e;
      box-shadow: 0 0 0 0 transparent;
      -webkit-backdrop-filter: blur( 0 );`;
  }
});

// CONFIG PARA O TOOGLE DA VISIBILITY DO MENU MOBILE

imgMenu.addEventListener("click", () => {
  // TROCA DO ICON DO MENU

  if (imgMenu.innerText === "menu") imgMenu.innerText = "close";
  else imgMenu.innerText = "menu";

  console.log(notMenu);

  notMenuArray.map((item) => {
    item.classList.toggle("not--menu");
  });
});

// ATUALIZAR O O WIDTH DO MENU {POIS POSITION FIXED DENTRO DE UM GRID BUGA}

function widthMenuGeneral() {
  let containerWidth = container.clientWidth;
  document.body.style.setProperty("--width-menu", `${containerWidth}px`);
}

// CLOSE AFTER CLICK TO OPTIONS MENU MOBILE

window.addEventListener("resize", () => {
  widthMenuGeneral();
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

// REDIRECT SECTION MENU DESK

const optionDeskHome = document.querySelector("#optionDeskHome");
const optionDeskHabilidades = document.querySelector("#optionDeskHabilidades");
const optionDeskProjetos = document.querySelector("#optionDeskProjetos");
const optionDeskContatos = document.querySelector("#optionDeskContatos");

function redirect(itemDom, to) {
  itemDom.addEventListener("click", () => {
    window.location.href = to;
  });
}

redirect(optionDeskHome, "#section--home");
redirect(optionDeskHabilidades, "#section--habilidades");
redirect(optionDeskProjetos, "#section--projetos");
redirect(optionDeskContatos, "#section--contatos");
