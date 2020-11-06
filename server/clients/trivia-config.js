const config = {
  baseUrl: 'https://opentdb.com/api.php',
  parameters: {
    category: {
      general: 9,
      books: 10,
      film: 11,
      music: 12,
      // theater: 13,
      television: 14,
      video_games: 15,
      board_games: 16,
      science: 17,
      computers: 18,
      mathematics: 19,
      mythology: 20,
      sports: 21,
      geography: 22,
      history: 23,
      politics: 24,
      art: 25,
      celebrities: 26,
      animals: 27,
      vehicles: 28,
      comics: 29,
      gadgets: 30,
      anime: 31,
      cartoons: 32,
    },
    difficulty: {
      easy: 'easy',
      medium: 'medium',
      hard: 'hard',
    },
    type: {
      multiple_choice: 'multiple',
      true_false: 'boolean',
    },
  },
};

module.exports = config;
