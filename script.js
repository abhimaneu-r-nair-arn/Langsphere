
        // DOM Elements
        const grid = document.getElementById("languages-grid");
        const searchInput = document.getElementById("search-input");
        const filtersContainer = document.getElementById("filters-container");
        const emptyState = document.getElementById("empty-state");
        const directoryView = document.getElementById("languages-grid");
        const timelineView = document.getElementById("timeline-view");
        const timelineTrack = document.getElementById("timeline-track");
        const directoryViewBtn = document.getElementById("directory-view-btn");
        const timelineViewBtn = document.getElementById("timeline-view-btn");

        // Modal Elements
        const modal = document.getElementById("details-overlay");
        const modalContainer = document.getElementById("modal-container");
        const modalClose = document.getElementById("modal-close");
        const modalHero = document.getElementById("modal-hero");
        const modalLogo = document.getElementById("modal-logo");
        const scrollMoreBtn = document.getElementById("scroll-more-btn");
        const overviewDocumentLink = document.getElementById("overview-document-link");
        const overviewOverlay = document.getElementById("overview-overlay");
        const overviewDocumentClose = document.getElementById("overview-document-close");
        const modalTitle = document.getElementById("modal-title");
        const modalCreator = document.getElementById("modal-creator");
        const modalYear = document.getElementById("modal-year");

        const overviewDesc = document.getElementById("overview-desc");
        const overviewFeatures = document.getElementById("overview-features");
        const beginnerGuideContent = document.getElementById("beginner-guide-content");
        const codeLangLabel = document.getElementById("code-lang-label");
        const codeBlock = document.getElementById("code-block");
        const copyCodeBtn = document.getElementById("copy-code-btn");

        const ecoPkgMgr = document.getElementById("eco-pkg-mgr");
        const ecoWeb = document.getElementById("eco-web");
        const ecoData = document.getElementById("eco-data");
        const ecoRuntime = document.getElementById("eco-runtime");

        const prosList = document.getElementById("pros-list");
        const consList = document.getElementById("cons-list");

        const specTyping = document.getElementById("spec-typing");
        const specMemory = document.getElementById("spec-memory");
        const specExecution = document.getElementById("spec-execution");
        const specConcurrency = document.getElementById("spec-concurrency");
        const metricsContainer = document.getElementById("metrics-container");
        const profileSummary = document.getElementById("profile-summary");
        const profileDescription = document.getElementById("profile-description");
        const profileTags = document.getElementById("profile-tags");
        const profileHighlights = document.getElementById("profile-highlights");

        let currentFilter = "all";
        let searchQuery = "";
        let activeLanguage = null;
        let scrollIdleTimer = null;

        const prefersFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

        const fxCanvas = document.createElement("canvas");
        fxCanvas.className = "target-cursor-canvas";
        fxCanvas.id = "target-cursor-canvas";
        fxCanvas.setAttribute("aria-hidden", "true");
        document.body.appendChild(fxCanvas);

        const fxCtx = fxCanvas.getContext("2d");
        let fxFrameId = null;
        let pointerVisible = prefersFinePointer;
        let rawX = window.innerWidth / 2;
        let rawY = window.innerHeight / 2;
        let displayX = rawX;
        let displayY = rawY;
        let prevRawX = rawX;
        let prevRawY = rawY;
        let velocityX = 0;
        let velocityY = 0;
        let isOverTarget = false;
        let lockProgress = 0;
        let screenFlash = 0;
        let muzzleFlashes = [];
        let sparks = [];

        const HUD_AMBER = "rgba(255, 154, 46, 1)";
        const HUD_AMBER_DIM = "rgba(255, 154, 46, 0.45)";
        const HUD_AMBER_FAINT = "rgba(255, 154, 46, 0.16)";
        const LOCK_RED = "rgba(255, 59, 46, 1)";
        const LOCK_RED_DIM = "rgba(255, 59, 46, 0.55)";

        if (prefersFinePointer) {
            document.documentElement.classList.add("target-cursor-active");
        }

        function resizeFxCanvas() {
            const dpr = window.devicePixelRatio || 1;
            fxCanvas.width = Math.floor(window.innerWidth * dpr);
            fxCanvas.height = Math.floor(window.innerHeight * dpr);
            fxCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function isInteractiveTarget(element) {
            if (!element || element === document.documentElement || element === document.body) {
                return false;
            }
            return Boolean(element.closest(
                "a, button, input, select, textarea, label, [role='button'], .lang-card, .filter-chip, .modal-close-btn, .copy-btn, .tab-btn, .beginner-pill, .beginner-step-btn"
            ));
        }

        function shouldTriggerFireEffect(element) {
            if (!element) return false;
            if (element.id === "details-overlay") return true;
            return isInteractiveTarget(element);
        }

        function playShotFeedback(event) {
            triggerMuzzleFlash(event.clientX, event.clientY);

            const card = event.target.closest(".lang-card");
            if (card) {
                card.classList.remove("shot-hit");
                void card.offsetWidth;
                card.classList.add("shot-hit");
            }
        }

        document.addEventListener("click", (event) => {
            if (!shouldTriggerFireEffect(event.target)) return;
            playShotFeedback(event);
        }, true);

        function strokeLine(ctx2d, x1, y1, x2, y2) {
            ctx2d.beginPath();
            ctx2d.moveTo(x1, y1);
            ctx2d.lineTo(x2, y2);
            ctx2d.stroke();
        }

        function drawBracket(ctx2d, x, y, size, arm, color, lineWidth) {
            ctx2d.strokeStyle = color;
            ctx2d.lineWidth = lineWidth;
            ctx2d.lineCap = "square";
            strokeLine(ctx2d, x - size, y - size + arm, x - size, y - size);
            strokeLine(ctx2d, x - size, y - size, x - size + arm, y - size);
            strokeLine(ctx2d, x + size - arm, y - size, x + size, y - size);
            strokeLine(ctx2d, x + size, y - size, x + size, y - size + arm);
            strokeLine(ctx2d, x + size, y + size - arm, x + size, y + size);
            strokeLine(ctx2d, x + size - arm, y + size, x + size, y + size);
            strokeLine(ctx2d, x - size, y + size, x - size, y + size - arm);
            strokeLine(ctx2d, x - size, y + size - arm, x - size + arm, y + size);
        }

        function triggerMuzzleFlash(x, y) {
            const now = performance.now();
            muzzleFlashes.push({ x, y, born: now, seed: Math.random() * Math.PI * 2 });
            screenFlash = 1;

            for (let i = 0; i < 22; i += 1) {
                const angle = Math.random() * Math.PI * 2;
                const speed = 1.5 + Math.random() * 9;
                sparks.push({
                    x,
                    y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    life: 0.75 + Math.random() * 0.25,
                    decay: 0.025 + Math.random() * 0.035,
                    size: 1 + Math.random() * 2.5,
                    hot: Math.random() > 0.35
                });
            }
        }

        window.triggerMuzzleFlash = triggerMuzzleFlash;

        function drawMuzzleEffects(now, width, height) {
            if (screenFlash > 0.01) {
                fxCtx.fillStyle = `rgba(255, 110, 30, ${screenFlash * 0.14})`;
                fxCtx.fillRect(0, 0, width, height);
                screenFlash *= 0.78;
            }

            muzzleFlashes = muzzleFlashes.filter((flash) => now - flash.born < 160);
            for (const flash of muzzleFlashes) {
                const age = (now - flash.born) / 160;
                const alpha = 1 - age;
                const size = 6 + (1 - age) * 22;

                const burst = fxCtx.createRadialGradient(flash.x, flash.y, 0, flash.x, flash.y, size);
                burst.addColorStop(0, `rgba(255, 255, 230, ${alpha})`);
                burst.addColorStop(0.25, `rgba(255, 210, 70, ${alpha * 0.95})`);
                burst.addColorStop(0.55, `rgba(255, 90, 20, ${alpha * 0.65})`);
                burst.addColorStop(1, "rgba(180, 30, 0, 0)");
                fxCtx.fillStyle = burst;
                fxCtx.beginPath();
                fxCtx.arc(flash.x, flash.y, size, 0, Math.PI * 2);
                fxCtx.fill();

                for (let tongue = 0; tongue < 6; tongue += 1) {
                    const angle = flash.seed + tongue * (Math.PI / 3) + age * 2;
                    const len = size * (1.1 + tongue * 0.08) * (1 - age * 0.5);
                    const tipX = flash.x + Math.cos(angle) * len;
                    const tipY = flash.y + Math.sin(angle) * len;
                    const midX = flash.x + Math.cos(angle) * len * 0.45;
                    const midY = flash.y + Math.sin(angle) * len * 0.45;

                    fxCtx.strokeStyle = `rgba(255, ${120 + tongue * 15}, 30, ${alpha * 0.85})`;
                    fxCtx.lineWidth = 2.5 - age * 1.5;
                    fxCtx.lineCap = "round";
                    strokeLine(fxCtx, flash.x, flash.y, midX, midY);
                    strokeLine(fxCtx, midX, midY, tipX, tipY);
                }

                fxCtx.strokeStyle = `rgba(255, 200, 100, ${alpha * 0.5})`;
                fxCtx.lineWidth = 1;
                fxCtx.beginPath();
                fxCtx.moveTo(flash.x - size * 0.9, flash.y);
                fxCtx.lineTo(flash.x + size * 0.9, flash.y);
                fxCtx.moveTo(flash.x, flash.y - size * 0.9);
                fxCtx.lineTo(flash.x, flash.y + size * 0.9);
                fxCtx.stroke();
            }

            sparks = sparks.filter((spark) => spark.life > 0);
            for (const spark of sparks) {
                spark.x += spark.vx;
                spark.y += spark.vy;
                spark.vy += 0.12;
                spark.vx *= 0.98;
                spark.life -= spark.decay;

                const glow = spark.hot ? 220 : 140;
                fxCtx.fillStyle = `rgba(255, ${glow}, 40, ${spark.life})`;
                fxCtx.shadowBlur = 4;
                fxCtx.shadowColor = `rgba(255, 120, 30, ${spark.life * 0.6})`;
                fxCtx.fillRect(spark.x, spark.y, spark.size, spark.size);
            }
            fxCtx.shadowBlur = 0;
        }

        function drawTargetReticle(now, time) {
            displayX += (rawX - displayX) * 0.42;
            displayY += (rawY - displayY) * 0.42;

            const speed = Math.hypot(velocityX, velocityY);
            const lockTarget = isOverTarget ? 1 : 0;
            lockProgress += (lockTarget - lockProgress) * 0.14;

            const primary = lockProgress > 0.35 ? LOCK_RED : HUD_AMBER;
            const secondary = lockProgress > 0.35 ? LOCK_RED_DIM : HUD_AMBER_DIM;
            const faint = lockProgress > 0.35 ? "rgba(255, 59, 46, 0.18)" : HUD_AMBER_FAINT;

            const breathe = 1 + Math.sin(time * 2.4) * 0.015 * (1 - Math.min(speed / 18, 1));
            const bracketSize = (15 + lockProgress * 2.5) * breathe;
            const bracketArm = 5 + lockProgress * 1.2;
            const ringRadius = 11 + Math.sin(time * 1.6) * 0.4;
            const rotation = time * 0.55 + speed * 0.015;

            fxCtx.save();
            fxCtx.translate(displayX, displayY);
            fxCtx.shadowBlur = 6;
            fxCtx.shadowColor = lockProgress > 0.35 ? "rgba(255, 59, 46, 0.4)" : "rgba(255, 154, 46, 0.3)";

            drawBracket(fxCtx, 0, 0, bracketSize, bracketArm, primary, 1.1);

            fxCtx.strokeStyle = secondary;
            fxCtx.lineWidth = 0.8;
            fxCtx.beginPath();
            fxCtx.arc(0, 0, ringRadius, 0, Math.PI * 2);
            fxCtx.stroke();

            fxCtx.save();
            fxCtx.rotate(rotation);
            fxCtx.setLineDash([2, 4]);
            fxCtx.strokeStyle = faint;
            fxCtx.lineWidth = 0.6;
            fxCtx.beginPath();
            fxCtx.arc(0, 0, ringRadius + 4, 0, Math.PI * 2);
            fxCtx.stroke();
            fxCtx.setLineDash([]);

            for (let tick = 0; tick < 24; tick += 1) {
                const angle = (tick / 24) * Math.PI * 2;
                const major = tick % 3 === 0;
                const inner = ringRadius + 4 + (major ? 0 : 1.5);
                const outer = ringRadius + 4 + (major ? 3.5 : 2);
                fxCtx.strokeStyle = major ? secondary : faint;
                fxCtx.lineWidth = major ? 0.8 : 0.5;
                strokeLine(
                    fxCtx,
                    Math.cos(angle) * inner,
                    Math.sin(angle) * inner,
                    Math.cos(angle) * outer,
                    Math.sin(angle) * outer
                );
            }
            fxCtx.restore();

            const gap = 3;
            const armLength = 8;
            const tickStep = 2.5;
            fxCtx.strokeStyle = primary;
            fxCtx.lineWidth = 1;
            fxCtx.lineCap = "round";

            strokeLine(fxCtx, -(gap + armLength), 0, -gap, 0);
            strokeLine(fxCtx, gap, 0, gap + armLength, 0);
            strokeLine(fxCtx, 0, -(gap + armLength), 0, -gap);
            strokeLine(fxCtx, 0, gap, 0, gap + armLength);

            fxCtx.strokeStyle = secondary;
            fxCtx.lineWidth = 0.6;
            for (let tick = 1; tick <= 2; tick += 1) {
                const offset = gap + tick * tickStep;
                strokeLine(fxCtx, -offset, -1.8, -offset, 1.8);
                strokeLine(fxCtx, offset, -1.8, offset, 1.8);
                strokeLine(fxCtx, -1.8, -offset, 1.8, -offset);
                strokeLine(fxCtx, -1.8, offset, 1.8, offset);
            }

            fxCtx.fillStyle = primary;
            fxCtx.beginPath();
            fxCtx.arc(0, 0, lockProgress > 0.5 ? 1.5 : 1.1, 0, Math.PI * 2);
            fxCtx.fill();

            if (speed > 2.5) {
                const leadScale = Math.min(speed * 0.28, 14);
                const leadX = (velocityX / speed) * leadScale;
                const leadY = (velocityY / speed) * leadScale;
                fxCtx.strokeStyle = secondary;
                fxCtx.lineWidth = 0.7;
                strokeLine(fxCtx, 0, 0, leadX, leadY);
            }

            if (lockProgress > 0.55) {
                fxCtx.font = "600 7px 'Fira Code', monospace";
                fxCtx.textAlign = "center";
                fxCtx.fillStyle = `rgba(255, 59, 46, ${0.55 + lockProgress * 0.35})`;
                fxCtx.fillText("FOCUS", 0, -bracketSize - 7);
            }

            fxCtx.restore();
        }

        function drawFxFrame() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const now = performance.now();
            const time = now * 0.001;

            fxCtx.clearRect(0, 0, width, height);
            drawMuzzleEffects(now, width, height);

            if (prefersFinePointer && pointerVisible) {
                drawTargetReticle(now, time);
            }

            fxFrameId = requestAnimationFrame(drawFxFrame);
        }

        resizeFxCanvas();
        window.addEventListener("resize", resizeFxCanvas);

        if (prefersFinePointer) {
            window.addEventListener("pointermove", (event) => {
                velocityX = event.clientX - prevRawX;
                velocityY = event.clientY - prevRawY;
                prevRawX = event.clientX;
                prevRawY = event.clientY;
                rawX = event.clientX;
                rawY = event.clientY;
                pointerVisible = true;
                isOverTarget = isInteractiveTarget(event.target);
            });

            window.addEventListener("pointerleave", () => {
                pointerVisible = false;
            });

            window.addEventListener("pointerenter", () => {
                pointerVisible = true;
            });
        }

        fxFrameId = requestAnimationFrame(drawFxFrame);

        // Initialize Card Layout
        function renderCards() {
            // Remove only lang-card elements, not the emptyState inside the grid
            const existingCards = grid.querySelectorAll(".lang-card");
            existingCards.forEach(c => c.remove());

            const filtered = languages.filter(lang => {
                const matchesSearch = lang.name.toLowerCase().includes(searchQuery) ||
                    lang.creator.toLowerCase().includes(searchQuery) ||
                    lang.shortDesc.toLowerCase().includes(searchQuery) ||
                    lang.categories.some(c => c.toLowerCase().includes(searchQuery));

                const matchesFilter = currentFilter === "all" || lang.categories.includes(currentFilter);

                return matchesSearch && matchesFilter;
            });

            if (filtered.length === 0) {
                emptyState.classList.add("visible");
            } else {
                emptyState.classList.remove("visible");
            }

            filtered.forEach(lang => {
                const card = document.createElement("div");
                card.className = "lang-card";
                card.tabIndex = 0;
                card.setAttribute("role", "button");
                card.setAttribute("aria-label", `Open ${lang.name} profile`);
                card.style.setProperty("--lang-accent", lang.accentColor);
                card.style.setProperty("--lang-accent-glow", lang.accentGlow);

                // Map clean display names to tags
                const categoryLabels = {
                    "systems": "Systems",
                    "web": "Web Dev",
                    "data-science": "Data & AI",
                    "functional": "Functional",
                    "object-oriented": "OOP",
                    "compiled": "Compiled",
                    "interpreted": "Interpreted",
                    "mobile": "Mobile",
                    "scripting": "Scripting",
                    "scientific": "Scientific",
                    "embedded": "Embedded"
                };

                const tagElements = lang.categories
                    .map(cat => `<span class="tag">${categoryLabels[cat] || cat}</span>`)
                    .join("");

                card.innerHTML = `
          <div class="card-header">
            <div class="logo-wrapper">
              ${lang.logoSvg}
            </div>
            <div class="title-area">
              <h3>${lang.name}</h3>
              <span>Released: ${lang.year}</span>
            </div>
          </div>
          <div class="card-body">
            <p>${lang.shortDesc}</p>
          </div>
          <div class="card-tags">
            ${tagElements}
          </div>
        `;

                const openCard = () => openModal(lang);
                card.addEventListener("click", openCard);
                card.addEventListener("keydown", event => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openCard();
                    }
                });
                // Insert before emptyState so it stays at the end
                grid.insertBefore(card, emptyState);
            });
        }

        function renderTimeline() {
            const timelineLanguages = [...languages].sort((first, second) => first.year - second.year || first.name.localeCompare(second.name));
            timelineTrack.innerHTML = timelineLanguages.map(lang => `
                <article class="timeline-entry" data-language-id="${lang.id}" tabindex="0" role="button" aria-label="Open ${lang.name} profile">
                    <span class="timeline-year">${lang.year}</span>
                    <span class="timeline-logo">${lang.logoSvg}</span>
                    <span><strong class="timeline-name">${lang.name}</strong><br><span class="timeline-creator">${lang.creator}</span></span>
                    <span class="timeline-open">VIEW PROFILE</span>
                </article>
            `).join("");

            timelineTrack.querySelectorAll(".timeline-entry").forEach(entry => {
                const openEntry = () => {
                    const language = languages.find(item => item.id === entry.dataset.languageId);
                    if (language) openModal(language);
                };
                entry.addEventListener("click", openEntry);
                entry.addEventListener("keydown", event => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openEntry();
                    }
                });
            });
        }

        function setView(view) {
            const showTimeline = view === "timeline";
            directoryView.style.display = showTimeline ? "none" : "grid";
            timelineView.classList.toggle("active", showTimeline);
            directoryViewBtn.classList.toggle("active", !showTimeline);
            timelineViewBtn.classList.toggle("active", showTimeline);
            if (showTimeline) renderTimeline();
        }

        // Modal Control Logic
        function escapeAttribute(value) {
            return String(value)
                .replace(/&/g, "&amp;")
                .replace(/"/g, "&quot;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        }

        function getBeginnerGuide(lang) {
            return beginnerGuides[lang.id] || {
                syntax: `Start with variables, functions, and control flow before exploring the more advanced parts of ${lang.name}.`,
                keywords: [{ name: "if", detail: "Runs code conditionally.", example: "if (ready) { }" }],
                dataTypes: [{ name: "string", detail: "Stores text.", example: "let text = 'hi';" }],
                concepts: [{ name: "Variables", detail: "Store data.", example: "let x = 1;" }],
                firstSteps: [{ label: "Write a tiny example", code: "console.log('Hello')" }]
            };
        }

        function openModal(lang) {
            activeLanguage = lang;

            // Update variables
            modalContainer.style.setProperty("--lang-accent", lang.accentColor);
            modalContainer.style.setProperty("--lang-accent-glow", lang.accentGlow);
            modalContainer.style.setProperty("--lang-accent-light", lang.accentLight);

            // Hero Elements
            modalLogo.innerHTML = lang.logoSvg;
            modalTitle.textContent = lang.name;
            modalCreator.textContent = lang.creator;
            modalYear.textContent = lang.year;

            profileSummary.innerHTML = `
                <div class="profile-stat"><strong>${lang.year}</strong><span>First released</span></div>
                <div class="profile-stat"><strong>${lang.categories.length}</strong><span>Directory disciplines</span></div>
                <div class="profile-stat"><strong>${lang.metrics[0].value}%</strong><span>Performance signal</span></div>
            `;
            profileDescription.textContent = lang.fullDesc;
            profileTags.innerHTML = lang.categories.map(category => `<span class="tag">${category.replace(/-/g, " ")}</span>`).join("");
            profileHighlights.innerHTML = lang.features.map(feature => `<li>${feature}</li>`).join("");

            // Tab Content: Overview
            overviewDesc.textContent = lang.fullDesc;
            overviewFeatures.innerHTML = lang.features.map(f => `<li>${f}</li>`).join("");

            // Tab Content: Beginner Guide
            const beginnerGuide = getBeginnerGuide(lang);
            beginnerGuideContent.innerHTML = `
        <div class="beginner-card">
            <h4>Syntax Essentials</h4>
            <p>${beginnerGuide.syntax}</p>
        </div>
        <div class="beginner-card">
            <h4>Code Writer</h4>
            <p>Write or copy your example, then open the free online compiler for this language.</p>
            <div class="beginner-code-box">
                <div class="beginner-code-toolbar">
                    <span class="beginner-code-label">${lang.name}</span>
                    <button class="beginner-run-btn" id="beginner-run-btn" type="button">Open Compiler</button>
                </div>
                <textarea class="beginner-code-editor" id="beginner-code-editor" spellcheck="false" aria-label="${lang.name} code editor">${lang.rawCode}</textarea>
            </div>
        </div>
        <div class="beginner-card">
            <h4>Common Keywords</h4>
            <div class="beginner-pill-list">
                ${beginnerGuide.keywords.map(item => `<button class="beginner-pill" data-type="keyword" data-detail="${escapeAttribute(item.detail)}" data-example="${escapeAttribute(item.example)}">${item.name}</button>`).join("")}
            </div>
            <div class="beginner-detail" id="beginner-detail-keyword"></div>
        </div>
        <div class="beginner-card">
            <h4>Common Data Types</h4>
            <div class="beginner-pill-list">
                ${beginnerGuide.dataTypes.map(item => `<button class="beginner-pill" data-type="datatype" data-detail="${escapeAttribute(item.detail)}" data-example="${escapeAttribute(item.example)}">${item.name}</button>`).join("")}
            </div>
            <div class="beginner-detail" id="beginner-detail-datatype"></div>
        </div>
        <div class="beginner-card">
            <h4>Core Concepts</h4>
            <div class="beginner-pill-list">
                ${beginnerGuide.concepts.map(item => `<button class="beginner-pill" data-type="concept" data-detail="${escapeAttribute(item.detail)}" data-example="${escapeAttribute(item.example)}">${item.name}</button>`).join("")}
            </div>
            <div class="beginner-detail" id="beginner-detail-concept"></div>
        </div>
        <div class="beginner-card">
            <h4>Beginner Roadmap</h4>
            <div class="beginner-steps">
                ${beginnerGuide.firstSteps.map(step => `
                    <div class="beginner-step">
                        <span>${step.label}</span>
                        <button class="beginner-step-btn" data-example="${escapeAttribute(step.code)}">-></button>
                    </div>
                    <div class="beginner-example"></div>
                `).join("")}
            </div>
        </div>
    `;

            setTimeout(() => {
                beginnerGuideContent.querySelectorAll('.beginner-pill').forEach(button => {
                    button.addEventListener('click', () => {
                        const detailBox = beginnerGuideContent.querySelector(`#beginner-detail-${button.dataset.type === 'keyword' ? 'keyword' : button.dataset.type === 'datatype' ? 'datatype' : 'concept'}`);
                        if (!detailBox) return;
                        detailBox.innerHTML = `<strong>${button.textContent}</strong><br>${button.dataset.detail}<br><br><span style="color:#10b981">Example:</span><br>${button.dataset.example}`;
                        detailBox.classList.add('visible');
                        beginnerGuideContent.querySelectorAll('.beginner-pill').forEach(other => other.classList.remove('active'));
                        button.classList.add('active');
                    });
                });

                beginnerGuideContent.querySelectorAll('.beginner-step-btn').forEach(button => {
                    button.addEventListener('click', () => {
                        const exampleBox = button.parentElement.nextElementSibling;
                        if (exampleBox) {
                            exampleBox.textContent = button.dataset.example;
                            exampleBox.classList.toggle('visible');
                        }
                    });
                });
            }, 0);

            const beginnerRunBtn = beginnerGuideContent.querySelector("#beginner-run-btn");
            beginnerRunBtn.textContent = `Open ${lang.name} Compiler`;
            beginnerRunBtn.addEventListener("click", () => openOnlineCompiler(lang, beginnerGuideContent.querySelector("#beginner-code-editor").value));

            // Tab Content: Syntax
            codeLangLabel.textContent = lang.id;
            codeBlock.innerHTML = lang.codeSnippet;

            // Reset Copy Button
            copyCodeBtn.textContent = "Copy Code";

            // Tab Content: Ecosystem
            ecoPkgMgr.textContent = lang.packageManager;
            ecoWeb.textContent = lang.frameworksWeb;
            ecoData.textContent = lang.frameworksData;
            ecoRuntime.textContent = lang.primaryRuntime;

            // Build Overview external links (official sites & tech pages)
            (function populateOverviewLinks() {
                const overviewLinks = document.getElementById('overview-links');
                if (!overviewLinks) return;
                overviewLinks.innerHTML = '';

                const siteMap = {
                    // Languages
                    'python': 'https://www.python.org',
                    'javascript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                    'typescript': 'https://www.typescriptlang.org',
                    'rust': 'https://www.rust-lang.org',
                    'go': 'https://golang.org',
                    'java': 'https://openjdk.org',
                    'c++': 'https://isocpp.org',
                    'c': 'https://en.wikipedia.org/wiki/C_(programming_language)',
                    'ruby': 'https://www.ruby-lang.org',
                    'php': 'https://www.php.net',
                    'swift': 'https://swift.org',
                    'kotlin': 'https://kotlinlang.org',
                    'scala': 'https://www.scala-lang.org',
                    'r': 'https://www.r-project.org',
                    'julia': 'https://julialang.org',
                    'dart': 'https://dart.dev',
                    'lua': 'https://www.lua.org',
                    'elixir': 'https://elixir-lang.org',
                    'haskell': 'https://www.haskell.org',
                    'sql': 'https://en.wikipedia.org/wiki/SQL',

                    // Runtimes / package managers
                    'pip (pypi)': 'https://pypi.org',
                    'pip': 'https://pypi.org',
                    'npm': 'https://www.npmjs.com',
                    'yarn': 'https://yarnpkg.com',
                    'pnpm': 'https://pnpm.io',
                    'cargo': 'https://doc.rust-lang.org/cargo/',
                    'go modules': 'https://go.dev/ref/mod',
                    'maven': 'https://maven.apache.org',
                    'gradle': 'https://gradle.org',

                    // Web frameworks
                    'django': 'https://www.djangoproject.com',
                    'fastapi': 'https://fastapi.tiangolo.com',
                    'flask': 'https://flask.palletsprojects.com',
                    'react': 'https://reactjs.org',
                    'angular': 'https://angular.io',
                    'vue': 'https://vuejs.org',
                    'next.js': 'https://nextjs.org',
                    'nextjs': 'https://nextjs.org',
                    'express': 'https://expressjs.com',
                    'nestjs': 'https://nestjs.com',
                    'actix-web': 'https://actix.rs',
                    'axum': 'https://docs.rs/axum',
                    'spring boot': 'https://spring.io/projects/spring-boot',

                    // Data / ML
                    'numpy': 'https://numpy.org',
                    'scipy': 'https://www.scipy.org',
                    'pandas': 'https://pandas.pydata.org',
                    'pytorch': 'https://pytorch.org',
                    'tensorflow': 'https://www.tensorflow.org',
                    'd3.js': 'https://d3js.org',
                    'chart.js': 'https://www.chartjs.org',

                    // Misc
                    'node.js': 'https://nodejs.org',
                    'node': 'https://nodejs.org',
                    'mdn': 'https://developer.mozilla.org'
                };

                function lookupUrl(name) {
                    if (!name) return null;
                    const cleaned = name.trim().toLowerCase();
                    // try direct match
                    if (siteMap[cleaned]) return siteMap[cleaned];
                    // try simple normalizations
                    const normalized = cleaned.replace(/\s+/g, ' ').replace(/\.js$/, '.js').replace(/\s*js$/,'js');
                    if (siteMap[normalized]) return siteMap[normalized];
                    // fallback to a search query
                    return 'https://www.google.com/search?q=' + encodeURIComponent(name + ' official website');
                }

                // collect candidates: language itself + package manager + frameworks + data frameworks + runtime
                const candidates = [];
                candidates.push(lang.name);
                [lang.packageManager, lang.frameworksWeb, lang.frameworksData, lang.primaryRuntime].forEach(field => {
                    if (!field) return;
                    // split common separators
                    const parts = String(field).split(/[,|\/]+/);
                    parts.forEach(p => {
                        const token = p.trim();
                        if (token && token.toLowerCase() !== lang.name.toLowerCase()) candidates.push(token);
                    });
                });

                // unique and filter
                const unique = [...new Set(candidates.map(s => s.trim()).filter(Boolean))];

                // create primary language button first
                if (unique.length > 0) {
                    const langBtn = document.createElement('a');
                    langBtn.className = 'overview-link-btn';
                    langBtn.href = lookupUrl(lang.id || lang.name);
                    langBtn.target = '_blank';
                    langBtn.rel = 'noopener noreferrer';
                    langBtn.textContent = `Official site  -  ${lang.name}`;
                    overviewLinks.appendChild(langBtn);
                }

                // then tech buttons
                unique.slice(1).forEach(item => {
                    const url = lookupUrl(item);
                    const a = document.createElement('a');
                    a.className = 'overview-link-btn';
                    a.href = url;
                    a.target = '_blank';
                    a.rel = 'noopener noreferrer';
                    a.textContent = item;
                    overviewLinks.appendChild(a);
                });
            })();

            // Tab Content: Pros & Cons
            prosList.innerHTML = lang.pros.map(p => `<li>${p}</li>`).join("");
            consList.innerHTML = lang.cons.map(c => `<li>${c}</li>`).join("");

            // Side Specs Panel
            specTyping.textContent = lang.specs.typing;
            specMemory.textContent = lang.specs.memory;
            specExecution.textContent = lang.specs.execution;
            specConcurrency.textContent = lang.specs.concurrency;

            // Side Progress Metrics
            metricsContainer.innerHTML = lang.metrics.map(m => `
        <div class="metric-item">
          <div class="metric-label">
            <span>${m.label}</span>
            <span>${m.value}%</span>
          </div>
          <div class="metric-bar-bg">
            <div class="metric-bar-fill" style="width: 0%"></div>
          </div>
        </div>
      `).join("");

            // Show modal
            modal.classList.add("active");
            document.body.classList.add("modal-open");
            modalContainer.scrollTop = 0;
            resetScrollIdleTimer();
            // Set hero gradient using its own property so it's not inherited
            modalHero.style.setProperty("--hero-glow", lang.accentGlow);

            // Trigger animated entry of progress bars
            setTimeout(() => {
                const fills = metricsContainer.querySelectorAll(".metric-bar-fill");
                lang.metrics.forEach((m, idx) => {
                    if (fills[idx]) {
                        fills[idx].style.width = `${m.value}%`;
                    }
                });
            }, 100);

            // Reset Tab position to the full profile view
            switchTab("profile");
        }

        const compilerSiteMap = {
            python: "https://www.programiz.com/python-programming/online-compiler/",
            javascript: "https://onecompiler.com/javascript",
            typescript: "https://onecompiler.com/typescript",
            rust: "https://play.rust-lang.org/",
            go: "https://go.dev/play/",
            cpp: "https://www.onlinegdb.com/online_c++_compiler",
            c: "https://www.onlinegdb.com/online_c_compiler",
            java: "https://www.programiz.com/java-programming/online-compiler/",
            swift: "https://onecompiler.com/swift",
            kotlin: "https://play.kotlinlang.org/",
            ruby: "https://www.programiz.com/ruby-programming/online-compiler/",
            php: "https://www.programiz.com/php/online-compiler/",
            scala: "https://onecompiler.com/scala",
            r: "https://www.programiz.com/r/online-compiler/",
            dart: "https://dartpad.dev/",
            lua: "https://onecompiler.com/lua",
            elixir: "https://onecompiler.com/elixir",
            julia: "https://onecompiler.com/julia",
            haskell: "https://onecompiler.com/haskell",
            sql: "https://www.programiz.com/sql/online-compiler/"
        };

        async function openOnlineCompiler(lang, source) {
            const compilerUrl = compilerSiteMap[lang.id] || `https://www.google.com/search?q=${encodeURIComponent(`${lang.name} free online compiler`)}`;
            try {
                await navigator.clipboard.writeText(source);
                beginnerGuideContent.querySelector("#beginner-run-btn").textContent = "Code Copied - Open Compiler";
            } catch (error) {
                // The external compiler still opens if clipboard access is unavailable.
            }
            window.open(compilerUrl, "_blank", "noopener,noreferrer");
        }

        function closeModal() {
            modal.classList.remove("active");
            document.body.classList.remove("modal-open");
            activeLanguage = null;
            clearTimeout(scrollIdleTimer);
            scrollMoreBtn.classList.remove("visible");
        }

        function openOverviewDocument(event) {
            event.preventDefault();
            if (modal.classList.contains("active")) closeModal();
            overviewOverlay.classList.add("active");
            overviewOverlay.setAttribute("aria-hidden", "false");
            document.body.classList.add("modal-open");
            overviewDocumentClose.focus();
        }

        function closeOverviewDocument() {
            overviewOverlay.classList.remove("active");
            overviewOverlay.setAttribute("aria-hidden", "true");
            document.body.classList.remove("modal-open");
        }

        function updateScrollCue() {
            const hasMoreContent = modalContainer.scrollHeight - modalContainer.clientHeight > 12;
            const isNearBottom = modalContainer.scrollTop + modalContainer.clientHeight >= modalContainer.scrollHeight - 12;
            scrollMoreBtn.classList.toggle("visible", hasMoreContent && !isNearBottom && modal.classList.contains("active"));
        }

        function resetScrollIdleTimer() {
            clearTimeout(scrollIdleTimer);
            scrollMoreBtn.classList.remove("visible");
            if (!modal.classList.contains("active")) return;
            scrollIdleTimer = setTimeout(updateScrollCue, 5000);
        }

        scrollMoreBtn.addEventListener("click", () => {
            modalContainer.scrollBy({ top: Math.max(modalContainer.clientHeight * 0.72, 240), behavior: "smooth" });
            resetScrollIdleTimer();
        });

        ["pointermove", "keydown", "wheel", "touchstart", "scroll"].forEach(eventName => {
            modalContainer.addEventListener(eventName, resetScrollIdleTimer, { passive: eventName !== "keydown" });
        });
        modalContainer.addEventListener("scroll", updateScrollCue, { passive: true });
        window.addEventListener("resize", updateScrollCue);

        // Modal Tabs Management
        const tabButtons = document.querySelectorAll(".tab-btn");
        const tabPanes = document.querySelectorAll(".tab-pane");

        function switchTab(tabId) {
            tabButtons.forEach(btn => {
                if (btn.getAttribute("data-tab") === tabId) {
                    btn.classList.add("active");
                } else {
                    btn.classList.remove("active");
                }
            });

            tabPanes.forEach(pane => {
                if (pane.id === `tab-${tabId}`) {
                    pane.classList.add("active");
                } else {
                    pane.classList.remove("active");
                }
            });
        }

        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                switchTab(button.getAttribute("data-tab"));
            });
        });

        // Copy to Clipboard Action
        copyCodeBtn.addEventListener("click", () => {
            if (!activeLanguage) return;

            navigator.clipboard.writeText(activeLanguage.rawCode).then(() => {
                copyCodeBtn.textContent = "Copied! [OK]";
                setTimeout(() => {
                    copyCodeBtn.textContent = "Copy Code";
                }, 2000);
            }).catch(err => {
                console.error("Could not copy snippet:", err);
            });
        });

        // Event Listeners for Filters and Search
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderCards();
        });

        filtersContainer.addEventListener("click", (e) => {
            const targetChip = e.target.closest(".filter-chip");
            if (!targetChip) return;

            filtersContainer.querySelectorAll(".filter-chip").forEach(chip => {
                chip.classList.remove("active");
            });

            targetChip.classList.add("active");
            currentFilter = targetChip.getAttribute("data-filter");
            renderCards();
        });

        // Close Modal on backdrop click
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        overviewDocumentLink.addEventListener("click", openOverviewDocument);
        overviewOverlay.addEventListener("click", (e) => {
            if (e.target === overviewOverlay) closeOverviewDocument();
        });
        overviewDocumentClose.addEventListener("click", closeOverviewDocument);

        modalClose.addEventListener("click", closeModal);

        // Close modal with Escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal.classList.contains("active")) {
                closeModal();
            }
            if (e.key === "Escape" && overviewOverlay.classList.contains("active")) {
                closeOverviewDocument();
            }
        });

        directoryViewBtn.addEventListener("click", () => setView("directory"));
        timelineViewBtn.addEventListener("click", () => setView("timeline"));
        // Initial render
        renderCards();
