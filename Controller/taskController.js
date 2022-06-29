const DadosDeCadastro = require("../Models/dadosModel");

let message ="";
let type = "";

// Pagina Incial onde busca dadso no BD e exibe na tela.
exports.home = async (req, res) => {
  try{
    setTimeout(()=>{
      message ="";
      type = "";
    }, 1000)
    const dadosCadastradosBD = await DadosDeCadastro.find();
    return res.render('./index', {
      dadosCadastradosBD, 
      TarefaPorId: null, 
      TarefaDelete: null,
      message,
      type});
      } catch (err) {
      res.status(500).send({ error: err.message });
    };
};

// Criando o dado no BD
exports.InserindoNoBD = async (req, res) => {
  const dado = req.body; // Teremos um objeto com os campos id e tarefa

  if (!dado.tarefa) {
    message = "Insira uma tarefa no campo acima para operação ser válida!";
    type = "alerta";
    return res.redirect("/home");
  }

  try {
    await DadosDeCadastro.create(dado)
      .then((dados) => console.log('Aqui posso mandar o dado cadastrado'))
      .catch((e) => console.log(e));
      message = "Tarefa cadastrada com sucesso!"
      type = "sucesso"
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
  res.render('./index', {
    TarefaPorId, 
    dadosCadastradosBD, 
    TarefaDelete: null,
    message,
    type})
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
    message = "Tarefa atualizada com sucesso!"
    type = "sucesso"
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
    res.render('./index', {
      TarefaPorId: null, 
      dadosCadastradosBD, 
      TarefaDelete,
      message,
      type});
    } catch (err) {
      res.status(500).send({ error: err.message });
  }
};

// Deletando o arquivo após confirmação
exports.DeleteTarefa = async (req, res) => {
  try{
    await DadosDeCadastro.deleteOne({_id: req.params.id});
    message = "Tarefa apagada com sucesso!"
    type = "sucesso"
    res.redirect('/home');
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};