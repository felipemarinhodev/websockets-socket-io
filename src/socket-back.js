import { documentsCollection } from "./dbConnect.js";
import io from "./server.js";

io.on("connection", (socket) => {
    socket.on("selecionar_documento", async (documentName, returnText) => {
        socket.join(documentName);
        const document = await findDocument(documentName);
        if (document) {
            returnText(document.text)
        }
    });

    socket.on("texto_editor", (text, documentName) => {
        const document = findDocument(documentName);
        if (document) { document.text = text }
        // socket.broadcast.emit("texto_editor_clientes", text); // emite para todos exceto para quem foi o emissor.
        socket.to(documentName).emit("texto_editor_clientes", text);
    })
})

function findDocument(name) {
    return documentsCollection.findOne({ name });
}