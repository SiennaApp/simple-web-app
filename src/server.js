const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('src/public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/random', (req, res) => {
  res.json({ number: Math.floor(Math.random() * 100) });
});

app.post('/api/calculate', (req, res) => {
  const { operation, a, b } = req.body;
  let result;
  switch(operation) {
    case 'add': result = a + b; break;
    case 'subtract': result = a - b; break;
    case 'multiply': result = a * b; break;
    case 'divide': result = b !== 0 ? a / b : 'Error'; break;
    default: result = 'Invalid operation';
  }
  res.json({ result });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Simple web app running on port ${PORT}`);
}); 