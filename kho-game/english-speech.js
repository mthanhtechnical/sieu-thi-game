(function () {
  const STORAGE_KEY = "english-pronunciation-enabled";
  let enabled = localStorage.getItem(STORAGE_KEY) !== "false";
  let lastWord = "", lastSpokenAt = 0;

  function cleanWord(value) {
    return String(value || "").replace(/[^a-zA-Z' -]/g, " ").replace(/\s+/g, " ").trim();
  }
  function speak(value, options = {}) {
    const word = cleanWord(value);
    if (!enabled || !word || !("speechSynthesis" in window)) return;
    const now = Date.now();
    if (word === lastWord && !options.force && now - lastSpokenAt < 550) return;
    lastWord = word; lastSpokenAt = now;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US"; utterance.rate = Number(options.rate) || .82;
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices.find(v => v.lang.toLowerCase().startsWith("en-us")) || voices.find(v => v.lang.toLowerCase().startsWith("en"));
    speechSynthesis.speak(utterance);
  }
  function renderButton(button) {
    button.textContent = enabled ? "🔊" : "🔇";
    button.classList.toggle("muted", !enabled);
    button.setAttribute("aria-pressed", String(enabled));
    button.setAttribute("aria-label", enabled ? "Tắt đọc từ tiếng Anh" : "Bật đọc từ tiếng Anh");
    button.title = enabled ? "Tắt đọc từ tiếng Anh" : "Bật đọc từ tiếng Anh";
  }
  function addButton() {
    const actions = document.querySelector(".header-actions");
    if (!actions || document.querySelector("#englishSpeechButton")) return;
    const button = document.createElement("button");
    button.id = "englishSpeechButton"; button.className = "icon-button english-speech-button";
    renderButton(button);
    button.addEventListener("click", () => {
      enabled = !enabled; localStorage.setItem(STORAGE_KEY, String(enabled));
      if (!enabled && "speechSynthesis" in window) speechSynthesis.cancel();
      renderButton(button); if (enabled) speak("Sound on");
    });
    actions.prepend(button);
  }
  function wordFrom(el) { return el.dataset.speak || el.dataset.answer || el.dataset.a || el.textContent; }
  function targetFrom(event) { return event.target.closest("[data-speak], .speak-english, #feedbackTitle, #answerText"); }
  document.addEventListener("pointerover", event => { const el = targetFrom(event); if (el && !el.contains(event.relatedTarget)) speak(wordFrom(el)); });
  document.addEventListener("focusin", event => { const el = targetFrom(event); if (el) speak(wordFrom(el)); });
  document.addEventListener("click", event => { const el = targetFrom(event); if (el) speak(wordFrom(el)); });
  const style = document.createElement("style");
  style.textContent = ".english-speech-button{font-size:16px!important}.english-speech-button.muted{color:var(--muted)!important;filter:grayscale(1)}[data-speak],.speak-english,#feedbackTitle,#answerText{cursor:pointer}";
  document.head.appendChild(style); addButton();
  window.EnglishSpeech = { speak, isEnabled: () => enabled };
})();
