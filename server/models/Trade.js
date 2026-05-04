export class Trade {
  constructor(type, user_id, symbol, shares, price, timestamp, id = null) {
    this.type = type;
    this.user_id = user_id;
    this.symbol = symbol;
    this.shares = shares;
    this.price = price;
    this.timestamp = timestamp;
    this.id = id;
  }

  // Validar si el trade es válido
  static validate(tradeData) {
    const errors = [];

    // Validar tipo
    if (!tradeData.type || !['buy', 'sell'].includes(tradeData.type)) {
      errors.push('Type must be either "buy" or "sell"');
    }

    // Validar shares (entre 1 y 100)
    if (!tradeData.shares || tradeData.shares < 1 || tradeData.shares > 100) {
      errors.push('Shares must be between 1 and 100');
    }

    // Validar que todos los campos requeridos estén presentes
    if (!tradeData.user_id) errors.push('user_id is required');
    if (!tradeData.symbol) errors.push('symbol is required');
    if (!tradeData.price) errors.push('price is required');
    if (!tradeData.timestamp) errors.push('timestamp is required');

    return errors;
  }

  // Crear un trade desde datos JSON
  static fromJSON(data) {
    return new Trade(
      data.type,
      data.user_id,
      data.symbol,
      data.shares,
      data.price,
      data.timestamp,
      data.id
    );
  }

  // Convertir a JSON
  toJSON() {
    return {
      id: this.id,
      type: this.type,
      user_id: this.user_id,
      symbol: this.symbol,
      shares: this.shares,
      price: this.price,
      timestamp: this.timestamp
    };
  }
} 