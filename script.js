// Adiciona um evento de click ao botão para calcular a senha secreta
document.getElementById('calculate-button').addEventListener('click', function() {
    // Obtém o campo de entrada de números
    const inputField = document.getElementById('input-numbers');
    
    // Converte a string de entrada em uma lista de números
    const numbers = inputField.value.split(',').map(Number);

    // Verifica se a lista está vazia ou se contém valores não numéricos
    if (numbers.length === 0 || numbers.some(isNaN)) {
        alert('Por favor, insira uma lista válida de números separados por vírgula.');
        return;
    }

    // Calcula a senha secreta
    const result = calculateSecretPassword(numbers);
    
    // Exibe o resultado
    document.getElementById('result').innerText = `Senha secreta: ${result.join(', ')}`;
});

/**
 * Calcula a senha secreta substituindo cada número pela soma dos números à sua direita.
 * Se não houver números à direita, o resultado é 0.
 * @param {number[]} numbers - Lista de números inteiros.
 * @returns {number[]} Nova lista com a senha secreta.
 */
function calculateSecretPassword(numbers) {
    // Usa o método map para criar uma nova lista com as somas dos números à direita
    return numbers.map((_, index) => {
        // Obtém os números à direita do índice atual
        const remainingNumbers = numbers.slice(index + 1);
        
        // Calcula a soma dos números à direita
        return remainingNumbers.reduce((sum, num) => sum + num, 0);
    });
}
