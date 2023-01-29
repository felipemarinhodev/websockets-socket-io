import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Um cliente se conectou!", socket.id);

    socket.on("selecionar_documento", (documentName) => {
        socket.join(documentName);
    });

    socket.on("texto_editor", (text, documentName) => {
        // socket.broadcast.emit("texto_editor_clientes", text); // emite para todos exceto para quem foi o emissor.

        socket.to(documentName).emit("texto_editor_clientes", text);
    })
})