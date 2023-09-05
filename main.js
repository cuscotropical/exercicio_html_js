document.getElementById("meuForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    // Obtenha os valores dos campos A e B
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    // Verifique se o número B é maior que o número A
    if (campoB > campoA) {
        document.getElementById("resultado").innerHTML = "Formulário válido!";
        document.getElementById("resultado").className = "mensagem valido";
    } else {
        document.getElementById("resultado").innerHTML = "Formulário inválido. O número B deve ser maior que o número A.";
        document.getElementById("resultado").className = "mensagem invalido";
    }
});