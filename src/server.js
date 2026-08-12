const express = require("express");
const usuariosRoutes = require("./routes/usuarios");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    mensagem: "API de Gerenciamento de Usuários no ar",
    versao: "1.0.0",
  });
});

app.use("/usuarios", usuariosRoutes);

app.use((req, res) => {
  res.status(404).json({
    status: "erro",
    mensagem: "Rota não encontrada",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;