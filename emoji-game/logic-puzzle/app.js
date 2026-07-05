const CASES = [
  {
    level: "Dễ",
    topic: "Bữa tiệc lớp",
    title: "Ai mang món gì?",
    leftLabel: "Bạn",
    rightLabel: "Món",
    left: ["An", "Bình", "Chi"],
    right: ["Bánh", "Nước cam", "Táo"],
    clues: [
      "An không mang nước cam.",
      "Bình không mang táo.",
      "Chi đến sau bạn mang bánh.",
    ],
    solution: { An: "Bánh", Bình: "Nước cam", Chi: "Táo" },
  },
  {
    level: "Vừa",
    topic: "Câu lạc bộ",
    title: "Mỗi bạn chọn hoạt động nào?",
    leftLabel: "Bạn",
    rightLabel: "Hoạt động",
    left: ["Lan", "Minh", "Nam", "Vy"],
    right: ["Vẽ", "Cờ vua", "Bơi", "Robot"],
    clues: [
      "Lan không chọn bơi hoặc robot.",
      "Nam chọn hoạt động cần nước.",
      "Vy không chọn vẽ.",
      "Minh không chọn cờ vua.",
      "Bạn chọn robot không phải Minh.",
    ],
    solution: { Lan: "Cờ vua", Minh: "Vẽ", Nam: "Bơi", Vy: "Robot" },
  },
  {
    level: "Khó",
    topic: "Hội chợ khoa học",
    title: "Dự án nào thuộc về nhóm nào?",
    leftLabel: "Nhóm",
    rightLabel: "Dự án",
    left: ["Sao Mai", "Cầu Vồng", "Tia Chớp", "Mặt Trăng", "Hải Đăng"],
    right: ["Núi lửa", "Cầu giấy", "Kính thiên văn", "Máy lọc nước", "Vườn mini"],
    clues: [
      "Tia Chớp làm dự án liên quan đến nước.",
      "Sao Mai không làm núi lửa hoặc vườn mini.",
      "Cầu Vồng không làm cầu giấy hoặc kính thiên văn.",
      "Hải Đăng không làm vườn mini.",
      "Mặt Trăng không làm núi lửa.",
      "Kính thiên văn thuộc về nhóm đứng trước Mặt Trăng trong danh sách.",
      "Cầu giấy thuộc về nhóm đứng ngay sau nhóm làm máy lọc nước.",
    ],
    solution: {
      "Sao Mai": "Kính thiên văn",
      "Cầu Vồng": "Vườn mini",
      "Tia Chớp": "Máy lọc nước",
      "Mặt Trăng": "Cầu giấy",
      "Hải Đăng": "Núi lửa",
    },
  },
];

const state = {
  index: 0,
  marks: {},
  checks: 0,
  hint: "",
  completed: false,
};

const $ = (selector) => document.querySelector(selector);
const levelList = $("#levelList");
const clueList = $("#clueList");
const matrix = $("#matrix");
const answers = $("#answers");
const message = $("#message");
const welcomeScreen = $("#welcomeScreen");
const gameScreen = $("#gameScreen");
const completeModal = $("#completeModal");

function activeCase() {
  return CASES[state.index];
}

function pairKey(left, right) {
  return `${left}__${right}`;
}

function blankMarks() {
  const marks = {};
  activeCase().left.forEach((left) => {
    activeCase().right.forEach((right) => {
      marks[pairKey(left, right)] = "unknown";
    });
  });
  return marks;
}

function renderLevels() {
  levelList.innerHTML = "";
  CASES.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `level-card ${index === state.index ? "active" : ""}`;
    button.innerHTML = `<strong>${item.level}</strong><span>${item.left.length} người</span><span>${item.topic}</span>`;
    button.addEventListener("click", () => loadCase(index));
    levelList.appendChild(button);
  });
}

function render() {
  const item = activeCase();
  renderLevels();
  $("#caseTopic").textContent = item.topic;
  $("#caseTitle").textContent = item.title;
  $("#solvedMetric").textContent = `${solvedPairs()}/${item.left.length}`;
  $("#checkMetric").textContent = state.checks;

  clueList.innerHTML = "";
  item.clues.forEach((clue) => {
    const li = document.createElement("li");
    li.textContent = clue;
    clueList.appendChild(li);
  });

  renderMatrix();
  renderAnswers();
}

function renderMatrix() {
  const item = activeCase();
  matrix.style.setProperty("--count", item.right.length);
  matrix.innerHTML = "";
  addHeader(`${item.leftLabel} / ${item.rightLabel}`, "header");
  item.right.forEach((right) => addHeader(right, "header"));

  item.left.forEach((left) => {
    addHeader(left, "row-head");
    item.right.forEach((right) => {
      const key = pairKey(left, right);
      const mark = state.marks[key];
      const button = document.createElement("button");
      button.type = "button";
      button.className = `matrix-cell choice ${mark !== "unknown" ? mark : ""} ${state.hint === key ? "hint" : ""}`;
      button.textContent = mark === "yes" ? "✓" : mark === "no" ? "×" : "";
      button.ariaLabel = `${left} với ${right}`;
      button.addEventListener("click", () => cycle(left, right));
      matrix.appendChild(button);
    });
  });
}

function addHeader(text, className) {
  const cell = document.createElement("div");
  cell.className = `matrix-cell ${className}`;
  cell.textContent = text;
  matrix.appendChild(cell);
}

