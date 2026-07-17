const PUZZLES = [
  {
    level: "Dễ",
    name: "Bảng tổng nhỏ",
    grid: [
      [null, null, null, null, null],
      [null, 1, 2, null, null],
      [null, 3, 5, 1, null],
      [null, null, 1, 4, null],
      [null, null, null, null, null],
    ],
  },
  {
    level: "Vừa",
    name: "Cầu số 7x7",
    grid: [
      [null, null, null, null, null, null, null],
      [null, 1, 3, null, 2, 4, null],
      [null, 4, 2, 1, 3, 5, null],
      [null, null, 5, 3, null, null, null],
      [null, 2, 1, 4, 5, 3, null],
      [null, 3, 4, null, 1, 2, null],
      [null, null, null, null, null, null, null],
    ],
  },
  {
    level: "Khó",
    name: "Mạng tổng",
    grid: [
      [null, null, null, null, null, null, null],
      [null, 2, 6, null, 1, 4, null],
      [null, 5, 1, 3, 2, 6, null],
      [null, null, 4, 2, 5, 3, null],
      [null, 3, 2, 6, 4, 1, null],
      [null, 1, 5, null, 6, 2, null],
      [null, null, null, null, null, null, null],
    ],
  },
];

const state = {
  index: 0,
  values: [],
  selected: null,
  bad: new Set(),
  checks: 0,
  completed: false,
};

const $ = (selector) => document.querySelector(selector);
const board = $("#board");
const levelList = $("#levelList");
const numberPad = $("#numberPad");
const message = $("#message");
const welcomeScreen = $("#welcomeScreen");
const gameScreen = $("#gameScreen");
const completeModal = $("#completeModal");

function puzzle() {
  return PUZZLES[state.index];
}

function size() {
  return puzzle().grid.length;
}

function isOpen(row, col) {
  return puzzle().grid[row]?.[col] !== null && puzzle().grid[row]?.[col] !== undefined;
}

function resetValues() {
  state.values = puzzle().grid.map((row) => row.map((value) => (value === null ? null : "")));
}

function runFrom(row, col, direction) {
  const cells = [];
  let r = direction === "down" ? row + 1 : row;
  let c = direction === "right" ? col + 1 : col;
  while (isOpen(r, c)) {
    cells.push({ row: r, col: c, answer: puzzle().grid[r][c] });
    if (direction === "down") r += 1;
    else c += 1;
  }
  return cells;
}

function clueAt(row, col) {
  const right = runFrom(row, col, "right");
  const down = runFrom(row, col, "down");
  return {
    right,
    down,
    rightSum: right.reduce((sum, cell) => sum + cell.answer, 0),
    downSum: down.reduce((sum, cell) => sum + cell.answer, 0),
  };
}

function groups() {
  const result = [];
  puzzle().grid.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      if (value === null) {
        const clue = clueAt(rowIndex, colIndex);
        if (clue.right.length) result.push({ target: clue.rightSum, cells: clue.right });
        if (clue.down.length) result.push({ target: clue.downSum, cells: clue.down });
      }
    });
  });
  return result;
}

function renderLevels() {
  levelList.innerHTML = "";
  PUZZLES.forEach((item, index) => {
    const total = item.grid.flat().filter((value) => value !== null).length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `level-card ${index === state.index ? "active" : ""}`;
    button.innerHTML = `<strong>${item.level}</strong><span>${item.grid.length}x${item.grid.length}</span><span>${total} ô nhập</span>`;
    button.addEventListener("click", () => loadPuzzle(index));
    levelList.appendChild(button);
  });
}

function render() {
  const boardSize = size();
  board.style.setProperty("--size", boardSize);
  board.style.setProperty("--cell", boardSize > 5 ? "48px" : "58px");
  board.innerHTML = "";
  renderLevels();

  $("#puzzleName").textContent = puzzle().name;
  $("#stageTitle").textContent = puzzle().name;
  $("#difficultyLabel").textContent = puzzle().level;
  $("#checkMetric").textContent = state.checks;
  const filled = state.values.flat().filter((value) => value !== "" && value !== null).length;
  const total = puzzle().grid.flat().filter((value) => value !== null).length;
  $("#filledMetric").textContent = `${filled}/${total}`;
  $("#groupMetric").textContent = solvedGroupCount();

  puzzle().grid.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      if (value === null) renderBlock(rowIndex, colIndex);
      else renderInput(rowIndex, colIndex);
    });
  });
}

function renderBlock(row, col) {
  const clue = clueAt(row, col);
  const cell = document.createElement("div");
  cell.className = "cell block";
  if (clue.right.length || clue.down.length) {
    const slash = document.createElement("span");
    slash.className = "slash";
    cell.appendChild(slash);
  }
  if (clue.right.length) {
    const right = document.createElement("span");
    right.className = "sum-right";
    right.textContent = clue.rightSum;
    cell.appendChild(right);
  }
  if (clue.down.length) {
    const down = document.createElement("span");
    down.className = "sum-down";
    down.textContent = clue.downSum;
    cell.appendChild(down);
  }
  board.appendChild(cell);
}

