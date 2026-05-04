import express from 'express';
import cors from 'cors';
import tradesRoutes from './routes/trades.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/trades', tradesRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ 
    message: 'Trades API is running!',
    endpoints: {
      'POST /trades': 'Create a new trade',
      'GET /trades': 'Get all trades (with optional filters)',
      'GET /trades/:id': 'Get a specific trade by ID',
      'DELETE /trades/:id': 'Not allowed (405)',
      'PUT /trades/:id': 'Not allowed (405)',
      'PATCH /trades/:id': 'Not allowed (405)'
    }
  });
});

// Manejo de rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Trades API server running on http://localhost:${PORT}`);
  console.log(`📊 Available endpoints:`);
  console.log(`   POST /trades - Create a new trade`);
  console.log(`   GET /trades - Get all trades`);
  console.log(`   GET /trades/:id - Get a specific trade`);
}); 