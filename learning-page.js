(() => {
    const levels = {
        beginner: "Start with fundamentals, vocabulary, and small working programs.",
        intermediate: "Build real features, understand conventions, and work with the ecosystem.",
        advanced: "Study internals, performance, architecture, and production-level trade-offs."
    };
    let selectedLevel = "beginner";
    const levelToggle = document.getElementById("level-toggle");
    const levelDescription = document.getElementById("level-description");
    const languageInput = document.getElementById("learning-language-input");
    const submit = document.getElementById("learning-language-submit");
    const options = document.getElementById("language-options");
    const status = document.getElementById("learning-query-status");
    const result = document.getElementById("learning-result");
    const languageStep = document.getElementById("language-step");
    const stepGrid = document.querySelector(".learning-step-grid");

    options.innerHTML = languages.map(language => `<option value="${language.name}">${language.shortDesc}</option>`).join("");

    function findLanguage() {
        const query = languageInput.value.trim().toLowerCase();
        if (!query) return null;
        return languages.find(language => language.name.toLowerCase() === query || language.id.toLowerCase() === query) ||
            languages.find(language => language.name.toLowerCase().includes(query) || language.id.toLowerCase().includes(query));
    }

    function updateResult() {
        const language = findLanguage();
        if (!language) {
            status.textContent = languageInput.value.trim() ? "No exact language found yet. Choose a suggestion from the list." : "Select a language to see its recommended path.";
            result.innerHTML = "";
            return;
        }
        status.textContent = `${language.name} is ready for your ${selectedLevel} route.`;
        result.innerHTML = `<div class="learning-result-copy"><span class="result-kicker">RECOMMENDED PATH</span><strong>${language.name} / ${selectedLevel}</strong><span>${language.shortDesc}</span></div><a class="learning-result-link" href="languages/language-${encodeURIComponent(language.id)}.html?level=${selectedLevel}">Open ${language.name} learning path <span aria-hidden="true">-&gt;</span></a>`;
    }

    levelToggle.addEventListener("click", event => {
        const option = event.target.closest(".level-option");
        if (!option) return;
        selectedLevel = option.dataset.level;
        levelToggle.querySelectorAll(".level-option").forEach(item => item.classList.toggle("active", item === option));
        levelDescription.textContent = levels[selectedLevel];
        languageStep.hidden = false;
        languageStep.setAttribute("aria-hidden", "false");
        stepGrid.classList.remove("level-pending");
        updateResult();
        languageInput.focus();
    });
    languageInput.addEventListener("input", updateResult);
    languageInput.addEventListener("keydown", event => { if (event.key === "Enter") submit.click(); });
    submit.addEventListener("click", () => {
        if (!findLanguage()) {
            status.textContent = "Choose a language before opening a learning path.";
            languageInput.focus();
            return;
        }
        window.location.href = result.querySelector(".learning-result-link").href;
    });
})();
