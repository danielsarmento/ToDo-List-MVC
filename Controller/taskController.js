exports.home = (req, res) => {
    res.render('index');
    console.log('O usuário acessou a rota /home e foi renderizada a página index');
};