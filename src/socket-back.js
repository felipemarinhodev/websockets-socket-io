import { addDocument, findDocument, getDocuments, updateDocument } from "./documentsDB.js";
import io from "./server.js";

io.on("connection", (socket) => {

    socket.on("obter_documentos", async (giveBackDocuments) => {
        const documents = await getDocuments();
        console.log('socket-back', documents);
        giveBackDocuments(documents);
    })

    socket.on("selecionar_documento", async (documentName, returnText) => {
        socket.join(documentName);
        const document = await findDocument(documentName);
        if (document) {
            returnText(document.text)
        }
    });

    socket.on("adicionar_documento", async (name) => {
        const documentExist = (await findDocument(name)) !== null;

        if (documentExist) {
            socket.emit("documento_existente", name);
        } else {
            const result = await addDocument(name);
            if (result.acknowledged) {
                io.emit("adicionar_documento_interface", name);
            }
        }
    })

    socket.on("texto_editor", async (text, documentName) => {
        const update = await updateDocument(documentName, text);
        if (update.modifiedCount) {
            socket.to(documentName).emit("texto_editor_clientes", text);
        }
    })
})
