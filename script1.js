function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (name === "" || email === "" || message === "") {
    alert("Por favor, preencha todos os campos antes de enviar.");
    return; 
  }
  alert("Formulário enviado com sucesso!");
  setTimeout(function () {
    window.location.href = "index.html";
  }, 1000); 
}
