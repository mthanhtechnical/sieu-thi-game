// ===== HUB MANAGER =====
// Manages player profiles, leaderboards, and game history

class GameHub {
  constructor() {
    console.log('🏗️ GameHub constructor called');
    this.storageKey = 'emoji_game_hub_data';
    this.data = this.loadData();
    this.init();
  }

  loadData() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to load hub data:', e);
      }
    }

    return {
      playerName: 'Player ' + Math.floor(Math.random() * 9000 + 1000),
      playerEmoji: this.getRandomEmoji(),
      totalGamesPlayed: 0,
      totalScore: 0,
      bestScore: 0,
      gamesLeaderboard: {}, // { gameName: [{playerName, score, date}, ...] }
      recentGames: [], // [{gameName, score, emoji, date}, ...]
      achievements: []
    };
  }

  saveData() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data));
  }

  init() {
    console.log('🏠 GameHub initialized with data:', this.data);
    this.renderDashboard();
    this.renderLeaderboard();
    this.renderRecentGames();
    this.setupEventListeners();
    console.log('✅ GameHub fully loaded');
  }

  getRandomEmoji() {
    const emojis = ['😵‍💫', '🎮', '🧠', '⚡', '🎯', '🏆', '🌟', '💪', '🚀', '🎪'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  }

  renderDashboard() {
    const dashboard = document.querySelector('.player-dashboard');
    if (!dashboard) {
      console.warn('⚠️ .player-dashboard not found');
      return;
    }

    const playerDetailsDiv = dashboard.querySelector('.player-details');
    if (playerDetailsDiv) {
      playerDetailsDiv.innerHTML = `
        <h2>${this.data.playerName}</h2>
        <p>Tham gia từ ${new Date().toLocaleDateString('vi-VN')}</p>
      `;
    } else {
      console.warn('⚠️ .player-details not found inside dashboard');
    }

    const avatarDiv = dashboard.querySelector('.player-avatar');
    if (avatarDiv) {
      avatarDiv.textContent = this.data.playerEmoji;
    } else {
      console.warn('⚠️ .player-avatar not found inside dashboard');
    }

    const statsDiv = dashboard.querySelector('.dashboard-stats');
    if (statsDiv) {
      statsDiv.innerHTML = `
        <div class="stat-card">
          <div class="stat-value">${this.data.totalGamesPlayed}</div>
          <div class="stat-label">Trò chơi</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${this.formatNumber(this.data.totalScore)}</div>
          <div class="stat-label">Tổng điểm</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${this.formatNumber(this.data.bestScore)}</div>
          <div class="stat-label">Điểm cao nhất</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${this.data.achievements.length || 0}</div>
          <div class="stat-label">Thành tích</div>
        </div>
      `;
      console.log('✅ Dashboard stats rendered:', this.data);
    } else {
      console.warn('⚠️ .dashboard-stats not found inside dashboard');
    }
  }

  renderLeaderboard() {
    const leaderboard = document.querySelector('.leaderboard-section');
    if (!leaderboard) return;

    // Get top players (simulated)
    const topPlayers = [
      { rank: 1, name: this.data.playerName, score: this.data.bestScore, isCurrentPlayer: true },
      { rank: 2, name: 'Pro Player', score: Math.floor(this.data.bestScore * 0.8), isCurrentPlayer: false },
      { rank: 3, name: 'Master Mind', score: Math.floor(this.data.bestScore * 0.6), isCurrentPlayer: false }
    ];

    const tableBody = leaderboard.querySelector('.leaderboard-table tbody');
    if (tableBody) {
      if (topPlayers.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="3" style="text-align: center; padding: 20px;">Chưa có dữ liệu</td></tr>';
      } else {
        tableBody.innerHTML = topPlayers.map((player, idx) => `
          <tr class="${player.isCurrentPlayer ? 'is-current-player' : ''}">
            <td>
              <span class="rank-badge rank-${player.rank}">
                ${player.rank <= 3 ? (player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : '🥉') : player.rank}
              </span>
            </td>
            <td>
              <div class="leaderboard-player-name">
                <div class="player-badge">${this.getRandomEmoji()}</div>
                <span class="player-name">${player.name}</span>
              </div>
            </td>
            <td><strong>${this.formatNumber(player.score)}</strong></td>
          </tr>
        `).join('');
      }
    }
  }

  renderRecentGames() {
    const recentSection = document.querySelector('.recent-games-section');
    if (!recentSection) return;

    const grid = recentSection.querySelector('.recent-games-grid');
    if (!grid) return;

    if (this.data.recentGames.length === 0) {
      grid.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; grid-column: 1/-1; color: var(--muted);">
          <p>Chơi trò chơi đầu tiên để xem lịch sử</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = this.data.recentGames.slice(0, 6).map(game => `
      <div class="recent-game-card">
        <div class="recent-game-icon">${game.emoji}</div>
        <div class="recent-game-name">${game.gameName}</div>
        <div class="recent-game-score">
          Điểm: <strong>${this.formatNumber(game.score)}</strong>
        </div>
        <div class="recent-game-time">${this.formatTime(game.date)}</div>
      </div>
    `).join('');
  }

  recordGameScore(gameName, score, emoji = '🎮') {
    console.log(`📝 Recording score: ${gameName} - ${score} points`);
    this.data.totalGamesPlayed++;
    this.data.totalScore += score;
    if (score > this.data.bestScore) {
      this.data.bestScore = score;
      console.log(`🏆 New best score! ${score}`);
    }

    this.data.recentGames.unshift({
      gameName,
      score,
      emoji,
      date: new Date().toISOString()
    });

    // Keep only last 20 recent games
    this.data.recentGames = this.data.recentGames.slice(0, 20);

    // Update leaderboard for this game
    if (!this.data.gamesLeaderboard[gameName]) {
      this.data.gamesLeaderboard[gameName] = [];
    }

    this.data.gamesLeaderboard[gameName].push({
      playerName: this.data.playerName,
      score,
      date: new Date().toISOString()
    });

    console.log('💾 Saving data...', this.data);
    this.saveData();
    console.log('🔄 Refreshing UI...');
    this.init();
    console.log('✅ Score saved and UI updated!');
  }

  updatePlayerName(newName) {
    if (newName && newName.trim()) {
      this.data.playerName = newName.trim();
      this.saveData();
      this.init();
      return true;
    }
    return false;
  }

  resetStats() {
    if (confirm('Bạn có chắc chắn muốn xóa tất cả thống kê? Không thể hoàn tác!')) {
      this.data = {
        playerName: this.data.playerName,
        playerEmoji: this.data.playerEmoji,
        totalGamesPlayed: 0,
        totalScore: 0,
        bestScore: 0,
        gamesLeaderboard: {},
        recentGames: [],
        achievements: []
      };
      this.saveData();
      this.init();
      alert('Thống kê đã được xóa!');
    }
  }

  setupEventListeners() {
    const menu = document.querySelector('#hubMenu');
    const menuButton = document.querySelector('.hub-menu-button');
    const menuClose = document.querySelector('.hub-menu-close');
    const setMenuOpen = (open) => {
      if (!menu || !menuButton) return;
      menu.hidden = !open;
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.classList.toggle('active', open);
      if (open) menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (menuButton) menuButton.onclick = () => setMenuOpen(menu.hidden);
    if (menuClose) menuClose.onclick = () => setMenuOpen(false);

    const editBtn = document.querySelector('.edit-profile-btn');
    const resetBtn = document.querySelector('.reset-stats-btn');

    if (editBtn) {
      editBtn.addEventListener('click', () => this.showEditProfileModal());
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.resetStats());
    }

    // Multiplayer buttons
    const headToHeadBtn = document.querySelector('[data-mode="head-to-head"]');
    const turnBasedBtn = document.querySelector('[data-mode="turn-based"]');
    const createRoomBtn = document.querySelector('[data-mode="create-room"]');

    if (headToHeadBtn) {
      headToHeadBtn.addEventListener('click', () => this.startHeadToHead());
    }

    if (turnBasedBtn) {
      turnBasedBtn.addEventListener('click', () => this.startTurnBased());
    }

    if (createRoomBtn) {
      createRoomBtn.addEventListener('click', () => this.createRoom());
    }
  }

  showEditProfileModal() {
    const modal = document.querySelector('#editProfileModal');
    if (!modal) return;

    const input = modal.querySelector('input[name="playerName"]');
    if (input) {
      input.value = this.data.playerName;
      input.focus();
    }

    modal.classList.add('active');

    const buttons = modal.querySelectorAll('.modal-actions.button');
    const saveBtn = buttons[0];
    const cancelBtn = buttons[1];

    const closeModal = () => {
      modal.classList.remove('active');
    };

    if (saveBtn) {
      saveBtn.onclick = (e) => {
        e.preventDefault();
        const newName = input.value;
        if (this.updatePlayerName(newName)) {
          closeModal();
        } else {
          alert('Vui lòng nhập tên hợp lệ!');
        }
      };
    }

    if (cancelBtn) {
      cancelBtn.onclick = (e) => {
        e.preventDefault();
        closeModal();
      };
    }

    // Close modal when clicking outside
    modal.onclick = (e) => {
      if (e.target === modal) {
        closeModal();
      }
    };

    // Close modal with Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);
  }

  startHeadToHead() {
    alert('🎮 Chế độ Head-to-Head sẽ được khởi chạy. Bạn sẽ cùng chơi với một người khác cùng lúc!');
    // TODO: Implement multiplayer logic
  }

  startTurnBased() {
    alert('🎮 Chế độ Turn-based sẽ được khởi chạy. Lượt chơi liên tiếp!');
    // TODO: Implement turn-based logic
  }

  createRoom() {
    const roomCode = this.generateRoomCode();
    alert(`🔗 Mã phòng của bạn: ${roomCode}\n\nChia sẻ mã này cho bạn bè để chơi cùng!`);
    // TODO: Implement room creation logic
  }

  generateRoomCode() {
    return 'ROOM-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }

  formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  }

  formatTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Vừa xong';
    if (diffMins < 60) return diffMins + ' phút trước';
    if (diffHours < 24) return diffHours + ' giờ trước';
    if (diffDays < 7) return diffDays + ' ngày trước';
    
    return date.toLocaleDateString('vi-VN');
  }
}

// Initialize hub when page loads
let gameHub;

function initializeGameHub() {
  console.log('🏠 Initializing GameHub...');
  gameHub = new GameHub();
  // Make gameHub available globally for games to call
  window.gameHub = gameHub;
  console.log('✅ window.gameHub is now available globally');
}

// Try both DOMContentLoaded and immediate initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGameHub);
} else {
  // DOM is already ready, initialize immediately
  initializeGameHub();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GameHub;
}
