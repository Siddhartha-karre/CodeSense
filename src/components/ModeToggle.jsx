import { MODES } from "../constants";

export default function ModeToggle({ mode, onModeChange }) {
  return (
    <div className="flex gap-0.5 rounded-lg border border-app-border bg-app-bg p-0.5">
      {Object.entries(MODES).map(([key, val]) => (
        <button
          key={key}
          type="button"
          className={`flex cursor-pointer items-center gap-1.5 rounded-md border-none px-3.5 py-1.5 font-sans text-[0.78rem] font-semibold transition-all duration-150 ${
            mode === key
              ? "bg-app-surface text-app-text shadow-sm dark:shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
              : "bg-transparent text-app-muted hover:text-app-text"
          }`}
          onClick={() => onModeChange(key)}
          title={val.tooltip}
        >
          {val.icon} {val.label}
        </button>
      ))}
    </div>
  );
}
