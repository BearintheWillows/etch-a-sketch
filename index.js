const container = document.querySelector('.container')
console.log(container)
const gridSquare = document.createElement('div')



function createGrid() {
    gridSquare.classList.add('grid-square')
   
    for (let index = 0; index < 16; index++) {
    container.appendChild(gridSquare)
    console.log('appended')
        }

        console.log(document.querySelectorAll('.grid-square'))
}

createGrid()
