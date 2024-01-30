const txtCep = document.getElementById('texto-Cep');
const searchBtn = document.getElementById('button');
const resposta = document.getElementById('resposta');

const getCepData = async(txtCep1) => {

  const api = `https://cep.awesomeapi.com.br/json/${txtCep1}`;

  const res = await fetch(api)
  const data = await res.json()

  return data;

}

const pesquisar = async (txtCep1) => {

  const data = await getCepData(txtCep1);
  
  const dadosFormatados = `${data.address}, ${data.district}, ${data.city}, ${data.state}`; 

  resposta.innerHTML = dadosFormatados;

}

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const txtCep1 = txtCep.value;

  pesquisar(txtCep1);

})