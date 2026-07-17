const ROUND_SIZE = 10;

const words = [
  ["Animals", "🐱", "Cat", ["Cat", "Dog", "Fish"]],
  ["Animals", "🐶", "Dog", ["Dog", "Cat", "Bird"]],
  ["Animals", "🐟", "Fish", ["Fish", "Duck", "Horse"]],
  ["Animals", "🐦", "Bird", ["Bird", "Bear", "Frog"]],
  ["Animals", "🐰", "Rabbit", ["Rabbit", "Lion", "Tiger"]],
  ["Animals", "🦁", "Lion", ["Lion", "Mouse", "Goat"]],
  ["Animals", "🐯", "Tiger", ["Tiger", "Turtle", "Chicken"]],
  ["Animals", "🐻", "Bear", ["Bear", "Bee", "Duck"]],
  ["Animals", "🐭", "Mouse", ["Mouse", "Monkey", "Cow"]],
  ["Animals", "🐸", "Frog", ["Frog", "Fox", "Fish"]],
  ["Animals", "🐵", "Monkey", ["Monkey", "Mouse", "Rabbit"]],
  ["Animals", "🐮", "Cow", ["Cow", "Cat", "Crab"]],
  ["Animals", "🐷", "Pig", ["Pig", "Dog", "Duck"]],
  ["Animals", "🐔", "Chicken", ["Chicken", "Tiger", "Lion"]],
  ["Animals", "🦆", "Duck", ["Duck", "Dog", "Bear"]],
  ["Animals", "🐝", "Bee", ["Bee", "Bird", "Bear"]],
  ["Animals", "🦋", "Butterfly", ["Butterfly", "Bee", "Bird"]],
  ["Animals", "🐘", "Elephant", ["Elephant", "Rabbit", "Mouse"]],
  ["Animals", "🦒", "Giraffe", ["Giraffe", "Tiger", "Frog"]],
  ["Animals", "🐢", "Turtle", ["Turtle", "Tiger", "Turkey"]],

  ["Food", "🍎", "Apple", ["Apple", "Orange", "Banana"]],
  ["Food", "🍌", "Banana", ["Banana", "Apple", "Grape"]],
  ["Food", "🍊", "Orange", ["Orange", "Lemon", "Pear"]],
  ["Food", "🍇", "Grape", ["Grape", "Mango", "Apple"]],
  ["Food", "🍓", "Strawberry", ["Strawberry", "Watermelon", "Banana"]],
  ["Food", "🥭", "Mango", ["Mango", "Grape", "Peach"]],
  ["Food", "🍉", "Watermelon", ["Watermelon", "Apple", "Orange"]],
  ["Food", "🍍", "Pineapple", ["Pineapple", "Potato", "Pumpkin"]],
  ["Food", "🍑", "Peach", ["Peach", "Pear", "Pencil"]],
  ["Food", "🍐", "Pear", ["Pear", "Peach", "Pizza"]],
  ["Food", "🥕", "Carrot", ["Carrot", "Potato", "Tomato"]],
  ["Food", "🍅", "Tomato", ["Tomato", "Carrot", "Onion"]],
  ["Food", "🥔", "Potato", ["Potato", "Banana", "Grape"]],
  ["Food", "🍞", "Bread", ["Bread", "Book", "Bed"]],
  ["Food", "🥚", "Egg", ["Egg", "Eye", "Ear"]],
  ["Food", "🥛", "Milk", ["Milk", "Moon", "Mouse"]],
  ["Food", "🍚", "Rice", ["Rice", "Rain", "Run"]],
  ["Food", "🍜", "Noodles", ["Noodles", "Nose", "Night"]],
  ["Food", "🍰", "Cake", ["Cake", "Cat", "Car"]],
  ["Food", "🧀", "Cheese", ["Cheese", "Chicken", "Chair"]],

  ["Colors", "🔴", "Red", ["Red", "Blue", "Green"]],
  ["Colors", "🔵", "Blue", ["Blue", "Black", "Brown"]],
  ["Colors", "🟡", "Yellow", ["Yellow", "Purple", "White"]],
  ["Colors", "🟢", "Green", ["Green", "Gray", "Red"]],
  ["Colors", "⚫", "Black", ["Black", "Pink", "Blue"]],
  ["Colors", "⚪", "White", ["White", "Orange", "Green"]],
  ["Colors", "🟣", "Purple", ["Purple", "Yellow", "Brown"]],
  ["Colors", "🟠", "Orange", ["Orange", "Red", "White"]],
  ["Colors", "🌸", "Pink", ["Pink", "Black", "Green"]],
  ["Colors", "🤎", "Brown", ["Brown", "Blue", "Purple"]],
  ["Colors", "🩶", "Gray", ["Gray", "Green", "Grape"]],
  ["Colors", "💛", "Gold", ["Gold", "Blue", "Black"]],

  ["Body", "👁️", "Eye", ["Eye", "Ear", "Nose"]],
  ["Body", "👂", "Ear", ["Ear", "Eye", "Hand"]],
  ["Body", "👃", "Nose", ["Nose", "Mouth", "Foot"]],
  ["Body", "👄", "Mouth", ["Mouth", "Nose", "Ear"]],
  ["Body", "🖐️", "Hand", ["Hand", "Head", "Foot"]],
  ["Body", "🦶", "Foot", ["Foot", "Face", "Eye"]],
  ["Body", "😀", "Face", ["Face", "Foot", "Fish"]],
  ["Body", "🦷", "Tooth", ["Tooth", "Tiger", "Train"]],
  ["Body", "👱", "Hair", ["Hair", "Hand", "House"]],
  ["Body", "🦵", "Leg", ["Leg", "Lion", "Lamp"]],

  ["Feelings", "🙂", "Happy", ["Happy", "Sad", "Angry"]],
  ["Feelings", "😢", "Sad", ["Sad", "Happy", "Sleepy"]],
  ["Feelings", "😴", "Sleepy", ["Sleepy", "Hungry", "Happy"]],
  ["Feelings", "😋", "Hungry", ["Hungry", "Cold", "Sad"]],
  ["Feelings", "😡", "Angry", ["Angry", "Happy", "Funny"]],
  ["Feelings", "🥶", "Cold", ["Cold", "Hot", "Sad"]],
  ["Feelings", "🥵", "Hot", ["Hot", "Cold", "Sleepy"]],
  ["Feelings", "😨", "Scared", ["Scared", "Happy", "Hungry"]],
  ["Feelings", "😂", "Funny", ["Funny", "Angry", "Tired"]],
  ["Feelings", "😫", "Tired", ["Tired", "Hot", "Happy"]],

  ["Things", "📚", "Book", ["Book", "Bag", "Ball"]],
  ["Things", "✏️", "Pencil", ["Pencil", "Ruler", "Chair"]],
  ["Things", "🎒", "Bag", ["Bag", "Book", "Desk"]],
  ["Things", "⚽", "Ball", ["Ball", "Bell", "Book"]],
  ["Things", "🪑", "Chair", ["Chair", "Cheese", "Chicken"]],
  ["Things", "🛏️", "Bed", ["Bed", "Bird", "Bread"]],
  ["Things", "🚪", "Door", ["Door", "Dog", "Duck"]],
  ["Things", "💡", "Lamp", ["Lamp", "Leg", "Lion"]],
  ["Things", "🧸", "Toy", ["Toy", "Tiger", "Tooth"]],
  ["Things", "📱", "Phone", ["Phone", "Plane", "Pig"]],

  ["Vehicles", "🚗", "Car", ["Car", "Bus", "Train"]],
  ["Vehicles", "🚌", "Bus", ["Bus", "Car", "Bike"]],
  ["Vehicles", "🚲", "Bike", ["Bike", "Boat", "Plane"]],
  ["Vehicles", "✈️", "Plane", ["Plane", "Train", "Car"]],
  ["Vehicles", "🚂", "Train", ["Train", "Truck", "Tree"]],
  ["Vehicles", "⛵", "Boat", ["Boat", "Bike", "Book"]],
  ["Vehicles", "🚕", "Taxi", ["Taxi", "Train", "Tiger"]],
  ["Vehicles", "🚑", "Ambulance", ["Ambulance", "Apple", "Airplane"]],
  ["Vehicles", "🚒", "Fire truck", ["Fire truck", "Fish", "Frog"]],
  ["Vehicles", "🚚", "Truck", ["Truck", "Train", "Turtle"]],

  ["Actions", "🏃", "Run", ["Run", "Read", "Sleep"]],
  ["Actions", "🚶", "Walk", ["Walk", "Jump", "Drink"]],
  ["Actions", "🦘", "Jump", ["Jump", "Eat", "Draw"]],
  ["Actions", "📖", "Read", ["Read", "Run", "Wash"]],
  ["Actions", "✍️", "Write", ["Write", "Sing", "Sleep"]],
  ["Actions", "🎨", "Draw", ["Draw", "Drink", "Walk"]],
  ["Actions", "🍽️", "Eat", ["Eat", "Read", "Jump"]],
  ["Actions", "🥤", "Drink", ["Drink", "Draw", "Run"]],
  ["Actions", "🎵", "Sing", ["Sing", "Sleep", "Write"]],
  ["Actions", "🛏️", "Sleep", ["Sleep", "Eat", "Walk"]],
  ["Actions", "🧼", "Wash", ["Wash", "Walk", "Write"]],
  ["Actions", "🕺", "Dance", ["Dance", "Drink", "Draw"]],
];

