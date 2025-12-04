# Wild Horizons — Pure Node.js REST API

A lightweight REST API built using **core Node.js (without Express)** as part of backend learning.  
This project serves destination data and supports path parameters, query parameters, and reusable utilities.

---

## Features

- Built using the native `http` module (no Express)
- Clean routing logic
- Supports dynamic path parameters
- Supports query-based filtering
- Reusable utility functions for JSON responses and filtering

---

## Endpoints

### `GET /api`
Returns all destinations.

### `GET /api/continent/:continent`
Filters destinations by continent.  
Example:
/api/continent/Asia

### `GET /api/country/:country`
Filters destinations by country.  
Example:
/api/country/India

markdown
Copy code

### Query Parameters for `/api`
The `/api` route supports optional filtering using query parameters:

- `continent`
- `country`
- `is_open_to_public`

Examples:
/api?continent=Asia
/api?country=India
/api?continent=Asia&is_open_to_public=true

yaml
Copy code

If no query parameters are used, the API returns all data.

---

## Project Structure

wild-horizons-project/
├── db.js # Mock database fetch
│── data.js # Static dataset
│
├── utils/
│ ├── sendJSONResponse.js # Handles JSON responses
│ └── getDataByPathParams.js # Filters by path params
│
├── server.js # Core Node.js server
└── README.md


## How to Run the Server

1. Clone the repository
2. Ensure Node.js is installed
3. Run the server:
node server.js
4. The server will start on:
http://localhost:8000

## Concepts Learned

- Using Node’s `http` module to build a server
- Manual routing (without Express)
- Parsing URL path parameters
- Parsing query parameters using `URL` and `searchParams`
- Creating reusable utilities
- Sending JSON responses and CORS headers
- Basic REST API structure

## Credits & Inspiration
This project is **inspired by the Scrimba Backend Developer Career Path**.  
The structure and learning flow follow concepts demonstrated in their pure Node.js lessons.

## Author
**Apra Khanna**  


