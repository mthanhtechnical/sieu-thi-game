# 🏠 Emoji Game Hub - Guia Rápido

## ✨ O que foi criado?

Seu hub de jogos agora possui:

### 1. **Dashboard de Jogador** 👤
- Perfil pessoal com nome e emoji
- Estatísticas em tempo real:
  - 📊 Total de jogos jogados
  - 🎯 Pontuação total
  - 🏆 Melhor pontuação
  - 🎖️ Número de conquistas
- Botões para editar nome e redefinir estatísticas

### 2. **Bảng Xếp Hạng** 🏆
- Top 3 players com medalhas (🥇🥈🥉)
- Sua posição destacada
- Estatísticas de pontuação
- Abas para filtrar: Toàn bộ, Bạn bè, Tuần này

### 3. **Lịch Sử Gần Đây** 🎮
- Últimos 6 jogos jogados
- Emoji de cada jogo
- Pontuação e timestamp
- "Vài minutos atrás" / "Ontem" formatação

### 4. **Chơi Cùng Bạn Bè** 👥
- ⚡ **Head-to-Head**: Chơi cùng lúc, cùng câu hỏi
- 🔄 **Turn-based**: Lượt chơi liên tiếp
- 🔗 **Tạo Phòng**: Chia sẻ mã để bạn bè tham gia

---

## 🚀 Como Integrar Games ao Hub

### Para Cada Game

1. **Abra o arquivo `app.js` do jogo**

2. **No `index.html`, adicione esta linha antes de `</body>`:**
```html
<script src="../game-hub-integration.js"></script>
```

3. **Quando o jogo terminar, chame:**
```javascript
recordGameScore('Nome do Jogo', pontuaçãoFinal, '🎮');
```

### Exemplo para Bat-Chu-Emoji:
```javascript
// Quando jogador termina as 10 questões:
const finalScore = comboDamage * correctAnswers;
recordGameScore('Bắt Chữ Emoji', finalScore, '😵‍💫');
```

### Exemplo para Wordle:
```javascript
// Quando jogador ganha ou perde:
const score = 700 - (attempts - 1) * 80;
recordGameScore('Wordle', score, '🔠');
```

---

## 💾 Dados Salvos Localmente

Cada jogador tem seus dados salvos no navegador:
- Nome e emoji personalizado
- Histórico de todos os 20 últimos jogos
- Estatísticas globais
- Leaderboard local

Dados são persistentes - não perdem ao fechar o navegador!

---

## 🎨 Cores do Design

O hub usa o mesmo design visual dos games:
- **Fundo**: Dark purple (#17152b)
- **Destaques**: Yellow (#ffd447), Pink (#ff6b9d), Green (#60e6a8)
- **Texto**: Branco/Muted
- **Font**: Be Vietnam Pro

---

## 📱 Responsivo

O hub é totalmente otimizado para:
- 📱 Celulares (mobile-first)
- 💻 Tablets
- 🖥️ Desktops

---

## 🔧 Funcionalidades Avançadas

### LocalStorage
Todos os dados são salvos em:
```javascript
localStorage.getItem('emoji_game_hub_data')
```

### Funções Disponíveis Globalmente
```javascript
// Registrar pontuação
recordGameScore('Game Name', 1000, '🎮');

// Obter informações do jogador
const player = getPlayerInfo();
console.log(player.name, player.emoji);

// Acessar dados do hub diretamente
window.gameHub.data
window.gameHub.updatePlayerName('Novo Nome')
window.gameHub.recordGameScore(...)
```

---

## 📋 Próximas Etapas Recomendadas

1. ✅ Integrar ba-chu-emoji como exemplo
2. ⏳ Integrar os outros 18 games
3. ⏳ Adicionar WebSocket para multiplayer real-time
4. ⏳ Implementar sistema de amigos
5. ⏳ Adicionar achievements/badges
6. ⏳ Criar leaderboard global com backend

---

## 🐛 Troubleshooting

### Pontuações não aparecem?
- Verifique se `game-hub-integration.js` está carregado
- Abra DevTools (F12) e veja a console
- Procure por "✅ Score recorded" ou "⚠️ Hub not available"

### Modal não fecha?
- Clique fora do modal para fechar
- Pressione ESC
- Ou clique no botão "Hủy"

### Dados apagados?
- Dados são salvos em localStorage
- Se apagar cache, dados são perdidos
- Use "Đặt lại" apenas se tiver certeza!

---

**URL Atual**: https://cde59192.bat-chu-emoji.pages.dev

Aproveite o novo hub! 🎮✨
