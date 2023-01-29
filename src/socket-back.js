import io from "./server.js";

const documents = [
    {
        name: "JavaScript",
        text: "texto de javascript..."
    },
    {
        name: "Node",
        text: "texto de node..."
    },
    {
        name: "Socket.io",
        text: "texto de socket.io..."
    }
]

io.on("connection", (socket) => {
    console.log("Um cliente se conectou!", socket.id);

    socket.on("selecionar_documento", (documentName, returnText) => {
        socket.join(documentName);
        const document = findDocument(documentName);
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
    return documents.find(doc => doc.name === name)
}