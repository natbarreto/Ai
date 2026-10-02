/*
  FAST-CHANGING CONTENT ONLY
  Update this file when EITS pricing, licensing, or vendor capabilities change.
  Stable Terry guidance and page structure live in app.js.
*/
window.TERRY_AI_DATA = {
  reviewed: "October 2, 2026",
  fiscalYear: "FY27",
  pricingSource: "https://uga.teamdynamix.com/TDClient/3190/eitsclientportal/KB/PrintArticle?ID=170250",
  tools: [
    {
      id: "copilot",
      name: "Microsoft 365 Copilot",
      vendor: "Microsoft",
      annualCost: 276,
      monthlyEquivalent: 23,
      terryPosition: "Recommended staff default",
      summary: "Best fit when work already lives in Outlook, Teams, Word, Excel, PowerPoint, OneDrive, and SharePoint.",
      bestFor: ["staff", "productivity", "meetings", "excel", "knowledge", "agents"],
      strengths: ["Native Microsoft 365 context", "Meeting and email workflows", "Excel and document assistance", "Organizational knowledge and agents"],
      teaching: "Useful for lesson materials and familiar Office workflows; specialized education features may be tenant-enabled.",
      research: "Useful for synthesis and organizational content; less research-platform flexibility than tool-first research environments.",
      frontier: "Model availability is managed through Microsoft and may include multiple leading model families; choices vary by license and tenant settings.",
      harness: "Copilot Chat, Microsoft 365 apps, notebooks, Researcher, agents, Microsoft Graph grounding, and workflow ecosystem.",
      agents: "Strong for agents that work with approved Microsoft 365 knowledge and processes.",
      api: "Azure AI and Microsoft developer services are separate from the Terry seat license and may require architecture, security review, and usage funding.",
      freeTier: "UGA provides Copilot Chat with commercial data protection through UGA Microsoft 365 accounts.",
      source: "https://support.microsoft.com/en-us/microsoft-365-copilot/what-is-microsoft-copilot-app"
    },
    {
      id: "chatgpt",
      name: "ChatGPT Edu",
      vendor: "OpenAI",
      annualCost: 276,
      monthlyEquivalent: 23,
      terryPosition: "Broad general-purpose option",
      summary: "A versatile environment for advanced reasoning, data analysis, coding, writing, multimodal work, and custom assistants.",
      bestFor: ["faculty", "research", "coding", "analysis", "instruction", "agents"],
      strengths: ["Broad tool set", "Data analysis and coding", "Deep research and web work", "Custom GPTs and connected tools"],
      teaching: "Strong for instructional design, examples, simulations, feedback frameworks, and course-grounded assistants.",
      research: "Strong for synthesis, coding, document/data analysis, multimodal work, and multi-step research.",
      frontier: "Edu workspaces receive eligible current models and tools; exact models, limits, and admin availability change frequently.",
      harness: "Projects, deep research, data analysis, canvas, file uploads, apps, custom GPTs, and coding workflows.",
      agents: "Custom GPTs and agentic work are available within workspace controls; connected actions require careful permission design.",
      api: "OpenAI API usage is separate from ChatGPT Edu seats and is billed independently by model and usage.",
      freeTier: "No UGA-wide free ChatGPT Edu seat is listed; a premium license is purchased through EITS.",
      source: "https://help.openai.com/en/articles/9377311"
    },
    {
      id: "claude",
      name: "Claude Enterprise for Education",
      vendor: "Anthropic",
      annualCost: 276,
      monthlyEquivalent: 23,
      terryPosition: "Strong research and long-document option",
      summary: "A strong choice for long documents, nuanced writing, research synthesis, complex instructions, and coding.",
      bestFor: ["faculty", "research", "coding", "documents", "instruction", "agents"],
      strengths: ["Long-context document work", "Nuanced writing and synthesis", "Projects and shared knowledge", "Artifacts and coding workflows"],
      teaching: "Useful for Socratic learning designs, rubrics, feedback structures, and sustained course projects.",
      research: "Strong for long papers, literature synthesis, qualitative material, complex instructions, and research coding.",
      frontier: "Education plans include access to current advanced Claude models; model names and limits change frequently.",
      harness: "Projects, Research, web search, Artifacts, integrations, shared knowledge, and desktop capabilities.",
      agents: "Agentic and computer-use capabilities evolve quickly; availability can differ between Claude, Claude Code, API, and administrator settings.",
      api: "Claude API and Claude Code usage may be separate, usage-based services; verify credits and procurement before designing a study.",
      freeTier: "No UGA-wide free Claude Enterprise seat is listed; a premium license is purchased through EITS.",
      source: "https://support.anthropic.com/en/articles/11139144-faqs-on-using-the-claude-enterprise-plan-at-your-university"
    },
    {
      id: "gemini",
      name: "Gemini AI Pro for Education",
      vendor: "Google",
      annualCost: 240,
      monthlyEquivalent: 20,
      terryPosition: "Strong Google and source-grounded option",
      summary: "A good fit for Google Workspace, multimodal work, long-context research, and source-grounded notebooks.",
      bestFor: ["faculty", "research", "documents", "instruction", "knowledge", "analysis"],
      strengths: ["Google Workspace integration", "Gemini Notebook source grounding", "Multimodal analysis", "Competitive seat price"],
      teaching: "Useful for source-grounded study materials, instructional content, and Google Workspace-centered courses.",
      research: "Strong for source collections, multimodal analysis, synthesis, and Google-based collaboration.",
      frontier: "AI Pro provides expanded or prioritized access to current Pro and Thinking models; limits and model labels change often.",
      harness: "Gemini app, Gems, Canvas, Deep Research, Google Workspace integrations, and Gemini Notebook.",
      agents: "Gems and Google agent capabilities support repeatable work; enterprise connections depend on UGA configuration.",
      api: "Gemini API and Google Cloud Vertex AI are separate services with usage-based pricing and governance requirements.",
      freeTier: "UGA provides protected access to Gemini and Gemini Notebook through UGA Google Workspace accounts.",
      source: "https://support.google.com/gemini/answer/14620100?co=DASHER._Family%3DEducation&hl=en"
    }
  ]
};
