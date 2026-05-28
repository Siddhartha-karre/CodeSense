import { AUTHOR } from "../config/author";
import SocialLinks from "./SocialLinks";

export default function AppFooter({ modeLabel, language }) {
  return (
    <footer className="shrink-0 border-t border-app-border bg-app-surface">
      <div className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-1.5 text-[0.7rem] text-app-muted">
          <span
            className="h-[5px] w-[5px] rounded-full bg-app-success shadow-[0_0_6px_var(--app-success)]"
            aria-hidden
          />
          Powered by Groq · LLaMA 3.3 70B
        </div>
        <div className="text-[0.7rem] text-app-muted">
          Mode:{" "}
          <strong className="font-semibold text-app-text">{modeLabel}</strong>
          <span className="mx-1.5">·</span>
          Language:{" "}
          <strong className="font-semibold text-app-text">{language}</strong>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 border-t border-app-border px-6 py-1.5 text-[0.68rem] tracking-wide text-app-muted">
        <span>
          Built by:{" "}
          <span className="font-semibold text-app-text">{AUTHOR.name}</span>
        </span>
        <SocialLinks linkedin={AUTHOR.linkedin} github={AUTHOR.github} />
      </div>
    </footer>
  );
}
