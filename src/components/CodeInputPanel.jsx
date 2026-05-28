import TokenCounter from "./TokenCounter";

export default function CodeInputPanel({ code, onCodeChange, onClear }) {
  const handleKeyDown = (e) => {
    if (e.key !== "Tab") return;
    e.preventDefault();
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    const newCode = code.substring(0, start) + "  " + code.substring(end);
    onCodeChange(newCode);
    setTimeout(() => {
      e.target.selectionStart = e.target.selectionEnd = start + 2;
    }, 0);
  };

  return (
    <div className="flex flex-col overflow-hidden border-r border-app-border">
      <div className="flex shrink-0 items-center justify-between border-b border-app-border bg-app-surface px-4 py-2.5">
        <span className="flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-widest text-app-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-app-accent-2" />
          Code Input
        </span>
        <div className="flex items-center gap-2">
          <TokenCounter code={code} />
          <button
            type="button"
            className="cursor-pointer rounded-md border border-app-border bg-transparent px-3 py-1.5 font-sans text-xs font-semibold text-app-muted transition-all duration-150 hover:border-app-muted hover:text-app-text"
            onClick={onClear}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="thin-scrollbar relative flex-1 overflow-auto bg-app-code-bg">
        <textarea
          className="min-h-full w-full resize-none border-none bg-transparent p-5 font-mono text-[0.82rem] leading-[1.7] text-app-code-text outline-none placeholder:text-app-muted tab-2"
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Paste your code here..."
          spellCheck={false}
        />
      </div>
    </div>
  );
}
