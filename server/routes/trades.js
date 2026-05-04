import express from 'express';
import { TradeController } from '../controllers/TradeController.js';

const router = express.Router();
const tradeController = new TradeController();

// POST /trades - Crear un nuevo trade
router.post('/', tradeController.createTrade);

// GET /trades - Obtener todos los trades (con filtros opcionales)
router.get('/', tradeController.getAllTrades);

// GET /trades/:id - Obtener un trade por ID
router.get('/:id', tradeController.getTradeById);

// DELETE /trades/:id - No permitido
router.delete('/:id', tradeController.deleteTrade);

// PUT /trades/:id - No permitido
router.put('/:id', tradeController.updateTrade);

// PATCH /trades/:id - No permitido
router.patch('/:id', tradeController.patchTrade);

export default router; 