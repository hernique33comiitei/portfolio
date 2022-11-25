const loadingDiv = document.querySelector('.loading')
const containerDiv = document.querySelector('.container')
const menuDiv = document.querySelector('.menu')


function loading() {
    loadingDiv.style.display = 'none'
    containerDiv.style.display = 'grid'
    menuDiv.style.display = 'flex'
}