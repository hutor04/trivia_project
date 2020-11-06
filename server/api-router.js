/* eslint-disable camelcase */
const express = require('express');
const triviaClient = require('./clients/trivia-client');
const triviaConfig = require('./clients/trivia-config');

const router = express.Router();

const normalizeEntry = entry => {
  let normalized = entry.split('_');
  normalized = normalized.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return normalized.join(' ');
};

const normalizeAnswers = data => {
  const answersToDict = answers => {
    const result = [];
    for (let i = 0; i < answers.length; i++) {
      result.push({ id: i + 1, answer: answers[i] });
    }
    return result;
  };
  return data.map(({
    category,
    type,
    difficulty,
    question,
    correct_answer,
    incorrect_answers,
  }) => ({
    category,
    type,
    difficulty,
    question,
    answers: [{ id: 0, answer: correct_answer }, ...answersToDict(incorrect_answers)],
  }));
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
    results: normalizeAnswers(data.results),
  };
  res.json(result);
});

module.exports = router;
