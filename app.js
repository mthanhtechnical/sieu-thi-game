const STORAGE_KEY = "folio-facebook-growth-v1";

const defaultState = {
  profile: {
    displayName: "",
    niche: "",
    audience: "",
    currentFollowers: "",
    goal: 300,
  },
  completedDays: [],
  videoMetrics: {},
  tracking: [],
};

const videoPlan = [
  ["work", "Công việc", "Sai lầm đầu tiên khi mới đi làm", "Ngày đầu đi làm, tôi đã phạm một lỗi mà mất vài năm mới nhận ra."],
  ["money", "Tiền bạc", "Mua rẻ chưa chắc tiết kiệm", "Có tiền rồi tôi mới hiểu: món rẻ nhất đôi khi lại đắt nhất."],
  ["relation", "Quan hệ", "Càng nhiều bạn càng mệt?", "Sau 30 tuổi, tôi mới hiểu vì sao càng nhiều bạn đôi khi càng mệt."],
  ["work", "Công việc", "Chăm chỉ nhưng không được ghi nhận", "Làm nhiều không có nghĩa là người khác nhìn thấy giá trị của bạn."],
  ["money", "Tiền bạc", "Khoản tiền nhỏ làm bạn nghèo đi", "Không phải món đồ lớn—những khoản này mới âm thầm ăn hết tiền."],
  ["relation", "Quan hệ", "Người chỉ tìm đến khi cần", "Có một kiểu quan hệ chỉ tồn tại khi bạn còn hữu ích."],
  ["work", "Công việc", "Một câu nói của sếp", "Một câu nói của sếp khiến tôi bỏ hẳn thói quen làm việc này."],
  ["money", "Tiền bạc", "Lương tăng nhưng vẫn thiếu", "Thu nhập tăng mà cuối tháng vẫn hết tiền thường vì một lý do."],
  ["relation", "Quan hệ", "Đừng cố giải thích với tất cả", "Trưởng thành là khi bạn ngừng cố khiến mọi người hiểu mình."],
  ["work", "Công việc", "Nghỉ việc vì cảm xúc", "Nếu đang muốn nghỉ việc ngay hôm nay, hãy tự hỏi ba câu này trước."],
  ["money", "Tiền bạc", "Lần đầu cho bạn mượn tiền", "Tôi từng mất cả tiền lẫn bạn chỉ vì không nói rõ điều này."],
  ["relation", "Quan hệ", "Ranh giới không phải ích kỷ", "Nói không không khiến bạn xấu—nó cho người khác biết cách tôn trọng bạn."],
  ["work", "Công việc", "Người giỏi chưa chắc thăng tiến", "Ở nơi làm việc, năng lực chỉ là một nửa câu chuyện."],
  ["money", "Tiền bạc", "Ba thứ không nên mua vì sĩ diện", "Có những món đồ ta mua chỉ để gây ấn tượng với người không quan tâm."],
  ["relation", "Quan hệ", "Dấu hiệu một tình bạn đã hết hạn", "Không phải tình bạn nào lâu năm cũng cần được giữ mãi."],
  ["work", "Công việc", "Đồng nghiệp không phải bạn thân", "Thân thiện ở công ty là tốt, nhưng có một ranh giới nên giữ."],
  ["money", "Tiền bạc", "Quỹ khẩn cấp đầu tiên", "Nếu chỉ tiết kiệm được một khoản, hãy bắt đầu bằng khoản này."],
  ["relation", "Quan hệ", "Im lặng trong một cuộc cãi vã", "Có lúc im lặng là trưởng thành, có lúc nó chỉ làm mọi thứ tệ hơn."],
  ["work", "Công việc", "Bị giao thêm vì làm tốt", "Người làm tốt thường được thưởng bằng… nhiều việc hơn. Tôi xử lý thế này."],
  ["money", "Tiền bạc", "Kiếm thêm hay tiết kiệm?", "Khi tiền không đủ, nên cắt chi tiêu hay tìm cách kiếm thêm trước?"],
  ["relation", "Quan hệ", "Ba kiểu người không nên góp vốn", "Tình cảm tốt không đảm bảo hai người có thể làm ăn cùng nhau."],
  ["work", "Công việc", "Cách từ chối việc không thuộc trách nhiệm", "Từ chối khéo không phải nói không—mà là làm rõ ưu tiên."],
  ["money", "Tiền bạc", "Tiền và cảm giác an toàn", "Con số nào mới thực sự khiến bạn thấy đủ?"],
  ["relation", "Quan hệ", "Khi người thân không ủng hộ", "Không phải lời phản đối nào của gia đình cũng là muốn bạn thất bại."],
  ["work", "Công việc", "Bài học từ một lần thất bại", "Thất bại đáng sợ nhất không phải mất việc, mà là không hiểu vì sao."],
  ["money", "Tiền bạc", "Một ngày không tiêu tiền", "Tôi thử một ngày không mua gì và nhận ra mình tiêu tiền vì cảm xúc."],
  ["relation", "Quan hệ", "Người hay nói đùa làm bạn tổn thương", "Nếu một câu đùa luôn khiến bạn khó chịu, có thể nó không còn là đùa."],
  ["work", "Công việc", "Điều người mới đi làm hiểu quá muộn", "Giá như ngày đầu đi làm có người nói với tôi điều này."],
  ["money", "Tiền bạc", "Bài học tiền bạc từ cha mẹ", "Có một quan niệm về tiền tôi học từ gia đình và mất nhiều năm để sửa."],
  ["relation", "Quan hệ", "Bình yên quan trọng hơn đúng sai", "Có những cuộc tranh luận thắng rồi, bạn vẫn là người mất nhiều nhất."],
];

