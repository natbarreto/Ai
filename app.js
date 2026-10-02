const DATA = window.TERRY_AI_DATA;
const main = document.querySelector("#main-content");
const nav = document.querySelector("#site-nav");
const menuButton = document.querySelector(".menu-button");
const money = value => new Intl.NumberFormat("en-US", {
  style: "currency", currency: "USD", maximumFractionDigits: 0
}).format(value);

document.querySelector("#reviewed-date").textContent = DATA.reviewed;

function toolCard(tool) {
  return `<article class="compact-tool-card">
    <div class="tool-top"><span>${tool.vendor}</span><b>${DATA.fiscalYear} · ${money(tool.annualCost)}/year</b></div>
    <h3>${tool.name}</h3>
    <p>${tool.summary}</p>
    <strong>${tool.terryPosition}</strong>
    <p class="best-fit"><b>Best for:</b> ${tool.strengths.slice(0, 3).join(" · ")}</p>
    <details>
      <summary>Platform and API details</summary>
      <p><b>Platform:</b> ${tool.harness}</p>
      <p><b>API:</b> ${tool.api}</p>
    </details>
    <a href="${tool.source}">Current vendor details <span aria-hidden="true">↗</span></a>
  </article>`;
}

const practicalCases = [
  ["staff", "Onboarding", "Build a role-specific checklist and FAQ from approved Terry procedures.", "Manager verifies content and access."],
  ["staff", "Ticket analysis", "Group requests, find repeat issues, and identify documentation gaps.", "Service owner validates categories."],
  ["staff", "Meeting follow-up", "Extract decisions, owners, due dates, and a concise recap.", "Meeting owner approves the summary."],
  ["staff faculty", "Excel analysis", "Explain columns, flag patterns, and draft a decision-ready brief.", "Data owner checks calculations."],
  ["faculty", "Research synthesis", "Compare papers, map findings, identify gaps, and outline a synthesis.", "Researcher verifies original sources."],
  ["faculty", "Coding", "Draft, explain, test, and document research or instructional code.", "Researcher tests assumptions and output."],
  ["faculty", "Instructional design", "Create cases, activities, rubrics, and alternative explanations.", "Instructor checks rigor and course fit."],
  ["staff faculty", "Knowledge assistant", "Answer questions from a bounded set of approved documents with citations.", "Content owner maintains the sources."]
];

