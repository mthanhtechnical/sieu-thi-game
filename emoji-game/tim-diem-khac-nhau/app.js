const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const scenes = [
  {
    name: "Quán cà phê thật",
    photo: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&h=675&q=80",
    differences: [
      { id: "cup-label", x: 26, y: 69, r: 4.2 },
      { id: "wall-note", x: 72, y: 29, r: 4.2 },
      { id: "table-mark", x: 54, y: 77, r: 4.4 },
      { id: "plant-tag", x: 85, y: 61, r: 4.8 },
      { id: "menu-dot", x: 39, y: 38, r: 4.2 },
      { id: "shadow-chip", x: 63, y: 55, r: 4.4 },
    ],
    details: [
      { x: 26, y: 69, w: 5.4, h: 2.2, base: { className: "real-tab paper-edge", opacity: .7 }, diff: { kind: "stamp", fromX: 21, fromY: 73, tone: "soft" }, rotate: -3 },
      { x: 72, y: 29, w: 5.4, h: 3.2, base: { className: "real-note" }, diff: { kind: "stamp", fromX: 76, fromY: 33, tone: "wall" }, rotate: 5 },
      { x: 54, y: 77, w: 8, h: 1.3, base: { className: "real-edge" }, diff: { kind: "stamp", fromX: 56, fromY: 82, tone: "wood" }, rotate: 0 },
      { x: 85, y: 61, w: 4.2, h: 4.2, base: { className: "real-leaf" }, diff: { kind: "stamp", fromX: 88, fromY: 66, tone: "soft" }, rotate: -14 },
      { x: 39, y: 38, w: 3, h: 3, base: { className: "real-screw" }, diff: { kind: "stamp", fromX: 43, fromY: 40, tone: "wall" }, rotate: 0 },
      { x: 63, y: 55, w: 7, h: 1.4, base: { className: "real-shadow-line" }, diff: { kind: "stamp", fromX: 65, fromY: 59, tone: "soft" }, rotate: -8 },
    ],
  },
  {
    name: "Bàn làm việc thật",
    photo: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&h=675&q=80",
    differences: [
      { id: "screen-sticker", x: 45, y: 38, r: 4.3 },
      { id: "desk-line", x: 64, y: 73, r: 4.4 },
      { id: "book-tab", x: 31, y: 64, r: 4.2 },
      { id: "plant-leaf", x: 82, y: 35, r: 4.6 },
      { id: "chair-mark", x: 74, y: 82, r: 4.8 },
      { id: "lamp-glow", x: 18, y: 28, r: 4.4 },
    ],
    details: [
      { x: 45, y: 38, w: 4.2, h: 3.8, base: { className: "real-note" }, diff: { kind: "stamp", fromX: 49, fromY: 42, tone: "screen" }, rotate: 8 },
      { x: 64, y: 73, w: 8, h: 1.3, base: { className: "real-edge" }, diff: { kind: "stamp", fromX: 67, fromY: 78, tone: "wood" }, rotate: -4 },
      { x: 31, y: 64, w: 5, h: 1.6, base: { className: "real-dark-strip" }, diff: { kind: "stamp", fromX: 35, fromY: 68, tone: "soft" }, rotate: 3 },
      { x: 82, y: 35, w: 3.6, h: 5.2, base: { className: "real-leaf long" }, diff: { kind: "stamp", fromX: 84, fromY: 40, tone: "wall" }, rotate: -16 },
      { x: 74, y: 82, w: 6.6, h: 1.5, base: { className: "real-shadow-line" }, diff: { kind: "stamp", fromX: 76, fromY: 86, tone: "floor" }, rotate: 4 },
      { x: 18, y: 28, w: 4.6, h: 4.6, base: { className: "real-light-dot" }, diff: { kind: "stamp", fromX: 22, fromY: 31, tone: "wall" }, rotate: 0 },
    ],
  },
  {
    name: "Quầy rau củ thật",
    photo: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&h=675&q=80",
    differences: [
      { id: "price-card", x: 24, y: 31, r: 4.2 },
      { id: "green-wrap", x: 68, y: 43, r: 4.8 },
      { id: "basket-thread", x: 52, y: 78, r: 4.4 },
      { id: "fruit-dot", x: 83, y: 67, r: 4.2 },
      { id: "paper-corner", x: 37, y: 57, r: 4.2 },
      { id: "tiny-shadow", x: 61, y: 26, r: 4.2 },
    ],
    details: [
      { x: 24, y: 31, w: 5.8, h: 2.4, base: { className: "real-note" }, diff: { kind: "stamp", fromX: 28, fromY: 34, tone: "produce" }, rotate: -4 },
      { x: 68, y: 43, w: 5.2, h: 4.8, base: { className: "real-leaf" }, diff: { kind: "stamp", fromX: 71, fromY: 48, tone: "produce" }, rotate: 0 },
      { x: 52, y: 78, w: 8.5, h: 1.4, base: { className: "real-basket-line" }, diff: { kind: "stamp", fromX: 54, fromY: 82, tone: "wood" }, rotate: 10 },
      { x: 83, y: 67, w: 4, h: 4, base: { className: "real-small-fruit" }, diff: { kind: "stamp", fromX: 86, fromY: 70, tone: "produce" }, rotate: 0 },
      { x: 37, y: 57, w: 4.2, h: 2.2, base: { className: "real-paper-corner" }, diff: { kind: "stamp", fromX: 41, fromY: 61, tone: "produce" }, rotate: 12 },
      { x: 61, y: 26, w: 5, h: 1.3, base: { className: "real-shadow-line" }, diff: { kind: "stamp", fromX: 64, fromY: 30, tone: "produce" }, rotate: -8 },
    ],
  },
  {
    name: "Ga tàu thật",
    photo: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&h=675&q=80",
    differences: [
      { id: "window-sign", x: 58, y: 38, r: 4.8 },
      { id: "door-stripe", x: 74, y: 57, r: 4.4 },
      { id: "platform-chip", x: 35, y: 78, r: 4.4 },
      { id: "rail-mark", x: 67, y: 86, r: 4.6 },
      { id: "sky-dot", x: 20, y: 19, r: 4.3 },
      { id: "light-panel", x: 86, y: 28, r: 4.4 },
    ],
    details: [
      { x: 58, y: 38, w: 5.5, h: 1.8, base: { className: "real-label" }, diff: { kind: "stamp", fromX: 61, fromY: 42, tone: "train" }, rotate: 2 },
      { x: 74, y: 57, w: 1.5, h: 7, base: { className: "real-door-line" }, diff: { kind: "stamp", fromX: 76, fromY: 62, tone: "train" }, rotate: 0 },
      { x: 35, y: 78, w: 5, h: 1.3, base: { className: "real-platform-chip" }, diff: { kind: "stamp", fromX: 39, fromY: 82, tone: "floor" }, rotate: -2 },
      { x: 67, y: 86, w: 8.2, h: 1.2, base: { className: "real-rail-line" }, diff: { kind: "stamp", fromX: 70, fromY: 89, tone: "floor" }, rotate: 0 },
      { x: 20, y: 19, w: 4.2, h: 4.2, base: { className: "real-light-dot" }, diff: { kind: "stamp", fromX: 23, fromY: 23, tone: "sky" }, rotate: 0 },
      { x: 86, y: 28, w: 5.5, h: 1.7, base: { className: "real-label dim" }, diff: { kind: "stamp", fromX: 88, fromY: 32, tone: "sky" }, rotate: 0 },
    ],
  },
  {
    name: "Studio làm việc thật",
    photo: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&h=675&q=80",
    differences: [
      { id: "frame-corner", x: 43, y: 29, r: 4.4 },
      { id: "cushion-line", x: 62, y: 70, r: 4.6 },
      { id: "shelf-tag", x: 78, y: 44, r: 4.3 },
      { id: "floor-mark", x: 29, y: 84, r: 4.5 },
      { id: "plant-dot", x: 18, y: 55, r: 4.4 },
      { id: "table-edge", x: 52, y: 58, r: 4.2 },
    ],
    details: [
      { x: 43, y: 29, w: 5, h: 1.3, base: { className: "real-frame-edge" }, diff: { kind: "stamp", fromX: 46, fromY: 33, tone: "wall" }, rotate: 0 },
      { x: 62, y: 70, w: 6.5, h: 1.5, base: { className: "real-cushion-seam" }, diff: { kind: "stamp", fromX: 65, fromY: 74, tone: "fabric" }, rotate: -5 },
      { x: 78, y: 44, w: 5, h: 2.2, base: { className: "real-note" }, diff: { kind: "stamp", fromX: 82, fromY: 48, tone: "shelf" }, rotate: 4 },
      { x: 29, y: 84, w: 6.2, h: 1.3, base: { className: "real-chair-foot" }, diff: { kind: "stamp", fromX: 32, fromY: 88, tone: "floor" }, rotate: 12 },
      { x: 18, y: 55, w: 4, h: 4, base: { className: "real-leaf" }, diff: { kind: "stamp", fromX: 21, fromY: 59, tone: "plant" }, rotate: 0 },
      { x: 52, y: 58, w: 6.6, h: 1.2, base: { className: "real-edge" }, diff: { kind: "stamp", fromX: 55, fromY: 62, tone: "wood" }, rotate: -3 },
    ],
  },
];
let state = {
  deck: [],
  index: 0,
  found: new Set(),
  score: 0,
  mistakes: 0,
  totalFound: 0,
  loadToken: 0,
  hinted: new Set(),
  photoReady: false,
};

