const PUZZLES = [
  {
    level: "Dễ",
    name: "Trái tim nhỏ",
    intro: "Màn 5x5 ngắn, hợp để làm quen với cụm gợi ý.",
    rows: ["01110", "11111", "11111", "01110", "00100"],
  },
  {
    level: "Vừa",
    name: "Chìa khóa",
    intro: "Màn 7x7 có nhiều khoảng trắng, cần dùng dấu X để loại trừ.",
    rows: ["0011100", "0010100", "0011100", "0001000", "1111110", "0001000", "0001000"],
  },
  {
    level: "Khó",
    name: "Ngọn hải đăng",
    intro: "Màn 9x9 dài hơn, hãy kiểm từng hàng và cột trước khi tô.",
    rows: [
      "000100000",
      "001110000",
      "011111000",
      "000100000",
      "001110000",
      "011111000",
      "111111100",
      "000100000",
      "011111000",
    ],
  },
];

const state = {
  index: 0,
  tool: "paint",
  cells: [],
  errors: new Set(),
  checks: 0,
  completed: false,
};

const $ = (selector) => document.querySelector(selector);
const board = $("#board");
const levelList = $("#levelList");
const message = $("#message");
const welcomeScreen = $("#welcomeScreen");
const gameScreen = $("#gameScreen");
const completeModal = $("#completeModal");

function puzzle() {
  return PUZZLES[state.index];
}

function size() {
  return puzzle().rows.length;
}

function makeCells() {
  state.cells = Array.from({ length: size() }, () => Array(size()).fill("blank"));
}

function runs(lines) {
  return lines.map((line) => {
    const result = [];
    let count = 0;
    for (const char of line) {
      if (char === "1") count += 1;
      else if (count) {
        result.push(count);
        count = 0;
      }
    }
    if (count) result.push(count);
    return result.length ? result : [0];
  });
}

function clues() {
  const rows = runs(puzzle().rows);
  const cols = runs(
    Array.from({ length: size() }, (_, col) => puzzle().rows.map((row) => row[col]).join(""))
  );
  return { rows, cols };
}

function isLineSolved(kind, index) {
  if (kind === "row") {
    return state.cells[index].every((value, col) => (value === "filled") === (puzzle().rows[index][col] === "1"));
  }
  return state.cells.every((row, rowIndex) => (row[index] === "filled") === (puzzle().rows[rowIndex][index] === "1"));
}

function renderLevels() {
  levelList.innerHTML = "";
  PUZZLES.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `level-card ${index === state.index ? "active" : ""}`;
    button.innerHTML = `<strong>${item.level}</strong><span>${item.rows.length}x${item.rows.length}</span><span>${item.name}</span>`;
    button.addEventListener("click", () => loadPuzzle(index));
    levelList.appendChild(button);
  });
}

function render() {
  const current = puzzle();
  const boardSize = size();
  const cell = boardSize > 7 ? "34px" : boardSize > 5 ? "42px" : "50px";
  const clueSpace = boardSize > 7 ? "76px" : "86px";
  const clueData = clues();

  renderLevels();
  $("#puzzleTitle").textContent = current.name;
  $("#puzzleIntro").textContent = current.intro;
  $("#difficultyLabel").textContent = current.level;
  $("#stageTitle").textContent = current.name;
  $("#fillMetric").textContent = state.cells.flat().filter((value) => value === "filled").length;
  $("#markMetric").textContent = state.cells.flat().filter((value) => value === "cross").length;
  $("#errorMetric").textContent = state.checks;

  document.querySelectorAll(".tool-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tool === state.tool);
  });

  board.style.setProperty("--size", boardSize);
  board.style.setProperty("--cell", cell);
  board.style.setProperty("--clue-space", clueSpace);
  board.innerHTML = "";

  const corner = document.createElement("div");
  corner.className = "corner";
  board.appendChild(corner);

  clueData.cols.forEach((numbers, col) => {
    const clue = document.createElement("div");
    clue.className = `clue col ${isLineSolved("col", col) ? "solved" : ""}`;
    numbers.forEach((number) => {
      const span = document.createElement("span");
      span.textContent = number;
      clue.appendChild(span);
    });
    board.appendChild(clue);
  });

  clueData.rows.forEach((numbers, row) => {
    const clue = document.createElement("div");
    clue.className = `clue row ${isLineSolved("row", row) ? "solved" : ""}`;
    clue.textContent = numbers.join(" ");
    board.appendChild(clue);

    state.cells[row].forEach((value, col) => {
      const key = `${row}-${col}`;
      const cellButton = document.createElement("button");
      cellButton.type = "button";
      cellButton.className = `pixel ${value !== "blank" ? value : ""} ${state.errors.has(key) ? "error" : ""}`;
      cellButton.ariaLabel = `Hàng ${row + 1}, cột ${col + 1}`;
      cellButton.addEventListener("click", () => play(row, col));
      cellButton.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        state.cells[row][col] = state.cells[row][col] === "cross" ? "blank" : "cross";
        state.errors.delete(key);
        render();
      });
      board.appendChild(cellButton);
    });
  });
}

