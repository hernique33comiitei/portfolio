// CONFINGS PARA A ANIMAÇÃO DO MY NAME
const textMyName = document.querySelector('.container__textMyName')
const body = document.body
const restName = 'ENRIQUE OLIVEIRA'
let cont = 0

function mytext() {
    let writerMyName = setInterval(() => {
        textMyName.textContent += restName[cont]
        cont+= 1

        if(cont == restName.length) {
            clearInterval(writerMyName)
        }
    }, 250)

}

// CONSFIGS PARA A DIV HABILIDADES

const containerTextHabilitsPrincipals = document.querySelector('.container__textHabilitsPrincipal')
const containerDivComponent = document.querySelector('.container__divComponent')

const creat = new IntersectionObserver(entrie => {
    if (entrie[0].isIntersecting == true) {
        containerTextHabilitsPrincipals.classList.remove('not--view')
        containerDivComponent.classList.remove('not--view')

    } else {
        containerTextHabilitsPrincipals.classList.add('not--view')
        containerDivComponent.classList.add('not--view')
    }
}, {
    threshold: 1
})

creat.observe(containerTextHabilitsPrincipals)
creat.observe(containerDivComponent)


// CONFIGS PARA O MOSTRAR MAIS DOS PROJETOS

const containerBtnProjetos = document.querySelector('.container__btnProjetos')
const containerDivProjetosNone = document.querySelector('.container__divProjetosNone')
const containerBtnProjetosText = document.querySelector('#container__btnProjetosText')
let contForBtnMais = 0

containerBtnProjetos.addEventListener('click', () => {
    if (contForBtnMais >= 2) {
        contForBtnMais = 0
    }

    contForBtnMais += 1

    if (contForBtnMais == 1) {
        containerDivProjetosNone.classList.remove('off')
        containerBtnProjetosText.textContent = 'Menos'
    } else {
        containerDivProjetosNone.classList.add('off')
        containerBtnProjetosText.textContent = 'Mais'
    }
})