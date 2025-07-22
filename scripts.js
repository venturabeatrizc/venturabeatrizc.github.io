function armazenarValor() {
    var userInput = document.getElementById('userInput').value;

    if (userInput) {
        document.getElementById('mostrarMensagem').innerText = "Parabéns, " + userInput + "! Você clicou no botão!";
    } else {
        document.getElementById('mostrarMensagem').innerText = 'Por favor, escreva seu nome antes de continuar.';
    }
}