let state = loadState();

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return {
      ...defaultState,
      ...stored,
      profile: { ...defaultState.profile, ...(stored.profile || {}) },
      completedDays: stored.completedDays || [],
      videoMetrics: stored.videoMetrics || {},
      tracking: stored.tracking || [],
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function fillProfile() {
  Object.entries(state.profile).forEach(([key, value]) => {
    const field = document.querySelector(`#${key}`);
    if (field) field.value = value;
  });
  document.querySelector("#previewName").textContent =
    state.profile.displayName || "Thương hiệu của bạn";
  document.querySelector("#previewNiche").textContent =
    state.profile.niche || "Chủ đề đang chờ bạn chọn";
  document.querySelector("#heroGoal").textContent = `+${Number(state.profile.goal || 300).toLocaleString("vi-VN")}`;
}

function renderPlan() {
  const grid = document.querySelector("#monthGrid");
  grid.innerHTML = videoPlan
    .map(
      ([category, categoryLabel, title, hook], index) => {
        const metric = state.videoMetrics[index];
        return `
        <article class="day-card ${category} ${state.completedDays.includes(index) ? "done" : ""}" data-index="${index}">
          <div class="day-top">
            <span class="day-name">Ngày ${index + 1} · ${categoryLabel}</span>
            <span class="check">${state.completedDays.includes(index) ? "✓" : ""}</span>
          </div>
          <strong>${title}</strong>
          <p class="video-hook">“${hook}”</p>
          ${metric ? `<div class="metric-mini">${metric.views.toLocaleString("vi-VN")} xem · ${metric.shares} chia sẻ · ${metric.watch}s xem TB</div>` : ""}
          <div class="card-actions">
            <button class="status-button" data-action="toggle">${state.completedDays.includes(index) ? "Đã đăng" : "Đánh dấu đã đăng"}</button>
            <button class="metric-button" data-action="metric">${metric ? "Sửa kết quả" : "Ghi kết quả"}</button>
          </div>
        </article>`;
      },
    )
    .join("");
  document.querySelector("#completionCount").textContent = `${state.completedDays.length}/30`;
  renderWinner();
}

function toggleDay(index) {
  const exists = state.completedDays.includes(index);
  state.completedDays = exists
    ? state.completedDays.filter((item) => item !== index)
    : [...state.completedDays, index];
  saveState();
  renderPlan();
}

function categoryStats() {
  const groups = {
    work: { label: "Công việc", count: 0, shareRate: 0, completionRate: 0, score: 0 },
    money: { label: "Tiền bạc", count: 0, shareRate: 0, completionRate: 0, score: 0 },
    relation: { label: "Quan hệ", count: 0, shareRate: 0, completionRate: 0, score: 0 },
  };

  videoPlan.forEach(([category], index) => {
    const metric = state.videoMetrics[index];
    if (!metric || !metric.views || !metric.length) return;
    const shareRate = (metric.shares / metric.views) * 100;
    const completionRate = Math.min(100, (metric.watch / metric.length) * 100);
    groups[category].count += 1;
    groups[category].shareRate += shareRate;
    groups[category].completionRate += completionRate;
  });

  Object.values(groups).forEach((group) => {
    if (!group.count) return;
    group.shareRate /= group.count;
    group.completionRate /= group.count;
    group.score = Math.min(100, group.shareRate * 12 + group.completionRate * 0.55);
  });
  return groups;
}

function renderWinner() {
  const groups = categoryStats();
  const ranked = Object.entries(groups).sort((a, b) => b[1].score - a[1].score);
  const enoughData = Object.values(groups).every((group) => group.count >= 2);
  const maxScore = Math.max(...Object.values(groups).map((group) => group.score), 1);

  document.querySelector("#scoreboard").innerHTML = Object.values(groups)
    .map(
      (group) => `
        <div class="score-row">
          <span>${group.label}</span>
          <div class="score-track"><i style="width:${(group.score / maxScore) * 100}%"></i></div>
          <strong>${group.score.toFixed(0)}</strong>
        </div>`,
    )
    .join("");

  if (!enoughData) {
    document.querySelector("#winnerTitle").textContent = "Chưa đủ dữ liệu để chọn nhóm thắng";
    document.querySelector("#winnerReason").textContent =
      "Đăng ít nhất 2 video ở mỗi nhóm và nhập kết quả để bắt đầu so sánh.";
    return;
  }

  const winner = ranked[0][1];
  document.querySelector("#winnerTitle").textContent = `${winner.label} đang dẫn đầu`;
  document.querySelector("#winnerReason").textContent =
    `Trung bình ${winner.shareRate.toFixed(2)}% lượt xem tạo chia sẻ và ${winner.completionRate.toFixed(0)}% thời lượng được xem.`;
}

function openMetricDialog(index) {
  const [category, categoryLabel, title] = videoPlan[index];
  const metric = state.videoMetrics[index] || {};
  document.querySelector("#metricVideoId").value = index;
  document.querySelector("#dialogCategory").textContent = `Ngày ${index + 1} · ${categoryLabel}`;
  document.querySelector("#dialogCategory").dataset.category = category;
  document.querySelector("#dialogTitle").textContent = title;
  document.querySelector("#metricViews").value = metric.views ?? "";
  document.querySelector("#metricShares").value = metric.shares ?? "";
  document.querySelector("#metricWatch").value = metric.watch ?? "";
  document.querySelector("#metricLength").value = metric.length ?? "";
  document.querySelector("#metricDialog").showModal();
}

function generateCaption(topic, type, tone) {
  const profile = state.profile;
  const audience = profile.audience || "những người đang quan tâm đến chủ đề này";
  const niche = profile.niche || "lĩnh vực của mình";
  const toneLines = {
    friendly: "Mình chia sẻ điều này như một người đã từng loay hoay giống bạn:",
    expert: "Sau khi quan sát và làm việc thực tế, đây là điều mình thấy rõ:",
    bold: "Nói thẳng nhé: có một điều nhiều người đang làm ngược.",
    warm: "Có một điều nhỏ mình rất muốn kể với bạn hôm nay.",
  };
  const bodies = {
    story: `Trước đây, mình cũng từng nghĩ rằng ${topic.toLowerCase()} là chuyện khá đơn giản.\n\nNhưng trải nghiệm thực tế cho mình một bài học khác:\n\n1. Đừng vội làm theo số đông.\n2. Hãy bắt đầu từ nhu cầu thật của mình.\n3. Một lựa chọn đúng thường đến từ việc hiểu rõ “tại sao”.\n\nĐiều thay đổi lớn nhất không phải kết quả bên ngoài, mà là cách mình nhìn vấn đề.`,
    guide: `Nếu bạn đang quan tâm đến “${topic}”, hãy bắt đầu với 3 bước này:\n\n1. Xác định điều bạn thật sự cần.\n2. Loại bỏ những lựa chọn không phục vụ mục tiêu đó.\n3. Thử ở quy mô nhỏ, đo kết quả rồi mới mở rộng.\n\nCách này giúp ${audience} tránh mất thời gian và ra quyết định chắc hơn.`,
    opinion: `Theo mình, “${topic}” không nên được nhìn như một mẹo ngắn hạn.\n\nNó chỉ có giá trị khi phù hợp với bối cảnh, nguồn lực và mục tiêu thật của mỗi người. Trong ${niche}, làm đúng một việc quan trọng vẫn tốt hơn làm mười việc chỉ để trông có vẻ bận rộn.\n\nĐây có thể không phải góc nhìn phổ biến, nhưng là điều mình tin sau những gì đã trải qua.`,
    case: `Một tình huống thực tế về “${topic}”:\n\nBan đầu: chưa rõ ưu tiên, có quá nhiều lựa chọn.\nVấn đề: tập trung vào bề nổi thay vì nhu cầu thật.\nCách xử lý: quay lại mục tiêu, chọn một thay đổi nhỏ và theo dõi kết quả.\nKết quả: quyết định dễ hơn, ít lãng phí hơn và có cơ sở để làm bước tiếp theo.\n\nĐiểm đáng nhớ nhất: rõ ràng luôn đi trước tốc độ.`,
    question: `Mình đang tò mò về trải nghiệm của mọi người với “${topic}”.\n\nNếu chỉ được chọn một, bạn sẽ ưu tiên:\n\nA. Kết quả nhanh\nB. Cách làm bền vững\nC. Chi phí hợp lý\nD. Trải nghiệm thoải mái\n\nComment một chữ cái và lý do nhé — mình muốn đọc góc nhìn thật của bạn.`,
  };
  return `${toneLines[tone]}\n\n${bodies[type]}\n\nBạn đang gặp phần nào khó nhất? Chia sẻ ở bình luận, mình sẽ đọc và trả lời.\n\n#${niche.replace(/\s+/g, "")} #ChiaSeThucTe`;
}

function renderTracking() {
  const entries = [...state.tracking].sort((a, b) => a.date.localeCompare(b.date));
  const history = document.querySelector("#history");
  if (!entries.length) {
    history.innerHTML = '<div class="empty-history">Chưa có mốc nào. Hãy ghi số follower hôm nay để bắt đầu.</div>';
  } else {
    history.innerHTML = [...entries]
      .reverse()
      .map(
        (entry) => `
          <div class="history-row">
            <span>${new Date(`${entry.date}T00:00:00`).toLocaleDateString("vi-VN")}</span>
            <span>${Number(entry.followers).toLocaleString("vi-VN")}</span>
            <small>${entry.note || "Không có ghi chú"}</small>
            <button class="delete-entry" data-id="${entry.id}" aria-label="Xóa mốc">×</button>
          </div>`,
      )
      .join("");
  }

  const latest = entries.at(-1);
  const first = entries[0];
  const baseline = Number(state.profile.currentFollowers || first?.followers || 0);
  const latestCount = Number(latest?.followers || baseline || 0);
  const change = latestCount - baseline;
  const goal = Math.max(Number(state.profile.goal || 300), 1);
  const progress = Math.max(0, Math.min(100, Math.round((change / goal) * 100)));

  document.querySelector("#latestFollowers").textContent =
    latestCount ? latestCount.toLocaleString("vi-VN") : "—";
  document.querySelector("#followerChange").textContent =
    entries.length || baseline ? `${change >= 0 ? "+" : ""}${change.toLocaleString("vi-VN")}` : "—";
  document.querySelector("#progressText").textContent = `${progress}%`;
  document.querySelector("#progressBar").style.width = `${progress}%`;
}

document.querySelector("#profileForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  state.profile = Object.fromEntries(data.entries());
  saveState();
  fillProfile();
  renderTracking();
  showToast("Đã lưu định hướng");
});

