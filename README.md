# Number Classification API 🚀

This is a simple REST API built with Node.js and Express that classifies numbers based on their mathematical properties and provides a fun fact.

## 🔧 Features

- ✅ **Classifies numbers** as prime, perfect, Armstrong, even, or odd.
- ✅ **Calculates digit sum** of the given number.
- ✅ **Fetches a fun fact** from [Numbers API](http://numbersapi.com/).
- ✅ **Handles errors** for invalid input.
- ✅ **CORS enabled** for cross-origin requests.
- ✅ **Deployed** on a public endpoint.

## 🛠 Technologies Used

- **Node.js** (JavaScript runtime)
- **Express.js** (Backend framework)
- **Axios** (For fetching fun facts)
- **CORS** (Cross-Origin Resource Sharing)

## 📌 API Endpoint

### **GET `/api/classify-number?number=<number>`**

Example:

```bash
GET https://your-deployed-api.com/api/classify-number?number=371
```

### ✅ Sample Response

Below is a sample JSON response:

```javascript
{
  "number": "456",
  "is_prime": false,
  "is_perfect": false,
  "properties": [
    "even"
  ],
  "digit_sum": 15,
  "fun_fact": "456 is a boring number."
}
```

### ❌ Sample Error Response (400 Bad Request)

```javascript
{
    "number": "abc",
    "error": true
}
```

### 🚀 Running Locally

1. Clone repository

   ```bash
   git clone https://github.com/OlaOluwalekan/numbers-api-hng2.git
   cd numbers-api-hng2
   ```

1. Instal Dependencies

   ```bash
   npm install
   ```

1. Start the server
   ```bash
   node server.js
   ```
1. Open "localhost:3000/api/classify-number" on your browser
