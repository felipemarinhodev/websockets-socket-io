import { findDocument, updateDocument } from "./documentsDB.js";
import io from "./server.js";

io.on("connection", (socket) => {
    socket.on("selecionar_documento", async (documentName, returnText) => {
        socket.join(documentName);
        const document = await findDocument(documentName);
        if (document) {
            returnText(document.text)
        }
    });

    socket.on("texto_editor", async (text, documentName) => {
        const update = await updateDocument(documentName, text);
        if (update.modifiedCount) {
            socket.to(documentName).emit("texto_editor_clientes", text);
        }
    })
})
