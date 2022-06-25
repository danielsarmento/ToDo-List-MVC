const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose.connect(
      process.env.DB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("MongoDB Atlas CONECTADO!");
    })
    .catch((e) => console.log(e));
};

module.exports = connectToDB;