function renderInput(row, col) {
  const key = `${row}-${col}`;
  const button = document.createElement("button");
  const value = state.values[row][col];
  const selected = state.selected?.row === row && state.selected?.col === col;
  const peer = state.selected && sameRun(state.selected, { row, col });
  const good = value !== "" && value === puzzle().grid[row][col];
  button.type = "button";
  button.className = `cell play ${selected ? "selected" : ""} ${peer ? "peer" : ""} ${good ? "good" : ""} ${
    state.bad.has(key) ? "bad" : ""
  }`;
  button.textContent = value || "";
  button.ariaLabel = `Ô hàng ${row + 1}, cột ${col + 1}`;
  button.addEventListener("click", () => {
    state.selected = { row, col };
    render();
  });
  board.appendChild(button);
}

function renderPad() {
  numberPad.innerHTML = "";
  for (let n = 1; n <= 9; n += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "number-button";
    button.textContent = n;
    button.addEventListener("click", () => enterNumber(n));
    numberPad.appendChild(button);
  }
}

function sameRun(a, b) {
  if (a.row === b.row && a.col === b.col) return false;
  return groups().some((group) => {
    const hasA = group.cells.some((cell) => cell.row === a.row && cell.col === a.col);
    const hasB = group.cells.some((cell) => cell.row === b.row && cell.col === b.col);
    return hasA && hasB;
  });
}

function enterNumber(number) {
  if (!state.selected) {
    setMessage("Chọn một ô trắng trước, rồi nhập số.");
    return;
  }
  state.values[state.selected.row][state.selected.col] = number;
  state.bad.delete(`${state.selected.row}-${state.selected.col}`);
  setMessage("Đã nhập số. Nhìn các tổng ở đầu dãy để kiểm tra.");
  render();
  if (solved()) finish();
}

function clearSelected() {
  if (!state.selected) return;
  state.values[state.selected.row][state.selected.col] = "";
  state.bad.delete(`${state.selected.row}-${state.selected.col}`);
  setMessage("Đã xóa ô đang chọn.");
  render();
}

function check() {
  state.bad.clear();
  let incomplete = 0;
  groups().forEach((group) => {
    const values = group.cells.map((cell) => state.values[cell.row][cell.col]);
    if (values.some((value) => value === "")) {
      incomplete += 1;
      return;
    }
    const sum = values.reduce((total, value) => total + Number(value), 0);
    const repeated = new Set(values).size !== values.length;
    if (sum !== group.target || repeated) {
      group.cells.forEach((cell) => state.bad.add(`${cell.row}-${cell.col}`));
    }
  });
  state.checks += 1;
  if (state.bad.size) setMessage(`Có ${state.bad.size} ô nằm trong cụm tổng sai hoặc bị lặp số.`);
  else if (solved()) finish();
  else setMessage(`Các cụm đã đủ số đều ổn. Còn ${incomplete} cụm chưa điền xong.`);
  render();
}

function hint() {
  for (let row = 0; row < size(); row += 1) {
    for (let col = 0; col < size(); col += 1) {
      const answer = puzzle().grid[row][col];
      if (answer !== null && state.values[row][col] !== answer) {
        state.values[row][col] = answer;
        state.selected = { row, col };
        state.bad.delete(`${row}-${col}`);
        setMessage(`Gợi ý đã điền ô hàng ${row + 1}, cột ${col + 1}.`);
        render();
        if (solved()) finish();
        return;
      }
    }
  }
}

function solvedGroupCount() {
  return groups().filter((group) => {
    const values = group.cells.map((cell) => state.values[cell.row][cell.col]);
    return (
      values.every((value) => value !== "") &&
      values.reduce((total, value) => total + Number(value), 0) === group.target &&
      new Set(values).size === values.length
    );
  }).length;
}

function solved() {
  return puzzle().grid.every((row, rowIndex) =>
    row.every((answer, colIndex) => answer === null || state.values[rowIndex][colIndex] === answer)
  );
}

function finish() {
  if (state.completed) return;
  state.completed = true;
  state.bad.clear();
  setMessage(`Hoàn thành ${puzzle().name}! Bảng tổng đã khớp toàn bộ.`);
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
  $("#completeText").textContent = "Tất cả cụm tổng đã đúng và không có số nào bị lặp.";
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
    title: "Kakuro",
    text: "Thử điền số khớp tổng và không lặp trong Kakuro.",
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
  state.selected = null;
  state.bad.clear();
  state.checks = 0;
  state.completed = false;
  hideComplete();
  resetValues();
  setMessage(`Màn ${puzzle().level}: chọn ô trắng và nhập số 1-9.`);
  render();
}

document.addEventListener("keydown", (event) => {
  if (/^[1-9]$/.test(event.key)) enterNumber(Number(event.key));
  if (event.key === "Backspace" || event.key === "Delete") clearSelected();
});

$("#checkButton").addEventListener("click", check);
$("#clearButton").addEventListener("click", clearSelected);
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

renderPad();
loadPuzzle(0);
