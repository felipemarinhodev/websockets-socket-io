import { atualizarTextoEditor } from "./documento.js";

const socket = io();

export function selectDocument(name) {
    socket.emit("selecionar_documento", name)
}

export function emitirTextoEditor(texto) {
    socket.emit("texto_editor", texto);
}

socket.on("texto_editor_clientes", (texto) => {
    atualizarTextoEditor(texto)
})