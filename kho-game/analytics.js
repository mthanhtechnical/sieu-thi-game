const $ = (selector) => document.querySelector(selector);
const number = (value) => Number(value || 0).toLocaleString("vi-VN");

function renderBars(selector, rows) {
  const element = $(selector);
  if (!rows?.length) {
    element.innerHTML = '<div class="empty">Chưa có dữ liệu.</div>';
    return;
  }
  const max = Math.max(...rows.map((row) => Number(row.value)), 1);
  element.innerHTML = rows
    .map(
      (row) => `
        <div class="bar-row">
          <span title="${row.label || "Không rõ"}">${row.label || "Không rõ"}</span>
          <div class="bar-track"><i style="width:${(Number(row.value) / max) * 100}%"></i></div>
          <strong>${number(row.value)}</strong>
        </div>`,
    )
    .join("");
}

function renderChart(rows) {
  const chart = $("#dailyChart");
  const max = Math.max(...rows.map((row) => Math.max(Number(row.visits), Number(row.completions))), 1);
  chart.innerHTML = rows
    .map(
      (row) => `
        <div class="chart-day" title="${row.day}: ${row.visits} truy cập, ${row.completions} hoàn thành">
          <div class="bars">
            <i class="visit-bar" style="height:${(Number(row.visits) / max) * 100}%"></i>
            <i class="complete-bar" style="height:${(Number(row.completions) / max) * 100}%"></i>
          </div>
          <small>${row.day.slice(5).replace("-", "/")}</small>
        </div>`,
    )
    .join("");
}

async function loadStats() {
  $("#errorMessage").style.display = "none";
  $("#refreshButton").disabled = true;
  try {
    const response = await fetch("/api/events", { cache: "no-store" });
    if (!response.ok) throw new Error("Không tải được dữ liệu.");
    const data = await response.json();
    const totals = data.totals;
    $("#visits").textContent = number(totals.visits);
    $("#visitors").textContent = `${number(totals.visitors)} người dùng`;
    $("#starts").textContent = number(totals.starts);
    $("#playRate").textContent = `${totals.playRate}% từ truy cập`;
    $("#completions").textContent = number(totals.completions);
    $("#completionRate").textContent = `${totals.completionRate}% từ lượt chơi`;
    $("#shares").textContent = number(totals.shares);
    $("#averageScore").textContent = number(data.scores.average_score);
    $("#highestScore").textContent = number(data.scores.highest_score);
    $("#averageCorrect").textContent = `${data.scores.average_correct || 0}/10`;
    $("#averageDuration").textContent = `${number(data.scores.average_duration)} giây`;
    $("#updatedAt").textContent = `Cập nhật ${new Date(data.generatedAt).toLocaleString("vi-VN")}`;
    renderChart(data.daily);
    renderBars("#sourceList", data.sources);
    renderBars("#deviceList", data.devices);
    renderBars("#countryList", data.countries);
  } catch (error) {
    $("#errorMessage").textContent = error.message;
    $("#errorMessage").style.display = "block";
  } finally {
    $("#refreshButton").disabled = false;
  }
}

$("#refreshButton").addEventListener("click", loadStats);
loadStats();
