const DadosDeCadastro = require("../Models/dadosModel");

// Pagina Incial onde busca dadso no BD e exibe na tela.
exports.home = async (req, res) => {
  try{
    const dadosCadastradosBD = await DadosDeCadastro.find();
    return res.render('index', {dadosCadastradosBD, TarefaPorId: null, TarefaDelete: null});
    } catch (err) {
      res.status(500).send({ error: err.message });
    };
};

// Criando o dado no BD
exports.InserindoNoBD = async (req, res) => {
  const dado = req.body; // Teremos um objeto com os campos id e tarefa

  if (!dado.tarefa) {
    return res.redirect("/home");
  }

  try {
    await DadosDeCadastro.create(dado)
      .then((dados) => console.log('Aqui posso mandar o dado cadastrado'))
      .catch((e) => console.log(e));
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
  console.log("Dado Cadastrado com sucesso!");
  res.redirect("/home");
};

//Pegando o Id do item que será editado
exports.GetById = async (req, res) => {
try{
  const TarefaPorId = await DadosDeCadastro.findOne({_id: req.params.id});
  const dadosCadastradosBD = await DadosDeCadastro.find();
  res.render('index', {TarefaPorId, dadosCadastradosBD, TarefaDelete: null})
}
catch (err) {
  res.status(500).send({ error: err.message });
}
};

// Editando item que foi pego com Id no BD
exports.EditarDados = async (req, res) => {
  try{
    const NovoDadoEditado = req.body;
    await DadosDeCadastro.updateOne({_id: req.params.id}, NovoDadoEditado);
      res.redirect('/home');
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// Confirmação de remoção dos dados
exports.ConfirmDeleteTarefa = async (req, res) => {
  try{
    const TarefaDelete = await DadosDeCadastro.findOne({_id: req.params.id});
    const dadosCadastradosBD = await DadosDeCadastro.find();
    res.render('index', {TarefaPorId: null, dadosCadastradosBD, TarefaDelete});
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// Deletando o arquivo após confirmação
exports.DeleteTarefa = async (req, res) => {
  try{
    await DadosDeCadastro.deleteOne({_id: req.params.id});
    res.redirect('/home');
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};