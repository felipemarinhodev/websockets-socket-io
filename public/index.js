import './socket-front-index.js'

const documentsList = document.getElementById("lista-documentos");

export function insertDocumentLink(documentName) {
    documentsList.innerHTML += `
        <a href="documento.html?nome=${documentName}" class="list-group-item list-group-item-action">
            ${documentName}
        </a>
    `
}
