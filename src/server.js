import express from "express";

const port = 4000
const app = express();

const handleListening = () => console.log( `Server listening on port http://localhost:${port} 🚀`)

app.listen(port, handleListening)