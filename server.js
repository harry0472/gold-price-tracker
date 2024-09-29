const express = require('express');
const admin = require('firebase-admin');
const db = require('./firebase');
const cron = require('node-cron');
const axios = require('axios');

const app = express();
app.use(express.json());

async function getGoldPrice() {
  try {
    const response = await axios.get('https://baotinmanhhai.vn/api/v1/exchangerate/goldRateChart?gold_type=SJC&time_type=month')
    return response.data
  } catch (error) {
    console.error('Error fetching gold price:', error)
  }
}

app.get('/gold-price', async (req, res) => {
  const goldPrice = await getGoldPrice();
  res.json(goldPrice);
});

app.get('/', (req, res) => {
  res.send('Gold Price Tracker is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});