function toTitleCase(word) {
  return word.toLowerCase().replace(/\b[a-z]/g, (ch) => ch.toUpperCase());
}
function buildEnglishChoices(answer, pool) {
  const others = pool.filter((word) => word !== answer).sort((a, b) => Math.abs(a.length - answer.length) - Math.abs(b.length - answer.length));
  return [answer, ...others.slice(0, 2)].sort(() => Math.random() - 0.5);
}
{
  const existing = new Set(words.map((item) => item[2].toUpperCase()));
  const pool = (window.GAME_WORD_BANK_1000 || []).map(toTitleCase);
  const extras = pool
    .filter((word) => !existing.has(word.toUpperCase()))
    .map((word) => ["Vocabulary", "🔤", word, buildEnglishChoices(word, pool)]);
  words.push(...extras.slice(0, Math.max(0, 1000 - words.length)));
}

const state = {
  deck: [],
  index: 0,
  correct: 0,
  startedAt: 0,
  currentAnswer: "",
  lastCorrect: true,
  resultTitle: "",
  resultMessage: "",
  streak: 0,
  bestStreak: 0,
  lives: 3,
  maxLives: 3,
};
const $ = (selector) => document.querySelector(selector);
const screens = [...document.querySelectorAll(".screen")];
function createSessionId() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return "kids-english-" + Date.now() + "-" + Math.random().toString(36).slice(2);
}
const sessionId = sessionStorage.getItem("kids-english-session") || createSessionId();
sessionStorage.setItem("kids-english-session", sessionId);
const visitorId = localStorage.getItem("kids-english-visitor") || createSessionId();
localStorage.setItem("kids-english-visitor", visitorId);
let audioContext;
let soundEnabled = localStorage.getItem("kids-english-sound") !== "false";
let voices = [];

