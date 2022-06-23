const mongoose = require('mongoose');

// Limitando o estilo do dado.
const EstruturaDados = new mongoose.Schema({
    tarefa: {type: String, required: true},
});

//Criando a coleção dentro do BD
const DadosDeCadastro = mongoose.model('DadosCapturados', EstruturaDados);

// Exportando a Coleção para ser acessada e criado o dado
module.exports = DadosDeCadastro;