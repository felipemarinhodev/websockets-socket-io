import express from 'express';
import path from 'path';
import url from 'url';
import http from 'http';
import { Server } from 'socket.io';

import './dbConnect.js';

const app = express();
const port = process.env.port || 8080;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(currentPath, "../..", "public");

app.use(express.static(publicDirectory));

const httpServer = http.createServer(app);

httpServer.listen(port, () => console.log(`Server listen on port: ${port}`));

const io = new Server(httpServer);

export default io;