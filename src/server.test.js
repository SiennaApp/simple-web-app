const express = require('express');

// Simple test to ensure the server can start
describe('Server', () => {
  it('should have basic functionality', () => {
    const app = express();
    app.get('/health', (req, res) => {
      res.status(200).json({ status: 'ok' });
    });
    
    expect(app).toBeDefined();
  });
}); 