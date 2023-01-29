import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Um cliente se conectou!", socket.id);

    socket.on("texto_editor", (text) => {
        console.log(text);
    })
})