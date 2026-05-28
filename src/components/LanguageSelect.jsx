import { LANGUAGES } from "../constants";

export default function LanguageSelect({ language, onLanguageChange }) {
  return (
    <select
      className="cursor-pointer rounded-md border border-app-border bg-app-bg px-2.5 py-1.5 font-sans text-[0.78rem] font-semibold text-app-text outline-none transition-colors duration-150 hover:border-app-accent focus:border-app-accent"
      value={language}
      onChange={(e) => onLanguageChange(e.target.value)}
    >
      {LANGUAGES.map((l) => (
        <option key={l} value={l}>
          {l}
        </option>
      ))}
    </select>
  );
}
