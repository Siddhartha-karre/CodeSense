import { useRef } from "react";
import ReactMarkdown from "react-markdown";
import CopyButton from "./CopyButton";
import useAutoScroll from "../hooks/useAutoScroll";

export default function ExplanationPanel({
  modeConfig,
  explanation,
  loading,
  error,
}) {
  const outputRef = useRef(null);
  useAutoScroll(outputRef, explanation);

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex shrink-0 items-center justify-between border-b border-app-border bg-app-surface px-4 py-2.5">
        <span className="flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-widest text-app-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-app-accent" />
          {modeConfig.icon} {modeConfig.label} Explanation
        </span>
        <div className="flex items-center gap-2">
          {explanation && <CopyButton text={explanation} />}
        </div>
      </div>

      <div
        ref={outputRef}
        className="thin-scrollbar flex-1 overflow-y-auto scroll-smooth px-6 py-5"
      >
        {error && (
          <div className="mx-5 my-5 flex items-start gap-2.5 rounded-[10px] border border-app-error/25 bg-app-error/8 p-4 text-[0.85rem] text-app-error">
            <span>⚠️</span>
            <div>
              <strong>Error:</strong> {error}
              <br />
              <small>Make sure VITE_GROQ_API_KEY is set in your .env.local</small>
            </div>
          </div>
        )}

        {loading && !explanation && (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-app-muted">
            <div className="flex gap-1.5">
              <div className="dot-pulse h-[7px] w-[7px] rounded-full bg-app-accent" />
              <div className="dot-pulse h-[7px] w-[7px] rounded-full bg-app-accent" />
              <div className="dot-pulse h-[7px] w-[7px] rounded-full bg-app-accent" />
            </div>
            <span className="loading-text text-[0.8rem] tracking-wide">
              CodeSense is thinking...
            </span>
          </div>
        )}

        {explanation && (
          <div className="markdown">
            <ReactMarkdown>{explanation}</ReactMarkdown>
            {loading && (
              <span className="stream-cursor ml-0.5 inline-block h-3.5 w-0.5 align-middle bg-app-accent" />
            )}
          </div>
        )}

        {!explanation && !loading && !error && (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-app-muted">
            <div className="text-4xl opacity-40">✦</div>
            <p className="max-w-[220px] text-[0.82rem] leading-relaxed">
              Paste any code on the left, choose a mode, and hit{" "}
              <strong className="text-app-text">Explain Code</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