const loadedPhotos = new Set();
const DAILY_HINT_LIMIT = 3;
const HINT_STORAGE_KEY = "tim-diem-khac-nhau-hints";

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderDetail(detail, changed, photo) {
  const variant = changed ? detail.diff : detail.base;
  if (!variant) return "";
  const rotate = detail.rotate || 0;
  const style = [
    `left:${detail.x}%`,
    `top:${detail.y}%`,
    `width:${detail.w}%`,
    `height:${detail.h}%`,
    `transform:translate(-50%,-50%) rotate(${rotate}deg)`,
  ];

  if (typeof variant === "string") {
    return `<span class="photo-detail ${variant}" style="${style.join(";")}"></span>`;
  }

  if (variant.kind === "stamp") {
    style.push(`--photo:url('${photo}')`);
    style.push(`background-position:${variant.fromX}% ${variant.fromY}%`);
    style.push(`border-radius:${variant.radius || 4}px`);
    return `<span class="photo-detail clone-stamp ${variant.tone || ""}" style="${style.join(";")}"></span>`;
  }

  const className = variant.className || "";
  if (variant.opacity) style.push(`opacity:${variant.opacity}`);
  return `<span class="photo-detail ${className}" style="${style.join(";")}"></span>`;
}

function renderPhotoScene(level, changed) {
  const details = level.details.map((detail) => renderDetail(detail, changed, level.photo)).join("");
  return `<div class="photo-scene" style="background-image:url('${level.photo}')">${details}</div>`;
}

