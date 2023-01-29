import { emitirTextoEditor } from "./socket-front-document.js";

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor(textoEditor.value)
})

export function atualizarTextoEditor(texto) {
    textoEditor.value = texto;
}
