(function () {
  const guides = {
    portal: {
      title: "Cổng Emoji Game",
      steps: [
        ["Chọn game", "Trang chủ là danh sách tất cả game hiện có. Bấm nút Chơi trên card game bạn muốn mở."],
        ["Xem hướng dẫn riêng", "Khi vào từng game, bấm nút Hướng dẫn ở góc trên để xem cách chơi của game đó."],
        ["Lưu kỷ lục", "Nhiều game tự lưu điểm cao nhất trên thiết bị và trình duyệt bạn đang dùng."],
        ["Đổi game nhanh", "Bấm Về cổng game ở cuối trang game để quay lại danh sách."],
      ],
      tip: "Mẹo: nếu muốn chơi nhanh, bắt đầu với Bắt Chữ Emoji, Wordle hoặc Quiz theo chủ đề.",
    },
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
    "tim-diem-khac-nhau": {
      title: "Tìm Điểm Khác Nhau",
      steps: [
        ["So sánh hai tranh", "Ảnh bên trái là ảnh gốc, ảnh bên phải có một số chi tiết bị thay đổi."],
        ["Bấm vào ảnh bên phải", "Khi thấy điểm khác nhau, hãy bấm đúng vị trí đó trên ảnh bên phải."],
        ["Tìm đủ 5 điểm", "Mỗi màn có 5 điểm khác nhau. Tìm đủ thì chuyển sang màn tiếp theo."],
        ["Tránh bấm sai", "Bấm sai sẽ tăng số lỗi và làm giảm điểm thưởng cuối lượt."],
      ],
      tip: "Mẹo: quét theo từng vùng: bầu trời, đồ vật lớn, màu sắc, rồi mới đến chi tiết nhỏ.",
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
    flashcards: {
      title: "Flashcards Từ Vựng",
      steps: [
        ["Nhìn mặt trước", "Đọc từ tiếng Anh và thử nhớ nghĩa trước khi lật thẻ."],
        ["Chọn nghĩa đúng", "Mỗi từ có 4 lựa chọn. Trả lời đúng liên tiếp để tăng combo và điểm."],
        ["Nghe phát âm", "Rê chuột hoặc chạm vào từ tiếng Anh để nghe cách đọc."],
        ["Ôn từ trả lời sai", "Cuối lượt, chơi lại riêng các từ chưa trả lời đúng."],
      ],
      tip: "Mẹo: hãy đọc to câu ví dụ và tự đặt thêm một câu mới với từ vừa học.",
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
        ["Tự dò từ ẩn", "Game chỉ cho biết số lượng từ cần tìm. Các từ đã tìm được mới hiện phía trên lưới chữ."],
        ["Bấm chữ liền nhau", "Chọn các chữ theo hàng ngang, dọc hoặc chéo để tạo thành từ."],
        ["Từ có thể đảo chiều", "Bạn có thể chọn từ theo chiều xuôi hoặc ngược nếu các chữ liền nhau."],
        ["Tìm đủ số lượng", "Khi đủ tất cả từ ẩn, game tự kết thúc và tính điểm."],
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
    nonogram: {
      title: "Nonogram",
      steps: [
        ["Đọc gợi ý", "Số ở đầu hàng hoặc cột cho biết các cụm ô cần tô liên tiếp."],
        ["Tô hoặc đánh X", "Dùng công cụ Tô cho ô chắc chắn có màu, Đánh X cho ô chắc chắn trống."],
        ["Tách cụm đúng", "Nếu một hàng có gợi ý 3 1, nghĩa là có một cụm 3 ô tô và một cụm 1 ô tô, cách nhau ít nhất một ô trống."],
        ["Kiểm tra bảng", "Bấm Kiểm tra để tìm ô đang sai, hoặc Gợi ý khi cần mở một bước."],
      ],
      tip: "Mẹo: bắt đầu với hàng/cột có tổng gợi ý gần bằng kích thước bảng.",
    },
    kakuro: {
      title: "Kakuro",
      steps: [
        ["Chọn ô trắng", "Bấm một ô nhập số trong bảng."],
        ["Điền số 1-9", "Dùng bàn phím số bên dưới hoặc phím số trên máy tính."],
        ["Khớp tổng", "Mỗi số trong ô đen là tổng của dãy ô trắng bên phải hoặc bên dưới."],
        ["Không lặp số", "Trong cùng một dãy tổng, các số không được trùng nhau."],
      ],
      tip: "Mẹo: các tổng nhỏ với ít ô thường dễ khóa đáp án trước, ví dụ 3 trong 2 ô chỉ có 1 và 2.",
    },
    "logic-puzzle": {
      title: "Logic Puzzle",
      steps: [
        ["Đọc manh mối", "Mỗi câu giúp loại trừ hoặc xác nhận một mối liên hệ."],
        ["Đánh dấu ô", "Bấm ô để đổi giữa trống, sai và đúng."],
        ["Dùng loại trừ", "Khi đánh dấu một cặp đúng, các lựa chọn còn lại cùng hàng/cột sẽ tự thành sai."],
        ["Kiểm tra kết luận", "Bấm Kiểm tra để biết còn thiếu hoặc có kết luận nào chưa đúng."],
      ],
      tip: "Mẹo: hãy đánh dấu các điều chắc chắn sai trước, rồi tìm hàng hoặc cột chỉ còn một lựa chọn.",
    },
  };

  function slugFromPath() {
    const path = window.location.pathname.replace(/\/index\.html$/, "").replace(/\/+$/, "");
    const parts = path.split("/").filter(Boolean);
    if (parts.includes("kids") && parts.includes("english")) return "kids-english";
    const last = parts[parts.length - 1];
    if (last === "kids") return "kids";
    if (!parts.length || last === "emoji-game") return "portal";
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

  function getHomeHref() {
    const path = window.location.pathname.replace(/\/index\.html$/, "").replace(/\/+$/, "");
    const parts = path.split("/").filter(Boolean);
    const levels = Math.max(0, parts.length - 1);
    return levels === 0 ? "./" : "../".repeat(levels);
  }

  function getGameInfo() {
    const slug = slugFromPath();
    const titles = {
      portal: "Cổng game Emoji",
      "bat-chu-emoji": "Bắt chữ Emoji",
      kids: "Vui học Emoji 5+",
      "kids-english": "English 5+",
      "doan-tu-tieng-anh": "Đoán từ tiếng Anh",
      flashcards: "Flashcards Từ Vựng",
      wordle: "Wordle",
      hangman: "Hangman",
      unscramble: "Unscramble",
      sudoku: "Sudoku",
      nonogram: "Nonogram",
      kakuro: "Kakuro",
      "logic-puzzle": "Logic Puzzle",
      "quiz-theo-chu-de": "Quiz theo chủ đề",
      "doan-thanh-ngu": "Đoán thành ngữ",
      "doan-hinh-bat-chu": "Đoán hình bắt chữ",
      "ghep-chu-thanh-tu": "Ghép chữ thành từ",
      "ghep-y-tu-hinh": "Ghép ý từ hình",
      "tim-diem-khac-nhau": "Tìm điểm khác nhau",
      "dien-chu-con-thieu": "Điền chữ còn thiếu",
      "noi-tu": "Nối từ",
      "word-search": "Word Search",
    };
    const descriptions = {
      portal: "Chọn một trò chơi và bắt đầu hành trình luyện tư duy ngay hôm nay.",
      "bat-chu-emoji": "Nhìn emoji, đoán nghĩa và chinh phục từng lượt chơi.",
      kids: "Một bộ trò chơi nhẹ nhàng cho bé học qua hình ảnh và màu sắc.",
      "kids-english": "Nghe, nhìn và chọn từ tiếng Anh đúng với hình ảnh.",
      "doan-tu-tieng-anh": "Chọn đáp án đúng để mở rộng vốn từ tiếng Anh.",
      flashcards: "Lật thẻ để học nghĩa, phát âm và ví dụ của từ tiếng Anh.",
      wordle: "Đoán từ tiếng Anh 5 chữ cái trong vài lượt thử.",
      hangman: "Đoán từng chữ cái để lật mở đáp án đúng.",
      unscramble: "Sắp xếp lại chữ cái thành từ tiếng Anh đúng.",
      sudoku: "Điền số logic để hoàn thành bảng Sudoku.",
      nonogram: "Tô đúng các ô theo gợi ý để tạo hình hoàn chỉnh.",
      kakuro: "Điền số theo tổng và quy tắc không lặp.",
      "logic-puzzle": "Giải câu đố bằng suy luận và loại trừ.",
      "quiz-theo-chu-de": "Chọn chủ đề và trả lời nhanh các câu hỏi vui.",
      "doan-thanh-ngu": "Đoán thành ngữ, tục ngữ bằng ngữ cảnh và nghĩa bóng.",
      "doan-hinh-bat-chu": "Nhìn hình, đoán cụm từ và hiểu cách bắt chữ.",
      "ghep-chu-thanh-tu": "Ghép các chữ cái đúng thứ tự để tạo thành từ.",
      "ghep-y-tu-hinh": "Ghép ý đúng từ bộ hình và câu hỏi trí nhớ.",
      "tim-diem-khac-nhau": "Tìm 5 chi tiết thay đổi giữa hai bức tranh.",
      "dien-chu-con-thieu": "Điền phần chữ còn thiếu để hoàn thiện từ tiếng Anh.",
      "noi-tu": "Ghép các cặp từ có liên quan hoặc có nghĩa tương ứng.",
      "word-search": "Tìm các từ ẩn trong lưới chữ theo hàng dọc, ngang hoặc chéo.",
    };
    return {
      slug,
      title: titles[slug] || document.title || "Game",
      description: descriptions[slug] || "Bắt đầu chơi ngay để luyện tư duy và ghi điểm.",
      homeHref: getHomeHref(),
    };
  }

  function applyGameTheme() {
    const game = getGameInfo();
    const theme = game.slug || "portal";
    document.body.dataset.gameTheme = theme;
    document.documentElement.style.setProperty("--accent", "var(--yellow)");
    document.documentElement.style.setProperty("--accent-strong", "var(--pink)");
    if (theme === "kids") {
      document.documentElement.style.setProperty("--accent", "#7fe0ff");
      document.documentElement.style.setProperty("--accent-strong", "#8f7cff");
    } else if (theme === "kids-english") {
      document.documentElement.style.setProperty("--accent", "#8f7cff");
      document.documentElement.style.setProperty("--accent-strong", "#53d6b1");
    } else if (theme === "sudoku") {
      document.documentElement.style.setProperty("--accent", "#7ad8ff");
      document.documentElement.style.setProperty("--accent-strong", "#6ee7b7");
    } else if (theme === "wordle") {
      document.documentElement.style.setProperty("--accent", "#ffd447");
      document.documentElement.style.setProperty("--accent-strong", "#ff6b9d");
    } else if (theme === "quiz-theo-chu-de") {
      document.documentElement.style.setProperty("--accent", "#60e6a8");
      document.documentElement.style.setProperty("--accent-strong", "#85d7ff");
    }
  }

  function getBestScoreForGame(slug) {
    const candidates = [
      `${slug}-best`,
      `${slug.replace(/-/g, "")}-best`,
      `${slug}-score`,
      `${slug.replace(/-/g, "")}-score`,
      "emoji-best-score",
      "kids-best",
      "kids-english-best",
    ];
    for (const key of candidates) {
      const value = localStorage.getItem(key);
      if (value) return Number(value) || value;
    }
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (key && /best|score/i.test(key) && key.includes(slug)) {
        const value = localStorage.getItem(key);
        if (value) return Number(value) || value;
      }
    }
    return "—";
  }

  function getPlayCountForGame(slug) {
    const key = `ux-play-count:${slug}`;
    const current = Number(localStorage.getItem(key) || 0);
    return current;
  }

  function normalizeActionButtons() {
    const actionPattern = /(bắt đầu|chơi ngay|chơi lại|làm lại|tiếp tục|play|start|replay|again|next)/i;
    document.querySelectorAll("button, [role='button'], a").forEach((element) => {
      const text = (element.textContent || "").trim();
      if (element.dataset.sharedActionNormalized || !actionPattern.test(text)) return;
      element.classList.add("shared-action-button");
      element.dataset.sharedActionNormalized = "true";
    });
  }

  function findStartAction() {
    const candidates = [...document.querySelectorAll("button, [role='button']")].filter((element) => {
      if (element.closest(".game-welcome-modal") || element.closest(".guide-modal")) return false;
      const text = (element.textContent || "").trim();
      return /(bắt đầu|chơi ngay|play|start|chơi)/i.test(text);
    });
    return candidates.find((element) => /(bắt đầu|chơi ngay|start|play)/i.test(element.textContent || "")) || candidates[0];
  }

  function trackPlayStart(slug) {
    const key = `ux-play-count:${slug}`;
    const current = Number(localStorage.getItem(key) || 0) + 1;
    localStorage.setItem(key, String(current));
    return current;
  }

  function hookScoreRecording(slug) {
    if (typeof window.recordGameScore === "function") return;
    window.recordGameScore = function recordGameScore(gameName, score) {
      const bestKey = `${slug}-best`;
      const currentBest = Number(localStorage.getItem(bestKey) || 0);
      if (Number(score) > currentBest) {
        localStorage.setItem(bestKey, String(score));
      }
      localStorage.setItem(`ux-last-score:${slug}`, `${score} điểm`);
      if (document.querySelector(".game-ux-summary")) {
        renderSharedSummary();
      }
    };
  }

  function renderSharedSummary() {
    // Render a compact summary bar at the top with only metrics and a replay button.
    const existingBar = document.querySelector('.game-ux-summary-bar');
    if (existingBar) existingBar.remove();

    const game = getGameInfo();
    const bestScore = getBestScoreForGame(game.slug);
    const playCount = getPlayCountForGame(game.slug);
    const lastScore = localStorage.getItem(`ux-last-score:${game.slug}`) || "—";

    const bar = document.createElement('div');
    bar.className = 'game-ux-summary-bar';
    bar.innerHTML = `
      <div class="bar-metrics">
        <div class="bar-metric"><span class="bar-label">Điểm cao</span><strong class="bar-value">${bestScore}</strong></div>
        <div class="bar-metric"><span class="bar-label">Lượt chơi</span><strong class="bar-value">${playCount}</strong></div>
        <div class="bar-metric"><span class="bar-label">Ván gần nhất</span><strong class="bar-value">${lastScore}</strong></div>
      </div>
      <div class="bar-actions">
        <button class="shared-action-button" type="button" data-ux-replay-btn="true">Chơi lại</button>
      </div>
    `;

    // Insert after header if present, otherwise prepend to body
    const header = document.querySelector('header');
    if (header && header.parentNode) header.parentNode.insertBefore(bar, header.nextSibling);
    else document.body.insertBefore(bar, document.body.firstChild);

    // Wire replay button
    const replay = bar.querySelector('[data-ux-replay-btn]');
    if (replay) {
      replay.addEventListener('click', () => {
        const startAction = findStartAction();
        if (startAction) startAction.click();
      });
    }
  }

  function ensureWelcomeOverlay() {
    const game = getGameInfo();
    if (game.slug === "portal") return;
    if (document.body?.dataset.skipWelcomeOverlay === "true") return;
    if (document.querySelector(".game-welcome-modal")) return;
    if (sessionStorage.getItem(`ux-welcome-seen:${game.slug}`) === "1") return;

    const overlay = document.createElement("div");
    overlay.className = "game-welcome-modal open";
    overlay.innerHTML = `
      <div class="game-welcome-panel">
        <p class="summary-kicker">Sẵn sàng chơi</p>
        <h2>${game.title}</h2>
        <p>${game.description}</p>
        <div class="summary-actions">
          <button class="shared-action-button" type="button" data-ux-start-btn="true">Bắt đầu</button>
          <a class="toolbar-link" href="${game.homeHref}">Cổng game</a>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const startButton = overlay.querySelector("[data-ux-start-btn]");
    startButton.addEventListener("click", () => {
      const startAction = findStartAction();
      trackPlayStart(game.slug);
      sessionStorage.setItem(`ux-welcome-seen:${game.slug}`, "1");
      if (startAction) {
        startAction.click();
      }
      overlay.classList.remove("open");
      setTimeout(() => overlay.remove(), 220);
      renderSharedSummary();
    });
  }

  function initGuide() {
    const guide = getGuide();
    const target = document.querySelector(".header-actions, .header-buttons, header");
    if (!target || document.querySelector("[data-guide-open]")) return;

    const toolbar = document.createElement("div");
    toolbar.className = "ux-toolbar";

    const homeLink = document.createElement("a");
    homeLink.className = "toolbar-link";
    homeLink.href = getHomeHref();
    homeLink.setAttribute("aria-label", "Quay về cổng game");
    homeLink.innerHTML = "<span aria-hidden=\"true\">←</span> Cổng game";

    const button = document.createElement("button");
    button.className = "guide-button";
    button.type = "button";
    button.dataset.guideOpen = "true";
    button.textContent = "Hướng dẫn";

    toolbar.append(homeLink, button);

    if (target.matches("header")) {
      target.appendChild(toolbar);
    } else {
      target.prepend(toolbar);
    }

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

    applyGameTheme();
    normalizeActionButtons();
    hookScoreRecording(getGameInfo().slug);
    ensureWelcomeOverlay();
    renderSharedSummary();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGuide);
  } else {
    initGuide();
  }
})();
