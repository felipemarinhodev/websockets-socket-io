import { insertDocumentLink } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documents) => {
    console.log(documents);
    documents.forEach(document => {
        insertDocumentLink(document.name)
    });
});