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

// CONSFIGS PARA EFEITO DE SCROLL

// DIV HABILIDADES
const containerTextHabilitsPrincipals = document.querySelector(
  ".container__textHabilitsPrincipal"
);
const containerDivComponent = document.querySelector(
  ".container__divComponent"
);

const creat = new IntersectionObserver(
  (entrie) => {
    if (entrie[0].isIntersecting == true) {
      containerTextHabilitsPrincipals.classList.remove("not--view");
      containerDivComponent.classList.remove("not--view");
    }
  },
  {
    threshold: 0.5,
  }
);

creat.observe(containerDivComponent);

// DIV PROJETOS
const containerTextProjetosPrincipal = document.querySelector(
  ".container__textProjetosPrincipal"
);

const creatProjetos = new IntersectionObserver(
  (entrie) => {
    if (entrie[0].isIntersecting == true) {
      containerTextProjetosPrincipal.classList.remove("not--view");
    }
  },
  {
    threshold: 1,
  }
);

creatProjetos.observe(containerTextProjetosPrincipal);

// DIV CONTATOS

const containerTextContatosPrincipal = document.querySelector(
  ".container__textContatosPrincipal"
);
const containerDivItensContatos = document.querySelector(
  ".container__contatos"
);

const creatContatos = new IntersectionObserver(
  (entrie) => {
    if (entrie[0].isIntersecting == true) {
      containerTextContatosPrincipal.classList.remove("not--view");
      containerDivItensContatos.classList.remove("not--view");
    }
  },
  {
    threshold: 0.5,
  }
);

creatContatos.observe(containerTextContatosPrincipal);

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
  ".componentsContatosLink .material-symbols-outlined"
);
const arrayIconesCopy = Array.prototype.slice.call(iconesCopy);
const msgSucess = document.querySelector(".copySucessNotView");

arrayIconesCopy.map((e) => {
  e.addEventListener("click", () => {
    msgSucess.classList.toggle("copySucessNotView");
    setTimeout(() => {
      msgSucess.classList.toggle("copySucessNotView");
    }, 3000);
  });
});
