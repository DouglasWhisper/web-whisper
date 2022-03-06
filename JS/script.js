var formjs = document.querySelector('#form-js')
formjs.addEventListener('submit', function (e) {
  e.preventDefault()

  var formfirstname = document.getElementById('form-firstname').value
  var formlastname = document.getElementById('form-lastname').value
  var formemail = document.getElementById('form-email').value
  var formmassage = document.getElementById('form-massage').value

  localStorage.setItem('form-firstname', formfirstname)
  localStorage.setItem('form-lastname', formlastname)
  localStorage.setItem('form-email', formemail)
  localStorage.setItem('form-massage', formmassage)

  alert(`
      Nome salvo com sucesso: ${formfirstname} \n
      Sobrenome salvo com sucesso: ${formlastname} \n
      Email salvo com sucesso: ${formemail} \n
      Mensagem enviada com sucesso: ${formmassage} \n
      `)

  // limpar os campos do form
  var formfirstname = document.getElementById('form-firstname')
  var formlastname = document.getElementById('form-lastname')
  var formemail = document.getElementById('form-email')
  var formmassage = document.getElementById('form-massage')

  formfirstname.value = ''
  formlastname.value = ''
  formemail.value = ''
  formmassage.value = ''
  console.log()
  // final da limpeza
})
