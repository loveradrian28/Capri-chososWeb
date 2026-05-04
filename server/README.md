# Trades API

Una API REST simple para gestionar operaciones de acciones (trades).

## Instalación

```bash
cd server
npm install
```

## Ejecución

```bash
# Desarrollo (con nodemon)
npm run dev

# Producción
npm start
```

El servidor se ejecutará en `http://localhost:3001`

## Endpoints

### POST /trades
Crea un nuevo trade.

**Body:**
```json
{
  "type": "buy",
  "user_id": 23,
  "symbol": "ABX",
  "shares": 30,
  "price": 134,
  "timestamp": 1531522701000
}
```

**Respuesta exitosa (201):**
```json
{
  "id": 1,
  "type": "buy",
  "user_id": 23,
  "symbol": "ABX",
  "shares": 30,
  "price": 134,
  "timestamp": 1531522701000
}
```

**Validaciones:**
- `type` debe ser "buy" o "sell"
- `shares` debe estar entre 1 y 100
- No se debe proporcionar `id` en el body
- Todos los campos son requeridos

### GET /trades
Obtiene todos los trades, ordenados por ID.

**Query parameters opcionales:**
- `type`: Filtrar por tipo ("buy" o "sell")
- `user_id`: Filtrar por ID de usuario

**Ejemplos:**
- `GET /trades` - Todos los trades
- `GET /trades?type=buy` - Solo trades de compra
- `GET /trades?user_id=23` - Solo trades del usuario 23
- `GET /trades?type=buy&user_id=23` - Trades de compra del usuario 23

**Respuesta (200):**
```json
[
  {
    "id": 1,
    "type": "buy",
    "user_id": 23,
    "symbol": "ABX",
    "shares": 30,
    "price": 134,
    "timestamp": 1531522701000
  }
]
```

### GET /trades/:id
Obtiene un trade específico por ID.

**Respuesta exitosa (200):**
```json
{
  "id": 1,
  "type": "buy",
  "user_id": 23,
  "symbol": "ABX",
  "shares": 30,
  "price": 134,
  "timestamp": 1531522701000
}
```

**Respuesta si no existe (404):**
```json
{
  "error": "Trade not found"
}
```

### DELETE /trades/:id
**No permitido (405):**
```json
{
  "error": "Method not allowed"
}
```

### PUT /trades/:id
**No permitido (405):**
```json
{
  "error": "Method not allowed"
}
```

### PATCH /trades/:id
**No permitido (405):**
```json
{
  "error": "Method not allowed"
}
```

## Códigos de Estado

- `200` - OK (GET requests)
- `201` - Created (POST request exitoso)
- `400` - Bad Request (validación fallida)
- `404` - Not Found (trade no existe)
- `405` - Method Not Allowed (DELETE, PUT, PATCH)
- `500` - Internal Server Error

## Ejemplos de Uso

### Crear un trade
```bash
curl -X POST http://localhost:3001/trades \
  -H "Content-Type: application/json" \
  -d '{
    "type": "buy",
    "user_id": 23,
    "symbol": "ABX",
    "shares": 30,
    "price": 134,
    "timestamp": 1531522701000
  }'
```

### Obtener todos los trades
```bash
curl http://localhost:3001/trades
```

### Obtener trades filtrados
```bash
curl "http://localhost:3001/trades?type=buy&user_id=23"
```

### Obtener un trade específico
```bash
curl http://localhost:3001/trades/1
``` 