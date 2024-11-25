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
// Middleware para lidar com 404 - Página não encontrada
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html')); // Página de erro 404
});

// Subir o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
