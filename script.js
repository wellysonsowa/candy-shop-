function submitForm() {
    var fullName = document.getElementById('fullName').value;
    var houseNumber = document.getElementById('houseNumber').value;
    var neighborhood = document.getElementById('neighborhood').value;
    var city = document.getElementById('city').value;
    var zipCode = document.getElementById('zipCode').value;
    var landmark = document.getElementById('landmark').value;
    if (!fullName || !houseNumber || !neighborhood || !city || !zipCode) {
        alert('Por favor, preencha todos os campos obrigatórios.');
    } else {
  {
            alert('Compra realizada com sucesso!\n\nNome Completo: ' + fullName + '\nNúmero da Casa/Apartamento: ' + houseNumber + '\nBairro: ' + neighborhood + '\nCidade: ' + city + '\nCEP: ' + zipCode + '\nPonto de Referência: ' + landmark);
            document.getElementById('deliveryForm').reset();
            setTimeout(function () {
                window.location.href = 'index.html';
            }, 1000);
        }
    }
}

function voltarParaPrimeiraPagina() {
    window.location.href = 'index.html';
}
