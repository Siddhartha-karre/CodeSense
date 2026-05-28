export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-app-border bg-app-bg px-3 py-1.5 font-sans text-xs font-semibold text-app-muted transition-all duration-150 hover:border-app-muted hover:text-app-text"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
