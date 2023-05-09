const express = require("express");// usando no requerindo o express
const router = express.Router()// usando const expresse + função configuração de rota

const app = express();// estou fazendo uma const para usar o app express
const porta = 3333;

//criação da lista inicial sobre mulher
function mostraMulher(request, response) {
    response.json({
      Nome: "Monique de Jesus Pinheiro",
      imagem: "https://media.licdn.com/dms/image/D4D03AQHhpvqeMb4rYg/profile-displayphoto-shrink_200_200/0/1667234128737?e=1687392000&v=beta&t=LXWVy11Kj8nMphfRpu9Q9sH88FFFekjJojg-nX6ZGug",
      MiniBio: 'Estudante de desenvolvimento Web',
    });
}

function mostraPorta() {
  console.log("Servirdor criado e rodando na porta", porta);
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta);