document.querySelector("#contentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const topic = document.querySelector("#topic").value.trim();
  if (!topic) {
    showToast("Hãy nhập một chủ đề trước nhé");
    document.querySelector("#topic").focus();
    return;
  }
  const output = document.querySelector("#captionOutput");
  output.textContent = generateCaption(
    topic,
    document.querySelector("#contentType").value,
    document.querySelector("#tone").value,
  );
  output.classList.remove("empty");
});

document.querySelector("#copyButton").addEventListener("click", async () => {
  const output = document.querySelector("#captionOutput");
  if (output.classList.contains("empty")) return showToast("Chưa có bản nháp để sao chép");
  await navigator.clipboard.writeText(output.textContent);
  showToast("Đã sao chép bản nháp");
});

document.querySelector("#monthGrid").addEventListener("click", (event) => {
  const card = event.target.closest(".day-card");
  const button = event.target.closest("button");
  if (!card || !button) return;
  const index = Number(card.dataset.index);
  if (button.dataset.action === "toggle") toggleDay(index);
  if (button.dataset.action === "metric") openMetricDialog(index);
});

document.querySelector("#metricForm").addEventListener("submit", (event) => {
  const submitter = event.submitter;
  if (!submitter || submitter.value === "cancel") return;
  event.preventDefault();
  const index = Number(document.querySelector("#metricVideoId").value);
  const metric = {
    views: Number(document.querySelector("#metricViews").value),
    shares: Number(document.querySelector("#metricShares").value),
    watch: Number(document.querySelector("#metricWatch").value),
    length: Number(document.querySelector("#metricLength").value),
  };
  if (!metric.views || !metric.length) {
    showToast("Cần nhập ít nhất lượt xem và độ dài video");
    return;
  }
  state.videoMetrics[index] = metric;
  if (!state.completedDays.includes(index)) state.completedDays.push(index);
  saveState();
  document.querySelector("#metricDialog").close();
  renderPlan();
  showToast("Đã lưu kết quả video");
});

