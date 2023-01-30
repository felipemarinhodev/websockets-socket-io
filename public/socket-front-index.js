import { insertDocumentLink, removeDocumentLink } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documents) => {
    documents.forEach(document => {
        insertDocumentLink(document.name)
    });
});

socket.on("adicionar_documento_interface", (name) => {
    insertDocumentLink(name);
})

socket.on("documento_existente", (name) => {
    alert(`O documento ${name} já existe!`);
})

export function addDocument(name) {
    socket.emit("adicionar_documento", name);
}

socket.on("excluir_documento_sucesso", (name) => {
    removeDocumentLink(name);
})
