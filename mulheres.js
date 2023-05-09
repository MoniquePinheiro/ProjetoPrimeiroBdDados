const express = require("express"); /* require é função do nodejs para importar outros frameworks e outras bibliotecas, essa função recebe a função require e entre parenteses importando o framework express*/
const router = express.Router()/* recebe const express, e quando tem ponto esta chamando a função router do framework express*/
/*const express = require("express") recebe em memória tudo o que tem no framework Express (tudo quer dizer: todas as funções e variáveis do Express)*/

const conectaBancodeDados = require('./bancoDeDados')//solicitação de linkar ao arquivo banco de dados
conectaBancodeDados();//chamando a função que conexta o banco de dados

const Mulher = require('./ModeloMulher')
const app = express();//chamando a função express
app.use(express.json());
const porta = 3333;


// função com verbos atrelados a requisição HTTP precisam de request e response. ex get, post, patch e outros.
//função get
async function mostraMulheres(request, response) {
    try {
        const mulheresDoBancodeDados = await Mulher.find()
        response.json(mulheresDoBancodeDados)
    } catch (erro) {
        console.log
    }
}

//função POST/CRIA, para postar novo item da lista, toda vez que usar rota, tem que usar request e response
 async function criaNovaMulher(request, response) {
    const novaMulher = new Mulher({
      Nome: request.body.Nome,
      imagem: request.body.imagem,
      miniBio: request.body.miniBio,
      Citação: request.body.Citação,
    });
     try {
        const mulherCriada = await novaMulher.save() 
        response.status(201).json(mulherCriada) 
     } catch (erro) {
        console.log(erro);
     }
}

//função PATCH 
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)
 
        if (request.body.Nome) {
          mulherEncontrada.Nome = request.body.Nome;
        }

        if (request.body.MiniBio) {
          mulherEncontrada.MiniBio = request.body.MiniBio;
        }
        if (request.body.imagem) {
          mulherEncontrada.imagem = request.body.imagem;
        }
        if (request.body.Citação) {
          mulherEncontrada.Citação = request.body.Citação;
        }
        const listaAtualizadadeMulher = await mulherEncontrada.save()

        response.json(listaAtualizadadeMulher);
    } catch (erro) {
        console.log(erro)
    }
}

//Delete
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({ mensagem: 'Mulher deletada com sucesso.'})
    } catch (erro) {
        console.log(erro)
    }
}


// configurando o app para fazer uso da rota get /mulheres e ouvindo a porta servidor
app.use(router.get('/mulheres', mostraMulheres))//configurei GET / mulheres lista
app.use(router.post('/mulheres', criaNovaMulher))//configurei post (postando ou adicionando) nova mulher na lista
app.use(router.patch('/mulheres/:id', corrigeMulher))//configurei patch (procurar) id
app.use(router.delete('/mulheres/:id', deletaMulher ))//configurei delete para excluir mulher da lista

//função porta
function mostraPorta() {
  console.log("Servirdor criado e rodando na porta", porta);
}

app.listen(porta, mostraPorta);



