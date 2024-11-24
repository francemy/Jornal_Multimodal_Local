const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar os caminhos dos arquivos estáticos
const publicDir = path.join(__dirname, '.'); // Diretório raiz do projeto
app.use(express.static(publicDir));

// Servir o arquivo index.html na rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Subir o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
