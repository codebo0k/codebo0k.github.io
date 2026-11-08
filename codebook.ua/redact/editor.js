const defaults = {
    html: `<h1 id="title">Моя сторінка</h1>\n<p>Змініть код і натисніть «Запустити».</p>\n<button id="hello">Натисни мене</button>`,
    css: `body {\n  padding: 24px;\n  color: #1e293b;\n  font-family: Arial, sans-serif;\n}\n\nh1 { color: #059669; }\n\nbutton { padding: 8px 14px; border: 0; border-radius: 4px; color: white; background: #10b981; cursor: pointer; }`,
    js: `const button = document.querySelector("#hello");\nbutton.addEventListener("click", () => {\n  document.querySelector("#title").textContent = "Працює!";\n  console.log("Подію оброблено");\n});`
};

const editors = Object.fromEntries(["html", "css", "js"].map((language) => [
    language,
    document.getElementById(`editor-${language}`)
]));
const preview = document.getElementById("preview");
const consoleOutput = document.getElementById("console-output");
const status = document.getElementById("status");
const storagePrefix = "codebook-editor-";

function saveDrafts() {
    for (const [language, editor] of Object.entries(editors)) {
        try {
            localStorage.setItem(`${storagePrefix}${language}`, editor.value);
        } catch {
            status.textContent = "Автозбереження недоступне";
        }
    }
}

function runCode() {
    const parsedDocument = new DOMParser().parseFromString(editors.html.value, "text/html");
    const style = parsedDocument.createElement("style");
    style.textContent = editors.css.value;
    parsedDocument.head.append(style);

    const bridge = parsedDocument.createElement("script");
    bridge.textContent = `
        (() => {
            const format = (value) => {
                if (typeof value === "string") return value;
                try { return JSON.stringify(value); }
                catch { return String(value); }
            };
            for (const level of ["log", "warn", "error"]) {
                const original = console[level].bind(console);
                console[level] = (...values) => {
                    original(...values);
                    parent.postMessage({ type: "console", level, text: values.map(format).join(" ") }, "*");
                };
            }
            window.addEventListener("error", (event) => {
                parent.postMessage({ type: "error", text: event.message }, "*");
            });
        })();
    `;
    parsedDocument.body.append(bridge);

    const userScript = parsedDocument.createElement("script");
    userScript.textContent = editors.js.value;
    parsedDocument.body.append(userScript);

    consoleOutput.textContent = "";
    status.textContent = "Виконується";
    preview.srcdoc = `<!DOCTYPE html>${parsedDocument.documentElement.outerHTML}`;
    saveDrafts();
    preview.addEventListener("load", () => {
        status.textContent = "Виконано";
    }, { once: true });
}

function selectTab(language) {
    document.querySelectorAll("[data-tab]").forEach((tab) => {
        const selected = tab.dataset.tab === language;
        tab.classList.toggle("active", selected);
        tab.setAttribute("aria-selected", String(selected));
    });
    document.querySelectorAll("[data-panel]").forEach((panel) => {
        panel.hidden = panel.dataset.panel !== language;
    });
    editors[language].focus();
}

for (const [language, editor] of Object.entries(editors)) {
    const queryValue = new URLSearchParams(location.search).get(language);
    let savedValue = null;
    try {
        savedValue = localStorage.getItem(`${storagePrefix}${language}`);
    } catch {
        status.textContent = "Автозбереження недоступне";
    }
    editor.value = queryValue ?? savedValue ?? defaults[language];
    editor.addEventListener("input", saveDrafts);
    editor.addEventListener("keydown", (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === "Enter") runCode();
        if (event.key === "Tab") {
            event.preventDefault();
            editor.setRangeText("  ", editor.selectionStart, editor.selectionEnd, "end");
        }
    });
}

document.querySelectorAll("[data-tab]").forEach((tab) => {
    tab.addEventListener("click", () => selectTab(tab.dataset.tab));
});

document.getElementById("run").addEventListener("click", runCode);
document.getElementById("reset").addEventListener("click", () => {
    for (const [language, editor] of Object.entries(editors)) {
        editor.value = defaults[language];
        try {
            localStorage.removeItem(`${storagePrefix}${language}`);
        } catch {
            status.textContent = "Автозбереження недоступне";
        }
    }
    runCode();
});

window.addEventListener("message", (event) => {
    if (event.source !== preview.contentWindow || !event.data) return;
    if (event.data.type === "console") {
        consoleOutput.textContent += `${event.data.level}: ${event.data.text}\n`;
    } else if (event.data.type === "error") {
        consoleOutput.textContent += `Помилка: ${event.data.text}\n`;
        status.textContent = "Є помилка";
    }
});

runCode();