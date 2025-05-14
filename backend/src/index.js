const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "C:\Users\rafae\OneDrive\Documentos\Projetobackend\frontend\src\index.html"));
});

app.get("/parques", (req, res) => {
  res.sendFile(path.join(__dirname, "C:\Users\rafae\OneDrive\Documentos\Projetobackend\frontend\src\parques.html"));
});

app.get("/reserva", (req, res) => {
  res.sendFile(path.join(__dirname, "C:\Users\rafae\OneDrive\Documentos\Projetobackend\frontend\src\reserva.html"));
});

app.get("/feedback", (req, res) => {
  res.sendFile(path.join(__dirname, "C:\Users\rafae\OneDrive\Documentos\Projetobackend\frontend\src\feedback.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${3000}`);
});
