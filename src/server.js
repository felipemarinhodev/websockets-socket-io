import express from 'express';
import path from 'path';
import url from 'url';

const app = express();
const port = process.env.port || 8080;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(currentPath, "../..", "public");

app.use(express.static(publicDirectory))

app.listen(port, () => console.log(`Server listen on port: ${port}`));