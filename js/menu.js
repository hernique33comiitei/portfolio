// CRIAR BORDAL DO MENU

const container = document.querySelector('.container')
const btnMenu = document.querySelector('.menu')
const bordal = document.createElement('div')
const imgMenu = document.querySelector('.menu__image')
let contBordalMenu = 0
bordal.classList.add('bordal')

function mostrarBordal() {

    if (contBordalMenu >= 2) {
        contBordalMenu = 0
    }
    contBordalMenu += 1

    criarBordalMenu()

}

let elements = criarElementosBordal()
function criarBordalMenu() {
    if (contBordalMenu == 1) {     

        // ADICIONAR ITENS AQUI
        
        for (let n = 0; n < elements.length; n += 1) {
            bordal.appendChild(elements[n])
        }

        container.style.filter = 'blur(5px)'
        body.style.overflow = 'hidden'
        imgMenu.src = '../icons/sair-menu.png'

        body.appendChild(bordal) 
    } else {
        while (elements.length) {
            elements.pop()
            console.log(elements)
        }
        bordal.remove()
        imgMenu.src = '../icons/menu.png'
        body.style.overflow = 'auto'
        container.style.filter = 'blur(0px)'
    }
}

function criarElementosBordal() {

    let totalElements = []

    // criar section home
    const homeElement = document.createElement('a')
    homeElement.textContent = 'HOME'
    homeElement.href = '#section--home'

    // criar section habilidades
    const habilidadesElement = document.createElement('a')
    habilidadesElement.textContent = 'HABILIDADES'
    habilidadesElement.href = '#section--habilidades'

    // criar section projetos
    const projetosElement = document.createElement('a')
    projetosElement.textContent = 'PROJETOS'
    projetosElement.href = '#section--projetos'

    // criar section contatos
    const contatosElement = document.createElement('a')
    contatosElement.textContent = 'CONTATOS'
    contatosElement.href = '#section--contatos'

    totalElements.push(homeElement, habilidadesElement, projetosElement, contatosElement)

    return totalElements
}

btnMenu.addEventListener('click', mostrarBordal)