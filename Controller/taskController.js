const DadosDeCadastro = require("../Models/dadosModel");

exports.home = async (req, res) => {
  try{
    const dadosCadastradosBD = await DadosDeCadastro.find();
    console.log(
      `O usuário acessou a rota '/home' e foi renderizada a página inicial: index.ejs`, {dadosCadastradosBD}
    );
    return res.render('index', {dadosCadastradosBD});
    } catch (err) {
      res.status(500).send({ error: err.message });
    };
};

// Criando o dado no BD
exports.InserindoNoBD = async (req, res) => {
  const dado = req.body; // Teremos um objeto com os campos email e fone

  if (!dado.email || !dado.telefone) {
    return res.redirect("/home");
  }

  try {
    await DadosDeCadastro.create(dado)
      .then((dados) => console.log(dados))
      .catch((e) => console.log(e));
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
  res.send("Dado Cadastrado com sucesso!");
};