function play(row, col) {
  const key = `${row}-${col}`;
  state.errors.delete(key);
  if (state.tool === "erase") state.cells[row][col] = "blank";
  if (state.tool === "cross") state.cells[row][col] = state.cells[row][col] === "cross" ? "blank" : "cross";
  if (state.tool === "paint") state.cells[row][col] = state.cells[row][col] === "filled" ? "blank" : "filled";
  render();
  if (solved()) finish();
}

function check() {
  state.errors.clear();
  let wrong = 0;
  state.cells.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      const shouldFill = puzzle().rows[rowIndex][colIndex] === "1";
      if ((value === "filled" && !shouldFill) || (value === "cross" && shouldFill)) {
        state.errors.add(`${rowIndex}-${colIndex}`);
        wrong += 1;
      }
    });
  });
  state.checks += 1;
  if (wrong) setMessage(`Có ${wrong} ô đang sai hướng. Các ô đó đã được viền đỏ.`);
  else if (solved()) finish();
  else setMessage("Chưa thấy lỗi. Tiếp tục suy luận các hàng/cột còn trống.");
  render();
}

function hint() {
  for (let row = 0; row < size(); row += 1) {
    for (let col = 0; col < size(); col += 1) {
      const answer = puzzle().rows[row][col] === "1" ? "filled" : "cross";
      if (state.cells[row][col] !== answer) {
        state.cells[row][col] = answer;
        state.errors.delete(`${row}-${col}`);
        render();
        const hintCell = board.querySelectorAll(".pixel")[row * size() + col];
        hintCell?.classList.add("hint");
        setMessage(`Gợi ý: đã mở ô hàng ${row + 1}, cột ${col + 1}.`);
        if (solved()) finish();
        return;
      }
    }
  }
}

function solved() {
  return state.cells.every((row, rowIndex) =>
    row.every((value, colIndex) => (value === "filled") === (puzzle().rows[rowIndex][colIndex] === "1"))
  );
}

function finish() {
  if (state.completed) return;
  state.completed = true;
  state.errors.clear();
  setMessage(`Hoàn thành ${puzzle().name}! Chuyển cấp độ tiếp theo để thử bảng khó hơn.`);
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
  const nextIndex = (state.index + 1) % PUZZLES.length;
  $("#completeTitle").textContent = `Hoàn thành ${puzzle().name}!`;
  $("#completeText").textContent = "Các cụm ô đã khớp toàn bộ gợi ý hàng và cột.";
  $("#nextPuzzleButton").innerHTML =
    state.index < PUZZLES.length - 1 ? "Chơi màn tiếp <span>→</span>" : "Chơi lại từ đầu <span>→</span>";
  $("#nextPuzzleButton").dataset.nextIndex = nextIndex;
  completeModal?.classList.add("open");
  document.querySelector(".board-frame")?.classList.add("complete");
}

function hideComplete() {
  completeModal?.classList.remove("open");
  document.querySelector(".board-frame")?.classList.remove("complete");
}

async function shareGame() {
  const shareData = {
    title: "Nonogram",
    text: "Thử mở hình bí mật bằng logic hàng cột trong Nonogram.",
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

function loadPuzzle(index) {
  state.index = index;
  state.errors.clear();
  state.checks = 0;
  state.completed = false;
  hideComplete();
  makeCells();
  setMessage(`Màn ${puzzle().level}: ${puzzle().intro}`);
  render();
}

document.querySelectorAll(".tool-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.tool = button.dataset.tool;
    render();
  });
});
$("#checkButton").addEventListener("click", check);
$("#hintButton").addEventListener("click", hint);
$("#resetButton").addEventListener("click", () => loadPuzzle(state.index));
$("#startButton")?.addEventListener("click", showGame);
$("#shareGameButton")?.addEventListener("click", shareGame);
$("#welcomeShareButton")?.addEventListener("click", shareGame);
$("#closeCompleteButton")?.addEventListener("click", hideComplete);
$("#nextPuzzleButton")?.addEventListener("click", (event) => {
  loadPuzzle(Number(event.currentTarget.dataset.nextIndex || 0));
});
completeModal?.addEventListener("click", (event) => {
  if (event.target === completeModal) hideComplete();
});

loadPuzzle(0);
