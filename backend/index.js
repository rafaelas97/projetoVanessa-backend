const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

require('./src/database/connection');

app.use(cors());
app.use(express.json()); // Permite JSON no corpo das requisições
app.use(express.static(path.join(__dirname, "../frontend/src")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/src/index.html"));
});

app.get("/parques", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/src/parques.html"));
});

app.get("/reserva", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/src/reserva.html"));
});

app.get("/feedback", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/src/feedback.html"));
});

// ROTA POST para receber reservas
app.post("/reserva", (req, res) => {
  const { nome, parque, data } = req.body;
  console.log("Reserva recebida:", { nome, parque, data });

  res.status(200).json({ mensagem: "Reserva recebida com sucesso!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
app.post("/feedback", (req, res) => {
  const { nome, email, mensagem } = req.body;
  console.log("Feedback recebido:", { nome, email, mensagem });

  res.status(200).json({ mensagem: "Feedback recebido com sucesso!" });
});
