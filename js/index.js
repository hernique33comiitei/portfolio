// CONFINGS PARA A ANIMAÇÃO DO MY NAME
const textMyName = document.querySelector(".container__textMyName");
const body = document.body;
const restName = "ENRIQUE OLIVEIRA";
let cont = 0;

function mytext() {
  let writerMyName = setInterval(() => {
    textMyName.textContent += restName[cont];
    cont += 1;

    if (cont == restName.length) {
      clearInterval(writerMyName);
    }
  }, 250);
}

// CONFIG PARA TROCAR O TAMANHO DO
// FUNDO DA MINHA LOGO NA PAGINA ININCIAL =>

const imageContainerFronEnd = document.querySelector(
  ".container__imagemFrontEnd img"
);

function reziseBackgroundImageFrontEnd() {
  document.body.style.setProperty(
    "--width-imageBackgroundFrontEnd",
    `${imageContainerFronEnd.clientWidth}px`
  );
}

window.addEventListener("resize", reziseBackgroundImageFrontEnd);

// ANIMAÇÃO DE COISAS APARECER COM SCROLL DA PAGINA

function scrollAnimates(
  nameObserver,
  arrayRemove,
  nameRemoveClass,
  sectionChecked,
  mode
  // MODE 1 == UMA UNICA CLASSE DIFERENTE PARA RETIRAR
  // MODE 2 == MAIS DE UMA CLASSE DIFERENTE PARA RETIRAR
) {
  let create = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting == true) {
      sectionChecked.parentElement.children[0].checked = true;

      if (mode === 2) {
        return arrayRemove.map((item) => {
          item.nameConst.classList.remove(item.nameClass);
        });
      }

      arrayRemove.map((item) => {
        item.classList.remove(nameRemoveClass);
      });
    }
  });

  create.observe(nameObserver);
}

// DIV HOME

const containerDivTexts = document.querySelector(
  ".container__textApresentacao"
);
const optionDeskHomeIndex = document.querySelector("#optionDeskHome");

scrollAnimates(containerDivTexts, [], "", optionDeskHomeIndex, 1, []);

// DIV HABILIDADES

const containerTextHabilitsPrincipals = document.querySelector(
  ".container__textHabilitsPrincipal"
);
const containerDivComponent = document.querySelector(
  ".container__divComponent"
);
const optionDeskHabilidadesIndex = document.querySelector(
  "#optionDeskHabilidades"
);

scrollAnimates(
  containerTextHabilitsPrincipals,
  [containerTextHabilitsPrincipals, containerDivComponent],
  "not--view",
  optionDeskHabilidadesIndex,
  1,
  []
);

// DIV PROJETOS

const containerTextProjetosPrincipal = document.querySelector(
  ".container__textProjetosPrincipal"
);
const swiper = document.querySelector(".swiper");
const arrayRemoveProjetos = [
  { nameConst: containerTextProjetosPrincipal, nameClass: "not--view" },
  { nameConst: swiper, nameClass: "not--swiper" },
];
const optionDeskProjetosIndex = document.querySelector("#optionDeskProjetos");

scrollAnimates(
  containerTextProjetosPrincipal,
  arrayRemoveProjetos,
  "",
  optionDeskProjetosIndex,
  2
);

// DIV CONTATOS

const containerTextContatosPrincipal = document.querySelector(
  ".container__textContatosPrincipal"
);
const containerDivItensContatos = document.querySelector(
  ".container__contatos"
);
const optionDeskContatosIndex = document.querySelector("#optionDeskContatos");

scrollAnimates(
  containerTextContatosPrincipal,
  [containerTextContatosPrincipal, containerDivItensContatos],
  "not--view",
  optionDeskContatosIndex,
  1
);

// CONFIGS PARA A ANIMACAO DE MEIO DE CONTATO SELECIONADO

const inputsCtts = document.querySelectorAll(".inputContatos");

const arrayInputsCtts = Array.prototype.slice.call(inputsCtts);

arrayInputsCtts.map((e) => {
  if (e.checked) {
    let item = e.labels[0];

    item.style.cssText = `
    transform: translateY(-40px);
    background: #8257e6;
    outline: 7px solid #222222;
    border-radius: 50%;
    `;
  }

  e.addEventListener("change", () => {
    arrayInputsCtts.map((e) => {
      let item = e.labels[0];

      if (e.checked) {
        item.style.cssText = `
        transform: translateY(-40px);
        background: #8257e6;
        outline: 7px solid #222222;
        border-radius: 50%;
        `;
      } else {
        item.style.cssText = `
        transform: translateY(0);
        background: transparent;
        border-radius: 50%;
        outline: 0px solid transparent;
        transition: all .3s ease;`;
      }
    });
  });
});

// CONFIGS PARA O COPY DOS CONTATOS

const nodeDivCttLink = document.querySelectorAll(".componentsContatosLink");
const arrayNodeDivCttLink = Array.prototype.slice.call(nodeDivCttLink);

arrayNodeDivCttLink.map((e) => {
  let iconCopy = e.children[1];
  let textCopy = e.children[0];

  iconCopy.addEventListener("click", () => {
    try {
      textCopy.select();
      textCopy.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(textCopy.value);
    } catch {
      document.execCommand("copy");
    }
  });
});

// MENSAGEM DE SUCESSO

const iconesCopy = document.querySelectorAll(
  ".componentsContatosLink .material-icons"
);
const arrayIconesCopy = Array.prototype.slice.call(iconesCopy);
const msgSucess = document.querySelector(".copySucessNotView");
const closeSucessCopy = document.querySelector(".closeSucessCopy");
let timeCopyProgres;
let timeoutCopySucess;
let stateRuning;
let porcentoTimeCopy;

arrayIconesCopy.map((e) => {
  e.addEventListener("click", () => {
    msgSucess.classList.remove("copySucessNotView");

    if (stateRuning === true) {
      return;
    }

    stateRuning = true;

    porcentoTimeCopy = 100;
    timeCopyProgres = setInterval(() => {
      document.documentElement.style.setProperty(
        "--porcentBarCopy",
        `${porcentoTimeCopy}%`
      );
      porcentoTimeCopy -= 4;
    }, 100);

    timeoutCopySucess = setTimeout(() => {
      stateRuning = false;
      msgSucess.classList.toggle("copySucessNotView");
      clearInterval(timeCopyProgres);
      porcentoTimeCopy = 100;
    }, 2750);
  });
});

// CLOSE MENSAGE SUCESS
closeSucessCopy.addEventListener("click", () => {
  porcentoTimeCopy = 100;
  document.documentElement.style.setProperty(
    "--porcentBarCopy",
    `${porcentoTimeCopy}%`
  );
  msgSucess.classList.add("copySucessNotView");
  clearInterval(timeCopyProgres);
  clearTimeout(timeoutCopySucess);
  stateRuning = false;
});
