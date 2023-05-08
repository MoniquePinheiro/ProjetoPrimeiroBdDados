const express = require("express"); /* require é função do nodejs para importar outros frameworks e outras bibliotecas, essa função recebe a função require e entre parenteses importando o framework express*/
const router = express.Router()/* recebe const express, e quando tem ponto esta chamando a função router do framework express*/
/*const express = require("express") recebe em memória tudo o que tem no framework Express (tudo quer dizer: todas as funções e variáveis do Express)*/

const app = express();
const porta = 3333;
const mulheres = [
    {
        Nome: 'Monique de Jesus Pinheiro',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQHhpvqeMb4rYg/profile-displayphoto-shrink_200_200/0/1667234128737?e=1687392000&v=beta&t=LXWVy11Kj8nMphfRpu9Q9sH88FFFekjJojg-nX6ZGug',
        MiniBio: 'Estudante desenvolvedora'
    },
    {
        Nome: 'Raquel de Jesus Pinheiro',
        imagem: 'https://media.licdn.com/dms/image/C4E03AQGA9GLDAf-zZg/profile-displayphoto-shrink_100_100/0/1617987150840?e=1687392000&v=beta&t=yMU1ZHmHctZg7BEfm0STWrkMrT5G0SbHEoN11obxNcU',
        MinioBio:'Arquiteta de Software | Desenvolvedora Backend Sênior | .NET | Nodejs',
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
  console.log("Servirdor criado e rodando na porta", porta);
}

app.listen(porta, mostraPorta);