function shuffle(items) { return [...items].sort(() => Math.random() - 0.5); }
function showScreen(id) { screens.forEach((screen) => screen.classList.toggle("active", screen.id === id)); }
function loadVoices() { voices = speechSynthesis.getVoices(); }
function getVoice(lang) {
  return voices.find((voice) => voice.lang === lang)
    || voices.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith(lang.slice(0, 2).toLowerCase()))
    || null;
}
function normalizeVietnameseSpeech(text) {
  return String(text)
    .replace(/English/g, "ing lịt");
}
function makeUtterance(text, lang = "vi-VN") {
  const utterance = new SpeechSynthesisUtterance(lang.startsWith("vi") ? normalizeVietnameseSpeech(text) : text);
  utterance.lang = lang;
  utterance.voice = getVoice(lang);
  utterance.rate = lang.startsWith("en") ? 0.72 : 0.85;
  utterance.pitch = lang.startsWith("en") ? 1 : 1.08;
  return utterance;
}
function speak(text, lang = "vi-VN", shouldCancel = true) {
  if (!soundEnabled || !("speechSynthesis" in window)) return;
  if (!voices.length) loadVoices();
  if (shouldCancel) speechSynthesis.cancel();
  speechSynthesis.speak(makeUtterance(text, lang));
}
function speakWord(word, shouldCancel = true) {
  speak(word, "en-US", shouldCancel);
}
function speakQuestion() {
  if (!("speechSynthesis" in window)) return;
  if (!voices.length) loadVoices();
  speechSynthesis.cancel();
  speechSynthesis.speak(makeUtterance("Từ tiếng Anh của hình này là gì?", "vi-VN"));
}
function tone(frequency, duration = .15, delay = 0) {
  if (!soundEnabled) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!audioContext) audioContext = new AudioContext();
  const start = audioContext.currentTime + delay;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "triangle";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(.0001, start);
  gain.gain.exponentialRampToValueAtTime(.09, start + .02);
  gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + .03);
}
function happySound() { [523, 659, 784].forEach((note, index) => tone(note, .2, index * .08)); }
function gentleSound() { tone(330, .18); tone(294, .22, .1); }
function finishSound() { [392, 523, 659, 784, 1046].forEach((note, index) => tone(note, .25, index * .09)); }
function getSource() {
  const params = new URLSearchParams(location.search);
  if (params.get("utm_source")) return `kids-english:${params.get("utm_source")}`.slice(0, 80);
  return "kids-english";
}
function track(event, details = {}) {
  fetch("/api/events", {
    method: "POST",
    headers: { "content-type": "application/json" },
    keepalive: true,
    body: JSON.stringify({
      event, eventId: createSessionId(), sessionId, visitorId, gameSlug: "kids-english",
      source: getSource(),
      device: innerWidth <= 600 ? "mobile" : innerWidth <= 1024 ? "tablet" : "desktop",
      ...details,
    }),
  }).catch(() => {});
}
function renderSound() {
  const button = $("#soundButton");
  button.textContent = soundEnabled ? "🔊" : "🔈";
  button.classList.toggle("muted", !soundEnabled);
  button.setAttribute("aria-label", soundEnabled ? "Tắt hiệu ứng âm thanh" : "Bật hiệu ứng âm thanh");
}
function renderStats() {
  $("#score").textContent = state.correct;
  $("#streak").textContent = state.streak;
  $("#lives").textContent = "❤️".repeat(state.lives) + "🤍".repeat(state.maxLives - state.lives);
}
function startGame() {
  state.deck = shuffle(words).slice(0, ROUND_SIZE);
  state.index = 0;
  state.correct = 0;
  state.startedAt = Date.now();
  state.streak = 0;
  state.bestStreak = 0;
  state.lives = state.maxLives;
  track("game_start", { variant: "english" });
  showScreen("gameScreen");
  renderQuestion();
}
function renderQuestion() {
  const [category, emoji, answer, answers] = state.deck[state.index];
  state.currentAnswer = answer;
  $("#questionNumber").textContent = `Câu ${state.index + 1} / ${ROUND_SIZE}`;
  renderStats();
  $("#progressBar").style.width = `${((state.index + 1) / ROUND_SIZE) * 100}%`;
  $("#category").textContent = category;
  $("#questionEmoji").textContent = emoji;
  $("#questionText").textContent = "Từ tiếng Anh của hình này là gì?";
  $("#answerGrid").innerHTML = shuffle(answers)
    .map((item) => `<button class="answer-button" data-answer="${item}">${item}</button>`)
    .join("");
  setTimeout(speakQuestion, 350);
}
function speakAnswer(correct, answer) {
  if (!("speechSynthesis" in window)) return;
  if (!voices.length) loadVoices();
  speechSynthesis.cancel();
  if (correct) {
    speechSynthesis.speak(makeUtterance("Great!", "en-US"));
    speechSynthesis.speak(makeUtterance("Đáp án là", "vi-VN"));
  } else {
    speechSynthesis.speak(makeUtterance("Try again!", "en-US"));
    speechSynthesis.speak(makeUtterance("Đáp án đúng là", "vi-VN"));
  }
  speechSynthesis.speak(makeUtterance(answer, "en-US"));
}
function speakResult(title, message) {
  if (!("speechSynthesis" in window)) return;
  if (!voices.length) loadVoices();
  speechSynthesis.cancel();
  speechSynthesis.speak(makeUtterance(title, "en-US"));
  speechSynthesis.speak(makeUtterance(message, "vi-VN"));
}
function speakCurrentScreen() {
  const activeScreen = document.querySelector(".screen.active");
  if (!activeScreen) return;
  if (activeScreen.id === "gameScreen") {
    speakQuestion();
    return;
  }
  if (activeScreen.id === "feedbackScreen") {
    speakAnswer(state.lastCorrect, state.currentAnswer);
    return;
  }
  if (activeScreen.id === "resultScreen") {
    speakResult(state.resultTitle || "Good job!", state.resultMessage || "Bạn nhỏ đã hoàn thành trò chơi.");
    return;
  }
  speak("Bạn nhỏ nhìn emoji, chọn từ tiếng Anh đúng và nghe phát âm chuẩn từng từ.");
}
function chooseAnswer(selected) {
  const [, , answer] = state.deck[state.index];
  const correct = selected === answer;
  state.lastCorrect = correct;
  document.querySelectorAll(".answer-button").forEach((button) => { button.disabled = true; });
  if (correct) {
    state.correct += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    happySound();
    $("#feedbackFace").textContent = "🥳";
    $("#feedbackLabel").textContent = "Great!";
    $("#feedbackMessage").textContent = state.streak > 1
      ? `Bạn nhỏ đã chọn đúng rồi! Chuỗi hiện tại là ${state.streak} lần liên tiếp.`
      : "Bạn nhỏ đã chọn đúng rồi!";
  } else {
    state.streak = 0;
    state.lives -= 1;
    gentleSound();
    $("#feedbackFace").textContent = "🌱";
    $("#feedbackLabel").textContent = "Try again!";
    $("#feedbackMessage").textContent = state.lives > 0
      ? `Không sao, còn ${state.lives} mạng. Mình nghe lại từ này nhé.`
      : "Bạn đã hết mạng, mình sẽ tổng kết kết quả cho bạn nhé.";
  }
  renderStats();
  $("#feedbackAnswer").textContent = answer;
  state.currentAnswer = answer;
  setTimeout(() => {
    showScreen("feedbackScreen");
    speakAnswer(correct, answer);
    if (!correct && state.lives <= 0) {
      setTimeout(finishGame, 1000);
    }
  }, 300);
}
function nextQuestion() {
  if (state.lives <= 0) return finishGame();
  state.index += 1;
  if (state.index >= ROUND_SIZE) return finishGame();
  showScreen("gameScreen");
  renderQuestion();
}
function finishGame() {
  finishSound();
  track("game_complete", {
    variant: "english",
    score: state.correct * 100,
    correct: state.correct,
    duration: Math.max(1, Math.round((Date.now() - state.startedAt) / 1000)),
  });
  const messages = state.correct >= Math.ceil(ROUND_SIZE * 0.85)
    ? ["Excellent!", "Bạn nhỏ nhớ từ tiếng Anh rất tốt!"]
    : state.correct >= Math.ceil(ROUND_SIZE * 0.6)
      ? ["Good job!", "Chơi thêm một lượt, bạn nhỏ sẽ nhớ thêm nhiều từ."]
      : ["Nice try!", "Mỗi lần chơi là một lần mình nghe và nhớ thêm nhé!"];
  state.resultTitle = messages[0];
  state.resultMessage = `Bạn nhỏ trả lời đúng ${state.correct} trên ${ROUND_SIZE} câu. Chuỗi cao nhất ${state.bestStreak} lần. ${messages[1]}`;
  $("#resultTitle").textContent = messages[0];
  $("#resultMessage").textContent = state.resultMessage;
  $("#finalScore").textContent = `${state.correct} / ${ROUND_SIZE}`;
  $("#resultStars").textContent = "⭐".repeat(Math.max(1, state.correct)) || "🌱";
  showScreen("resultScreen");
  speakResult(messages[0], `Bạn nhỏ trả lời đúng ${state.correct} trên ${ROUND_SIZE} câu.`);
}
function toast(message) {
  $("#toast").textContent = message;
  $("#toast").classList.add("show");
  setTimeout(() => $("#toast").classList.remove("show"), 2200);
}
async function share() {
  track("share", { variant: "english", score: state.correct * 100, correct: state.correct });
  const text = `Bạn nhỏ trả lời đúng ${state.correct}/${ROUND_SIZE} câu trong Vui Học English 5+. Mời các bạn nhỏ cùng học từ vựng!`;
  if (navigator.share) {
    try { await navigator.share({ title: "Vui Học English 5+", text, url: location.href }); return; } catch {}
  }
  await navigator.clipboard.writeText(`${text} ${location.href}`);
  toast("Đã sao chép đường dẫn");
}

