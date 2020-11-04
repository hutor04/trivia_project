const express = require('express');
const triviaClient = require('./clients/trivia-client');
const triviaConfig = require('./clients/trivia-config');

const router = express.Router();

const normalizeEntry = entry => {
  let normalized = entry.split('_');
  normalized = normalized.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return normalized.join(' ');
};

router.get('/categories', (req, res) => {
  const baseUrl = `http://${req.headers.host}`;
  const categories = triviaConfig.parameters.category;
  const response = Object.keys(categories).map(key => (
    {
      name: normalizeEntry(key),
      url: `${baseUrl}/api/categories/${key}`,
      img: `${baseUrl}/icons/${key}.svg`,
    }));
  res.json(response);
});

router.get('/categories/:category', async (req, res) => {
  const category = triviaConfig.parameters.category[req.params.category];
  const data = await triviaClient(category);
  const baseUrl = `http://${req.headers.host}`;
  const result = {
    img: `${baseUrl}/icons/${req.params.category}.svg`,
    results: data.results,
  };
  res.json(result);
});

module.exports = router;
