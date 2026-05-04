// Archivo de pruebas para verificar la funcionalidad de la API
import { Trade } from './models/Trade.js';
import { TradeService } from './services/TradeService.js';

console.log('🧪 Ejecutando pruebas de la API de Trades...\n');

// Prueba 1: Validación del modelo Trade
console.log('1. Probando validación del modelo Trade:');
const validTradeData = {
  type: 'buy',
  user_id: 23,
  symbol: 'ABX',
  shares: 30,
  price: 134,
  timestamp: 1531522701000
};

const invalidTradeData = {
  type: 'invalid',
  user_id: 23,
  symbol: 'ABX',
  shares: 150, // Fuera del rango
  price: 134,
  timestamp: 1531522701000
};

console.log('   Validación de trade válido:', Trade.validate(validTradeData).length === 0 ? '✅ PASÓ' : '❌ FALLÓ');
console.log('   Validación de trade inválido:', Trade.validate(invalidTradeData).length > 0 ? '✅ PASÓ' : '❌ FALLÓ');

// Prueba 2: Servicio de Trades
console.log('\n2. Probando TradeService:');
const tradeService = new TradeService();

try {
  // Crear trades válidos
  const trade1 = tradeService.createTrade(validTradeData);
  console.log('   Crear trade válido:', trade1.id === 1 ? '✅ PASÓ' : '❌ FALLÓ');
  
  const trade2 = tradeService.createTrade({
    type: 'sell',
    user_id: 45,
    symbol: 'TSLA',
    shares: 50,
    price: 250,
    timestamp: 1531522800000
  });
  console.log('   Crear segundo trade:', trade2.id === 2 ? '✅ PASÓ' : '❌ FALLÓ');
  
  // Probar filtros
  const allTrades = tradeService.getAllTrades();
  console.log('   Obtener todos los trades:', allTrades.length === 2 ? '✅ PASÓ' : '❌ FALLÓ');
  
  const buyTrades = tradeService.getAllTrades({ type: 'buy' });
  console.log('   Filtrar por tipo buy:', buyTrades.length === 1 ? '✅ PASÓ' : '❌ FALLÓ');
  
  const userTrades = tradeService.getAllTrades({ user_id: 23 });
  console.log('   Filtrar por user_id:', userTrades.length === 1 ? '✅ PASÓ' : '❌ FALLÓ');
  
  // Probar obtener por ID
  const foundTrade = tradeService.getTradeById(1);
  console.log('   Obtener trade por ID:', foundTrade && foundTrade.id === 1 ? '✅ PASÓ' : '❌ FALLÓ');
  
  const notFoundTrade = tradeService.getTradeById(999);
  console.log('   Trade no encontrado:', notFoundTrade === null ? '✅ PASÓ' : '❌ FALLÓ');
  
} catch (error) {
  console.log('   ❌ Error en pruebas del servicio:', error.message);
}

// Prueba 3: Intentar crear trade inválido
console.log('\n3. Probando validaciones:');
try {
  tradeService.createTrade(invalidTradeData);
  console.log('   ❌ FALLÓ: Debería haber lanzado error');
} catch (error) {
  console.log('   ✅ PASÓ: Error capturado correctamente');
}

console.log('\n🎉 Pruebas completadas!');
console.log('\nPara ejecutar la API:');
console.log('1. cd server');
console.log('2. npm install');
console.log('3. npm run dev');
console.log('4. La API estará disponible en http://localhost:3001'); 