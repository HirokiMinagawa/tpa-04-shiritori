const apiService = {
  fetchUsedWords: function({ playerName }) {
    return fetch(`/api/used-words?playerName=${playerName}`)
      .then(resp => resp.json());
  },
  playWord: function({ playerName, inputWord }) {
    return fetch('/api/play-word', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        playerName,
        inputWord,
      }),
    })
      .then(resp => resp.json());
  },
  resetGame: function(playerName) {
    return fetch('/api/reset-game', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        playerName,
      }),
    })
      .then(res => res.json());
  },
};

export default apiService;
