const express = require('express')/*primeiro faz uma variavel função solicitando o framework*/

const app = express()
const porta = 3333

function mostraPorta() {
    console.log('Servirdor criado e rodando na porta', porta)
}

app.listen(porta, mostraPorta)
