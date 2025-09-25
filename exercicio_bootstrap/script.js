const divAlerta = document.getElementById('enviadoComSucesso')

const adicionarAlerta = (message, type) => {
  const alerta = document.createElement('div')
  alerta.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      <div>${message}</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `
  divAlerta.innerHTML = ""
  divAlerta.append(alerta)
}

(() => {
  'use strict'
  const form = document.getElementById('form')

  form.addEventListener('submit', event => {
    event.preventDefault()
    event.stopPropagation()

    if (form.checkValidity()) {
      adicionarAlerta('Formulário enviado com sucesso!', 'success')
      form.reset()
      form.classList.remove('was-validated')
    } else {
      form.classList.add('was-validated')
    }
  }, false)
})()
