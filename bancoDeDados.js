const mongoose = require('mongoose')

//função de conexão com banco de dados
async function conectaBancodeDados() {
    try {
        console.log('Conexão com o banco de dados iniciou')
    await mongoose.connect(
      "mongodb+srv://MoniquePinheiro:Leticia2905@cluster0.gmumomq.mongodb.net/?retryWrites=true&w=majority"
    ); // informa que é para o banco de dados esperar, e foi feito uma solicitação de função connect do próprio mongoose da nuvem
    console.log('Conexão com banco de dados, feita com sucesso')
    } catch (erro) { // caso a tentativa de coexão com a nuvem falhe, será mostrado no console.log
        console.log(erro)
    }
    
}

module.exports = conectaBancodeDados; //utiliza essa variavel para exportar a função de coxenão com as demais pastas 
