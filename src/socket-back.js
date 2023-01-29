import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Um cliente se conectou!", socket.id);

    socket.on("texto_editor", (text) => {
        socket.broadcast.emit("texto_editor_clientes", text); // emite para todos exceto para quem foi o emissor.
    })
})