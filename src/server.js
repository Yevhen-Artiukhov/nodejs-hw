// src/server.js
import express from 'express';
import cors from 'cors';

const app = express();
const message = 'Hello world';

app.use(express.json());
app.use(cors()); // Дозволяє запити з будь-яких джерел

console.log(message);
