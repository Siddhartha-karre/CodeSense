import LanguageSelect from "./LanguageSelect";
import ModeToggle from "./ModeToggle";
import ThemeToggle from "./ThemeToggle";

export default function Header({
  mode,
  onModeChange,
  language,
  onLanguageChange,
  isDark,
  onThemeToggle,
  onExplain,
  loading,
  canExplain,
}) {
  return (
    <header className="flex shrink-0 items-center justify-between border-b border-app-border bg-app-surface px-7 py-3.5">
      <div className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-app-accent to-app-accent-2 text-base text-white">
          ✦
        </div>
        CodeSense
        <span className="rounded border border-app-accent/25 bg-app-accent/10 px-1.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-widest text-app-accent">
          AI
        </span>
      </div>

      <div className="flex items-center gap-2.5">
        <ModeToggle mode={mode} onModeChange={onModeChange} />
        <LanguageSelect language={language} onLanguageChange={onLanguageChange} />
        <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        <button
          type="button"
          className="flex cursor-pointer items-center gap-1.5 rounded-lg border-none bg-linear-to-br from-app-accent to-[#9b8af7] px-5 py-2 font-sans text-[0.82rem] font-bold tracking-wide text-white transition-all duration-150 hover:-translate-y-px hover:shadow-[0_4px_16px_color-mix(in_srgb,var(--app-accent)_40%,transparent)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          onClick={onExplain}
          disabled={loading || !canExplain}
        >
          {loading ? (
            <>
              <span className="text-[0.7rem]">◌</span> Thinking...
            </>
          ) : (
            <>✦ Explain Code</>
          )}
        </button>
      </div>
    </header>
  );
}
