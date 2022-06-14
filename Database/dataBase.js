const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose.connect(
      "mongodb+srv://root:admin@todolist.hbs66.mongodb.net/Dados?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("MongoDB Atlas CONECTADO!");
    })
    .catch((e) => console.log(e));
};

module.exports = connectToDB;