function renderLoadingScene() {
  return `<div class="loading-scene">Đang tải ảnh...</div>`;
}

function preloadPhoto(url) {
  if (loadedPhotos.has(url)) return Promise.resolve();

  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      loadedPhotos.add(url);
      resolve();
    };
    image.onerror = resolve;
    image.src = url;
  });
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((screen) => screen.classList.toggle("active", screen.id === id));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function updateBestScore() {
  $("#bestScore").textContent = Number(localStorage.getItem("tim-diem-khac-nhau-best") || 0);
}

function todayKey() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function getHintUsage() {
  try {
    const saved = JSON.parse(localStorage.getItem(HINT_STORAGE_KEY) || "{}");
    if (saved.date === todayKey()) return Number(saved.used || 0);
  } catch (error) {
    return 0;
  }
  return 0;
}

function setHintUsage(used) {
  localStorage.setItem(HINT_STORAGE_KEY, JSON.stringify({ date: todayKey(), used }));
}

function updateHintButton() {
  const button = $("#hintButton");
  if (!button) return;
  const remaining = Math.max(0, DAILY_HINT_LIMIT - getHintUsage());
  $("#hintText").textContent = `${remaining}/${DAILY_HINT_LIMIT} hôm nay`;
  button.disabled = remaining <= 0 || !state.photoReady;
}

function startGame() {
  state = { deck: shuffle(scenes), index: 0, found: new Set(), score: 0, mistakes: 0, totalFound: 0, loadToken: 0, hinted: new Set(), photoReady: false };
  showScreen("gameScreen");
  renderLevel();
}

async function renderLevel() {
  const level = state.deck[state.index];
  const token = (state.loadToken += 1);
  state.found = new Set();
  state.hinted = new Set();
  state.photoReady = false;
  $("#levelText").textContent = `Màn ${state.index + 1}/${state.deck.length}`;
  $("#scoreText").textContent = state.score;
  $("#mistakeText").textContent = `Sai ${state.mistakes}`;
  $("#foundText").textContent = `0/${level.differences.length} đã tìm`;
  $("#progressBar").style.width = `${(state.index / state.deck.length) * 100}%`;
  $("#leftScene").innerHTML = renderLoadingScene();
  $("#rightScene").innerHTML = renderLoadingScene();
  $("#rightScene").onclick = null;
  updateHintButton();

  await preloadPhoto(level.photo);
  if (token !== state.loadToken || level !== state.deck[state.index]) return;

  $("#leftScene").innerHTML = renderPhotoScene(level, false);
  $("#rightScene").innerHTML = renderPhotoScene(level, true);

  state.photoReady = true;
  $("#rightScene").onclick = handleSceneClick;
  updateHintButton();
}

function clickPointInScene(event) {
  const rect = $("#rightScene").getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * 100,
    y: ((event.clientY - rect.top) / rect.height) * 100,
  };
}

function nearestDifference(point) {
  const level = state.deck[state.index];
  let nearest = null;
  let nearestDistance = Infinity;

  level.differences.forEach((diff) => {
    if (state.found.has(diff.id)) return;
    const dx = point.x - diff.x;
    const dy = point.y - diff.y;
    const distance = Math.hypot(dx, dy);
    const radius = diff.r;
    if (distance <= radius && distance < nearestDistance) {
      nearest = diff;
      nearestDistance = distance;
    }
  });

  return nearest;
}

