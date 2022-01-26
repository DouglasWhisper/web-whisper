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
