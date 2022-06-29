// Importando o Express para utilizar
require('dotenv').config();
const express = require("express");
const path = require("path");
const routes = require('./Routes/routes');// Importando as rotas
const connectToDB = require('./Database/dataBase')


const app = express();
const PORT = process.env.PORT;

connectToDB(); // Executando a função de conexão com o Banco de Dados

// Configurando a engine de renderização da página
app.set("view engine", "ejs");

// Unindo arquivos estáticos na página raiz 
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true })); // Conseguir receber um POST

// Usando as rotas criadas no arquivo do mesmo
app.use(routes);// Usando as Rotas no Servidor

// Servidor

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
});


