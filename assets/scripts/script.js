alert('Senha registrada com sucesso!');

const responseOnRoute = window.location.href.split('=');
const formattedResponse = []

for(let res of responseOnRoute) {
  res = res.split('&')[0];
  res = res.replace(/\+/g, ' ');
  formattedResponse.push(res);
}

formattedResponse.splice(0, 1) // remove trash from array (http)

const data = {
  nome: formattedResponse[0],
  idade: formattedResponse[1],
  cpf: formattedResponse[2],
  convenio: formattedResponse[3],
  nconvenio: formattedResponse[4],
  ocorrido: formattedResponse[5],
  descricao: formattedResponse[6],
}

const elements = {
  nome: document.querySelector('#nome'),
  nconvenio: document.querySelector('#nconvenio'),
  senha: document.querySelector('#ssenha'),
  classificacao: document.querySelector('#classificacao'),
  previsao: document.querySelector('#previsao')
}

elements.nome.innerHTML = data.nome;
elements.senha.innerHTML = randomNumber();

let time = randomNumber();
elements.previsao.innerHTML = `${time} minutos`;

setInterval(() => {
  if(time <= 0 || time == 'Em breve...') {
    time = 'Em breve...'
    elements.previsao.innerHTML = time;
  } else {
    time -= 1;
    elements.previsao.innerHTML = `${time} minutos`;
  }
}, 1000);

elements.classificacao.innerHTML = 'Pouca Urgência';
elements.nconvenio.innerHTML = data.nconvenio;

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}