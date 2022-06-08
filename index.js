// Importando o Express para utilizar
const express = require("express");
const app = express();
const path = require("path");

const routes = require('./Routes/routes');// Importando as rotas

const port = 3000;

// Usando as rotas criadas no arquivo do mesmo
app.use(routes);// Usando as Rotas no Servidor

// Unindo arquivos estáticos na página raiz 
app.use(express.static(path.join(__dirname, "public")));

// Configurando a engine de renderização da página
app.set("view engine", "ejs");

// Servidor na Porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/home`)
});
