import { addDocument } from './socket-front-index.js';

const documentsList = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const documentsInput = document.getElementById("input-documento");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addDocument(documentsInput.value);
    documentsInput.value = "";
})

export function insertDocumentLink(documentName) {
    documentsList.innerHTML += `
        <a
            href="documento.html?nome=${documentName}"
            class="list-group-item list-group-item-action"
            id="document-${documentName}"
        >
            ${documentName}
        </a>
    `;
}

export function removeDocumentLink(name) {
    const element = document.getElementById(`document-${name}`);
    documentsList.removeChild(element)
}
