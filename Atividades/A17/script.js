const masks = {
  cpf(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  },
  tel(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  },
  cep(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  }
}


document.querySelectorAll('input').forEach(($input) => {
  const field = $input.dataset.js

  $input.addEventListener('input', (e) => {
    e.target.value = masks[field](e.target.value)
  }, false)
})

/* validação */

const button = document.getElementById('enviar')

button.addEventListener('click', (event) => {
  event.preventDefault()

  const nome = document.getElementById('nome')
  const cpf = document.getElementById('cpf')
  const tel = document.getElementById('tel')
  const endereço = document.getElementById('endereço')
  const cep = document.getElementById('cep')

  /* verificar se está vazio */
  if (nome.value == '') {
    nome.classList.add("errorInput")
  }
  else {
    nome.classList.remove("errorInput")
  }

  if (cpf.value == '') {
    cpf.classList.add("errorInput")
  }
  else {
    cpf.classList.remove("errorInput")
  }

  if (tel.value == '') {
    tel.classList.add("errorInput")
  }
  else {
    tel.classList.remove("errorInput")
  }

  if (endereço.value == '') {
    endereço.classList.add("errorInput")
  }
  else {
    endereço.classList.remove("errorInput")
  }

  if (cep.value == '') {
    cep.classList.add("errorInput")
  }
  else {
    cep.classList.remove("errorInput")
  }


  /* verificar se valores são válidos */

  if (cpf.value.length <= 13) {
    cpf.classList.add("errorInput")
  } else {
    cpf.classList.remove("errorInput")
  }

  if ((tel.value.length <= 13)) {
    tel.classList.add("errorInput")
  }
  else {
    tel.classList.remove("errorInput")
  }

  if (cep.value.length <= 8) {
    cep.classList.add("errorInput")
  }
  else {
    cep.classList.remove("errorInput")
  }
});