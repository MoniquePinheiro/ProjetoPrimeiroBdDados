const express = require("express");
const router = express.Router() /*Sempre que tiver variável e um ponto, significa que está sendo chamada uma função que está em memória, função entre parenteses sem informação. Tudo que tiver letra maiucula é uma classe ex Router, significa que tudo que seja sobre rotas(Express suporta os seguintes métodos de roteamento que correspondem aos métodos HTTP: get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, e connect.)*/

const app = express();
const porta = 3333;

function mostraOla(request, response) {
  response.send("Olá, mundo");
}

function mostraPorta() {
  console.log("Servirdor criado e rodando na porta", porta);
}

app.use(router.get('/ola', mostraOla)) /*router com letra minúscula, é uma função */
app.listen(porta, mostraPorta);
