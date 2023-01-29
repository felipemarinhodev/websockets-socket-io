import { atualizarTextoEditor } from "./documento.js";

const socket = io();

export function selectDocument(name) {
    socket.emit("selecionar_documento", name)
}

export function emitirTextoEditor(text, documentName) {
    socket.emit("texto_editor", text, documentName);
}

socket.on("texto_editor_clientes", (text) => {
    atualizarTextoEditor(text)
})