const validateRegex = () => {
    const regexInput = document.getElementById('regex-input').value.trim();
    const testInput = document.getElementById('test-input').value.trim();
    const resultDiv = document.getElementById('result');

    // Validaciones
    if (!regexInput) {
        resultDiv.textContent = 'Por favor, ingresa una expresión regular.';
        resultDiv.style.color = 'red';
        return;
    }

    if (!testInput) {
        resultDiv.textContent = 'Por favor, ingresa un texto para probar.';
        resultDiv.style.color = 'red';
        return;
    }

    try {
        
        const regex = new RegExp(regexInput);
        
        const isValid = regex.test(testInput);

        resultDiv.textContent = isValid ? '¡Coincide!' : 'No coincide.';
        resultDiv.style.color = 'black';
    } catch (error) {
        resultDiv.textContent = 'Expresión regular inválida';
        resultDiv.style.color = 'red';
    }
};


document.getElementById('validate-btn').addEventListener('click', validateRegex);
