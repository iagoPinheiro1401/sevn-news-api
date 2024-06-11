# SEVN News API

Welcome to the SEVN News API! This API provides access to a variety of news articles from different categories including economy, education, and diversities.

## Base URL

The base URL of the API is `https://sevn-news-api-mu.vercel.app/`.

## Available Endpoints

### Get Main Articles

Returns the main articles from SEVN News.

- **Endpoint**: `/api/artigos-principais`
- **HTTP Method**: GET

### Get Secondary Articles

Returns the secondary articles from SEVN News.

- **Endpoint**: `/api/artigos-secundarios`
- **HTTP Method**: GET

### Get News Details

Returns the details of a specific news article based on its ID.

- **Endpoint**: `/api/noticia/{id}`
- **HTTP Method**: GET

## Usage in Frontend

This API is being used in the frontend of the SEVN News repository available at [https://github.com/iagoPinheiro1401/sevn-news](https://github.com/iagoPinheiro1401/sevn-news).


## Technologies Used

- Node.js
- Express.js
- Joi (for validation)
- Cors (for handling Cross-Origin Resource Sharing)

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/iagoPinheiro1401/sevn-news-api.git

2. Install the dependencies

   ```bash
   npm install

3. Start the server:

   ```bash
   npm run dev

4. The server should now be running on http://localhost:3000.