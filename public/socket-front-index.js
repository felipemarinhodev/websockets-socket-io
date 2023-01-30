import { insertDocumentLink } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documents) => {
    console.log(documents);
    documents.forEach(document => {
        insertDocumentLink(document.name)
    });
});

socket.on("adicionar_documento_interface", (name) => {
    insertDocumentLink(name);
})

export function addDocument(name) {
    socket.emit("adicionar_documento", name);
}