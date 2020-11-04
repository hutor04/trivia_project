const axios = require('axios');
const config = require('./trivia-config');

// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple
const getData = async (category, amount = 10, difficulty = 'easy', type = 'multiple') => {
  const parameters = {
    category,
    amount,
    difficulty,
    type,
  };
  const res = await axios.get(config.baseUrl, { params: parameters });
  return res.data;
};

module.exports = getData;