document.querySelector("#trackingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.tracking.push({
    id: crypto.randomUUID(),
    date: document.querySelector("#trackingDate").value,
    followers: Number(document.querySelector("#trackingFollowers").value),
    note: document.querySelector("#trackingNote").value.trim(),
  });
  saveState();
  event.currentTarget.reset();
  document.querySelector("#trackingDate").value = new Date().toISOString().slice(0, 10);
  renderTracking();
  showToast("Đã thêm mốc tăng trưởng");
});

document.querySelector("#history").addEventListener("click", (event) => {
  const button = event.target.closest(".delete-entry");
  if (!button) return;
  state.tracking = state.tracking.filter((entry) => entry.id !== button.dataset.id);
  saveState();
  renderTracking();
  showToast("Đã xóa mốc");
});

document.querySelector("#resetButton").addEventListener("click", () => {
  if (!window.confirm("Xóa toàn bộ kế hoạch và dữ liệu theo dõi trên máy này?")) return;
  state = structuredClone(defaultState);
  saveState();
  document.querySelector("#profileForm").reset();
  document.querySelector("#contentForm").reset();
  const output = document.querySelector("#captionOutput");
  output.className = "caption-output empty";
  output.innerHTML = '<span class="spark">✦</span><p>Điền chủ đề bên trái để tạo cấu trúc bài đăng.</p>';
  fillProfile();
  renderPlan();
  renderTracking();
  showToast("Đã đặt lại dữ liệu");
});

document.querySelector("#trackingDate").value = new Date().toISOString().slice(0, 10);
fillProfile();
renderPlan();
renderTracking();
