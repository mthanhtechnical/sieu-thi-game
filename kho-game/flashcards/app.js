const $ = (selector) => document.querySelector(selector);
const coreCards = [
  ["grow","phát triển","🌱","Plants grow toward the light.","Cây phát triển về phía ánh sáng.","/ɡroʊ/"],
  ["brave","dũng cảm","🦁","She was brave enough to speak up.","Cô ấy đủ dũng cảm để lên tiếng.","/breɪv/"],
  ["journey","hành trình","🧳","Every journey begins with one step.","Mỗi hành trình bắt đầu bằng một bước chân.","/ˈdʒɝːni/"],
  ["discover","khám phá ra","🔭","We discover something new every day.","Mỗi ngày chúng ta khám phá một điều mới.","/dɪˈskʌvər/"],
  ["improve","cải thiện","📈","Practice will improve your English.","Luyện tập sẽ cải thiện tiếng Anh của bạn.","/ɪmˈpruːv/"],
  ["protect","bảo vệ","🛡️","Trees help protect the environment.","Cây xanh giúp bảo vệ môi trường.","/prəˈtekt/"],
  ["balance","sự cân bằng","⚖️","Balance work with time to rest.","Hãy cân bằng công việc với thời gian nghỉ.","/ˈbæləns/"],
  ["curious","tò mò","🤔","Curious children ask many questions.","Trẻ tò mò đặt nhiều câu hỏi.","/ˈkjʊriəs/"],
  ["effort","nỗ lực","💪","Your effort will bring good results.","Nỗ lực của bạn sẽ mang lại kết quả tốt.","/ˈefərt/"],
  ["friendly","thân thiện","😊","Our new neighbor is very friendly.","Người hàng xóm mới rất thân thiện.","/ˈfrendli/"],
  ["knowledge","kiến thức","📚","Reading gives us knowledge.","Đọc sách mang lại kiến thức cho chúng ta.","/ˈnɑːlɪdʒ/"],
  ["memory","trí nhớ","🧠","This song brings back a happy memory.","Bài hát này gợi lại một ký ức vui.","/ˈmeməri/"],
  ["patient","kiên nhẫn","⏳","Be patient when learning a new skill.","Hãy kiên nhẫn khi học kỹ năng mới.","/ˈpeɪʃənt/"],
  ["prepare","chuẩn bị","🎒","I prepare my bag before school.","Tôi chuẩn bị cặp trước khi đi học.","/prɪˈper/"],
  ["respect","tôn trọng","🤝","We should respect different opinions.","Chúng ta nên tôn trọng những ý kiến khác nhau.","/rɪˈspekt/"],
  ["support","hỗ trợ","🙌","Good friends support each other.","Bạn tốt luôn hỗ trợ lẫn nhau.","/səˈpɔːrt/"],
  ["challenge","thử thách","🎯","This puzzle is a fun challenge.","Câu đố này là một thử thách thú vị.","/ˈtʃælɪndʒ/"],
  ["confident","tự tin","✨","She feels confident before the test.","Cô ấy cảm thấy tự tin trước bài kiểm tra.","/ˈkɑːnfɪdənt/"],
  ["creative","sáng tạo","🎨","He found a creative solution.","Cậu ấy tìm ra một giải pháp sáng tạo.","/kriˈeɪtɪv/"],
  ["environment","môi trường","🌍","We all share the same environment.","Tất cả chúng ta cùng chia sẻ một môi trường.","/ɪnˈvaɪrənmənt/"],
  ["focus","tập trung","🎯","Focus on one task at a time.","Hãy tập trung vào từng việc một.","/ˈfoʊkəs/"],
  ["grateful","biết ơn","💛","I am grateful for your help.","Tôi biết ơn sự giúp đỡ của bạn.","/ˈɡreɪtfəl/"],
  ["healthy","khỏe mạnh","🥗","Fresh food helps us stay healthy.","Thức ăn tươi giúp chúng ta khỏe mạnh.","/ˈhelθi/"],
  ["remember","ghi nhớ","💡","Remember to turn off the light.","Hãy nhớ tắt đèn.","/rɪˈmembər/"],
];
const extraVocabulary = [
  ["accept","chấp nhận","/əkˈsept/"],["achieve","đạt được","/əˈtʃiːv/"],["advice","lời khuyên","/ədˈvaɪs/"],["afraid","sợ hãi","/əˈfreɪd/"],
  ["agree","đồng ý","/əˈɡriː/"],["allow","cho phép","/əˈlaʊ/"],["amazing","tuyệt vời","/əˈmeɪzɪŋ/"],["answer","câu trả lời","/ˈænsər/"],
  ["appear","xuất hiện","/əˈpɪr/"],["arrive","đến nơi","/əˈraɪv/"],["avoid","tránh","/əˈvɔɪd/"],["beautiful","xinh đẹp","/ˈbjuːtɪfəl/"],
  ["believe","tin tưởng","/bɪˈliːv/"],["borrow","mượn","/ˈbɑːroʊ/"],["bright","sáng sủa","/braɪt/"],["build","xây dựng","/bɪld/"],
  ["careful","cẩn thận","/ˈkerfəl/"],["change","thay đổi","/tʃeɪndʒ/"],["choose","lựa chọn","/tʃuːz/"],["clever","thông minh","/ˈklevər/"],
  ["collect","thu thập","/kəˈlekt/"],["compare","so sánh","/kəmˈper/"],["complete","hoàn thành","/kəmˈpliːt/"],["continue","tiếp tục","/kənˈtɪnjuː/"],
  ["courage","lòng can đảm","/ˈkɜːrɪdʒ/"],["decide","quyết định","/dɪˈsaɪd/"],["describe","mô tả","/dɪˈskraɪb/"],["develop","phát triển","/dɪˈveləp/"],
  ["different","khác biệt","/ˈdɪfrənt/"],["difficult","khó khăn","/ˈdɪfɪkəlt/"],["dream","ước mơ","/driːm/"],["easy","dễ dàng","/ˈiːzi/"],
  ["encourage","khuyến khích","/ɪnˈkɜːrɪdʒ/"],["enjoy","thưởng thức","/ɪnˈdʒɔɪ/"],["explain","giải thích","/ɪkˈspleɪn/"],["explore","khám phá","/ɪkˈsplɔːr/"],
  ["famous","nổi tiếng","/ˈfeɪməs/"],["favorite","yêu thích","/ˈfeɪvərɪt/"],["future","tương lai","/ˈfjuːtʃər/"],["gentle","dịu dàng","/ˈdʒentəl/"],
  ["happen","xảy ra","/ˈhæpən/"],["helpful","hữu ích","/ˈhelpfəl/"],["honest","trung thực","/ˈɑːnɪst/"],["important","quan trọng","/ɪmˈpɔːrtənt/"],
  ["include","bao gồm","/ɪnˈkluːd/"],["invite","mời","/ɪnˈvaɪt/"],["kind","tử tế","/kaɪnd/"],["language","ngôn ngữ","/ˈlæŋɡwɪdʒ/"],
  ["learn","học hỏi","/lɜːrn/"],["listen","lắng nghe","/ˈlɪsən/"],["mistake","lỗi sai","/mɪˈsteɪk/"],["necessary","cần thiết","/ˈnesəseri/"],
  ["notice","chú ý","/ˈnoʊtɪs/"],["opinion","ý kiến","/əˈpɪnjən/"],["peaceful","yên bình","/ˈpiːsfəl/"],["possible","có thể","/ˈpɑːsəbəl/"],
  ["practice","luyện tập","/ˈpræktɪs/"],["promise","lời hứa","/ˈprɑːmɪs/"],["question","câu hỏi","/ˈkwestʃən/"],["quickly","nhanh chóng","/ˈkwɪkli/"],
  ["receive","nhận được","/rɪˈsiːv/"],["repeat","lặp lại","/rɪˈpiːt/"],["reply","trả lời","/rɪˈplaɪ/"],["result","kết quả","/rɪˈzʌlt/"],
  ["safe","an toàn","/seɪf/"],["share","chia sẻ","/ʃer/"],["simple","đơn giản","/ˈsɪmpəl/"],["solution","giải pháp","/səˈluːʃən/"],
  ["special","đặc biệt","/ˈspeʃəl/"],["success","thành công","/səkˈses/"],["surprise","sự ngạc nhiên","/sərˈpraɪz/"],["together","cùng nhau","/təˈɡeðər/"],
  ["understand","hiểu","/ˌʌndərˈstænd/"],["useful","hữu ích","/ˈjuːsfəl/"],["wonderful","tuyệt vời","/ˈwʌndərfəl/"],["worry","lo lắng","/ˈwɜːri/"],
];
let cards = [...coreCards, ...extraVocabulary.map(([word, meaning, phonetic]) => [word, meaning, "", `I learned the word “${word}” today.`, `Hôm nay tôi học từ “${word}”.`, phonetic])];
const RECENT_KEY = "flashcards-recent-words";
const WRONG_KEY = "flashcards-wrong-words";
const state = { deck: [], index: 0, score: 0, correct: 0, combo: 0, bestCombo: 0, review: [], answered: false };
const shuffle = (items) => [...items].sort(() => Math.random() - .5);
function loadFullVocabulary() { const bank = window.GAME_VOCABULARY_1000 || []; const phonetics = new Map(cards.map(card => [card[0], card[5]])); const curated = new Map(cards.map(card => [card[0], card])); const expanded = bank.map(item => curated.get(item.word) || [item.word, item.meaning, "", item.example || `I learned the word “${item.word}” today.`, item.meaning, phonetics.get(item.word) || "Nhấn vào từ để nghe phát âm"]); cards = [...new Map([...cards, ...expanded].map(card => [card[0], card])).values()].slice(0, 1000); const button = $("#startButton"); button.disabled = !cards.length; button.setAttribute("aria-busy", "false"); button.innerHTML = cards.length ? "Chơi Flashcards <span>→</span>" : "Không tải được dữ liệu · Thử tải lại trang"; return Promise.resolve(); }
const vocabularyReady = loadFullVocabulary();
function loadWords(key) { try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch { return []; } }
function saveWords(key, words) { localStorage.setItem(key, JSON.stringify([...new Set(words)])); }
function cardByWord(word) { return cards.find(card => card[0] === word); }
function buildDeck() { const wrong = loadWords(WRONG_KEY).map(cardByWord).filter(Boolean); const recent = new Set(loadWords(RECENT_KEY)); const unseen = shuffle(cards.filter(card => !recent.has(card[0]) && !wrong.some(item => item[0] === card[0]))); const fallback = shuffle(cards.filter(card => !wrong.some(item => item[0] === card[0]))); const deck = [...shuffle(wrong), ...unseen, ...fallback].filter((card, index, list) => list.findIndex(item => item[0] === card[0]) === index).slice(0, 12); saveWords(RECENT_KEY, [...deck.map(card => card[0]), ...loadWords(RECENT_KEY)].slice(0, Math.max(0, cards.length - 12))); return deck; }
function show(id) { document.querySelectorAll(".screen").forEach(el => { const active = el.id === id; el.classList.toggle("active", active); el.hidden = !active; el.setAttribute("aria-hidden", String(!active)); }); }
function best() { $("#bestScore").textContent = Number(localStorage.getItem("flashcards-best") || 0); }
async function start(deck = null) { await vocabularyReady; state.deck = deck || buildDeck(); state.index = 0; state.score = 0; state.correct = 0; state.combo = 0; state.bestCombo = 0; state.review = []; show("gameScreen"); render(); }
function render() {
  const [word, meaning, , example, exampleVi, phonetic] = state.deck[state.index];
  state.answered = false; $("#flashcard").classList.remove("flipped"); $("#nextButton").classList.remove("visible");
  $("#roundText").textContent = `Câu ${state.index + 1}/${state.deck.length}`; $("#scoreText").textContent = state.score; $("#comboText").textContent = state.combo;
  $("#progressBar").style.width = `${((state.index + 1) / state.deck.length) * 100}%`;
  $("#cardWord").textContent = word; $("#cardWord").dataset.speak = word; $("#cardPhonetic").textContent = phonetic; $("#cardBackWord").textContent = `${word} 🔊`; $("#cardBackWord").dataset.speak = word; $("#cardBackPhonetic").textContent = phonetic;
  $("#cardMeaning").textContent = meaning; $("#cardExample").textContent = example; $("#cardExampleVi").textContent = exampleVi;
  $("#flipHint").textContent = "Từ này có nghĩa là gì?"; $("#flashcard").setAttribute("aria-label", `${word}. Hãy chọn nghĩa đúng`);
  const wrong = shuffle([...new Set(cards.map(card => card[1]).filter(item => item !== meaning))]).slice(0, 3);
  $("#meaningGrid").innerHTML = shuffle([meaning, ...wrong]).map(item => `<button class="meaning-button" data-meaning="${item}">${item}</button>`).join("");
  document.querySelectorAll(".meaning-button").forEach(button => button.onclick = () => answer(button, meaning));
}
function answer(button, meaning) { if (state.answered) return; state.answered = true; const word = state.deck[state.index][0]; const ok = button.dataset.meaning === meaning; document.querySelectorAll(".meaning-button").forEach(item => { item.disabled = true; if (item.dataset.meaning === meaning) item.classList.add("correct"); }); if (ok) { state.correct++; state.combo++; state.bestCombo = Math.max(state.bestCombo, state.combo); state.score += 100 + (state.combo - 1) * 25; saveWords(WRONG_KEY, loadWords(WRONG_KEY).filter(item => item !== word)); } else { button.classList.add("wrong"); state.combo = 0; state.review.push(state.deck[state.index]); saveWords(WRONG_KEY, [word, ...loadWords(WRONG_KEY)]); } $("#scoreText").textContent = state.score; $("#comboText").textContent = state.combo; $("#flipHint").textContent = ok ? "✅ Chính xác! Xem ví dụ để nhớ lâu hơn." : `📘 Đáp án đúng: ${meaning}`; $("#flashcard").classList.add("flipped"); $("#nextButton").classList.add("visible"); }
function next() { state.index++; state.index >= state.deck.length ? finish() : render(); }
function finish() { const old = Number(localStorage.getItem("flashcards-best") || 0); if (state.score > old) localStorage.setItem("flashcards-best", state.score); best(); $("#finalScore").textContent = state.score; $("#finalLine").textContent = `${state.correct}/${state.deck.length} câu đúng · Combo cao nhất ${state.bestCombo}`; $("#resultTitle").textContent = state.correct >= state.deck.length - 2 ? "Vocabulary rất chắc!" : "Chơi thêm một lượt để nhớ sâu hơn!"; $("#reviewButton").hidden = !state.review.length; if (typeof recordGameScore === "function") recordGameScore("Flashcards Từ Vựng", state.score, "📖"); show("resultScreen"); }
async function share() { const text = "Cùng học từ vựng tiếng Anh bằng Flashcards!"; if (navigator.share) { try { await navigator.share({ title: "Flashcards Từ Vựng", text, url: location.href }); return; } catch (error) { if (error.name === "AbortError") return; } } await navigator.clipboard.writeText(`${text} ${location.href}`); }
$("#startButton").onclick = () => start(); $("#replayButton").onclick = () => start(); $("#reviewButton").onclick = () => start(shuffle(state.review));
$("#nextButton").onclick = next;
$("#shareGameButton").onclick = share; $("#welcomeShareButton").onclick = share; best();
