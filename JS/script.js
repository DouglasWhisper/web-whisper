$('#form-js').on('submit', function (e) {
  e.preventDefault()

  //console.log('test')

  var form_firstname = $('#form-firstname').val()
  var form_lastname = $('#form-lastname').val()
  var form_email = $('#form-email').val()
  var form_massage = $('#form-massage').val()

  //console.log(form_firstname, form_lastname, form_email, form_massage)
  $.get({
    url: 'http://localhost/inserir.php',
    method: 'POST',
    data: {
      firstname: form_firstname,
      lastname: form_lastname,
      email: form_email,
      massage: form_massage
    },
    dataType: 'json',
    success: function (result) {
      var form_firstname = $('#form-firstname').val('')
      var form_lastname = $('#form-lastname').val('')
      var form_email = $('#form-email').val('')
      var form_massage = $('#form-massage').val('')
      console.log(result)
    }
  })
})


// explicações para cada parte do script 
// para usar JS deve começar com $ e selecionar o ID do form $('#form-js')

/*
ao executar um evento submite, >>> .on('submit', << executar a função entre () >> function (e) <<
neste caso um ( E ) de event.
Após isso o script irá fazer a função entre chaves >> {e.preventDefault()
 
*/
exemplo:
$('#form-js').on('submit', function (e) {
  e.preventDefault()
// preventDefault impossibilita a página de ser recarregada 

// para capturar os dados preenchidos no form, deve salvar os value do ID do input em uma variável
  var form_firstname = $('#form-firstname').val()
  
 // criando a variável >> var form_firstname =
 // setando o ID do formulário a ser capturado >> = $('#form-firstname')
 // dizer que tipo de dado deve ser capturado (neste caso como value) >> .val()
 
 comando para verificar se os dados foram capturados
  //console.log(form_firstname, form_lastname, form_email, form_massage)
  
  Depois de salvo os dados preenchidos no input, deve ser tratado com uma linguagemd e programação,
  neste caso PHP e salvo no banco de dados.
  
    /* >> $.get({}) << Este é o tipo de requisição, pode ser específica ou universal
	.ajax é a função universal ou pode ser um método direto como POST ou GET */
	
	// a requisição será os dados dentro de chaves >> $.get({})
	// arquivo de programação setado para ser tratado para envio ao banco >> url: 'http://localhost/inserir.php',
	// metodo para envio dos dados >> method: 'POST', <<  POST para envio e GET para ser pego
	
	/* data: para preencher os dados salvos na variável
	 data: {
      firstname: form_firstname,
      lastname: form_lastname,
    },
	
	
	*/
	Obs: deve criar uma nova variável puxando os dados da variável criada antes
	>> firstname: form_firstname, (criando uma variável firstname e pegando da variável form_firstname)

	// o tipo de linguagem que irá trabalhar com os dados >> dataType: 'json',
	$.get({
    url: 'http://localhost/inserir.php',
    method: 'POST',
    data: {
      firstname: form_firstname,
      lastname: form_lastname,
      email: form_email,
      massage: form_massage},
    dataType: 'json',
	
	// executar uma  function com os resultados (result) e resetar os campos do form preenchendo com val (valores) zerados
	// apresentar um prompt alert com o resultado alert(result)
	function (result) {
      $('#form-firstname').removeClass('is-valid').val('')
      $('#form-lastname').removeClass('is-valid').val('')
      $('#form-email').removeClass('is-valid').val('')
      $('#form-massage').removeClass('is-valid').val('')
      alert(result)
    }