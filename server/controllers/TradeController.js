import { TradeService } from '../services/TradeService.js';

export class TradeController {
  constructor() {
    this.tradeService = new TradeService();
  }

  // POST /trades - Crear un nuevo trade
  createTrade = (req, res) => {
    try {
      const tradeData = req.body;
      
      // Verificar que no se proporcione un ID en el body
      if (tradeData.id !== undefined) {
        return res.status(400).json({ 
          error: 'ID should not be provided in the request body' 
        });
      }

      const trade = this.tradeService.createTrade(tradeData);
      res.status(201).json(trade.toJSON());
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // GET /trades - Obtener todos los trades con filtros opcionales
  getAllTrades = (req, res) => {
    try {
      const filters = {};
      
      // Extraer filtros de query parameters
      if (req.query.type) {
        filters.type = req.query.type;
      }
      
      if (req.query.user_id) {
        filters.user_id = req.query.user_id;
      }

      const trades = this.tradeService.getAllTrades(filters);
      const tradesJSON = trades.map(trade => trade.toJSON());
      
      res.status(200).json(tradesJSON);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // GET /trades/:id - Obtener un trade por ID
  getTradeById = (req, res) => {
    try {
      const { id } = req.params;
      const trade = this.tradeService.getTradeById(id);
      
      if (!trade) {
        return res.status(404).json({ error: 'Trade not found' });
      }
      
      res.status(200).json(trade.toJSON());
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // DELETE /trades/:id - No permitido
  deleteTrade = (req, res) => {
    res.status(405).json({ error: 'Method not allowed' });
  };

  // PUT /trades/:id - No permitido
  updateTrade = (req, res) => {
    res.status(405).json({ error: 'Method not allowed' });
  };

  // PATCH /trades/:id - No permitido
  patchTrade = (req, res) => {
    res.status(405).json({ error: 'Method not allowed' });
  };
} 