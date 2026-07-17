const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const rounds = [
  {
    keyword: "Áp lực deadline",
    hint: "Một chuỗi hình về thời gian, công việc và cảm giác bị dí sát nút.",
    pictures: [
      ["⏰", "đồng hồ"],
      ["📄", "tài liệu"],
      ["🔥", "gấp"],
      ["😵", "căng"],
    ],
    choices: ["Áp lực deadline", "Lịch họp dày", "Ôn thi cuối kỳ", "Làm việc nhóm", "Tin nhắn khẩn", "Kế hoạch tháng"],
    memory: {
      question: "Hình nào nằm ngay trước biểu tượng lửa?",
      choices: ["📄 Tài liệu", "⏰ Đồng hồ", "😵 Mặt choáng", "📌 Ghim việc"],
      answer: "📄 Tài liệu",
    },
  },
  {
    keyword: "Hoài niệm tuổi thơ",
    hint: "Không chỉ là đồ vật cũ, mà là cảm giác nhớ lại một thời đã qua.",
    pictures: [
      ["🪁", "diều"],
      ["🍭", "kẹo"],
      ["📼", "băng"],
      ["🏠", "nhà"],
    ],
    choices: ["Hoài niệm tuổi thơ", "Dọn nhà cuối tuần", "Tiệc sinh nhật", "Chuyến về quê", "Ngày tựu trường", "Góc đồ cũ"],
    memory: {
      question: "Biểu tượng nào KHÔNG xuất hiện trong bộ hình?",
      choices: ["🎮 Tay cầm game", "🪁 Diều", "🍭 Kẹo", "📼 Băng video"],
      answer: "🎮 Tay cầm game",
    },
  },
  {
    keyword: "Một ngày tự chăm sóc",
    hint: "Chuỗi hình gợi ý việc chậm lại và phục hồi năng lượng cá nhân.",
    pictures: [
      ["🛁", "tắm"],
      ["🕯️", "nến"],
      ["📵", "ngắt kết nối"],
      ["🍵", "trà"],
    ],
    choices: ["Một ngày tự chăm sóc", "Dọn phòng tối giản", "Buổi hẹn nhẹ nhàng", "Nghi thức buổi sáng", "Làm việc tập trung", "Đi spa cuối tuần"],
    memory: {
      question: "Biểu tượng ngắt kết nối đứng ở vị trí nào?",
      choices: ["Vị trí 3", "Vị trí 1", "Vị trí 2", "Vị trí 4"],
      answer: "Vị trí 3",
    },
  },
  {
    keyword: "Khởi nghiệp từ số 0",
    hint: "Từ ý tưởng nhỏ, tiền ít, thử nghiệm và tăng trưởng dần.",
    pictures: [
      ["💡", "ý tưởng"],
      ["🪙", "vốn ít"],
      ["🧪", "thử"],
      ["📈", "tăng"],
    ],
    choices: ["Khởi nghiệp từ số 0", "Đầu tư dài hạn", "Bài thuyết trình", "Ra mắt sản phẩm", "Học kỹ năng mới", "Tăng lương cuối năm"],
    memory: {
      question: "Sau đồng xu là biểu tượng nào?",
      choices: ["🧪 Ống nghiệm", "📈 Biểu đồ tăng", "💡 Bóng đèn", "📦 Hộp hàng"],
      answer: "🧪 Ống nghiệm",
    },
  },
  {
    keyword: "Yêu xa",
    hint: "Một mối quan hệ có khoảng cách, lịch gọi và cảm xúc nhớ nhung.",
    pictures: [
      ["📱", "điện thoại"],
      ["🛫", "xa"],
      ["🗓️", "lịch"],
      ["💌", "thư"],
    ],
    choices: ["Yêu xa", "Chuyến công tác", "Đặt vé du lịch", "Tin nhắn công việc", "Kế hoạch gặp bạn", "Nhớ nhà"],
    memory: {
      question: "Bộ hình có biểu tượng nào liên quan đến thời gian chờ?",
      choices: ["🗓️ Lịch", "⏰ Đồng hồ", "⌛ Đồng hồ cát", "🌙 Mặt trăng"],
      answer: "🗓️ Lịch",
    },
  },
  {
    keyword: "Tài chính cá nhân",
    hint: "Không phải làm giàu nhanh, mà là ghi chép, tiết kiệm và bảo vệ tiền.",
    pictures: [
      ["🧾", "hóa đơn"],
      ["🐷", "tiết kiệm"],
      ["🛡️", "bảo vệ"],
      ["📊", "theo dõi"],
    ],
    choices: ["Tài chính cá nhân", "Mua sắm thông minh", "Kế toán công ty", "Kế hoạch bảo hiểm", "Đầu tư cổ phiếu", "Trả nợ ngân hàng"],
    memory: {
      question: "Biểu tượng chiếc khiên nằm giữa hai hình nào?",
      choices: ["🐷 và 📊", "🧾 và 🐷", "📊 và 🧾", "🐷 và 🧾"],
      answer: "🐷 và 📊",
    },
  },
  {
    keyword: "Chữa lành sau chia tay",
    hint: "Một câu chuyện đi từ tổn thương sang bình tâm, không chỉ là buồn.",
    pictures: [
      ["💔", "vỡ"],
      ["🌧️", "buồn"],
      ["🧘", "tĩnh"],
      ["🌤️", "sáng lại"],
    ],
    choices: ["Chữa lành sau chia tay", "Ngày mưa trong lòng", "Tập thiền buổi sáng", "Tình yêu mới", "Viết nhật ký", "Vượt qua thất bại"],
    memory: {
      question: "Trình tự cảm xúc đúng của bộ hình là gì?",
      choices: ["💔 → 🌧️ → 🧘 → 🌤️", "🌧️ → 💔 → 🌤️ → 🧘", "🧘 → 💔 → 🌧️ → 🌤️", "💔 → 🧘 → 🌧️ → 🌤️"],
      answer: "💔 → 🌧️ → 🧘 → 🌤️",
    },
  },
  {
    keyword: "Đi làm ngày thứ hai",
    hint: "Gợi ý một buổi sáng hơi uể oải nhưng vẫn phải vào guồng.",
    pictures: [
      ["☕", "cà phê"],
      ["🚌", "đi làm"],
      ["💻", "máy"],
      ["😴", "buồn ngủ"],
    ],
    choices: ["Đi làm ngày thứ hai", "Làm việc từ xa", "Chuyến xe đêm", "Cày deadline", "Buổi học online", "Một ngày lười"],
    memory: {
      question: "Hình nào xuất hiện sau xe buýt?",
      choices: ["💻 Máy tính", "☕ Cà phê", "😴 Buồn ngủ", "📄 Tài liệu"],
      answer: "💻 Máy tính",
    },
  },
  {
    keyword: "Sống tối giản",
    hint: "Bỏ bớt, giữ lại thứ cần, không gian nhẹ hơn và đầu óc rõ hơn.",
    pictures: [
      ["📦", "hộp"],
      ["🧹", "dọn"],
      ["🪴", "cây"],
      ["⬜", "trống"],
    ],
    choices: ["Sống tối giản", "Chuyển nhà", "Trang trí phòng", "Dọn kho cuối năm", "Mua nội thất", "Làm vườn ban công"],
    memory: {
      question: "Biểu tượng nào gợi khoảng trống ở cuối chuỗi?",
      choices: ["⬜ Ô trắng", "📦 Hộp", "🧹 Chổi", "🪴 Chậu cây"],
      answer: "⬜ Ô trắng",
    },
  },
  {
    keyword: "Mất tập trung",
    hint: "Một vòng lặp quen thuộc: có việc, có thông báo, có lướt và có trễ.",
    pictures: [
      ["📌", "việc"],
      ["🔔", "báo"],
      ["📱", "lướt"],
      ["⌛", "trễ"],
    ],
    choices: ["Mất tập trung", "Nhắc lịch công việc", "Nghiện điện thoại", "Quản lý thời gian", "Tin nhắn quan trọng", "Chạy nước rút"],
    memory: {
      question: "Biểu tượng thông báo đứng ở vị trí nào?",
      choices: ["Vị trí 2", "Vị trí 1", "Vị trí 3", "Vị trí 4"],
      answer: "Vị trí 2",
    },
  },
  {
    keyword: "Đi chợ nấu cơm",
    hint: "Không chỉ là nấu ăn, chuỗi bắt đầu từ mua nguyên liệu rồi mới vào bếp.",
    pictures: [
      ["🧺", "giỏ"],
      ["🥬", "rau"],
      ["🔪", "sơ chế"],
      ["🍲", "món"],
    ],
    choices: ["Đi chợ nấu cơm", "Ăn tối ngoài phố", "Meal prep cuối tuần", "Dọn bếp sau ăn", "Học nấu món mới", "Mở quán ăn"],
    memory: {
      question: "Hình nào xuất hiện trước con dao?",
      choices: ["🥬 Rau xanh", "🧺 Giỏ", "🍲 Nồi món ăn", "🔥 Lửa"],
      answer: "🥬 Rau xanh",
    },
  },
  {
    keyword: "Lên kế hoạch du lịch",
    hint: "Chưa hẳn là đang đi, đây là giai đoạn chuẩn bị điểm đến và lịch trình.",
    pictures: [
      ["🗺️", "bản đồ"],
      ["💳", "thanh toán"],
      ["🧳", "vali"],
      ["📍", "địa điểm"],
    ],
    choices: ["Lên kế hoạch du lịch", "Đi công tác gấp", "Chuyển nhà xa", "Review khách sạn", "Chuyến bay bị hoãn", "Du lịch bụi"],
    memory: {
      question: "Cặp biểu tượng nào cùng xuất hiện trong bộ hình?",
      choices: ["💳 và 📍", "✈️ và 🏨", "📸 và 🧭", "🎫 và 🚕"],
      answer: "💳 và 📍",
    },
  },
  {
    keyword: "Đọc sách đêm khuya",
    hint: "Một cảnh yên tĩnh, ánh sáng nhỏ và câu chuyện kéo dài sau giờ ngủ.",
    pictures: [
      ["🌙", "đêm"],
      ["💡", "đèn"],
      ["📚", "sách"],
      ["🥱", "buồn ngủ"],
    ],
    choices: ["Đọc sách đêm khuya", "Học thi nước rút", "Mất ngủ vì việc", "Viết nhật ký", "Thức xem phim", "Café sách"],
    memory: {
      question: "Biểu tượng nào nằm giữa mặt trăng và chồng sách?",
      choices: ["💡 Bóng đèn", "🥱 Mặt ngáp", "☕ Cốc cà phê", "🛏️ Giường"],
      answer: "💡 Bóng đèn",
    },
  },
  {
    keyword: "Tập lại thói quen tốt",
    hint: "Một chuỗi nhỏ: thức dậy, vận động, ghi nhận, rồi duy trì đều.",
    pictures: [
      ["🌅", "sáng"],
      ["👟", "giày"],
      ["✅", "xong"],
      ["🔁", "lặp"],
    ],
    choices: ["Tập lại thói quen tốt", "Chạy bộ buổi sáng", "Danh sách việc cần làm", "Thử thách 30 ngày", "Kỷ luật bản thân", "Lịch tập thể thao"],
    memory: {
      question: "Biểu tượng lặp lại nằm ở đâu?",
      choices: ["Cuối chuỗi", "Đầu chuỗi", "Sau mặt trời", "Trước dấu tick"],
      answer: "Cuối chuỗi",
    },
  },
];

