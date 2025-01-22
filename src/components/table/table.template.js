const CODES = {
    A: 65,
    Z: 90
}

function createCell() {
    return `
    <div class="cell" contenteditable></div>
    `
}

function toColumn(col) {
    return `
        <div class="column">${col}</div>
    `
}

function createRow(cell, content) {
    return `
    <div class="row">
        <div class="row-info">${cell}</div>   
        <div class="row-data">${content}</div>   
    </div>`
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount)
        .fill('') 
        .map(toChar) 
        .map(toColumn)
        .join("")

    rows.push(createRow("", cols))
    //создание ячейки
    const cells = new Array(colsCount)
            .fill("") 
            .map(createCell) 
            .join("");

    for (let i = 0; i < rowsCount; i++) {
        const cell = i + 1
        rows.push(createRow(cell, cells));
    }
    
    return rows.join("")

    
}