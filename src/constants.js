export const LANGUAGES = [
  "JavaScript",
  "Python",
  "Java",
  "C",
  "C++",
  "TypeScript",
  "Go",
  "Rust",
  "PHP",
  "Ruby",
];

export const MODES = {
  simple: {
    label: "Simple",
    icon: "🧠",
    tooltip: "Explain like I'm a beginner",
    prompt: `You are a friendly coding tutor. Explain the given code in very simple terms as if explaining to a complete beginner. Avoid heavy jargon. Use analogies where helpful. Structure your response with:
## What this code does
(One clear sentence)
## Breaking it down
(Step-by-step explanation, plain English)
## Key concept to remember
(One takeaway)`,
  },
  technical: {
    label: "Technical",
    icon: "⚙️",
    tooltip: "Deep technical breakdown",
    prompt: `You are a senior software engineer doing a technical code review. Give a thorough technical explanation covering:
## Summary
(What the code does in one sentence)
## Technical Breakdown
(Detailed section-by-section analysis with correct terminology)
## Patterns & Concepts Used
(Design patterns, algorithms, data structures, paradigms)
## Potential Issues / Improvements
(Any bugs, edge cases, or optimizations worth noting)`,
  },
};

export const PLACEHOLDER_CODE = `// Paste your code here and click Explain
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`;
