const express = require('express');
const router = express.Router();
const app = express();
const porta = 3333;

app.use(express.json)

function mostraHora(request, response) {
  const data = new Date()
    
  const hora = data.toLocaleTimeString("pt-BR")

  response.send(hora)
};

function mostraPorta() {
    console.log("Servirdor criado e rodando na porta", porta)
};

app.listen(porta, mostraPorta)
app.use(router.get('/hora', mostraHora));