main.innerHTML = `
  <div id="top"></div>
  <section id="license" class="license-callout">
    <div class="shell">
      <div>
        <p class="eyebrow">Need premium access?</p>
        <h2>Request an AI license</h2>
        <p>Premium licenses are purchased through the EITS AI Licensing Purchasing Program. Coordinate with your Terry department or business office; requests require the user’s MyID, department, and billing chart string.</p>
      </div>
      <div class="license-action">
        <a class="button button-primary" href="https://uga.teamdynamix.com/TDClient/3190/eitsclientportal/KB/Article/170250/AI-Licensing-Purchasing-Program">Request a license <span aria-hidden="true">↗</span></a>
        <small>EITS onboarding targets: May 1, July 1, and December 1</small>
      </div>
    </div>
  </section>

  <section class="guidance-section">
    <div class="shell">
      <div class="guidance-intro">
        <p class="eyebrow">Terry OIT guidance</p>
        <h1>Choose the right AI tool for the work.</h1>
        <p>Practical guidance for productivity, teaching, and research using university-supported tools and appropriate data.</p>
      </div>
      <div class="role-guidance-grid">
        <article id="staff" class="role-guidance-card">
          <span class="label">Staff</span>
          <h2>Start with Microsoft Copilot.</h2>
          <p>It fits Terry operations and work in Outlook, Teams, Word, Excel, PowerPoint, OneDrive, and SharePoint.</p>
          <div class="role-options">
            <p><strong>Copilot Chat</strong><span>Available now for everyday protected chat and file work.</span></p>
            <p><strong>Microsoft 365 Copilot</strong><span>Premium · ${money(276)}/year for integrated work and agents.</span></p>
          </div>
        </article>
        <article id="faculty" class="role-guidance-card">
          <span class="label">Faculty</span>
          <h2>Choose by teaching or research need.</h2>
          <p>No single platform is best for every use case. Compare source grounding, files, context, coding, agents, reproducibility, data rules, and cost.</p>
          <div class="role-options">
            <p><strong>Teaching</strong><span>Cases, activities, rubrics, explanations, and course-grounded assistants.</span></p>
            <p><strong>Research</strong><span>Synthesis, long documents, data analysis, coding, APIs, and reproducibility.</span></p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="quick-bar">
    <div class="shell">
      <strong>Last reviewed ${DATA.reviewed}</strong>
      <span>${DATA.fiscalYear} prices are current as of this review. Features and models change frequently.</span>
      <a href="${DATA.pricingSource}">Check EITS pricing ↗</a>
    </div>
  </section>

  <section id="compare" class="section shell">
    <div class="compact-heading">
      <div><p class="eyebrow">Tool comparison</p><h2>Four premium options</h2></div>
      <p>Seat pricing is per MyID and billed annually. API usage is separate unless explicitly included.</p>
    </div>
    <div class="tool-summary-grid compact-tools">${DATA.tools.map(toolCard).join("")}</div>
  </section>

  <section id="data" class="section shell practical-section">
    <div class="section-label"><p>Data &amp; responsible use</p></div>
    <div class="section-content">
      <h2>Check the data before using the tool.</h2>
      <div class="policy-callout"><strong>Permission to access UGA data is not permission to use it in an AI tool.</strong><p>A UGA license adds protections, but it does not approve every use. Sensitive or restricted data may require specific data-steward or other approval.</p></div>
      <div class="practical-checklist">
        <div><strong>Identify what the AI can access.</strong><span>Include files, mail, meetings, connectors, and agent permissions—not just the prompt.</span></div>
        <div><strong>Classify the information.</strong><span>Public, sensitive, restricted, research-controlled, or otherwise governed.</span></div>
        <div><strong>Confirm the tool and the specific use.</strong><span>Ask Terry OIT or the appropriate data steward when uncertain.</span></div>
        <div><strong>Verify and own the result.</strong><span>Check sources, facts, calculations, bias, and decisions before use.</span></div>
      </div>
      <div class="resource-links">
        <a href="https://aihub.uga.edu/wp-content/uploads/2025/05/ai-acceptable-use-guidelines.pdf">UGA AI Acceptable Use Guidelines ↗</a>
        <a href="https://uga.teamdynamix.com/TDClient/3190/eitsclientportal/KB/Category/26494/AI-Tools">EITS AI Tools Knowledge Base ↗</a>
        <a href="https://ailm.caes.uga.edu/compare">CAES AI Tool Comparison ↗</a>
      </div>
    </div>
  </section>

  <section id="use-cases" class="section soft-section">
    <div class="shell">
      <div class="compact-heading">
        <div><p class="eyebrow">Terry use cases</p><h2>Start with a recurring task.</h2></div>
        <div class="case-filter" aria-label="Filter use cases">
          <button type="button" aria-pressed="true" data-case-filter="all">All</button>
          <button type="button" aria-pressed="false" data-case-filter="staff">Staff</button>
          <button type="button" aria-pressed="false" data-case-filter="faculty">Faculty</button>
        </div>
      </div>
      <div class="concise-cases">
        ${practicalCases.map(c => `<article data-audience="${c[0]}"><span>${c[0].replace(" ", " + ").toUpperCase()}</span><h3>${c[1]}</h3><p>${c[2]}</p><small><strong>Check:</strong> ${c[3]}</small></article>`).join("")}
      </div>
    </div>
  </section>
`;

document.querySelectorAll("[data-case-filter]").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.caseFilter;
    document.querySelectorAll("[data-case-filter]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    document.querySelectorAll("[data-audience]").forEach(item => {
      item.hidden = filter !== "all" && !item.dataset.audience.split(" ").includes(filter);
    });
  });
});

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