function renderAnswers() {
  const item = activeCase();
  answers.innerHTML = "";
  item.left.forEach((left) => {
    const chosen = item.right.find((right) => state.marks[pairKey(left, right)] === "yes");
    const pill = document.createElement("span");
    const isDone = chosen === item.solution[left];
    const isWrong = chosen && chosen !== item.solution[left];
    pill.className = `answer ${isDone ? "done" : ""} ${isWrong ? "wrong" : ""}`;
    pill.textContent = `${left}: ${chosen || "chưa rõ"}`;
    answers.appendChild(pill);
  });
}

function cycle(left, right) {
  state.hint = "";
  const key = pairKey(left, right);
  const current = state.marks[key];
  const next = current === "unknown" ? "no" : current === "no" ? "yes" : "unknown";
  setMark(left, right, next);
  if (next === "yes") setMessage("Đã chọn một cặp chắc chắn. Các ô cùng hàng/cột được loại trừ.");
  else setMessage("Đã cập nhật bảng suy luận.");
  render();
  if (isComplete()) finish();
}

function setMark(left, right, mark) {
  const item = activeCase();
  state.marks[pairKey(left, right)] = mark;
  if (mark !== "yes") return;
  item.right.forEach((otherRight) => {
    if (otherRight !== right) state.marks[pairKey(left, otherRight)] = "no";
  });
  item.left.forEach((otherLeft) => {
    if (otherLeft !== left) state.marks[pairKey(otherLeft, right)] = "no";
  });
}

function check() {
  const item = activeCase();
  state.checks += 1;
  const wrong = [];
  const missing = [];

  item.left.forEach((left) => {
    const chosen = item.right.find((right) => state.marks[pairKey(left, right)] === "yes");
    if (!chosen) missing.push(left);
    else if (chosen !== item.solution[left]) wrong.push(`${left} không đi với ${chosen}`);
  });

  if (wrong.length) setMessage(`Có kết luận chưa đúng: ${wrong[0]}.`);
  else if (missing.length) setMessage(`Chưa đủ kết luận. Còn thiếu đáp án cho ${missing[0]}.`);
  else finish();
  render();
}

function hint() {
  const item = activeCase();
  for (const left of item.left) {
    const answer = item.solution[left];
    if (state.marks[pairKey(left, answer)] === "yes") continue;
    const wrongOption = item.right.find((right) => right !== answer && state.marks[pairKey(left, right)] === "unknown");
    if (wrongOption) {
      state.marks[pairKey(left, wrongOption)] = "no";
      state.hint = pairKey(left, wrongOption);
      setMessage(`Gợi ý: ${left} không đi với ${wrongOption}.`);
    } else {
      setMark(left, answer, "yes");
      state.hint = pairKey(left, answer);
      setMessage(`Gợi ý: ${left} chỉ còn một lựa chọn hợp lý.`);
    }
    render();
    return;
  }
}

function solvedPairs() {
  const item = activeCase();
  return item.left.filter((left) => state.marks[pairKey(left, item.solution[left])] === "yes").length;
}

function isComplete() {
  const item = activeCase();
  return item.left.every((left) =>
    item.right.every((right) => {
      const expected = right === item.solution[left] ? "yes" : "no";
      return state.marks[pairKey(left, right)] === expected;
    })
  );
}

function finish() {
  if (state.completed) return;
  state.completed = true;
  const item = activeCase();
  item.left.forEach((left) => setMark(left, item.solution[left], "yes"));
  setMessage(`Chính xác. Vụ ${item.topic.toLowerCase()} đã được giải xong.`);
  render();
  showComplete();
}

function setMessage(text) {
  message.textContent = text;
}

function showGame() {
  welcomeScreen?.classList.remove("active");
  gameScreen?.classList.add("active");
}

function showComplete() {
  const nextIndex = (state.index + 1) % CASES.length;
  $("#completeTitle").textContent = `Hoàn thành ${activeCase().topic}!`;
  $("#completeText").textContent = "Tất cả kết luận đều đúng. Bảng suy luận đã được khóa lại.";
  $("#nextCaseButton").innerHTML =
    state.index < CASES.length - 1 ? "Chơi case tiếp <span>→</span>" : "Chơi lại từ đầu <span>→</span>";
  $("#nextCaseButton").dataset.nextIndex = nextIndex;
  completeModal?.classList.add("open");
  document.querySelector(".matrix-frame")?.classList.add("complete");
}

function hideComplete() {
  completeModal?.classList.remove("open");
  document.querySelector(".matrix-frame")?.classList.remove("complete");
}

async function shareGame() {
  const shareData = {
    title: "Logic Puzzle",
    text: "Thử đọc manh mối và loại trừ để giải Logic Puzzle.",
    url: window.location.href,
  };
  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      if (error.name !== "AbortError") await navigator.clipboard?.writeText(shareData.url);
    }
  } else {
    await navigator.clipboard?.writeText(shareData.url);
  }
}

function loadCase(index) {
  state.index = index;
  state.marks = blankMarks();
  state.checks = 0;
  state.hint = "";
  state.completed = false;
  hideComplete();
  setMessage(`Màn ${activeCase().level}: đọc manh mối rồi đánh dấu các ô chắc chắn sai trước.`);
  render();
}

$("#checkButton").addEventListener("click", check);
$("#hintButton").addEventListener("click", hint);
$("#resetButton").addEventListener("click", () => loadCase(state.index));
$("#startButton")?.addEventListener("click", showGame);
$("#shareGameButton")?.addEventListener("click", shareGame);
$("#welcomeShareButton")?.addEventListener("click", shareGame);
$("#closeCompleteButton")?.addEventListener("click", hideComplete);
$("#nextCaseButton")?.addEventListener("click", (event) => {
  loadCase(Number(event.currentTarget.dataset.nextIndex || 0));
});
completeModal?.addEventListener("click", (event) => {
  if (event.target === completeModal) hideComplete();
});

loadCase(0);
