import { emitirTextoEditor, selectDocument, removeDocument } from "./socket-front-document.js";

const params = new URLSearchParams(window.location.search)
const documentName = params.get("nome");

const textoEditor = document.getElementById("editor-texto");
const documentTitle = document.getElementById("titulo-documento");
const removeButton = document.getElementById("excluir-documento");

documentTitle.textContent = documentName || 'Documento sem título';

selectDocument(documentName);

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor(textoEditor.value, documentName)
})

export function atualizarTextoEditor(texto) {
    textoEditor.value = texto;
}

removeButton.addEventListener("click", () => {
    removeDocument(documentName)
})
