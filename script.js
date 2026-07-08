// ============================================
// Terminal typewriter — the "deal hypothesis" signature moment
// ============================================
const script = [
  { text: "$ analyze_target(company=\"prospect_co\")", cls: "tk-cmd" },
  { text: "  mapping decision-makers...", cls: "tk-dim" },
  { text: "  ✓ 3 decision-makers identified", cls: "tk-ok" },
  { text: "  scoring ICP fit...", cls: "tk-dim" },
  { text: "  ✓ ICP fit: 0.94", cls: "tk-ok" },
  { text: "  cross-referencing pipeline history...", cls: "tk-dim" },
  { text: "  ✓ hypothesis: ready", cls: "tk-ok" },
  { text: "", cls: "" },
  { text: "$ forecast(deal)", cls: "tk-cmd" },
  { text: "  ✓ avg deal size: $200,000", cls: "tk-ok" },
  { text: "  ✓ quota attainment: 100%", cls: "tk-ok" },
];

const output = document.getElementById("terminal-output");
const cursor = document.getElementById("cursor");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function renderStatic() {
  output.innerHTML = script
    .map((line) => `<span class="${line.cls}">${line.text}</span>`)
    .join("\n");
}

async function typeLine(line) {
  const span = document.createElement("span");
  span.className = line.cls;
  output.appendChild(span);
  for (const ch of line.text) {
    span.textContent += ch;
    await sleep(line.cls === "tk-cmd" ? 22 : 10);
  }
  output.appendChild(document.createTextNode("\n"));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runTypewriter() {
  if (reduceMotion) {
    renderStatic();
    cursor.style.display = "none";
    return;
  }
  output.textContent = "";
  for (const line of script) {
    await typeLine(line);
    await sleep(line.text === "" ? 120 : 90);
  }
  cursor.style.marginTop = "-1.6em";
}

window.addEventListener("DOMContentLoaded", () => {
  runTypewriter();

  // Scroll reveal for sections
  const sections = document.querySelectorAll(".section");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    sections.forEach((s) => io.observe(s));
  } else {
    sections.forEach((s) => s.classList.add("is-visible"));
  }
});
