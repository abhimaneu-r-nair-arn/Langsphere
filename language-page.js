(() => {
    const page = document.body;
    const language = languages.find(item => item.id === page.dataset.languageId);
    const profileShell = `
        <main class="container">
            <header class="profile-page-header"><a class="profile-back-link" href="../directory.html">&lt;- Back to directory</a><div class="logo-container"><span class="logo-glow">LangSphere</span></div><p>Complete language profile, practical guidance, and ecosystem reference.</p></header>
            <article class="language-profile" id="language-profile"><div class="modal-hero" id="modal-hero"><div class="modal-logo" id="modal-logo"></div><div class="modal-meta"><h1 id="modal-title"></h1><p>Created by <span id="modal-creator" class="modal-meta-accent"></span> in <span id="modal-year" class="modal-meta-accent"></span></p></div><div class="hero-level-control"><span class="hero-level-label">LEARNING LEVEL</span><div class="profile-level-toggle" id="profile-level-toggle" role="group" aria-label="Learning path level"><button class="profile-level-option active" type="button" data-profile-level="beginner">Beginner</button><button class="profile-level-option" type="button" data-profile-level="intermediate">Intermediate</button><button class="profile-level-option" type="button" data-profile-level="advanced">Advanced</button></div></div></div>
                <div class="modal-body"><div class="modal-left"><nav class="modal-tabs" aria-label="Language profile sections"><button class="tab-btn active" data-tab="profile" type="button">Profile</button><button class="tab-btn" data-tab="overview" type="button">Overview</button><button class="tab-btn" data-tab="beginner" type="button">Beginner Guide</button><button class="tab-btn" data-tab="learning" type="button">Learning Path</button><button class="tab-btn" data-tab="syntax" type="button">Syntax Highlight</button><button class="tab-btn" data-tab="ecosystem" type="button">Ecosystem</button><button class="tab-btn" data-tab="proscons" type="button">Pros &amp; Cons</button></nav>
                    <section class="tab-pane active" id="tab-profile"><div class="profile-summary" id="profile-summary"></div><p id="profile-description" class="tab-overview"></p><div class="profile-tags" id="profile-tags"></div><div class="overview-bullets"><h4 id="profile-highlights-title">Profile Highlights</h4><ul id="profile-highlights"></ul></div></section>
                    <section class="tab-pane" id="tab-overview"><div class="tab-overview"><p id="overview-desc"></p><div class="overview-bullets"><h4 id="overview-features-title">Primary Philosophy &amp; Features</h4><ul id="overview-features"></ul><div id="overview-links" class="overview-links"></div></div></div></section>
                    <section class="tab-pane" id="tab-beginner"><p id="beginner-guide-label" class="profile-muted-note">A beginner-friendly starter pack for getting productive quickly.</p><div id="beginner-guide-content" class="beginner-guide-content"></div></section>
                    <section class="tab-pane" id="tab-learning"><div class="learning-path-heading"><p class="profile-muted-note">A staged route from first principles to production-level expertise.</p></div><div id="learning-path-content"></div></section>
                    <section class="tab-pane" id="tab-syntax"><p class="profile-muted-note">Interactive Code Demonstration:</p><div class="code-container"><div class="code-header"><span class="code-lang-label" id="code-lang-label"></span><button class="copy-btn" id="copy-code-btn" type="button">Copy Code</button></div><pre><code id="code-block"></code></pre></div></section>
                    <section class="tab-pane" id="tab-ecosystem"><p id="ecosystem-label" class="profile-muted-note">Ecosystem &amp; Package Management details:</p><table class="ecosystem-table"><thead><tr><th>Ecosystem Asset</th><th>Examples &amp; Details</th></tr></thead><tbody><tr><td><strong>Package Manager</strong></td><td id="eco-pkg-mgr"></td></tr><tr><td><strong>Web Frameworks</strong></td><td id="eco-web"></td></tr><tr><td><strong>Data Science/AI</strong></td><td id="eco-data"></td></tr><tr><td><strong>Primary Runtime</strong></td><td id="eco-runtime"></td></tr></tbody></table></section>
                    <section class="tab-pane" id="tab-proscons"><div class="pros-cons-grid"><div class="pros-column"><h4>Advantages</h4><ul class="pros-cons-list" id="pros-list"></ul></div><div class="cons-column"><h4>Disadvantages</h4><ul class="pros-cons-list" id="cons-list"></ul></div></div></section>
                </div><aside class="modal-right"><div class="specs-panel"><h3>Language Metrics</h3><div id="metrics-container"></div><h3 class="specs-heading">Technical Specs</h3><div class="specs-list"><div class="spec-row"><span class="spec-label">Typing System</span><span class="spec-val" id="spec-typing"></span></div><div class="spec-row"><span class="spec-label">Memory Management</span><span class="spec-val" id="spec-memory"></span></div><div class="spec-row"><span class="spec-label">Compilation/Execution</span><span class="spec-val" id="spec-execution"></span></div><div class="spec-row"><span class="spec-label">Concurrency Model</span><span class="spec-val" id="spec-concurrency"></span></div></div></div></aside></div>
            </article><footer><p>&copy; 2026 LangSphere. Designed for developers, researchers, and computer scientists.</p><a href="../directory.html">Back to directory</a></footer>
        </main>`;
    if (!language) {
        document.title = "LangSphere | Language not found";
        document.body.innerHTML = '<main class="container"><div class="profile-not-found"><h1>Language profile not found</h1><a href="../directory.html">Back to directory</a></div></main>';
        return;
    }

    if (!document.getElementById("language-profile")) document.body.innerHTML = profileShell;

    const $ = id => document.getElementById(id);
    const esc = value => String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const fallbackGuide = {
        syntax: `Start with variables, functions, and control flow before exploring the advanced parts of ${language.name}.`,
        keywords: [{ name: "if", detail: "Runs code conditionally.", example: "if (ready) { }" }],
        dataTypes: [{ name: "string", detail: "Stores text.", example: "let text = 'hi';" }],
        concepts: [{ name: "Variables", detail: "Store data.", example: "let x = 1;" }],
        firstSteps: [{ label: "Write a tiny example", code: "print('Hello')" }]
    };
    const guide = beginnerGuides[language.id] || fallbackGuide;
    const learningPaths = {
        beginner: {
            title: "Foundations and first programs",
            summary: `Learn ${language.name}'s core vocabulary, write small programs, and build confidence with its everyday tools.`,
            outcomes: [`Read and explain a small ${language.name} program.`, "Use variables, control flow, functions, and the language's basic data structures.", `Set up ${language.packageManager} and run a project locally.`],
            practice: guide.firstSteps.slice(0, 3).map(step => `${step.label}: ${step.code}`)
        },
        intermediate: {
            title: "Real applications and ecosystem fluency",
            summary: `Move from isolated examples to maintainable ${language.name} applications using its ecosystem, conventions, and testing habits.`,
            outcomes: [`Build a small service, tool, or data workflow with ${language.name}.`, `Use ${language.frameworksWeb} where appropriate and understand the trade-offs.`, `Package, test, debug, and document a project with ${language.name}.`],
            practice: [`Create a project with ${language.packageManager}.`, `Use the primary runtime: ${language.primaryRuntime}.`, `Refactor one feature into reusable modules and add tests.`]
        },
        advanced: {
            title: "Internals, performance, and architecture",
            summary: `Study how ${language.name} behaves under production constraints and make deliberate architecture and performance decisions.`,
            outcomes: [`Explain the typing model: ${language.specs.typing}.`, `Reason about memory: ${language.specs.memory}.`, `Design around its execution model (${language.specs.execution}) and concurrency model (${language.specs.concurrency}).`],
            practice: [`Benchmark two implementations and profile the bottleneck.`, `Design a failure-tolerant component using ${language.name}'s ecosystem.`, `Review an API or codebase for maintainability, security, and operational cost.`]
        }
    };
    const requestedLevel = new URLSearchParams(window.location.search).get("level");
    let selectedProfileLevel = ["beginner", "intermediate", "advanced"].includes(requestedLevel) ? requestedLevel : "beginner";

    function getLevelDetails(level) {
        const sharedFeatures = language.features.slice(0, 3);
        if (level === "beginner") {
            return {
                description: `Begin with ${language.name}'s vocabulary and mental model. ${language.fullDesc}`,
                highlights: [guide.syntax, ...guide.concepts.slice(0, 2).map(item => `${item.name}: ${item.detail}`)],
                overviewTitle: "Beginner Focus",
                overviewFeatures: [`Learn the basic shape of ${language.name} programs.`, ...sharedFeatures, `Set up ${language.packageManager} and run a first example.`],
                ecosystemLabel: `Beginner toolkit: start with the simplest tools in the ${language.name} ecosystem.`,
                ecosystem: { packageManager: `${language.packageManager} - install, run, and update one project`, web: `Start with one approachable framework: ${language.frameworksWeb}`, data: `First libraries to explore: ${language.frameworksData}`, runtime: `Run a small program with ${language.primaryRuntime}` },
                specs: { typing: `${language.specs.typing} - learn the everyday rules first`, memory: `${language.specs.memory} - focus on values and references`, execution: `${language.specs.execution} - understand the run/build loop`, concurrency: `${language.specs.concurrency} - begin with sequential code` },
                pros: ["Clearer first steps and small feedback loops.", ...language.pros.slice(0, 2)],
                cons: ["Advanced trade-offs are intentionally deferred.", ...language.cons.slice(0, 2)],
                metrics: language.metrics.map(metric => ({ ...metric, value: metric.label === "Ease of Learning" ? Math.min(100, metric.value + 8) : metric.value }))
            };
        }
        if (level === "intermediate") {
            return {
                description: `Apply ${language.name} to maintainable projects. ${language.fullDesc}`,
                highlights: [...language.features, `Use ${language.frameworksWeb} and ${language.packageManager} to structure real work.`],
                overviewTitle: "Intermediate Focus",
                overviewFeatures: [...language.features, `Connect the language to ${language.primaryRuntime} and its testing, packaging, and debugging workflow.`],
                ecosystemLabel: `Intermediate toolkit: choose libraries and frameworks that fit the problem.`,
                ecosystem: { packageManager: `${language.packageManager} - dependency management and reproducible projects`, web: `${language.frameworksWeb} - compare framework conventions`, data: `${language.frameworksData} - compose libraries into a working pipeline`, runtime: `${language.primaryRuntime} - configure, debug, and monitor applications` },
                specs: { ...language.specs, concurrency: `${language.specs.concurrency} - build a tested concurrent feature` },
                pros: language.pros,
                cons: language.cons,
                metrics: language.metrics
            };
        }
        return {
            description: `Study ${language.name} under production constraints. ${language.fullDesc}`,
            highlights: [`Typing: ${language.specs.typing}`, `Memory: ${language.specs.memory}`, `Execution: ${language.specs.execution}`, `Concurrency: ${language.specs.concurrency}`],
            overviewTitle: "Advanced Focus",
            overviewFeatures: [`Tune performance around ${language.specs.execution}.`, `Design safe ownership, memory, and failure boundaries around ${language.specs.memory}.`, `Evaluate concurrency choices: ${language.specs.concurrency}.`, ...language.features],
            ecosystemLabel: `Advanced toolkit: make deliberate architecture, performance, and operational trade-offs.`,
            ecosystem: { packageManager: `${language.packageManager} - lock, audit, and optimize dependencies`, web: `${language.frameworksWeb} - assess architecture and production behavior`, data: `${language.frameworksData} - profile pipelines and resource usage`, runtime: `${language.primaryRuntime} - inspect internals, deployment, and observability` },
            specs: { typing: `${language.specs.typing} - reason about abstraction and compile-time guarantees`, memory: `${language.specs.memory} - profile allocation and lifetime behavior`, execution: `${language.specs.execution} - benchmark and optimize hot paths`, concurrency: `${language.specs.concurrency} - design for contention, failure, and scale` },
            pros: ["Makes performance and architecture trade-offs explicit.", ...language.pros],
            cons: ["Requires deeper runtime and ecosystem knowledge.", ...language.cons],
            metrics: language.metrics.map(metric => ({ ...metric, value: metric.label === "Performance / Speed" ? Math.min(100, metric.value + 5) : metric.label === "Ease of Learning" ? Math.max(0, metric.value - 8) : metric.value }))
        };
    }

    function renderLevelDetails() {
        const details = getLevelDetails(selectedProfileLevel);
        const levelPractice = {
            beginner: {
                title: "Start with the essentials",
                text: `Focus on ${language.name}'s syntax, vocabulary, and small programs before adding frameworks or advanced abstractions.`,
                items: [`Read a small ${language.name} example line by line.`, `Practice the core concepts: ${guide.concepts.slice(0, 2).map(item => item.name).join(" and ")}.`, `Run and modify one first-step example.`]
            },
            intermediate: {
                title: "Build a maintainable feature",
                text: `Use ${language.name} in a real project and connect the language fundamentals to its libraries, testing, and packaging workflow.`,
                items: [`Create a small project with ${language.packageManager}.`, `Use one framework or library from ${language.frameworksWeb}.`, `Add tests, error handling, and a short README.`]
            },
            advanced: {
                title: "Investigate the runtime",
                text: `Treat ${language.name} as a production system: measure behavior, inspect trade-offs, and design around its execution and concurrency models.`,
                items: [`Profile a hot path under ${language.specs.execution}.`, `Analyze memory behavior: ${language.specs.memory}.`, `Design a scalable component around ${language.specs.concurrency}.`]
            }
        }[selectedProfileLevel];
        const oldPracticeSummary = $("beginner-guide-content").querySelector(".level-practice-summary");
        if (oldPracticeSummary) oldPracticeSummary.remove();
        $("beginner-guide-content").insertAdjacentHTML("afterbegin", `<div class="beginner-card level-practice-summary"><h4>${levelPractice.title}</h4><p>${levelPractice.text}</p><ul class="level-practice-list">${levelPractice.items.map(item => `<li>${item}</li>`).join("")}</ul></div>`);
        $("profile-description").textContent = details.description;
        $("profile-highlights-title").textContent = `${selectedProfileLevel[0].toUpperCase()}${selectedProfileLevel.slice(1)} Level Highlights`;
        $("profile-highlights").innerHTML = details.highlights.map(item => `<li>${item}</li>`).join("");
        $("overview-desc").textContent = details.description;
        $("overview-features-title").textContent = details.overviewTitle;
        $("overview-features").innerHTML = details.overviewFeatures.map(item => `<li>${item}</li>`).join("");
        $("beginner-guide-label").textContent = `${selectedProfileLevel[0].toUpperCase()}${selectedProfileLevel.slice(1)} practice guide: use the examples and missions below at this depth.`;
        $("ecosystem-label").textContent = details.ecosystemLabel;
        $("eco-pkg-mgr").textContent = details.ecosystem.packageManager;
        $("eco-web").textContent = details.ecosystem.web;
        $("eco-data").textContent = details.ecosystem.data;
        $("eco-runtime").textContent = details.ecosystem.runtime;
        $("pros-list").innerHTML = details.pros.map(item => `<li>${item}</li>`).join("");
        $("cons-list").innerHTML = details.cons.map(item => `<li>${item}</li>`).join("");
        $("spec-typing").textContent = details.specs.typing;
        $("spec-memory").textContent = details.specs.memory;
        $("spec-execution").textContent = details.specs.execution;
        $("spec-concurrency").textContent = details.specs.concurrency;
        $("metrics-container").innerHTML = details.metrics.map(metric => `<div class="metric-item"><div class="metric-label"><span>${metric.label}</span><span>${metric.value}%</span></div><div class="metric-bar-bg"><div class="metric-bar-fill" style="width: ${metric.value}%"></div></div></div>`).join("");
        $("profile-summary").innerHTML = `<div class="profile-stat"><strong>${language.year}</strong><span>First released</span></div><div class="profile-stat"><strong>${language.categories.length}</strong><span>Directory disciplines</span></div><div class="profile-stat"><strong>${details.metrics[0].value}%</strong><span>${selectedProfileLevel} signal</span></div>`;
    }

    document.title = `LangSphere | ${language.name} Profile`;
    page.style.setProperty("--lang-accent", language.accentColor);
    page.style.setProperty("--lang-accent-glow", language.accentGlow);
    page.style.setProperty("--lang-accent-light", language.accentLight);
    $("modal-hero").style.setProperty("--hero-glow", language.accentGlow);
    $("modal-logo").innerHTML = language.logoSvg;
    $("modal-title").textContent = language.name;
    $("modal-creator").textContent = language.creator;
    $("modal-year").textContent = language.year;
    $("profile-summary").innerHTML = `<div class="profile-stat"><strong>${language.year}</strong><span>First released</span></div><div class="profile-stat"><strong>${language.categories.length}</strong><span>Directory disciplines</span></div><div class="profile-stat"><strong>${language.metrics[0].value}%</strong><span>Performance signal</span></div>`;
    $("profile-description").textContent = language.fullDesc;
    $("profile-tags").innerHTML = language.categories.map(category => `<span class="tag">${category.replace(/-/g, " ")}</span>`).join("");
    $("profile-highlights").innerHTML = language.features.map(feature => `<li>${feature}</li>`).join("");
    $("overview-desc").textContent = language.fullDesc;
    $("overview-features").innerHTML = language.features.map(feature => `<li>${feature}</li>`).join("");
    $("code-lang-label").textContent = language.id;
    $("code-block").innerHTML = language.codeSnippet;
    $("eco-pkg-mgr").textContent = language.packageManager;
    $("eco-web").textContent = language.frameworksWeb;
    $("eco-data").textContent = language.frameworksData;
    $("eco-runtime").textContent = language.primaryRuntime;
    $("pros-list").innerHTML = language.pros.map(item => `<li>${item}</li>`).join("");
    $("cons-list").innerHTML = language.cons.map(item => `<li>${item}</li>`).join("");
    $("spec-typing").textContent = language.specs.typing;
    $("spec-memory").textContent = language.specs.memory;
    $("spec-execution").textContent = language.specs.execution;
    $("spec-concurrency").textContent = language.specs.concurrency;
    $("metrics-container").innerHTML = language.metrics.map(metric => `<div class="metric-item"><div class="metric-label"><span>${metric.label}</span><span>${metric.value}%</span></div><div class="metric-bar-bg"><div class="metric-bar-fill" style="width: ${metric.value}%"></div></div></div>`).join("");
    renderLevelDetails();

    const officialSites = {
        python: "https://www.python.org", javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", typescript: "https://www.typescriptlang.org", rust: "https://www.rust-lang.org", go: "https://go.dev", java: "https://openjdk.org", cpp: "https://isocpp.org", c: "https://en.wikipedia.org/wiki/C_(programming_language)", ruby: "https://www.ruby-lang.org", php: "https://www.php.net", swift: "https://swift.org", kotlin: "https://kotlinlang.org", scala: "https://www.scala-lang.org", r: "https://www.r-project.org", julia: "https://julialang.org", dart: "https://dart.dev", lua: "https://www.lua.org", elixir: "https://elixir-lang.org", haskell: "https://www.haskell.org", sql: "https://en.wikipedia.org/wiki/SQL"
    };
    const officialLink = officialSites[language.id] || `https://www.google.com/search?q=${encodeURIComponent(language.name + " official website")}`;
    const relatedLinks = [language.packageManager, language.frameworksWeb, language.frameworksData, language.primaryRuntime]
        .flatMap(value => String(value || "").split(/[,|\/]+/).map(item => item.trim()).filter(Boolean))
        .filter(item => item.toLowerCase() !== language.name.toLowerCase());
    const uniqueLinks = [...new Set(relatedLinks)];
    const linkMarkup = uniqueLinks.map(item => `<a class="overview-link-btn" href="https://www.google.com/search?q=${encodeURIComponent(item + " official website")}" target="_blank" rel="noopener noreferrer">${esc(item)}</a>`).join("");
    $("overview-links").innerHTML = `<a class="overview-link-btn" href="${officialLink}" target="_blank" rel="noopener noreferrer">Official site - ${language.name}</a>${linkMarkup}`;

    $("beginner-guide-content").innerHTML = `<div class="beginner-card"><h4>Syntax Essentials</h4><p>${guide.syntax}</p></div><div class="beginner-card"><h4>Code Writer</h4><p>Write or copy your example, then open the free online compiler for this language.</p><div class="beginner-code-box"><div class="beginner-code-toolbar"><span class="beginner-code-label">${language.name}</span><button class="beginner-run-btn" type="button">Open ${language.name} Compiler</button></div><textarea class="beginner-code-editor" spellcheck="false" aria-label="${language.name} code editor">${esc(language.rawCode)}</textarea></div></div><div class="beginner-card"><h4>Common Keywords</h4><div class="beginner-pill-list">${guide.keywords.map(item => `<button class="beginner-pill" data-detail="${esc(item.detail)}" data-example="${esc(item.example)}">${item.name}</button>`).join("")}</div><div class="beginner-detail"></div></div><div class="beginner-card"><h4>Common Data Types</h4><div class="beginner-pill-list">${guide.dataTypes.map(item => `<button class="beginner-pill" data-detail="${esc(item.detail)}" data-example="${esc(item.example)}">${item.name}</button>`).join("")}</div><div class="beginner-detail"></div></div><div class="beginner-card"><h4>Core Concepts</h4><div class="beginner-pill-list">${guide.concepts.map(item => `<button class="beginner-pill" data-detail="${esc(item.detail)}" data-example="${esc(item.example)}">${item.name}</button>`).join("")}</div><div class="beginner-detail"></div></div><div class="beginner-card"><h4>Beginner Roadmap</h4><div class="beginner-steps">${guide.firstSteps.map(step => `<div class="beginner-step"><span>${step.label}</span><button class="beginner-step-btn" data-example="${esc(step.code)}" type="button">-&gt;</button></div><div class="beginner-example"></div>`).join("")}</div></div>`;

    function renderLearningPath() {
        const path = learningPaths[selectedProfileLevel];
        $("learning-path-content").innerHTML = `<div class="learning-path-card"><div><span class="result-kicker">${selectedProfileLevel.toUpperCase()} LEVEL</span><h3>${path.title}</h3><p>${path.summary}</p></div><div class="learning-path-columns"><div><h4>What you will be able to do</h4><ul>${path.outcomes.map(item => `<li>${item}</li>`).join("")}</ul></div><div><h4>Practice missions</h4><ul>${path.practice.map(item => `<li>${item}</li>`).join("")}</ul></div></div></div>`;
        document.querySelectorAll(".profile-level-option").forEach(button => button.classList.toggle("active", button.dataset.profileLevel === selectedProfileLevel));
    }
    renderLearningPath();

    const compilerSites = { python: "https://www.programiz.com/python-programming/online-compiler/", javascript: "https://onecompiler.com/javascript", typescript: "https://onecompiler.com/typescript", rust: "https://play.rust-lang.org/", go: "https://go.dev/play/", java: "https://www.programiz.com/java-programming/online-compiler/", swift: "https://onecompiler.com/swift", kotlin: "https://play.kotlinlang.org/", ruby: "https://www.programiz.com/ruby-programming/online-compiler/", php: "https://www.programiz.com/php/online-compiler/", c: "https://www.onlinegdb.com/online_c_compiler", cpp: "https://www.onlinegdb.com/online_c++_compiler" };
    $("beginner-guide-content").querySelector(".beginner-run-btn").addEventListener("click", async event => {
        const source = $("beginner-guide-content").querySelector(".beginner-code-editor").value;
        try { await navigator.clipboard.writeText(source); } catch (error) { /* Clipboard access is optional. */ }
        window.open(compilerSites[language.id] || `https://www.google.com/search?q=${encodeURIComponent(language.name + " free online compiler")}`, "_blank", "noopener,noreferrer");
        event.currentTarget.textContent = "Code Copied - Open Compiler";
    });

    document.querySelectorAll(".tab-btn").forEach(button => button.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(item => item.classList.toggle("active", item === button));
        document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.toggle("active", pane.id === `tab-${button.dataset.tab}`));
    }));
    document.querySelectorAll(".profile-level-option").forEach(button => button.addEventListener("click", () => {
        selectedProfileLevel = button.dataset.profileLevel;
        renderLevelDetails();
        renderLearningPath();
    }));
    document.querySelectorAll(".beginner-pill").forEach(button => button.addEventListener("click", () => {
        const detail = button.parentElement.nextElementSibling;
        detail.innerHTML = `<strong>${button.textContent}</strong><br>${button.dataset.detail}<br><br><span style="color:#10b981">Example:</span><br>${button.dataset.example}`;
        detail.classList.add("visible");
    }));
    document.querySelectorAll(".beginner-step-btn").forEach(button => button.addEventListener("click", () => button.parentElement.nextElementSibling.classList.toggle("visible")));
    if (requestedLevel) document.querySelector('.tab-btn[data-tab="learning"]').click();
    $("copy-code-btn").addEventListener("click", async event => {
        try {
            await navigator.clipboard.writeText(language.rawCode);
            event.currentTarget.textContent = "Copied!";
            setTimeout(() => event.currentTarget.textContent = "Copy Code", 1800);
        } catch (error) {
            event.currentTarget.textContent = "Copy unavailable";
            setTimeout(() => event.currentTarget.textContent = "Copy Code", 1800);
        }
    });
})();
