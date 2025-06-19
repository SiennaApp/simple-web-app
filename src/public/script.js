document.addEventListener('DOMContentLoaded', function() {
    // Random number generator
    document.getElementById('randomBtn').addEventListener('click', async function() {
        try {
            const response = await fetch('/api/random');
            const data = await response.json();
            document.getElementById('randomResult').textContent = `Random number: ${data.number}`;
        } catch (error) {
            document.getElementById('randomResult').textContent = 'Error: ' + error.message;
        }
    });

    // Calculator
    document.getElementById('calculateBtn').addEventListener('click', async function() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operation = document.getElementById('operation').value;

        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById('calcResult').textContent = 'Please enter valid numbers';
            return;
        }

        try {
            const response = await fetch('/api/calculate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ operation, a: num1, b: num2 })
            });
            const data = await response.json();
            document.getElementById('calcResult').textContent = `Result: ${data.result}`;
        } catch (error) {
            document.getElementById('calcResult').textContent = 'Error: ' + error.message;
        }
    });

    // Health check
    document.getElementById('healthBtn').addEventListener('click', async function() {
        try {
            const response = await fetch('/health');
            const data = await response.json();
            document.getElementById('healthResult').textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            document.getElementById('healthResult').textContent = 'Error: ' + error.message;
        }
    });
}); 