function handleSceneClick(event) {
  const diff = nearestDifference(clickPointInScene(event));
  if (diff) {
    foundDifference(diff);
    return;
  }

  state.mistakes += 1;
  $("#mistakeText").textContent = `Sai ${state.mistakes}`;
  $("#scoreText").textContent = state.score;
  $("#rightScene").classList.remove("miss");
  void $("#rightScene").offsetWidth;
  $("#rightScene").classList.add("miss");
  showToast("Chưa đúng vị trí");
}

function foundDifference(diff) {
  if (state.found.has(diff.id)) return;
  state.found.add(diff.id);
  state.totalFound += 1;
  state.score += Math.max(40, 120 - state.mistakes * 5);

  const mark = document.createElement("span");
  mark.className = "mark";
  mark.textContent = "✓";
  mark.style.left = `${diff.x}%`;
  mark.style.top = `${diff.y}%`;
  $("#rightScene").appendChild(mark);
  const hint = document.querySelector(`.hint-mark[data-id="${diff.id}"]`);
  if (hint) hint.remove();

  const level = state.deck[state.index];
  $("#foundText").textContent = `${state.found.size}/${level.differences.length} đã tìm`;
  $("#scoreText").textContent = state.score;

  if (state.found.size >= level.differences.length) {
    setTimeout(finishLevel, 450);
  }
}

function showHint() {
  if (!state.photoReady) {
    showToast("Ảnh chưa tải xong");
    return;
  }

  const used = getHintUsage();
  if (used >= DAILY_HINT_LIMIT) {
    updateHintButton();
    showToast("Bạn đã dùng hết gợi ý hôm nay");
    return;
  }

  const level = state.deck[state.index];
  const candidates = level.differences.filter((diff) => !state.found.has(diff.id) && !state.hinted.has(diff.id));
  if (!candidates.length) {
    showToast("Màn này không còn điểm mới để gợi ý");
    return;
  }

  const diff = candidates[Math.floor(Math.random() * candidates.length)];
  state.hinted.add(diff.id);
  setHintUsage(used + 1);
  updateHintButton();

  const hint = document.createElement("span");
  hint.className = "hint-mark";
  hint.dataset.id = diff.id;
  hint.style.left = `${diff.x}%`;
  hint.style.top = `${diff.y}%`;
  $("#rightScene").appendChild(hint);
  showToast("Đã khoanh vùng một điểm khác");
}

function finishLevel() {
  const level = state.deck[state.index];
  $("#feedbackTitle").textContent = level.name;
  $("#feedbackText").textContent = `Bạn đã tìm đủ ${level.differences.length} điểm khác nhau.`;
  $("#progressBar").style.width = `${((state.index + 1) / state.deck.length) * 100}%`;
  state.index += 1;
  showScreen("feedbackScreen");
}

function nextLevel() {
  if (state.index >= state.deck.length) return finishGame();
  showScreen("gameScreen");
  renderLevel();
}

function finishGame() {
  const bonus = Math.max(0, 500 - state.mistakes * 25);
  state.score += bonus;
  const oldBest = Number(localStorage.getItem("tim-diem-khac-nhau-best") || 0);
  if (state.score > oldBest) localStorage.setItem("tim-diem-khac-nhau-best", state.score);
  updateBestScore();
  $("#finalScore").textContent = state.score;
  $("#finalLine").textContent = `${state.totalFound} điểm khác nhau · ${state.mistakes} lần sai`;
  $("#resultTitle").textContent = state.mistakes <= 4 ? "Mắt tinh thật sự!" : "Quan sát rất ổn!";
  showScreen("resultScreen");
}

async function shareText(text, fallbackMessage) {
  const url = window.location.origin + window.location.pathname;
  if (navigator.share) {
    try {
      await navigator.share({ title: "Tìm điểm khác nhau", text, url });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  await navigator.clipboard.writeText(`${text} ${url}`);
  showToast(fallbackMessage);
}

$("#startButton").onclick = startGame;
$("#replayButton").onclick = startGame;
$("#nextButton").onclick = nextLevel;
$("#hintButton").onclick = showHint;
$("#shareGameButton").onclick = () => shareText("Thử chơi Tìm điểm khác nhau: so sánh hai bức tranh và tìm 6 chi tiết bị đổi.", "Đã sao chép link game");
$("#welcomeShareButton").onclick = $("#shareGameButton").onclick;
$("#shareResultButton").onclick = () => shareText(`Tôi được ${state.score} điểm trong Tìm điểm khác nhau, tìm được ${state.totalFound} điểm.`, "Đã sao chép lời thách");

updateBestScore();
updateHintButton();
