const $ = (selector) => document.querySelector(selector);
const cards = [
  ["grow","phát triển","🌱","Plants grow toward the light.","Cây phát triển về phía ánh sáng."],
  ["brave","dũng cảm","🦁","She was brave enough to speak up.","Cô ấy đủ dũng cảm để lên tiếng."],
  ["journey","hành trình","🧳","Every journey begins with one step.","Mỗi hành trình bắt đầu bằng một bước chân."],
  ["discover","khám phá ra","🔭","We discover something new every day.","Mỗi ngày chúng ta khám phá một điều mới."],
  ["improve","cải thiện","📈","Practice will improve your English.","Luyện tập sẽ cải thiện tiếng Anh của bạn."],
  ["protect","bảo vệ","🛡️","Trees help protect the environment.","Cây xanh giúp bảo vệ môi trường."],
  ["balance","sự cân bằng","⚖️","Balance work with time to rest.","Hãy cân bằng công việc với thời gian nghỉ."],
  ["curious","tò mò","🤔","Curious children ask many questions.","Trẻ tò mò đặt nhiều câu hỏi."],
  ["effort","nỗ lực","💪","Your effort will bring good results.","Nỗ lực của bạn sẽ mang lại kết quả tốt."],
  ["friendly","thân thiện","😊","Our new neighbor is very friendly.","Người hàng xóm mới rất thân thiện."],
  ["knowledge","kiến thức","📚","Reading gives us knowledge.","Đọc sách mang lại kiến thức cho chúng ta."],
  ["memory","trí nhớ","🧠","This song brings back a happy memory.","Bài hát này gợi lại một ký ức vui."],
  ["patient","kiên nhẫn","⏳","Be patient when learning a new skill.","Hãy kiên nhẫn khi học kỹ năng mới."],
  ["prepare","chuẩn bị","🎒","I prepare my bag before school.","Tôi chuẩn bị cặp trước khi đi học."],
  ["respect","tôn trọng","🤝","We should respect different opinions.","Chúng ta nên tôn trọng những ý kiến khác nhau."],
  ["support","hỗ trợ","🙌","Good friends support each other.","Bạn tốt luôn hỗ trợ lẫn nhau."],
  ["challenge","thử thách","🎯","This puzzle is a fun challenge.","Câu đố này là một thử thách thú vị."],
  ["confident","tự tin","✨","She feels confident before the test.","Cô ấy cảm thấy tự tin trước bài kiểm tra."],
  ["creative","sáng tạo","🎨","He found a creative solution.","Cậu ấy tìm ra một giải pháp sáng tạo."],
  ["environment","môi trường","🌍","We all share the same environment.","Tất cả chúng ta cùng chia sẻ một môi trường."],
  ["focus","tập trung","🎯","Focus on one task at a time.","Hãy tập trung vào từng việc một."],
  ["grateful","biết ơn","💛","I am grateful for your help.","Tôi biết ơn sự giúp đỡ của bạn."],
  ["healthy","khỏe mạnh","🥗","Fresh food helps us stay healthy.","Thức ăn tươi giúp chúng ta khỏe mạnh."],
  ["remember","ghi nhớ","💡","Remember to turn off the light.","Hãy nhớ tắt đèn."],
];
const state = { deck: [], index: 0, score: 0, correct: 0, combo: 0, bestCombo: 0, review: [], answered: false };
const shuffle = (items) => [...items].sort(() => Math.random() - .5);
function show(id) { document.querySelectorAll(".screen").forEach(el => el.classList.toggle("active", el.id === id)); }
function best() { $("#bestScore").textContent = Number(localStorage.getItem("flashcards-best") || 0); }
function start(deck = shuffle(cards).slice(0, 12)) { state.deck = deck; state.index = 0; state.score = 0; state.correct = 0; state.combo = 0; state.bestCombo = 0; state.review = []; show("gameScreen"); render(); }
function render() {
  const [word, meaning, , example, exampleVi] = state.deck[state.index];
  state.answered = false; $("#flashcard").classList.remove("flipped"); $("#nextButton").classList.remove("visible");
  $("#roundText").textContent = `Câu ${state.index + 1}/${state.deck.length}`; $("#scoreText").textContent = state.score; $("#comboText").textContent = state.combo;
  $("#progressBar").style.width = `${((state.index + 1) / state.deck.length) * 100}%`;
  $("#cardWord").textContent = word; $("#cardWord").dataset.speak = word; $("#cardBackWord").textContent = `${word} 🔊`; $("#cardBackWord").dataset.speak = word;
  $("#cardMeaning").textContent = meaning; $("#cardExample").textContent = example; $("#cardExampleVi").textContent = exampleVi;
  $("#flipHint").textContent = "Từ này có nghĩa là gì?"; $("#flashcard").setAttribute("aria-label", `${word}. Hãy chọn nghĩa đúng`);
  const wrong = shuffle(cards.filter(card => card[1] !== meaning)).slice(0, 3).map(card => card[1]);
  $("#meaningGrid").innerHTML = shuffle([meaning, ...wrong]).map(item => `<button class="meaning-button" data-meaning="${item}">${item}</button>`).join("");
  document.querySelectorAll(".meaning-button").forEach(button => button.onclick = () => answer(button, meaning));
}
function answer(button, meaning) { if (state.answered) return; state.answered = true; const ok = button.dataset.meaning === meaning; document.querySelectorAll(".meaning-button").forEach(item => { item.disabled = true; if (item.dataset.meaning === meaning) item.classList.add("correct"); }); if (ok) { state.correct++; state.combo++; state.bestCombo = Math.max(state.bestCombo, state.combo); state.score += 100 + (state.combo - 1) * 25; } else { button.classList.add("wrong"); state.combo = 0; state.review.push(state.deck[state.index]); } $("#scoreText").textContent = state.score; $("#comboText").textContent = state.combo; $("#flipHint").textContent = ok ? "✅ Chính xác! Xem ví dụ để nhớ lâu hơn." : `📘 Đáp án đúng: ${meaning}`; $("#flashcard").classList.add("flipped"); $("#nextButton").classList.add("visible"); }
function next() { state.index++; state.index >= state.deck.length ? finish() : render(); }
function finish() { const old = Number(localStorage.getItem("flashcards-best") || 0); if (state.score > old) localStorage.setItem("flashcards-best", state.score); best(); $("#finalScore").textContent = state.score; $("#finalLine").textContent = `${state.correct}/${state.deck.length} câu đúng · Combo cao nhất ${state.bestCombo}`; $("#resultTitle").textContent = state.correct >= state.deck.length - 2 ? "Vocabulary rất chắc!" : "Chơi thêm một lượt để nhớ sâu hơn!"; $("#reviewButton").hidden = !state.review.length; if (typeof recordGameScore === "function") recordGameScore("Flashcards Từ Vựng", state.score, "📖"); show("resultScreen"); }
async function share() { const text = "Cùng học từ vựng tiếng Anh bằng Flashcards!"; if (navigator.share) { try { await navigator.share({ title: "Flashcards Từ Vựng", text, url: location.href }); return; } catch (error) { if (error.name === "AbortError") return; } } await navigator.clipboard.writeText(`${text} ${location.href}`); }
$("#startButton").onclick = () => start(); $("#replayButton").onclick = () => start(); $("#reviewButton").onclick = () => start(shuffle(state.review));
$("#nextButton").onclick = next;
$("#shareGameButton").onclick = share; $("#welcomeShareButton").onclick = share; best();
