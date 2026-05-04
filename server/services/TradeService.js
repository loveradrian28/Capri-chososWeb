import { Trade } from '../models/Trade.js';

export class TradeService {
  constructor() {
    this.trades = [];
    this.nextId = 1;
  }

  // Crear un nuevo trade
  createTrade(tradeData) {
    // Validar los datos del trade
    const errors = Trade.validate(tradeData);
    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }

    // Crear el trade con ID único
    const trade = Trade.fromJSON({
      ...tradeData,
      id: this.nextId++
    });

    // Agregar a la colección
    this.trades.push(trade);

    return trade;
  }

  // Obtener todos los trades con filtros opcionales
  getAllTrades(filters = {}) {
    let filteredTrades = [...this.trades];

    // Aplicar filtros si están presentes
    if (filters.type) {
      filteredTrades = filteredTrades.filter(trade => trade.type === filters.type);
    }

    if (filters.user_id) {
      filteredTrades = filteredTrades.filter(trade => trade.user_id === parseInt(filters.user_id));
    }

    // Ordenar por ID en orden creciente
    return filteredTrades.sort((a, b) => a.id - b.id);
  }

  // Obtener un trade por ID
  getTradeById(id) {
    const trade = this.trades.find(trade => trade.id === parseInt(id));
    return trade || null;
  }

  // Verificar si existe un trade con el ID dado
  tradeExists(id) {
    return this.trades.some(trade => trade.id === parseInt(id));
  }
} 