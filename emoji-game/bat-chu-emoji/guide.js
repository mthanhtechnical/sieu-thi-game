(function () {
  const guides = {
    "bat-chu-emoji": {
      title: "Bắt Chữ Emoji",
      steps: [
        ["Nhìn chuỗi emoji", "Mỗi câu có một cụm emoji và một gợi ý ngắn. Hãy đoán cụm từ tiếng Việt mà hình ảnh đang gợi ra."],
        ["Chọn đáp án nhanh", "Bạn có 10 giây cho mỗi câu. Chọn đúng càng sớm thì điểm càng cao."],
        ["Giữ chuỗi đúng", "Trả lời đúng liên tiếp để nhận thêm điểm streak và phá kỷ lục."],
        ["Chia sẻ kết quả", "Sau 10 câu, bấm Thách bạn bè để gửi điểm số của bạn."],
      ],
      tip: "Mẹo: đừng dịch từng emoji quá cứng. Nhiều câu dùng nghĩa bóng, âm gần giống hoặc cụm quen thuộc.",
    },
    kids: {
      title: "Vui Học Emoji 5+",
      steps: [
        ["Chọn cấp độ", "Dễ, Vừa hoặc Khó sẽ thay đổi độ suy luận của câu hỏi."],
        ["Nghe câu hỏi khi cần", "Bấm nút loa để nghe lại câu hỏi, phù hợp khi bé chơi cùng ba mẹ."],
        ["Chọn đáp án", "Trả lời đúng để nhận sao và mở sticker vui."],
        ["Chơi lại bộ khác", "Mỗi lượt là một bộ câu hỏi ngắn để bé không bị quá tải."],
      ],
      tip: "Mẹo: ba mẹ nên đọc câu hỏi chậm một lần trước khi bé chọn đáp án.",
    },
    "kids-english": {
      title: "Từ Vựng Tiếng Anh Cho Bé",
      steps: [
        ["Nhìn hình và nghe từ", "Mỗi câu có hình ảnh, âm thanh và lựa chọn từ tiếng Anh."],
        ["Chọn từ đúng", "Bé chọn từ khớp với hình hoặc nghĩa được hỏi."],
        ["Dùng nút nghe", "Bấm loa để nghe lại phát âm trước khi trả lời."],
        ["Ôn lại bằng lượt mới", "Chơi lại giúp bé gặp từ theo thứ tự khác."],
      ],
      tip: "Mẹo: khuyến khích bé đọc to từ tiếng Anh sau mỗi câu đúng.",
    },
    "ghep-y-tu-hinh": {
      title: "Ghép Ý Từ Hình",
      steps: [
        ["Nhìn bộ hình", "Mỗi màn có 4 hình gợi một chủ đề hoặc khái niệm."],
        ["Chọn từ khóa", "Chọn đáp án mô tả đúng ý chung của cả bộ hình, không chỉ một hình riêng lẻ."],
        ["Trả lời câu trí nhớ", "Sau khi đoán từ khóa, game sẽ hỏi lại chi tiết về thứ tự, vị trí hoặc hình đã xuất hiện."],
        ["Giữ combo", "Đúng liên tiếp giúp điểm cao hơn."],
      ],
      tip: "Mẹo: hãy nhớ thứ tự hình từ trái sang phải ngay khi vừa nhìn thấy.",
    },
    "doan-thanh-ngu": {
      title: "Đoán Thành Ngữ",
      steps: [
        ["Đọc gợi ý nghĩa", "Mỗi câu mô tả nghĩa bóng hoặc tình huống sử dụng của một thành ngữ."],
        ["Xem gợi ý phụ", "Dòng gợi ý giúp bạn liên tưởng đến hình ảnh trong câu thành ngữ."],
        ["Chọn đáp án", "Chọn đúng thành ngữ/tục ngữ trong các lựa chọn."],
        ["Đọc giải thích", "Sau mỗi câu, game hiện giải thích ngắn để bạn nhớ lâu hơn."],
      ],
      tip: "Mẹo: phân biệt nghĩa đen trong hình ảnh và nghĩa bóng trong đời sống.",
    },
    "doan-hinh-bat-chu": {
      title: "Đoán Hình Bắt Chữ",
      steps: [
        ["Nhìn cụm hình", "Các emoji có thể gợi âm, nghĩa hoặc thành ngữ quen thuộc."],
        ["Đọc gợi ý", "Gợi ý sẽ nói hướng suy luận, ví dụ nghĩa bóng hay cụm từ quen dùng."],
        ["Chọn cụm từ", "Chọn đáp án khớp nhất với toàn bộ cụm hình."],
        ["Học cách bắt chữ", "Sau khi trả lời, đọc giải thích để hiểu cách ghép ý."],
      ],
      tip: "Mẹo: thử đọc tên hình thành tiếng, đôi khi đáp án nằm ở âm gần giống.",
    },
    "doan-tu-tieng-anh": {
      title: "Đoán Từ Tiếng Anh",
      steps: [
        ["Đọc nghĩa tiếng Việt", "Mỗi câu hỏi một từ tiếng Anh dựa trên nghĩa tiếng Việt."],
        ["Nhìn emoji gợi ý", "Emoji giúp bạn khoanh vùng chủ đề của từ."],
        ["Chọn vocabulary", "Chọn từ tiếng Anh đúng nhất trong các lựa chọn gần giống."],
        ["Xem ví dụ", "Sau mỗi câu có giải thích ngắn để phân biệt với từ nhiễu."],
      ],
      tip: "Mẹo: chú ý các từ gần giống như remember/remind hoặc cooperate/compete.",
    },
    "quiz-theo-chu-de": {
      title: "Quiz Theo Chủ Đề",
      steps: [
        ["Chọn chủ đề", "Ở màn đầu, chọn Địa lý, Khoa học, Phim ảnh hoặc Đời sống."],
        ["Trả lời 8 câu", "Mỗi lượt có 8 câu thuộc chủ đề đã chọn."],
        ["Tính điểm combo", "Đúng liên tiếp giúp điểm tăng nhanh hơn."],
        ["Đổi chủ đề", "Bấm chơi lại và chọn chủ đề khác để luyện mảng mới."],
      ],
      tip: "Mẹo: nếu muốn điểm cao, hãy chơi từng chủ đề vài lượt để quen dạng câu.",
    },
    "word-search": {
      title: "Word Search",
      steps: [
        ["Xem danh sách từ", "Các từ cần tìm nằm phía trên lưới chữ."],
        ["Bấm chữ liền nhau", "Chọn các chữ theo hàng ngang, dọc hoặc chéo để tạo thành từ."],
        ["Từ có thể đảo chiều", "Bạn có thể chọn từ theo chiều xuôi hoặc ngược nếu các chữ liền nhau."],
        ["Tìm hết danh sách", "Khi đủ tất cả từ, game tự kết thúc và tính điểm."],
      ],
      tip: "Mẹo: tìm chữ cái đầu/cuối hiếm trước, ví dụ Q, W, Y, rồi dò theo đường chéo.",
    },
    hangman: {
      title: "Hangman",
      steps: [
        ["Đọc gợi ý", "Mỗi từ tiếng Anh có một gợi ý nghĩa tiếng Việt."],
        ["Chọn chữ cái", "Bấm từng chữ trên bàn phím để mở các vị trí trong từ."],
        ["Tránh sai quá 6 lần", "Mỗi chữ không có trong từ sẽ tăng số lượt sai."],
        ["Qua từ kế tiếp", "Đoán đúng hoặc hết lượt sẽ hiện đáp án rồi chuyển sang từ mới."],
      ],
      tip: "Mẹo: thử nguyên âm A, E, I, O, U trước để mở cấu trúc từ.",
    },
    wordle: {
      title: "Wordle",
      steps: [
        ["Đoán từ 5 chữ cái", "Nhập một từ tiếng Anh gồm 5 chữ cái."],
        ["Có 6 lượt", "Bạn có tối đa 6 lần đoán để tìm đáp án."],
        ["Đọc màu gợi ý", "Xanh là đúng chữ đúng vị trí, vàng là có chữ nhưng sai vị trí, xám là không có trong từ."],
        ["Dùng bàn phím ảo", "Bấm ENTER để gửi và nút xóa để sửa trước khi gửi."],
      ],
      tip: "Mẹo: lượt đầu nên dùng từ có nhiều nguyên âm như OCEAN hoặc HEART.",
    },
    unscramble: {
      title: "Unscramble",
      steps: [
        ["Đọc nghĩa tiếng Việt", "Gợi ý cho biết nghĩa của từ cần sắp xếp."],
        ["Chọn chữ theo thứ tự", "Bấm các chữ cái lộn xộn để tạo thành từ tiếng Anh đúng."],
        ["Dùng nút xóa", "Nếu chọn sai thứ tự, bấm Xóa lựa chọn để làm lại."],
        ["Hoàn thành từ", "Khi chọn đủ số chữ, game tự kiểm tra đáp án."],
      ],
      tip: "Mẹo: tìm hậu tố quen thuộc như -ING, -ER, -TION hoặc cặp chữ TH, SH, CH.",
    },
    "dien-chu-con-thieu": {
      title: "Điền Chữ Còn Thiếu",
      steps: [
        ["Nhìn từ bị khuyết", "Dấu gạch dưới là phần chữ còn thiếu trong từ tiếng Anh."],
        ["Đọc nghĩa", "Nghĩa tiếng Việt giúp bạn xác định từ cần hoàn thành."],
        ["Chọn chữ/cụm chữ", "Chọn đáp án đúng trong 4 lựa chọn."],
        ["Xem đáp án đầy đủ", "Sau khi trả lời, game hiện từ hoàn chỉnh và nghĩa."],
      ],
      tip: "Mẹo: đọc từ thành tiếng để đoán cụm chữ còn thiếu dễ hơn.",
    },
    "noi-tu": {
      title: "Nối Từ",
      steps: [
        ["Chọn cột trái", "Bấm một từ ở cột trái trước."],
        ["Chọn cột phải", "Bấm từ ở cột phải để tạo thành cặp có nghĩa hoặc liên tưởng đúng."],
        ["Ghép hết 8 cặp", "Mỗi cặp đúng sẽ được khóa lại và cộng điểm."],
        ["Sai bị trừ điểm", "Chọn sai cặp sẽ mất một ít điểm, nhưng vẫn tiếp tục chơi được."],
      ],
      tip: "Mẹo: ghép các cặp rất quen trước như mặt-trời, cầu-vồng, trí-nhớ.",
    },
    "ghep-chu-thanh-tu": {
      title: "Ghép Chữ Thành Từ",
      steps: [
        ["Đọc gợi ý", "Gợi ý tiếng Việt cho biết từ tiếng Anh cần dựng."],
        ["Chọn chữ từ ngân hàng", "Có nhiều chữ hơn đáp án, bao gồm chữ nhiễu."],
        ["Đúng thứ tự", "Bạn phải chọn đúng chữ và đúng thứ tự để hoàn thành từ."],
        ["Xóa khi cần", "Bấm Xóa lựa chọn nếu chọn sai chữ hoặc sai thứ tự."],
      ],
      tip: "Mẹo: xác định độ dài từ trước, rồi tìm các cặp chữ thường đi cùng nhau.",
    },
    sudoku: {
      title: "Sudoku",
      steps: [
        ["Chọn ô trống", "Bấm vào một ô không phải số cho sẵn."],
        ["Điền số 1-9", "Dùng bàn phím số phía dưới để nhập vào ô đã chọn."],
        ["Theo luật Sudoku", "Mỗi hàng, cột và ô 3x3 phải có đủ số 1 đến 9, không trùng."],
        ["Kiểm tra bảng", "Bấm Kiểm tra khi đã điền xong. Ô sai sẽ bị tô màu để bạn sửa."],
      ],
      tip: "Mẹo: bắt đầu từ hàng, cột hoặc ô 3x3 có nhiều số cho sẵn nhất.",
    },
  };

  function slugFromPath() {
    const path = window.location.pathname.replace(/\/index\.html$/, "").replace(/\/+$/, "");
    const parts = path.split("/").filter(Boolean);
    if (parts.includes("kids") && parts.includes("english")) return "kids-english";
    const last = parts[parts.length - 1];
    if (last === "kids") return "kids";
    if (!parts.length || last === "emoji-game") return "bat-chu-emoji";
    return last;
  }

  function getGuide() {
    return guides[slugFromPath()] || guides["bat-chu-emoji"];
  }

  function buildModal(guide) {
    const modal = document.createElement("div");
    modal.className = "guide-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "guideTitle");
    modal.innerHTML = `
      <div class="guide-panel">
        <div class="guide-head">
          <div>
            <p class="guide-kicker">Hướng dẫn chơi</p>
            <h2 class="guide-title" id="guideTitle">${guide.title}</h2>
          </div>
          <button class="guide-close" type="button" aria-label="Đóng hướng dẫn">×</button>
        </div>
        <div class="guide-body">
          <ol class="guide-list">
            ${guide.steps.map(([title, text]) => `<li><strong>${title}</strong>${text}</li>`).join("")}
          </ol>
          <p class="guide-tip">${guide.tip}</p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    return modal;
  }

  function initGuide() {
    const guide = getGuide();
    const target = document.querySelector(".header-actions, .header-buttons");
    if (!target || document.querySelector("[data-guide-open]")) return;

    const button = document.createElement("button");
    button.className = "guide-button";
    button.type = "button";
    button.dataset.guideOpen = "true";
    button.textContent = "Hướng dẫn";
    target.prepend(button);

    const modal = buildModal(guide);
    const close = () => modal.classList.remove("open");
    const open = () => modal.classList.add("open");

    button.addEventListener("click", open);
    modal.querySelector(".guide-close").addEventListener("click", close);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGuide);
  } else {
    initGuide();
  }
})();
