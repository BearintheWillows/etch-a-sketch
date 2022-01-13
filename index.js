const container = document.querySelector('.container')
const resetBtn = document.querySelector('button')
let columns = []
let rows = []

function createGrid(customGrid) {
    
    let divRow = 0
    let gridSquare




    createDiv()
    let id = 0
    
  let idNum = 1
    let docFragRows = document.createDocumentFragment();
    
    for (let index = 0; index < (customGrid); index++) {
        docFragRows.appendChild(rows[index]) 
    
        }
    
    container.appendChild(docFragRows)

    for (let index = 0; index < customGrid; index++) {
  
        let rowDom = document.querySelector(`.row${idNum}`)
        let docFragColumns = document.createDocumentFragment();
        for (let index = 0; index < customGrid; index++) {
            docFragColumns.appendChild(columns[idNum - 1][index])
        }
        rowDom.appendChild(docFragColumns)
        idNum++
    }

    

    gridSquare = document.querySelectorAll('div.grid-square')
    hoverInit()


    function hoverInit() {
        const elements = document.querySelectorAll('.grid-square')
        
        
        elements.forEach(element => {
        element.addEventListener('mouseover', (e) => {
            element.style.background = 'blue'
            
    
            // setTimeout(() => {
            //     element.style.background = 'white'
            // }, 400)
                
        })
    })
        
    }
    
    
    function createRow(rowIndex) {
        let divColumnNum = 1
        let divColumn
        let row = []
        for (let index = 0; index < customGrid; index++) {
            
            divColumn = document.createElement('div')
            divColumn.classList.add('grid-square', `row-${rowIndex}`, `column-${divColumnNum}`)
            row.push(divColumn)
            divColumnNum++
            }
            return row
    }
    
    function createDiv() {
        let divRow 
    
        for (let index = 0; index < customGrid; index++) {
            let rowIndex = index + 1
            
            columns.push(createRow(rowIndex))
    
            divRow = document.createElement('div')
            divRow.classList.add(`row${rowIndex}`, 'row')
            rows.push(divRow)
            
            }
    }
}

createGrid(16)

function reset() {
    const elements = document.querySelectorAll('.grid-square')
    let customGrid
    elements.forEach(element => {
        element.style.background = 'white'
    })
    customGrid = prompt('Choose a grid size. 1-100')
    
    if (customGrid < 100 && customGrid > 1) {
        const removeChilds = (parent) => {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild)
        }
    }

    rows = []
    columns = []
    removeChilds(container)
    createGrid(customGrid)
    } else {
        alert('Selection out of bounds. Choose a number between 1-100')
        reset()
    }

    
}
resetBtn.addEventListener('click', reset)