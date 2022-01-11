const container = document.querySelector('.container')
let gridSquare
let divs = []
let divRow = 65
function createRow() {
    
    let divColumn = 0
    let div
    for (let index = 0; index < 17; index++) {
        div = document.createElement(`div`)
        div.classList.add('grid-square', `row-${String.fromCharCode(divRow)}`, `column-${divColumn}`)
        divs.push(div)
        divColumn++
    }
}

function createDiv() {
    for (let index = 0; index < 17; index++) {
        createRow()
        divRow++
        }
}



function createGrid() {
    createDiv()
    let id = 0
    let docFrag = document.createDocumentFragment();
    for (let index = 0; index < 256; index++) {
    divs[index].setAttribute('id', `square${id}`)
    docFrag.appendChild(divs[index])
    id++
        }
        container.appendChild(docFrag)
        gridSquare = document.querySelectorAll('div.grid-square')
}

createGrid()

const elements = document.querySelectorAll('.grid-square')

elements.forEach(element => {
    element.addEventListener('mouseover', (e) => {
        console.log('someone hit', element)
        element.style.background = 'blue'

        setTimeout(() => {
            element.style.background = 'white'
        }, 400)
            
    })
})