import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

// CARROSEL

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  createElements: true,
});

// ATUALIZAÇÃO DO CONTADOR PARA MUDAR OS DADOS DA API GIT HUB

let contador = 0;

// REQUEST

fetch("https://api.github.com/users/hernique33comiitei/repos")
  .then((request) => request.json())
  .then((requestJson) => {
    requestJson
      .map((item) => {
        fetch(
          `https://api.github.com/repos/${requestJson[contador].full_name}/languages`
        )
          .then((requestLanguagens) => requestLanguagens.json())
          .then((requestLanguagensComplete) => {
            // ADD ITENS IN DOM
            const swiperDivPai = document.querySelector(".swiper-wrapper"); // SELECT DIV DAD SLIDE

            const swiperCreateDivFilho = document.createElement("div");
            swiperCreateDivFilho.classList.add("swiper-slide"); // ADD CLASS SLIDE

            const swiperNameFilho = document.createElement("p"); // CREAT PARAGRAPH TO NAME PROJECT
            swiperNameFilho.textContent = item.name;
            swiperNameFilho.classList.add("nameProject");

            // ADD LENGUAGENS FOR PROJECTS

            const requestLanguagensCompleteArray = Object.keys(
              requestLanguagensComplete
            );

            const divLanguagens = document.createElement("div");
            divLanguagens.classList.add("divLanguagens");

            requestLanguagensCompleteArray.map((keyItens) => {
              let itenLangugem = document.createElement("p");
              itenLangugem.textContent = keyItens;
              divLanguagens.appendChild(itenLangugem);
            });

            // CREATE LINKS FOR PROJECTS

            const divLinksProjects = document.createElement("div");
            divLinksProjects.classList.add("divLinksProjects");

            // GIT HUB
            const divLinkProjectsGitHub = document.createElement("div");
            const linkProjectsGitHub = document.createElement("a");
            linkProjectsGitHub.classList.add("linkProjectsGitHub");
            linkProjectsGitHub.textContent = "Git Hub";
            linkProjectsGitHub.setAttribute("href", item.html_url);
            linkProjectsGitHub.setAttribute("target", "_blank");

            // HOMEPAGE

            if (item.homepage) {
              const divLinkProjectsHomepage = document.createElement("div");
              const linkProjectsHomepage = document.createElement("a");
              linkProjectsHomepage.classList.add("linkProjectsHomepage");
              linkProjectsHomepage.textContent = "Deploy";
              linkProjectsHomepage.setAttribute("href", item.homepage);
              linkProjectsHomepage.setAttribute("target", "_blank");

              divLinkProjectsHomepage.appendChild(linkProjectsHomepage);
              divLinksProjects.appendChild(divLinkProjectsHomepage);
            }

            // ADD LINK IN YOURS CHILDERS

            // GIT HUB

            divLinkProjectsGitHub.appendChild(linkProjectsGitHub);
            divLinksProjects.appendChild(divLinkProjectsGitHub);

            // ADD ITENS IN YOURS DAD
            swiperCreateDivFilho.appendChild(swiperNameFilho);
            swiperCreateDivFilho.appendChild(divLanguagens);
            swiperCreateDivFilho.appendChild(divLinksProjects);
            swiperDivPai.appendChild(swiperCreateDivFilho);

            swiper.update();
          });

        contador += 1;
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