const state = {
  deck: [],
  round: 0,
  step: "keyword",
  score: 0,
  correct: 0,
  streak: 0,
};

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function showScreen(id) {
  $$(".screen").forEach((screen) => screen.classList.toggle("active", screen.id === id));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function updateBestScore() {
  $("#bestScore").textContent = Number(localStorage.getItem("ghep-y-tu-hinh-best") || 0);
}

function startGame() {
  state.deck = shuffle(rounds).slice(0, 8);
  state.round = 0;
  state.step = "keyword";
  state.score = 0;
  state.correct = 0;
  state.streak = 0;
  showScreen("gameScreen");
  renderRound();
}

function renderRound() {
  const round = state.deck[state.round];
  const progress = ((state.round + (state.step === "memory" ? 0.5 : 0)) / state.deck.length) * 100;
  $("#roundText").textContent = `Màn ${state.round + 1}/${state.deck.length}`;
  $("#scoreText").textContent = state.score;
  $("#progressBar").style.width = `${Math.max(12, progress)}%`;

  if (state.step === "keyword") {
    $("#stepLabel").textContent = "Bước 1 · Đoán từ khóa";
    $("#promptTitle").textContent = "Bộ hình này đang gợi ý điều gì?";
    $("#promptHint").textContent = round.hint;
    renderPictures(round.pictures, { labels: false, dim: false });
    renderAnswers(round.choices, round.keyword, handleKeywordAnswer);
  } else {
    $("#stepLabel").textContent = "Bước 2 · Câu hỏi trí nhớ";
    $("#promptTitle").textContent = round.memory.question;
    $("#promptHint").textContent = "Nhớ lại bộ hình vừa xem và chọn đáp án đúng.";
    renderPictures(round.pictures, { labels: false, dim: true });
    renderAnswers(round.memory.choices, round.memory.answer, handleMemoryAnswer);
  }
}

function renderPictures(pictures, options = {}) {
  const { labels = false, dim = false } = options;
  $("#pictureGrid").innerHTML = pictures
    .map(
      ([emoji, label]) => `
        <div class="picture-card ${dim ? "dimmed" : ""}">
          <span>${emoji}</span>
          ${labels ? `<small>${label}</small>` : ""}
        </div>`,
    )
    .join("");
}

function renderAnswers(choices, answer, handler) {
  $("#answerGrid").innerHTML = shuffle(choices)
    .map((choice) => `<button class="answer-button" data-answer="${choice}">${choice}</button>`)
    .join("");
  $$(".answer-button").forEach((button) => {
    button.addEventListener("click", () => handler(button, answer));
  });
}

function lockAnswers(selectedButton, answer) {
  $$(".answer-button").forEach((button) => {
    button.disabled = true;
    if (button.dataset.answer === answer) button.classList.add("correct");
  });
  if (selectedButton.dataset.answer !== answer) selectedButton.classList.add("wrong");
  return selectedButton.dataset.answer === answer;
}

function handleKeywordAnswer(button, answer) {
  const correct = lockAnswers(button, answer);
  if (correct) {
    state.score += 100 + state.streak * 20;
    state.correct += 1;
    state.streak += 1;
    $("#feedbackIcon").textContent = "🧠";
    $("#feedbackLabel").textContent = "Đúng từ khóa";
    $("#feedbackTitle").textContent = answer;
    $("#feedbackText").textContent = "Bạn đã mở câu hỏi trí nhớ của chủ đề này.";
  } else {
    state.streak = 0;
    $("#feedbackIcon").textContent = "🔎";
    $("#feedbackLabel").textContent = "Chưa khớp";
    $("#feedbackTitle").textContent = answer;
    $("#feedbackText").textContent = "Đáp án đúng đã hiện ra. Giờ thử nhớ lại chi tiết trong bộ hình nhé.";
  }
  state.step = "memory";
  setTimeout(() => showScreen("feedbackScreen"), 450);
}

function handleMemoryAnswer(button, answer) {
  const correct = lockAnswers(button, answer);
  if (correct) {
    state.score += 80 + state.streak * 10;
    state.correct += 1;
    state.streak += 1;
    $("#feedbackIcon").textContent = "✨";
    $("#feedbackLabel").textContent = "Nhớ tốt";
    $("#feedbackTitle").textContent = "Bạn giữ được mạch hình!";
    $("#feedbackText").textContent = "Tiếp tục sang chủ đề kế tiếp.";
  } else {
    state.streak = 0;
    $("#feedbackIcon").textContent = "💭";
    $("#feedbackLabel").textContent = "Suýt đúng";
    $("#feedbackTitle").textContent = answer;
    $("#feedbackText").textContent = "Đừng lo, câu sau là một bộ hình mới.";
  }
  state.round += 1;
  state.step = "keyword";
  setTimeout(() => showScreen("feedbackScreen"), 450);
}

function nextStep() {
  if (state.round >= state.deck.length) return finishGame();
  showScreen("gameScreen");
  renderRound();
}

function finishGame() {
  const oldBest = Number(localStorage.getItem("ghep-y-tu-hinh-best") || 0);
  if (state.score > oldBest) localStorage.setItem("ghep-y-tu-hinh-best", state.score);
  updateBestScore();

  const title =
    state.correct >= 14 ? "Trí nhớ sắc bén!" :
    state.correct >= 10 ? "Bắt ý rất nhanh!" :
    state.correct >= 6 ? "Đang nóng máy rồi!" :
    "Một lượt nữa sẽ tốt hơn!";

  $("#resultTitle").textContent = title;
  $("#finalScore").textContent = state.score;
  $("#finalCorrect").textContent = `${state.correct}/${state.deck.length * 2} lượt đúng`;
  if (typeof recordGameScore === 'function') {
    recordGameScore('Ghép Ý Từ Hình', state.score, '🧩');
  }
  showScreen("resultScreen");
}

async function shareGame() {
  const text = "Thử chơi Ghép Ý Từ Hình: nhìn bộ hình gợi ý, chọn từ khóa đúng rồi trả lời câu trí nhớ.";
  const url = window.location.origin + window.location.pathname;
  await shareText(text, url, "Đã sao chép link game");
}

async function shareResult() {
  const text = `Tôi được ${state.score} điểm trong Ghép Ý Từ Hình, đúng ${state.correct}/${state.deck.length * 2} lượt. Bạn vượt được không?`;
  await shareText(text, window.location.origin + window.location.pathname, "Đã sao chép lời thách");
}

async function shareText(text, url, fallbackMessage) {
  const data = { title: "Ghép Ý Từ Hình", text, url };
  if (navigator.share) {
    try {
      await navigator.share(data);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  await navigator.clipboard.writeText(`${text} ${url}`);
  showToast(fallbackMessage);
}

$("#startButton").addEventListener("click", startGame);
$("#replayButton").addEventListener("click", startGame);
$("#nextButton").addEventListener("click", nextStep);
$("#shareGameButton").addEventListener("click", shareGame);
$("#welcomeShareButton").addEventListener("click", shareGame);
$("#shareResultButton").addEventListener("click", shareResult);

updateBestScore();
