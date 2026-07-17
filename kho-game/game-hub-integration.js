/**
 * GAME-HUB INTEGRATION
 * 
 * Add this script to any game's HTML to integrate with the hub.
 * Games will automatically send scores to the hub when they finish.
 * 
 * Usage:
 * <script src="../game-hub-integration.js"></script>
 * 
 * Then call: recordGameScore('Game Name', score, '🎮');
 */

const HUB_STORAGE_KEY = 'emoji_game_hub_data';

console.log('🎮 Game-Hub integration script loaded');

function loadHubData() {
  try {
    const raw = localStorage.getItem(HUB_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (error) {
    console.warn('⚠️ Failed to parse hub data from localStorage:', error);
    return null;
  }
}

function saveHubData(data) {
  localStorage.setItem(HUB_STORAGE_KEY, JSON.stringify(data));
}

function createDefaultHubData() {
  const emojis = ['😵‍💫', '🎮', '🧠', '⚡', '🎯', '🏆', '🌟', '💪', '🚀', '🎪'];
  return {
    playerName: 'Player ' + Math.floor(Math.random() * 9000 + 1000),
    playerEmoji: emojis[Math.floor(Math.random() * emojis.length)],
    totalGamesPlayed: 0,
    totalScore: 0,
    bestScore: 0,
    gamesLeaderboard: {},
    recentGames: [],
    achievements: []
  };
}

function ensureHubData() {
  let data = loadHubData();
  if (!data || typeof data !== 'object') {
    data = createDefaultHubData();
    saveHubData(data);
  }
  return data;
}

function updateHubDataWithScore(gameName, score, emoji) {
  const data = ensureHubData();

  data.totalGamesPlayed = (Number(data.totalGamesPlayed) || 0) + 1;
  data.totalScore = (Number(data.totalScore) || 0) + score;
  data.bestScore = Math.max(Number(data.bestScore) || 0, score);

  if (!data.gamesLeaderboard || typeof data.gamesLeaderboard !== 'object') {
    data.gamesLeaderboard = {};
  }

  if (!Array.isArray(data.gamesLeaderboard[gameName])) {
    data.gamesLeaderboard[gameName] = [];
  }

  data.gamesLeaderboard[gameName].push({
    playerName: data.playerName,
    score,
    date: new Date().toISOString()
  });

  if (!Array.isArray(data.recentGames)) {
    data.recentGames = [];
  }

  data.recentGames.unshift({
    gameName,
    score,
    emoji,
    date: new Date().toISOString()
  });
  data.recentGames = data.recentGames.slice(0, 20);

  saveHubData(data);
  return data;
}

function recordGameScore(gameName, score, emoji = '🎮') {
  console.log(`[Integration] recordGameScore called: ${gameName}, ${score}, ${emoji}`);
  if (window.gameHub && typeof window.gameHub.recordGameScore === 'function') {
    console.log('✅ Hub available, recording score...');
    window.gameHub.recordGameScore(gameName, score, emoji);
    console.log(`✅ Score recorded via window.gameHub: ${gameName} - ${score}`);
    return;
  }

  console.log('⚠️ Hub not available. Saving score to localStorage fallback.');
  const data = updateHubDataWithScore(gameName, score, emoji);
  console.log(`✅ Score saved to localStorage: ${gameName} - ${score}`);
  console.log('   Updated hub data:', data);
}

// Make available globally
window.recordGameScore = recordGameScore;

// Also provide a function to get current player info
function getPlayerInfo() {
  if (window.gameHub) {
    return {
      name: window.gameHub.data.playerName,
      emoji: window.gameHub.data.playerEmoji
    };
  }

  const data = ensureHubData();
  return {
    name: data.playerName,
    emoji: data.playerEmoji
  };
}

window.getPlayerInfo = getPlayerInfo;

console.log('✅ Game-Hub integration ready');