$("#startButton").addEventListener("click", startGame);
$("#replayButton").addEventListener("click", startGame);
$("#nextButton").addEventListener("click", nextQuestion);
$("#listenButton").addEventListener("click", speakQuestion);
$("#wordButton").addEventListener("click", () => speakWord(state.currentAnswer));
$("#speakButton").addEventListener("click", speakCurrentScreen);
$("#soundButton").addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  localStorage.setItem("kids-english-sound", String(soundEnabled));
  renderSound();
  if (soundEnabled) happySound();
});
$("#shareButton").addEventListener("click", share);
$("#answerGrid").addEventListener("click", (event) => {
  const button = event.target.closest(".answer-button");
  if (button) { speakWord(button.dataset.answer); chooseAnswer(button.dataset.answer); }
});
$("#answerGrid").addEventListener("pointerover", (event) => {
  const button = event.target.closest(".answer-button");
  if (button && !button.contains(event.relatedTarget)) speakWord(button.dataset.answer);
});

if ("speechSynthesis" in window) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}
let lastTouchEnd = 0;
document.addEventListener("touchend", (event) => {
  const now = Date.now();
  if (now - lastTouchEnd <= 350) event.preventDefault();
  lastTouchEnd = now;
}, false);
document.addEventListener("gesturestart", (event) => event.preventDefault(), false);
renderSound();
track("visit", { variant: "english" });
