const mongoose = require ('mongoose')

//objeto mulherSchema
const mulherSchema = new mongoose.Schema({
  Nome: {
    type: String,
    required: true
  },
  imagem: {
    type: String,
    required: true
  },
  MiniBio: {
    type: String,
    required: true
  },
  Citação: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("lista", mulherSchema);// utilizar model = É um objeto que  não define os valores de cada propriedade, apenas cria um formato, o modelo dos dados que o backend recebe do front-end e envia para salvar no banco de dados
