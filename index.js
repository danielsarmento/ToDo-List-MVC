// Importando o Express para utilizar
const express = require("express");
const path = require("path");
const routes = require('./Routes/routes');// Importando as rotas
const connectToDB = require('./Database/dataBase')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

connectToDB(); // Executando a função de conexão com o Banco de Dados

app.use(express.urlencoded({ extended: true })); // Conseguir receber um POST

// Usando as rotas criadas no arquivo do mesmo
app.use(routes);// Usando as Rotas no Servidor

// Unindo arquivos estáticos na página raiz 
app.use(express.static(path.join(__dirname, "public")));

// Configurando a engine de renderização da página
app.set("view engine", "ejs");

// Servidor na Porta 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
});


