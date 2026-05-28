import { useState } from "react";

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="cursor-pointer rounded-md border border-app-border bg-transparent px-2.5 py-1 font-sans text-[0.72rem] font-semibold text-app-muted transition-all duration-150 hover:border-app-success hover:text-app-success"
    >
      {copied ? "✅ Copied!" : "📋 Copy"}
    </button>
  );
}
